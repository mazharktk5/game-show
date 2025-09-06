import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import { Card } from "../../../../models/Card";

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        const newCard = await Card.create(body);

        return NextResponse.json({ success: true, data: newCard });
    } catch (error: any) {
        console.error("Error creating card:", error.message);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
