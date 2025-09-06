import mongoose, { Schema, model, models } from "mongoose";

const CardSchema = new Schema({
    name: { type: String, required: true },
    cnic: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    receiptNumber: { type: String, required: true },
    uniqueCode: { type: Number, required: true, unique: true },
}, { timestamps: true });

export const Card = models.Card || model("Card", CardSchema);
