import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import { Card } from "../../../../models/Card";

export async function GET(req: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const uniqueCode = searchParams.get("uniqueCode");

        if (!uniqueCode) {
            return NextResponse.json(
                { success: false, error: "Unique code required" },
                { status: 400 }
            );
        }

        const card = await Card.findOne({ uniqueCode });

        if (!card) {
            return NextResponse.json(
                { success: false, error: "Record not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: card });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
