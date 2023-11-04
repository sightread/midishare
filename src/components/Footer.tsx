import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Spacer } from './Spacer'
import { cn } from '@/lib/utils'

function FooterHeader({ children }: any) {
  return (
    <h3 className="fontleading-6 flex gap-2 whitespace-nowrap text-base font-medium text-foreground">{children}</h3>
  )
}

function FooterCol({ children, className }: any) {
  return <div className={cn('flex h-full shrink-0 flex-col gap-4', className)}>{children}</div>
}

function FooterLink({ href, children }: any) {
  return (
    <Link
      className="whitespace-nowrap font-light text-muted-foreground transition hover:text-foreground hover:underline hover:underline-offset-4"
      href={href}
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer
      className="w-full border-t border-border bg-foreground/[0.02] dark:bg-foreground/[0.01]"
      aria-labelledby="footer-heading"
    >
      <Spacer size={24} axis="vertical" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <MaxWidthWrapper className="mx-auto flex h-full max-w-prose flex-col items-center">
        <Spacer size={16} axis="vertical" />
        <div className="grid auto-cols-max grid-cols-2 items-center gap-8 sm:gap-16 md:gap-32">
          <FooterCol>
            <FooterHeader>midishare</FooterHeader>
            <FooterLink href="/">Browse</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/upload">Upload</FooterLink>
          </FooterCol>
          <FooterCol>
            <FooterHeader>external links</FooterHeader>
            <FooterLink href="https://sightread.dev">Sightread</FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UCGf2AlCRD3ZCc8ahkqBMtqA">YouTube</FooterLink>
            <FooterLink href="https://github.com/sightread/midishare">GitHub</FooterLink>
          </FooterCol>
        </div>
        <Spacer size={32} axis="vertical" />
        <span className="text-xs text-muted-foreground"> © 2023 Sightread Studio, LLC. All rights reserved. </span>
        <Spacer size={24} axis="vertical" />
      </MaxWidthWrapper>
    </footer>
  )
}
