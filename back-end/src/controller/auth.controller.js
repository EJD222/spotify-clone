import { User } from "../models/user.model" //User

export const authenticationCallback = async (req, res) => {
    try {
        const {id, firstName, lastName, imageURL } = req.body;

        //Check if user already exist
        const user = await User.findOne({clerkID:id})

        if(!user){
            //Sign Up 
            await User.create({
                clerkID: id,
                fullName: `${firstName}${lastName}`,
                imageURL
            })
        }

        res.status(200).json({
            success: true
        })
    } catch (error) {
        console.log("Error in authentication callback", error)
        res.status(500).json({
            message: "Internal server error.", error
        })
    }
}