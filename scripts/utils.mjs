import { parseMidiFile } from "@sightread/jasmid.ts"

/**
 * @param {ArrayBufferLike} midiData
 * @return {number}
 */
export function getDuration(midiData) {
  const parsed = parseMidiFile(midiData)
  const ticksPerBeat = parsed.header.ticksPerBeat
  let currTime = 0
  let currTick = 0
  let bpm = 120

  /**
   * @param {number} ticks
   */
  function calcWallDuration(ticks) {
    return (ticks * 60) / (ticksPerBeat * bpm)
  }

  let orderedEvents = getOrderedMidiEvents(parsed)
  for (let orderedEvent of orderedEvents) {
    const midiEvent = orderedEvent.event
    currTick += orderedEvent.ticksToEvent
    currTime += calcWallDuration(orderedEvent.ticksToEvent)
    if (midiEvent.subType === "setTempo") {
      bpm = Math.round(60000000 / midiEvent.microsecondsPerBeat)
    }
  }

  return currTime
}

/**
 * @param {{ header?: { formatType: number; trackCount: number; ticksPerBeat: number; }; tracks: any; }} parsed
 */
function getOrderedMidiEvents(parsed) {
  /** @type {any} */
  var trackStates = []
  for (var i = 0; i < parsed.tracks.length; i++) {
    trackStates[i] = {
      nextEventIndex: 0,
      ticksToNextEvent: parsed.tracks[i].length ? parsed.tracks[i][0].deltaTime : null,
    }
  }

  function getNextEvent() {
    var ticksToNextEvent = null
    var nextEventTrack = null
    var nextEventIndex = null
    let nextEventInfo

    for (let i = 0; i < trackStates.length; i++) {
      if (
        trackStates[i].ticksToNextEvent != null &&
        (ticksToNextEvent === null || trackStates[i].ticksToNextEvent < ticksToNextEvent)
      ) {
        ticksToNextEvent = trackStates[i].ticksToNextEvent
        nextEventTrack = i
        nextEventIndex = trackStates[i].nextEventIndex
      }
    }
    if (nextEventTrack != null) {
      /* consume event from that track */
      var nextEvent = parsed.tracks[nextEventTrack][nextEventIndex]
      if (parsed.tracks[nextEventTrack][nextEventIndex + 1]) {
        trackStates[nextEventTrack].ticksToNextEvent += parsed.tracks[nextEventTrack][nextEventIndex + 1].deltaTime
      } else {
        trackStates[nextEventTrack].ticksToNextEvent = null
      }
      trackStates[nextEventTrack].nextEventIndex += 1
      /* advance timings on all tracks by ticksToNextEvent */
      for (let i = 0; i < trackStates.length; i++) {
        if (trackStates[i].ticksToNextEvent != null) {
          trackStates[i].ticksToNextEvent -= ticksToNextEvent
        }
      }
      nextEventInfo = {
        ticksToEvent: ticksToNextEvent,
        event: nextEvent,
        track: nextEventTrack,
      }
    } else {
      nextEventInfo = null
    }
    return nextEventInfo
  }

  let orderedEvents = []
  let nextEvent = getNextEvent()
  while (nextEvent) {
    orderedEvents.push(nextEvent)
    nextEvent = getNextEvent()
  }
  return orderedEvents
}
