let result = document.getElementById("numbers");
let calculate = function (num) {
  result.value += num;
};

let finalResult = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Invalid Result");
  }
};
function clr() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
