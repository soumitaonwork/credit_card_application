var Datastore = require('nedb');
var db = new Datastore({ filename: 'card.db', autoload: true });// create a new database instance
const creditCardDao=module.exports;

// Add a new card
creditCardDao.addCard=async (username, cardNumber, limit)=>{
 let carddetails={ name: username, cardNumber:cardNumber, limit :limit, balance:0}
  await db.insert(carddetails, (err, doc) =>{
      if(err){
        throw err;
      }
        console.log('Inserted', carddetails);
    })
  return true;
}


// Get all cards
creditCardDao.getAllCards=async ()=>{
  let carddetails = new Promise((resolve,reject)=> {
    db.find({ }, function (err, carddetails) {
      if(err){
        throw err;
      }
        resolve(carddetails);
    });
});
  return carddetails;
  }




