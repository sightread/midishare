import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import { EnvelopeOpenIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Spacer } from '@/components/Spacer'

function UploadLink({ href, children, className }: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <Link href={href}>
      <Button className={cn('flex gap-2', className)}>{children}</Button>
    </Link>
  )
}

function Prose({ children }: PropsWithChildren<{}>) {
  return <p className="max-w-prose leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}
function H4({ children }: PropsWithChildren<{}>) {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>
}

export default async function Page() {
  return (
    <>
      <Spacer size={48} axis={'vertical'} />
      <div className="mx-auto max-w-3xl">
        <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">Sharing Your Files</h1>
        <Prose>
          Hello! I&apos;m so excited that you are interested in sharing your own music files on midishare. As I&apos;m
          building out this project on my free time, the upload process is still in the stone ages.
        </Prose>
        <Spacer size={32} axis={'vertical'} />
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-xs rounded-lg border border-violet-600 bg-background p-4">
            <H4> For musicians</H4>
            <Prose>
              Please send me an email with an attached midi or musicxml file, and I will upload it as soon as possible.{' '}
            </Prose>
            <Spacer size={16} axis={'vertical'} />
            <UploadLink href="mailto:midishare.dev@gmail.com">
              <EnvelopeOpenIcon />
              Send email
            </UploadLink>
          </div>
          <div className="flex max-w-xs flex-col rounded-lg border border-violet-600 bg-background p-4">
            <H4> For developers </H4>
            <Prose>This project is open source and pull requests are more than welcome on Github.</Prose>
            <Spacer size={16} axis={'vertical'} />
            <UploadLink href="https://github.com/samouri/midishare">
              <GitHubLogoIcon /> GitHub
            </UploadLink>
          </div>
        </div>
      </div>
    </>
  )
}
