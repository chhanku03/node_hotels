const mongoose= require('mongoose');
// Define the Mongoose connection url
const mongoURL='mongodb://localhost:27017/hotel' //my database name
// Connect to MongoDB
mongoose.connect(mongoURL, {
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    });

    const db=mongoose.connection;
    db.on('connected',()=>{
        console.log('connected to Mongodb database');
    });
    db.on('error',(err)=>{
      console.error('mongodb connection error:',err);
    }
    );

    db.on('disconnected',()=>{
        console.log('mongodb connection disconnect');
      }
      );
//export the database connection
module.exports=db;
      
