import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
            required: true
        },
        clerkID: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true, //createdAt, updatedAt
    }
)

export const User = mongoose.model("User", userSchema)