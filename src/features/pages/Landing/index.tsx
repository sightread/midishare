import type { NextPage } from "next"
import Head from "next/head"
import { Header, Search, Spacer, MusicThumbnail } from "components"
import { getSongs } from "features/data"

export const Landing: NextPage = () => {
  return (
    <div>
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-width-wrapper" style={{ fontSize: 18, backgroundColor: "var(--bg)" }}>
        <Spacer size={24} axis={"vertical"} />
        Browse sheet music
        <Search onSearch={() => {}} />
        <Spacer size={24} axis={"vertical"} />
        <div
          style={{
            display: "grid",
            gridTemplateRows: "auto",
            gridTemplateColumns: "repeat(auto-fill, 300px)",
            justifyContent: "space-between",
            width: "100%",
            gap: 20,
          }}
        >
          {getSongs().map((metadata) => (
            <MusicThumbnail metadata={metadata} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
