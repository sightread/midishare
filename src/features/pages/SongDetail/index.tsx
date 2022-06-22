import ErrorPage from "next/error"
import { Header, Spacer } from "components"
import { DownloadDropdown } from "components/DownloadDropdown"
import { getSongs } from "features/data"
import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"

const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" })
function getDaysAgo(date: Date) {
  const msPerDay = 1000 * 60 * 60 * 24
  const days = Math.floor((date.getTime() - new Date().getTime()) / msPerDay)
  return formatter.format(days, "day")
}

function isYoutubeId(s: string) {
  return s.length === 11
}

export const SongDetail: NextPage = (_props, _context) => {
  const router = useRouter()
  const { id } = router.query

  if (typeof id !== "string") {
    return <ErrorPage statusCode={404} title="No Song ID provided" />
  }

  // If its a youtube URL then redirect to the md5 ID format.
  if (isYoutubeId(id)) {
    const songs = Object.values(getSongs())
    const song = songs.find((s) => s.youtubeId === id)
    router.push(`/detail/${song?.id}`)
    return <></>
  }

  // On first render, next/router cannot figure out query.
  // See: https://github.com/vercel/next.js/discussions/11484
  const song = getSongs()[id]
  const youtubeId = song.youtubeId

  return (
    <>
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="song_detail">
        <Header />
        <Spacer size={24} axis={"vertical"} />
        {song && (
          <main className="max-width-wrapper">
            <Spacer axis="vertical" size={16} />
            <div className="frame_wrapper">
              <iframe
                width="600"
                height="400"
                src={`https://www.youtube.com/embed/${youtubeId}?&rel=0`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <Spacer axis="vertical" size={8} />
            <div className="under_video">
              <div className="under_video_text">
                <span className="title">
                  {song.title} {song.artist && <span className="artist"> - {song.artist}</span>}
                </span>
                <span className="uploaded_by">
                  Uploaded by <span className="uploader">@{song.uploader}</span> {getDaysAgo(new Date(song.uploadedAt))}
                </span>
                <span className="source">
                  Arranged by: <a href={song.originalSourceUrl}>{song.originalArranger}</a>
                </span>
              </div>
              <span className="song_download">
                <DownloadDropdown />
              </span>
            </div>
            <Spacer axis="vertical" size={48} />
          </main>
        )}
      </div>
    </>
  )
}
