import React from "react"

type Props = {
  height?: number
  width?: number
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
  className?: string
}

export function wrap(Component: React.FunctionComponent<any>): React.FunctionComponent<Props> {
  return function Wrapped({ height, width, style, className, onClick }) {
    const props = { height, width, style, className, onClick }
    return <Component {...props} />
  }
}
