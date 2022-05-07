import { Header, Spacer } from "components"
import { DownloadDropdown } from "components/DownloadDropdown"
import { getSongs } from "features/data"
import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"

const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" })

export const SongDetail: NextPage = (props, context) => {
  const router = useRouter()
  const { youtubeId } = router.query

  // On first render, next/router cannot figure out query.
  // See: https://github.com/vercel/next.js/discussions/11484
  const song = getSongs().find((s) => s.youtubeId === youtubeId)!

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
                <span className="title">{song.title}</span>
                {song.artist && <span className="artist">{song.artist}</span>}
                <span className="uploaded_by">
                  Uploaded by <span className="uploader">@{song.uploader}</span>{" "}
                  {formatter.format(new Date().getUTCDate() - song.uploadedAt.getUTCDate(), "day")}
                </span>
                <span className="source">
                  Arranged by: <a href={song.originalSourceUrl}>{song.originalArranger}</a>
                </span>
              </div>
              <span style={{ marginLeft: "auto" }}>
                <DownloadDropdown />
              </span>
            </div>
          </main>
        )}
      </div>
    </>
  )
}
