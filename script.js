let textareaInputEl = document.getElementById("textareaInput");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let storageKey = "userInput";

saveBtnEl.onclick = function() {
    let textareaInputVal = textareaInputEl.value;
    localStorage.setItem(storageKey,textareaInputVal);
};

clearBtnEl.onclick = function() {
    textareaInputEl.value  = "";
    localStorage.removeItem(storageKey);
};

let storedUserInputVal = localStorage.getItem(storageKey);

if(storedUserInputVal !== null) {
    textareaInputEl.value = storedUserInputVal;
} else {
    textareaInputEl.value = "";
}