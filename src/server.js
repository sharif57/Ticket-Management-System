// import mongoose from "mongoose"
// import app from "./app.js"

// const port = 5000;


// const main = async () => {
//     try {
//         // 0cnkDh8ULcNFBRu6
//         // await mongoose.connect('mongodb://localhost:27017/ticket')
//         await mongoose.connect('"mongodb+srv://ticket:0cnkDh8ULcNFBRu6@cluster0.cwjeixv.mongodb.net/ticket?retryWrites=true&w=majority&appName=Cluster0"')
//         console.log('connected')

//         app.listen(port, () => {
//             console.log(`Example app listening on port ${port}`)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// main()


import mongoose from "mongoose";
import app from "./app.js";

const port = 5000;

const main = async () => {
    try {
        // Corrected connection string
        await mongoose.connect("mongodb+srv://ticket:0cnkDh8ULcNFBRu6@cluster0.cwjeixv.mongodb.net/ticket?retryWrites=true&w=majority&appName=Cluster0");
                // await mongoose.connect('mongodb://localhost:27017/ticket')
        console.log("Connected to MongoDB");

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

main();
