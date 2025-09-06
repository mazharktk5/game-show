import mongoose, { Schema, model, models } from "mongoose";

const DiscountSchema = new Schema(
    {
        uniqueCode: { type: Number, required: true },
        chalanNumber: { type: String, required: true },
        discountAmount: { type: Number, required: true },
        hospitalName: { type: String }, // optional: kaunse hospital ne diya
    },
    { timestamps: true }
);

export const Discount = models.Discount || model("Discount", DiscountSchema);
