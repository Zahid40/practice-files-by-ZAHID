//getting-started.js
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopping');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log("We are connected bro");
}

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = "My name is " + this.name
    console.log(greeting);
  };

const Kitten = mongoose.model('yoyoKitty', kittySchema);
const yoyoKitty = new Kitten({ name: 'yoyoKitty' });
const yoyoKitty2 = new Kitten({ name: 'yoyoKitty2' });
// console.log(yoyoKitty.name);
yoyoKitty.save();
yoyoKitty.speak();
yoyoKitty2.save();
yoyoKitty2.speak();

const kittens = Kitten.find({name : "yoyoKitty"});
console.log(kittens);

