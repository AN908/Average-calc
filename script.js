//Event lister
document.getElementById("calc-btn").addEventListener("click", calcAverage);

//Event function
function calcAverage() {
  //Input
  var num1 = +document.getElementById("numb1").value;
  var num2 = +document.getElementById("numb2").value;
  var num3 = +document.getElementById("numb3").value;

  //Process
  let average = (num1 + num2 + num3) / 3;

  //Output
  document.getElementById("ave-out").innerHTML = average;

  //Sum
  let adding = num1 + num2 + num3;

  document.getElementById("add3").innerHTML = adding;

  //Product
  let multiply = num1 * num2 * num3;

  document.getElementById("multiply3").innerHTML = multiply;

  //Remainder
  let divide = num1 % num2;

  document.getElementById("divide2").innerHTML = divide;

  //Power
  let powerTo = num1 ** num2;

  document.getElementById("power").innerHTML = powerTo;

  //Rounding
  let round2Places = num1;
  round2Places = round2Places.toFixed(2);

  document.getElementById("round").innerHTML = round2Places;

  //tangent
  let tangentNum3 = num3;
  tangentNum3 = Math.tan(tangentNum3);

  document.getElementById("tangentt").innerHTML = tangentNum3;

  //random
  random2Num = Math.random(1) * (num1 - num2) + num2;

  document.getElementById("random2").innerHTML = random2Num;
}
