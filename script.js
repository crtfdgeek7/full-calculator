function num(reg) {
  let userInput = document.getElementById('input');
  userInput.value += reg;
  console.log(reg);
}

function equal() {
  let userInput = document.getElementById('input');
  userInput.value = eval(userInput.value);
}

function clearInput() {
  document.getElementById('input').value = '';
}

function deleteInput() {
  let userInput = document.getElementById('input');
  userInput.value = userInput.value.slice(0, -1);
}
