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
    let line = arr[i];
    if (line[0].innerHTML === line[1].innerHTML && line[0].innerHTML === line[2].innerHTML && line[0].innerHTML !== "") {
      line[0].style.background = "red";
      line[1].style.background = "red";
      line[2].style.background = "red";
      for (let i = 0; i < field.length; i++) {
        field[i].removeEventListener("click", insertSign);
      }
    }
  }
}