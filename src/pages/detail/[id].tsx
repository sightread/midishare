import { getSongs } from "../../features/data"
export { SongDetail as default } from "features/pages/SongDetail"

function isYoutubeId(id?: string) {
  return id?.length === 11
}

export async function getServerSideProps(context) {
  const { id } = context.params
  if (isYoutubeId(id)) {
    const song = Object.values(getSongs()).find((s) => s.youtubeId === id)
    if (!song) {
      return { redirect: { destination: "/" } }
    }
    return { redirect: { destination: `/detail/${song.id}`, permanent: true } }
  }

  return { props: {} }
}
