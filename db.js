const mongoose= require('mongoose')                       // importing mongo
const mongoURL = 'mongodb://localhost:27017/HMS'         //  mongo URL

 
mongoose.connect(mongoURL, {                            // connecting mongo
    useNewUrlParser : true,
    useUnifiedTopology : true
})
// creating object of mongoDB
const d_b = mongoose.connection             

d_b.on('connected', ()=>{
    console.log("Mongo connected successfully (Database)")
})
d_b.on('disconnected', ()=>{
    console.log("MongoDB disconnected")
})
d_b.on('error', ()=>{
    console.log("Error while connecting DB")
})

// commint added for testing purpose
module.exports = d_b