const inputText = document.querySelector(".input-text");
checkButton = document.querySelector(".check-button");
outputText = document.querySelector(".output");
let filterText;
let inverseText;

inputText.addEventListener("keyup", () => {
  filterText = inputText.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  //   console.log(filterText);
  if (filterText) {
    return checkButton.classList.add("active");
  }
  checkButton.classList.remove("active");
  outputText.style.display = "none";
});

checkButton.addEventListener("click", () => {
  inverseText = filterText.split("").reverse().join("");
  console.log(filterText);
  console.log(inverseText);
  outputText.style.display = "block";

  if (filterText != inverseText) {
    console.log("Not Palindrome");
    return (outputText.innerHTML = `No! <span>${inputText.value}</span> isn't a palindrome`);
  } else {
    return (outputText.innerHTML = `Yes! <span>${inputText.value}</span> is a palindrome`);
  }
});
