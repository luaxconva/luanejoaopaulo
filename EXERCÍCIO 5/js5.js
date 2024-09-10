let num, soma = 0;

do {
    num = parseInt(prompt("'*•.¸♡Insira um número inteiro (Insira o número 0 para realizar a soma de todos os números)♡¸.•*'"));
    soma += num;
} while (num !== 0);

alert(": ̗̀➛A soma dos números inseridos é: " + soma);