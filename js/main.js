let num, sum = 0;

do {
	num = +prompt('Введите число больше 10');

	if (num > 10) {
		break;
	} else {
		alert("Попробуйте еще раз");
	}

} while(true);

for (let i = 1; i <= num; i++) {
	sum += i;
}

alert(sum);
