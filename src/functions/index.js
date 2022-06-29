function formatter1(text) {
  let result = "";

  result = text.replace("");
}

function formatter2(text) {
  let result = text.replace(/[\r\n]/gm, "");
  console.log(result);
  return result;
}
function formatter3(text) {}
function displayResults(newText) {
  Swal.fire(newText);
}
function stringFormatter(type, text) {
  let newText = "";
  if (type == "1") {
    newText = formatter2(text);
  } else if (optionValue == "2") {
    newText = formatter2(text);
  } else if (optionValue == "3") {
    newText = formatter2(text);
  }
  return newText;
}
module.exports = {
  stringFormatter,
};
