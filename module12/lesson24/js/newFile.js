const { promise } = require("./01-promises");

promise.then((res) => {
  console.log(res); //* 5
  return res * 2;
});
