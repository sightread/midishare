import Link from 'next/link'
import { MaxWidthWrapper, Spacer } from '@/components'
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle'
import * as Icons from '@/icons'
import React, { PropsWithChildren } from 'react'

export function Header() {
  return (
    <div className="h-14 w-full bg-primary dark:border-b dark:border-border dark:bg-background">
      <MaxWidthWrapper className="flex h-full items-center gap-5">
        <HeaderLink href="/" className="flex text-2xl">
          <Icons.Headphones height={24} className="self-center" />
          <Spacer size={10} axis="horizontal" />
          <span>midishare</span>
        </HeaderLink>
        <Spacer style={{ marginLeft: 'auto' }} />
        <HeaderLink href={'/upload'} className="flex text-xl">
          <Icons.Upload height={16} style={{ alignSelf: 'center' }} />
          <Spacer size={6} axis="horizontal" />
          <span className="hidden sm:inline">Upload</span>
        </HeaderLink>
        <HeaderLink href="https://github.com/samouri/midishare">
          <Icons.GitHub height={24} />
        </HeaderLink>
        <ColorSchemeToggle />
      </MaxWidthWrapper>
    </div>
  )
}

function HeaderLink({ href, children, className }: PropsWithChildren<{ href: string; className?: string }>) {
  className = className + ` no-underline text-slate-50 fill-slate-50 hover:text-slate-300 hover:fill-slate-300`
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
