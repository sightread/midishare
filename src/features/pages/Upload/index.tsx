import type { NextPage } from "next"
import Head from "next/head"
import { Header, Spacer } from "components"
import * as Icons from "icons"

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
        <Spacer size={30} axis={"vertical"} />
        <div className="upload__card">
          <h2 className="upload__header">Sharing your files</h2>
          <Spacer axis="vertical" size={8} />
          <p className="upload__text">
            Hello! I'm so excited that you are interested in sharing your own music files on midishare. As I'm building
            out this project on my free time, the upload process is still in the stone ages.
          </p>
          <Spacer size={32} axis={"vertical"} />
          <div className="upload__container">
            <div className="upload__musician">
              <h3>For musicians:</h3>

              <p>
                Please send me an email with an attached midi or musicxml file, and I will upload it as soon as
                possible.
              </p>
              <Spacer size={8} axis={"vertical"} />
              <a className="upload__textlink" href="mailto:midishare.dev@gmail.com">
                <Icons.Email height={18} />
                Send email
              </a>
            </div>
            <div className="upload__dev">
              <h3>For developers:</h3>
              <p>This project is open source and pull requests are more than welcome on Github.</p>
              <Spacer size={8} axis={"vertical"} />
              <a className="upload__textlink" href="https://github.com/samouri/midishare">
                <Icons.GitHub height={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
