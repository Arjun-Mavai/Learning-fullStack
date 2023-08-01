const promiseFunctionCheck = new Promise((resolve, reject) => {
  if (false) {
    return resolve();
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
