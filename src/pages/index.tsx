import type { NextPage } from "next"
import Head from "next/head"
import { Header, Search, Spacer, MusicThumbnail } from "../components"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Spacer size={24} axis={"vertical"} />
      <main style={{ width: "calc(100% - 40px)", margin: "0 auto", fontSize: 18 }}>
        Browse sheet music, sorted by{" "}
        <span style={{ color: "--var(primary)", textDecoration: "underline" }}>Latest</span>
        <Spacer size={24} axis={"vertical"} />
        <Search onSearch={() => {}} />
        <Spacer size={24} axis={"vertical"} />
        <div
          style={{
            display: "grid",
            gridTemplateRows: "auto",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px,1fr))",
            width: "100%",
            marginLeft: 10,
            gap: 20,
          }}
        >
          {Array.from({ length: 100 }).map(() => (
            <MusicThumbnail />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
