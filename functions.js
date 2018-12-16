function createTable() {
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += `<div class="xo"></div>`;
  }
  box.innerHTML = text;
}

function insertSign() {
  if (sign) {
    this.innerHTML = "X";
    this.removeEventListener('click', insertSign);
    checkWinner()
    sign = false;
  } else {
    this.innerHTML = "O";
    this.removeEventListener('click', insertSign)
    checkWinner()
    sign = true;
  }
}

function checkWinner() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].innerHTML === arr[i][1].innerHTML && arr[i][0].innerHTML === arr[i][2].innerHTML && arr[i][0].innerHTML !== "") {
      arr[i][0].style.background = "red";
      arr[i][1].style.background = "red";
      arr[i][2].style.background = "red";
      for (let i = 0; i < field.length; i++) {
        field[i].removeEventListener("click", insertSign);
      }
    }
  }
}