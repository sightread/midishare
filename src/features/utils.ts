type Arg = string | boolean | null | undefined

export function cx(...args: Arg[]) {
  return args.filter((a) => a).join(" ")
}
