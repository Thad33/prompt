import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
// import { signIn } from "next-auth/react";

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
        //serverless -> 
    } catch (error) {
        
    }
}
}) 

export { handler as GET, handler as POST };