import { DownloadableFormat } from '@/components/utils'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number) {
  if (!(typeof seconds === 'number')) {
    return ''
  }

  let min = String(Math.floor(seconds / 60))
  if (min.length === 1) {
    min = '0' + min
  }
  let sec = String(Math.floor(seconds % 60))
  if (sec.length === 1) {
    sec = '0' + sec
  }
  return `${min}:${sec}`
}

export function getAssetUrl(id: string, format: DownloadableFormat) {
  return `https://assets.midishare.dev/external_assets/scores/${id}/${id}.${format}`
}

export function getAssetThumbnailUrl(id: string) {
  return `https://assets.midishare.dev/scores/${id}/preview.png`
}
