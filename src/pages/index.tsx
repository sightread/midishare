import type { NextPage } from "next"
import Head from "next/head"
import { Header } from "../components"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main></main>

      <footer></footer>
    </div>
  )
}

export default Home
