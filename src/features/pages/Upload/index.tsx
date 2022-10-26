import React, { PropsWithChildren } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, MaxWidthWrapper, Spacer } from '@/components'
import * as Icons from '@/icons'
import Link from 'next/link'
import { cx } from '@/features/utils'

export const Upload: NextPage = () => {
  return (
    <>
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MaxWidthWrapper as="main" className="text-slate-900">
        <Spacer size={64} axis={'vertical'} />
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold">Sharing your files</h2>
          <Spacer axis="vertical" size={32} />
          <p className="text-2xl max-w-prose">
            Hello! I&apos;m so excited that you are interested in sharing your own music files on midishare. As I&apos;m
            building out this project on my free time, the upload process is still in the stone ages.
          </p>
          <Spacer size={32} axis={'vertical'} />
          <div className="flex flex-wrap justify-around gap-10">
            <div className="border border-violet-600 rounded-lg p-4 bg-white max-w-xs">
              <h3 className="font-bold text-xl">For musicians:</h3>
              <p className="text-base">
                Please send me an email with an attached midi or musicxml file, and I will upload it as soon as
                possible.
              </p>
              <Spacer size={8} axis={'vertical'} />
              <UploadLink href="mailto:midishare.dev@gmail.com" className="stroke-slate-50 hover:stroke-slate-300">
                <Icons.Email height={18} />
                Send email
              </UploadLink>
            </div>
            <div className="border border-violet-600 rounded-lg p-4 bg-white max-w-xs">
              <h3 className="font-bold text-xl">For developers:</h3>
              <p className="text-base">
                This project is open source and pull requests are more than welcome on Github.
              </p>
              <Spacer size={8} axis={'vertical'} />
              <UploadLink href="https://github.com/samouri/midishare">
                <Icons.GitHub height={18} />
                GitHub
              </UploadLink>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

function UploadLink({ href, children, className }: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <Link
      href={href}
      className={cx(
        className,
        'no-underline text-slate-50 fill-slate-50 bg-violet-600 rounded-md p-2 text-base flex items-center gap-1 mx-auto w-fit',
        'hover:text-slate-300 hover:fill-slate-300'
      )}
    >
      {children}
    </Link>
  )
}
