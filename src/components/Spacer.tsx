import React from "react"

type Props = { size?: number; axis?: "vertical" | "horizontal"; style?: React.CSSProperties }

export function Spacer({ size, axis, style = {}, ...delegated }: Props) {
  const width = axis === "vertical" ? 1 : size ?? 0
  const height = axis === "horizontal" ? 1 : size ?? 0
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  )
}
