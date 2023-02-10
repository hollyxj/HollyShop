import mongoose from 'mongoose'

// Silence deprecation warning
mongoose.set('strictQuery', true)

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline)
    } catch (error) {
        console.error(`##Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }

}

export default connectDB