import { Spacer } from '@/components/Spacer'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

function AboutLink({ href, children }: any) {
  return (
    <Link
      className="whitespace-nowrap text-primary transition hover:text-primary/90 hover:underline hover:underline-offset-4"
      href={href}
    >
      {children}
    </Link>
  )
}

function H2({ children }: any) {
  return (
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  )
}

function P({ children }: any) {
  return <p className="max-w-prose leading-loose [&:not(:first-child)]:mt-6">{children}</p>
}

function EndpointDescription({ url, children, label }: any) {
  return (
    <div className="rounded-sm bg-foreground/[0.03] p-4">
      <div className="flex items-center gap-3 text-lg">
        <Badge>GET</Badge>
        <span className="h-1 w-1 rounded-full bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/70">{url}</span>
      </div>
      <Spacer size={8} axis="vertical" />
      <h2 className="group text-lg font-bold text-foreground/95 no-underline">{label}</h2>
      <Spacer size={8} axis="vertical" />
      <span className="text-sm text-muted-foreground">{children}</span>
    </div>
  )
}

function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  )
}

function Property({ name, children, type }: { name: string; children: React.ReactNode; type?: string }) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd className="rounded-md border border-foreground/20 bg-foreground/5 px-2 text-foreground/80">
          <code>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-foreground/50">{type}</dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</dd>
      </dl>
    </li>
  )
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose">
      <Spacer size={24} axis="vertical" />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">About</h1>
      <H2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Why We Built midishare
      </H2>
      <P>
        midishare was created in response to the challenges we faced while developing{' '}
        <AboutLink href="https://sightread.dev">sightread</AboutLink>, a tool for piano learners. High-quality free
        educational MIDI files can be difficult to find. While many websites host free midi files, few provide files
        optimized for piano software.
      </P>
      <P>
        <AboutLink href="https://musescore.com">MuseScore.com </AboutLink> stands out as they have an extensive
        collection of both free and paywalled music. We highly recommend using their website if it fits your needs.
        Unfortunately, MuseScore <AboutLink href="https://musescore.org/en/node/307933">shut down</AboutLink> their API
        a few years back, even for their public domain music. This limitation is what ultimately led me to create
        midishare.
      </P>
      <P className="leading-7 [&:not(:first-child)]:mt-6">
        Currently, midishare is a redistribution of the most popular public domain music from MuseScore. Future
        enhancements will allow users to create accounts and upload files.
      </P>
      <H2>Public API</H2>
      <P>
        midishare exposes two public endpoints. They are not stable and will undergo changes as we scale the collection.
        Even if the API shape changes, the data will remain free forever
        <sup>
          <a href="#footnote-1">1</a>
        </sup>
        .
      </P>
      <Spacer size={16} axis="vertical" />
      <div className="flex flex-col gap-8">
        <EndpointDescription url="/api/midis" label="List MIDIs">
          Returns a list of available midi files along with their metadata.
        </EndpointDescription>
        <EndpointDescription url="/api/midi" label="Download a file">
          Returns a music file in the specified format.
          <Spacer size={24} axis="vertical" />
          <h3 className="text-base font-medium text-foreground/80">Required parameters</h3>
          <Properties>
            <Property name="id" type="string">
              The ID for the MIDI file to download.
            </Property>
            <Property name="format" type="mid | mp3 | mxl | pdf">
              Specifies file format.
            </Property>
          </Properties>
        </EndpointDescription>
      </div>
      <Spacer size={32} axis="vertical" />
      <hr />
      <Spacer size={32} axis="vertical" />
      <span>
        <span id="footnote-1">1:</span> If there ever comes a time where we need to shut down this website, we will
        bundle up all of the static data and make them publicly accessible.
      </span>
    </div>
  )
}
