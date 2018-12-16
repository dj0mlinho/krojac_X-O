let box = document.querySelector(".box");
let sign = true;
let n = 0;

createTable();

let field = document.querySelectorAll(".xo");
let arr = [
  [field[0], field[1], field[2]],
  [field[3], field[4], field[5]],
  [field[6], field[7], field[8]],
  [field[0], field[3], field[6]],
  [field[1], field[4], field[7]],
  [field[2], field[5], field[8]],
  [field[0], field[4], field[8]],
  [field[2], field[4], field[6]]
]

for (let i = 0; i < field.length; i++) {
  field[i].addEventListener("click", insertSign);
}