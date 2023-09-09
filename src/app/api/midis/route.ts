import { getSongs } from '@/features/data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_request: NextRequest): Promise<NextResponse> {
  const songs = getSongs()
  return NextResponse.json(songs)
}
