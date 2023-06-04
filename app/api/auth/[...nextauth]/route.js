import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
// import { signIn } from "next-auth/react";
import { connectToDB} from "@utils/database";
import User from  "@models/user";

console.log()


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
async session({session}){
    const sessionUser = await User.findOne({
        email: session.email.user,
    })
    session.user.id = sessionUser._id.toString();
},
async signIn({profile}){
    try {
        //serverless -> Lambda
        await connectToDB();
        //CHECK IF A USER ALREADY EXITS 
        const userExist = await User.findOne({
            email: profile.email
        })
        //IF NOT, CREATE A NEW USER
        if (!UserExist) {
            await User.create({
                email: profile.email,
                username: profile.name.replace("","").toLowerCase(),
                image: profile.picture
            })
        }
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}
}) 

export { handler as GET, handler as POST };