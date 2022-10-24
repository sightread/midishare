import React from "react"
import ErrorPage from "next/error"
import { Header, MaxWidthWrapper, Spacer } from "@/components"
import { DownloadDropdown } from "@/components/DownloadDropdown"
import { getSongs } from "@/features/data"
import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"

const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" })
function getDaysAgo(date: Date) {
  const msPerDay = 1000 * 60 * 60 * 24
  const days = Math.floor((date.getTime() - new Date().getTime()) / msPerDay)
  return formatter.format(days, "day")
}

export const SongDetail: NextPage = (_props, _context) => {
  const router = useRouter()
  const { id } = router.query

  if (typeof id !== "string") {
    return <ErrorPage statusCode={404} title="No Song ID provided" />
  } else if (id.length !== 32) {
    return <ErrorPage statusCode={404} title="Invalid Song ID provided" />
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
          <MaxWidthWrapper as="main">
            <Spacer axis="vertical" size={16} />
            <div className="relative aspect-video">
              <iframe
                width="600"
                height="400"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?&rel=0`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <Spacer axis="vertical" size={16} />
            <div className="flex flex-row flex-wrap gap-5">
              <div className="flex flex-col text-left text-lg">
                <span className="title text-2xl">
                  {song.title} {song.artist && <span className="artist"> - {song.artist}</span>}
                </span>
                <span className="text-sm text-slate-600">
                  Uploaded by <span className="italic">@{song.uploader}</span> {getDaysAgo(new Date(song.uploadedAt))}
                </span>
                <span className="text-sm text-slate-600">
                  Arranged by:{" "}
                  <a href={song.originalSourceUrl} className="text-violet-600 hover:text-violet-400">
                    {song.originalArranger}
                  </a>
                </span>
              </div>
              <span className="w-full md:w-fit ml-auto">
                <DownloadDropdown />
              </span>
            </div>
            <Spacer axis="vertical" size={48} />
          </MaxWidthWrapper>
        )}
      </div>
    </>
  )
}
