const promiseFunctionCheck = new Promise((resolve, reject) => {
  let n = Math.floor(Math.random() * 10);
  if (n >= 5) {
    return resolve(); // its a method not simply resolve and reject use () for correct rendering
  } else {
    return reject();
  }
});
promiseFunctionCheck
  .then(function () {
    console.log("resolve ho gaya");
  })
  .catch(function () {
    console.log("reject ho gaya");
  });
