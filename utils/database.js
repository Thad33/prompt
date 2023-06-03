import mongose from 'mongoose';

let isConnected = false; //track the connect

export const connectToDB = async() =>{
    mongoose.set('strickQuerry', true);
    if (isConnected){
        console.log("Mongoose is already connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,
            {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
    }
    catch (error){
        console.log(error);
    }
}
