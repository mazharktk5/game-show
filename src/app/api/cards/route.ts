import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mogodb";
import { Card } from "../../../../models/Card";

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const { uniqueCode, chalanNumber, discountAmount, hospitalName } = body;

        if (!uniqueCode || !chalanNumber || !discountAmount) {
            return NextResponse.json(
                { success: false, error: "All fields are required" },
                { status: 400 }
            );
        }

        const code = Number(uniqueCode);
        if (isNaN(code)) {
            return NextResponse.json(
                { success: false, error: "Invalid unique code" },
                { status: 400 }
            );
        }

        const card = await Card.findOneAndUpdate(
            { uniqueCode: code },
            {
                $push: {
                    discounts: {
                        chalanNumber,
                        discountAmount: Number(discountAmount),
                        hospitalName,
                    },
                },
            },
            { new: true }
        );

        if (!card) {
            return NextResponse.json(
                { success: false, error: "Card not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Discount added successfully",
            data: card,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
