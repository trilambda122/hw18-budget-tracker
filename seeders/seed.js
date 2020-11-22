let mongoose = require("mongoose");
let db = require("../models");
const dotenv = require("dotenv").config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false
});

let transactions = [
{
  name: "Paycheck",
  value: 6530.38,
  date:new Date().setDate(new Date().getDate() - 10)

},
{
  name: "Morgage",
  value: -1930.57,
  date:new Date().setDate(new Date().getDate() - 9)

},
{
  name: "Food",
  value: -305.74,
  date:new Date().setDate(new Date().getDate() - 9)

},
{
  name: "Gas",
  value: -125.43,
  date:new Date().setDate(new Date().getDate() - 8)

},
{
  name: "Cell Phone",
  value: -100.05,
  date:new Date().setDate(new Date().getDate() - 8)

},
{
  name: "Internet",
  value: -90.79,
  date:new Date().setDate(new Date().getDate() - 7)

},
{
  name: "Pets",
  value: -165.34,
  date:new Date().setDate(new Date().getDate() - 4)

},
{
  name: "Freelance Job",
  value: 1200.00,
  date:new Date().setDate(new Date().getDate() - 2)

},
{
  name: "Auto",
  value: -678.89,
  date:new Date().setDate(new Date().getDate() - 2)

},

]

db.Transaction.deleteMany({})
.then(() => db.Transaction.collection.insertMany(transactions))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
