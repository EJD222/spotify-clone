import mongoose from "mongoose"

const messageSchema = mongoose.Schema(
    {
        senderID: {
            type: String,
            required: true
        }, // 
        receiverID: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true //createdAt, updatedAt
    }
)

export const Message = mongoose.model ("Message", messageSchema)