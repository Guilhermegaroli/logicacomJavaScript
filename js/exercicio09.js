// Calculo do novo salário

let salarioatual,reajuste,salariofinal,salarionovo;

salarioatual=parseFloat(prompt("Digite o salario atual: "));

reajuste=parseFloat(prompt("Digite o percentual do reajuste: "));

salarionovo=salarioatual/100*reajuste
salariofinal=salarioatual+salarionovo

alert("O valor do salário atual é: R$ " +salariofinal);

