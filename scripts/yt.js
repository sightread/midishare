const metadata = (await import(`../${process.argv[2]}`)).default
const { artist, title } = metadata

function main() {
  const tags = [
    `midishare`,
    `sightread`,
    `piano`,
    `piano tutorial`,
    `piano tutorial ${artist}`,
    `${artist} midi`,
    `${artist} download`,
    `${artist} sheet`,
    `piano ${artist} tutorial`,
    `piano ${artist} sheet music`,
    `${artist} easy tutorial`,
    `${artist} pdf download`,
    `piano tutorial ${title}`,
    `${title} midi`,
    `${title} download`,
    `${title} sheet`,
    `piano ${title} tutorial`,
    `piano ${title} sheet music`,
    `${title} easy tutorial`,
    `${title} pdf download`,
  ]

  console.log(`
TITLE
--------------------
${title} - ${artist} - [PDF/Midi Download]
`)
  console.log(`
DESCRIPTION
--------------------
🤓 Learn to play ${title} by ${artist}!
🎼 Free PDF/Midi download at https://midishare.dev/detail/

#piano #pianotutorial
`)

  console.log(`
TAGS
--------------------
${tags.join(",")}
`)
}

main()
