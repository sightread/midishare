import type { NextPage } from "next"
import Head from "next/head"
import { Header, Spacer } from "components"

export const Upload: NextPage = () => {
  return (
    <>
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="upload max-width-wrapper">
        <Spacer size={120} axis={"vertical"} />
        <div className="upload__card">
          <h2 className="upload__header">Sharing your files</h2>
          <Spacer axis="vertical" size={16} />
          <p>
            Hello! I'm so excited that you are interested in sharing your own music files on midishare. As I'm building
            out this project on my free time, the upload process is still in the stone ages.
          </p>
          <Spacer size={32} axis={"vertical"} />
          <h3 className="upload__musician">For musicians</h3>
          <p>
            Please{" "}
            <a className="upload__textlink" href="mailto:midishare.dev@gmail.com">
              send me an email
            </a>{" "}
            with the music attached in either midi or musicxml format. I'll manually upload it as soon as I can.
          </p>
          <Spacer size={16} axis={"vertical"} />
          <h3 className="upload__dev">For developers</h3>
          <Spacer size={8} axis={"vertical"} />
          <p>
            Feel free to open up a Pull Request on{" "}
            <a className="upload__textlink" href="https://github.com/samouri/midishare">
              GitHub
            </a>
            .
          </p>
        </div>
      </main>
    </>
  )
}
