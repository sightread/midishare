import type { NextPage } from "next"
import Head from "next/head"
import { Header, Search, Spacer, MusicThumbnail } from "components"
import { getSongs, SongMetadata } from "features/data"
import { useState } from "react"

export const Landing: NextPage = () => {
  const [search, setSearch] = useState("")
  const songs = getSongs()
  const filteredSongs = songs.filter((s: SongMetadata) => {
    if (!search) {
      return true
    }
    return s.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="landing">
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="landing__main max-width-wrapper">
        <Spacer size={40} axis={"vertical"} />
        <div className="landing__browse">Browse sheet music</div>
        <Spacer size={20} axis={"vertical"} />
        <Search onSearch={(query: string) => setSearch(query)} />
        <Spacer size={24} axis={"vertical"} />
        {filteredSongs.length === 0 && (
          <>
            <span style={{ fontSize: 18 }}>No results found.</span>
          </>
        )}
        <div className="song_grid">
          {filteredSongs.map((metadata) => (
            <MusicThumbnail metadata={metadata} key={metadata.youtubeId} />
          ))}
        </div>
      </main>
      <Spacer size={24} axis={"vertical"} />
      <footer></footer>
    </div>
  )
}
