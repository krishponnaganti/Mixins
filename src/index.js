import "./styles.css";
const myMixin = {
  name: "ganesh",
  mobile: "9052040608"
};
function demoOne() {
  this.tempFunc = () => {
    console.log("this is temp function one.");
  };
}

Object.assign(demoOne.prototype, myMixin);
var newObj = new demoOne();

// console.log("working... ");
console.log(newObj.tempFunc());
console.log(newObj.mobile);
