import type { NextPage } from "next"
import Head from "next/head"
import { Header, Search, Spacer, MusicThumbnail } from "components"
import { getSongs } from "features/data"

export const Landing: NextPage = () => {
  return (
    <div className="landing">
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-width-wrapper">
        <Spacer size={24} axis={"vertical"} />
        Browse sheet music
        <Search onSearch={() => {}} />
        <Spacer size={24} axis={"vertical"} />
        <div className="song_grid">
          {getSongs().map((metadata) => (
            <MusicThumbnail metadata={metadata} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
