let optionValue = "1";
let optionText = "1";

function displayResults(newText) {
  Swal.fire(newText);
}
function changeOption(value, text) {
  optionValue = value;
  optionText = text;
}
 function stringFormatter(text) {
  let regex = new RegExp("/", "/n")
  console.log(text.replace(regex, ''))
  // $.ajax({
  //   type: "POST",
  //   contentType: "application/json",
  //   dataType: "json",
  //   url: "/string-formatter",
  //   data: JSON.stringify({ type: optionValue, text }),
  //   complete: function (xhr, textString) {
  //     if (xhr.status == 200) {
  //       let data = xhr.responseJSON.result;
  //       console.log(data);
  //       displayResults(data);
  //     }
  //   },
  // });
}
