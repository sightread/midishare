import type { NextPage } from "next"
import Head from "next/head"
import { Header, Spacer } from "components"

export const Upload: NextPage = () => {
  return (
    <>
      <style jsx>{`
        main {
          color: var(--mauve12);
        }
      `}</style>
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-width-wrapper" style={{ backgroundColor: "var(--bg)", color: "--var(text)" }}>
        <Spacer size={24} axis={"vertical"} />
        <h2>Uploading your own files</h2>
        <Spacer axis="vertical" size={8} />
        <p>Hello! I'm so excited that you are interested in uploading your own MIDI files to midishare. This web</p>
      </main>
    </>
  )
}
