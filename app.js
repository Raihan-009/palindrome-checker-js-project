const inputText = document.querySelector(".input-text");
checkButton = document.querySelector(".check-button");
let filterText;
let inverseText;

inputText.addEventListener("keyup", () => {
  filterText = inputText.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  //   console.log(filterText);
  if (filterText) {
    return checkButton.classList.add("active");
  }
  checkButton.classList.remove("active");
});

checkButton.addEventListener("click", () => {
  inverseText = filterText.split("").reverse().join("");
  console.log(filterText);
  console.log(inverseText);

  if (filterText != inverseText) {
    console.log("Not Palindrome");
  } else {
    console.log("palindrome");
  }
});
