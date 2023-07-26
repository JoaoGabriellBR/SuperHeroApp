import { NextResponse } from "next/server";

export async function GET(req: Request, { params: { character } }: any) {
  const res = await fetch(`https://superheroapi.com/api/896512341662352/search/${character}`);
  const data = await res.json();

  return NextResponse.json({ data });
}
