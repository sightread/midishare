import type { NextApiRequest, NextApiResponse } from "next"
import type { Stream } from "stream"
import type { IncomingMessage } from "http"
import type { SongMetadataMaybeYoutube } from "@/types"

import { getSongs } from "../../features/data"
import https from "https"
import fs from "fs"

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const id = req.query.id
  if (!id) {
    res.status(400).send("Request must contain an ID")
    return
  } else if (Array.isArray(id)) {
    res.status(400).send("Request cannot contain multiple IDs")
    return
  }
  const song = getSongs()[id]
  if (!song) {
    res.status(404).send(`Midi with ID ${id} cannot be found.`)
    return
  }

  try {
    res.writeHead(200, {
      "Content-Type": "audio/midi",
      "Content-Disposition": `attachment; filename="${getAsciiFilename(song)}"`,
    })

    // In development we have access to the filesystem but can't hit localhost with https.
    // When deployed we don't have access to fs, but can proxy to the hosted /public.
    const stream =
      process.env.NODE_ENV === "development"
        ? fs.createReadStream(`public/${getFileLocation(song)}`)
        : await get(`https://${process.env.VERCEL_URL}/${getFileLocation(song)}`)
    return proxy(stream, res)
  } catch (err) {
    console.error(`Encountered error while serving: ${song.filename}:\n`, err)
    res.status(500).send("Internal server error")
  }
}

// Strip all non-ascii characters to be compatible with Content-Disposition spec.
// TODO: It would be far more graceful to escape non-ascii characters instead
//       of throwing them out wholesale.
function getAsciiFilename(song: SongMetadataMaybeYoutube) {
  const filename = `${song.title}-${song.artist}.mid`
  return filename.replace(/[^\x00-\x7F]/g, "")
}

function getFileLocation(song: SongMetadataMaybeYoutube): string {
  return `download/${song.filename}/${song.filename}.mid`
}

async function get(url: string): Promise<IncomingMessage> {
  return new Promise((resolve, reject) => {
    const req = https.get(url)
    req.on("response", (response) => resolve(response))
    req.on("error", (err) => reject(err))
  })
}

async function proxy(stream: Stream, res: NextApiResponse<any>) {
  return new Promise((resolve, reject) => {
    stream.on("end", () => resolve(undefined))
    stream.on("error", (e) => reject(e))
    stream.pipe(res)
  })
}
