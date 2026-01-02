import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function Get() {
    const [rows] = await db.query('select * from details');
    return NextResponse.json(rows);
}