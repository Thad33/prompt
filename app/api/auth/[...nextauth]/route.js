import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
// import { signIn } from "next-auth/react";
import { connectToDB} from "@utils/database";

console.log()


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
async session({session}){

},
async signIn({profile}){
    try {
        //serverless -> Lambda
        await connectToDB();
        //CHECK IF A USER ALREADY EXITS 

        //IF NOT, CREATE A NEW USER

        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}
}) 

export { handler as GET, handler as POST };