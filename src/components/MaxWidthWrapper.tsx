import React, { PropsWithChildren } from 'react'

export function MaxWidthWrapper(props: PropsWithChildren<{ as?: any; className?: string }>) {
  const className = (props.className ?? '') + ' max-w-screen-lg mx-auto px-8'
  const Component = props.as ?? 'div'
  return <Component className={className}>{props.children}</Component>
}
