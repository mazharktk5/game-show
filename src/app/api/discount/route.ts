import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb";
import { Discount } from "../../../../models/Discount";

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        if (!body.uniqueCode || !body.chalanNumber || !body.discountAmount) {
            return NextResponse.json(
                { success: false, error: "All fields are required" },
                { status: 400 }
            );
        }

        const newDiscount = await Discount.create(body);

        return NextResponse.json({ success: true, data: newDiscount });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
