// db.[collection name].[command]

//--- Inserting data in Mongo DB ---------------
// 1. use flipkarz
// 2. db.items.insertOne({name:"motorola edge30" , price:30000 , Rating:4.9 , comment:"Op Phone"})
 db.items.insertMany([{
    name:"Motorola Edge 30",
    Price:23000,
    ram:6,
    ghz:2.5,
    network:5,
    rating:4.2,
},{
    name:"Poco X4 Pro",
    Price:20000,
    ram:6,
    ghz:2.2,
    network:5,
    rating:3.8,
},{
    name:"Nothing Phone 1",
    Price:31000,
    ram:8,
    ghz:2.5,
    network:5,
    rating:4.1,
},{
    name:"Google Pixel 7 pro",
    Price:85000,
    ram:12,
    ghz:"nil",
    network:5,
    rating:4.4,
},{
    name:"Samsung  Galaxy S22 Ultra",
    Price:120000,
    ram:12,
    ghz:3,
    network:5,
    rating:4.9,
}])

// see your data bases ---> show dbs 
// see your collection ---> show collections
// see your data[items] ---->  db.items.find()

//---Searching foe Data in mongoDB----------------
// use shopping

//this query will return all the objects with price 30000
// db.items.find({Price:30000})

// db.items.find({rating:{$gte:4.5}})    [ gte --> gteater then equal to]
// db.items.find({Price:{$gt:50000}})    [ gt --> gteater then]
// db.items.find({Price:{$gte:30000} , rating:{$gt:3}})

// db.items.find({Price:{$lt:50000}})

//---Deleating data in MongoDB---------------------
// db.items.deleteOne({Price : 20000})
// db.items.deleteMany({ram:12})

//---Updating data in MongoDB----------------------
// db.anotherCollection.insertOne({a:90})    [ this is how to create collections]

// db.phones.find()
// db.phones.updateOne({name:"motorola edge30"} , {$set:{Price:2}})
// db.phones.updateMany({name:"motorola edge30"} , {$set:{price:3 , Rating:2}})