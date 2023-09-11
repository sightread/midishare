import React, { PropsWithChildren } from 'react'
import { Spacer } from '@/components'
import Link from 'next/link'
import { EnvelopeOpenIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function UploadLink({ href, children, className }: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <Link href={href}>
      <Button className={cn('flex gap-2', className)}>{children}</Button>
    </Link>
  )
}

export default async function Page() {
  return (
    <>
      <Spacer size={64} axis={'vertical'} />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-5xl font-bold">Sharing your files</h2>
        <Spacer axis="vertical" size={32} />
        <p className="max-w-prose text-2xl">
          Hello! I&apos;m so excited that you are interested in sharing your own music files on midishare. As I&apos;m
          building out this project on my free time, the upload process is still in the stone ages.
        </p>
        <Spacer size={32} axis={'vertical'} />
        <div className="flex flex-wrap justify-around gap-10">
          <div className="max-w-xs rounded-lg border border-violet-600 bg-white p-4">
            <h3 className="text-xl font-bold">For musicians:</h3>
            <p className="text-base">
              Please send me an email with an attached midi or musicxml file, and I will upload it as soon as possible.
            </p>
            <Spacer size={8} axis={'vertical'} />
            <UploadLink href="mailto:midishare.dev@gmail.com">
              <EnvelopeOpenIcon />
              Send email
            </UploadLink>
          </div>
          <div className="max-w-xs rounded-lg border border-violet-600 bg-white p-4">
            <h3 className="text-xl font-bold">For developers:</h3>
            <p className="text-base">This project is open source and pull requests are more than welcome on Github.</p>
            <Spacer size={8} axis={'vertical'} />
            <UploadLink href="https://github.com/samouri/midishare">
              <GitHubLogoIcon />
              GitHub
            </UploadLink>
          </div>
        </div>
      </div>
    </>
  )
}
