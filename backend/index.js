//importing app we create in server.js that is running express
import app from './server'
//import mongodb to access database
import mongodb from "mongodb"
// import dotenv to acess environmental variables
import dotenv from "dotenv"

//function connects to MongoDB and calls functions that access database
async function main(){
    //load environmental variables
    dotenv.config()
    //create instance of mongo client and pass it the db URL
    const client  = new mongodb.MongoClient(process.env.BOOKREVIEWS_DB_URI)
    //retrieve port from environmental variable. If can't access 5000, defaults to 8000
    const port = process.env.PORT || 8000

    //client.connect connects to database, then starts web server
    //server starts listening with the port, and then console.logs message
    try {
        await client.connect()
        app.listen(port, () => {
            console.log('server is running on port:' + port);
        })
    } catch (e) {
        console.error(e);
        process.exit(1)
    }
}

//invoking main function and sending any errors to console
main().catch(console.error);