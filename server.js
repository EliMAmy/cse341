const express = require('express');
const mongodb =  require("./data/database");
const app = express();
const Port = process.env.PORT || 3000;


app.use("/", require("./routes/index"));

mongodb.initDb((error) =>{
    if(error){
        console.log(err);
    }
    else{
        
        app.listen(Port, () => {console.log("Database is listening and node running on port" + Port)}); 
    }
});
