function add() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var result = num1 + num2;
	document.getElementById("result").value = result;
    document.getElementById("result").style.display= "inline-block"
}

function subtract() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var result = num1 - num2;
	document.getElementById("result").value = result;
}

function clearFields() {
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
	document.getElementById("result").value = "";
    document.getElementById("result").style.display= "none"

}
