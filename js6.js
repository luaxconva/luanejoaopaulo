let numaleatorio = Math.round(Math.random()*10);
let chute;

do {
    chute = parseInt(prompt("'*•.¸♡Adivinhe o número entre 1 e 10♡¸.•*'"));

    if (chute !== numaleatorio) {
        alert(": ̗̀➛Errado! Tente novamente.");
    }
} while (chute !== numaleatorio);

alert(": ̗̀➛Parabéns! Você adivinhou o número correto!!:)");
