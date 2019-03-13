// calculator

let num1 = "";
let num2 = "";
let operator;
let flag = 0;
let display = document.getElementById('display');
let equalTo = 0;


const setValue = (number) => {
	if(equalTo === 1){
		clearButton();
	}
	if(flag === 0){
		num1 += number;
		display.innerHTML += number;
	}else{
		num2 += number;
		display.innerHTML += number;
	}
	if(num1.length> 10 || num2.length > 10){
		display.innerHTML= 'Max limit of digits reached';
	}
}