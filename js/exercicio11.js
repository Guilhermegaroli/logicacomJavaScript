// Sálario final do vendedor de carros 

let valorcarrovendido,salariofixo,valortotalvendas,numerocarrosvendidos,salariofinal;

salariofixo=parseFloat(prompt("Digite o valor do salário fixo"));

numerocarrosvendidos=parseFloat(prompt("Digite o número de carros vendidos"));

valorcarrovendido=parseFloat(prompt("Digite o valor ganho por cada carro vendido"));

valortotalvendas=parseFloat(prompt("Digite o valor de suas vendas mensais"));

salariofinal=salariofixo+numerocarrosvendidos*valorcarrovendido+valortotalvendas*5/100

alert("O salario final do empreendedor é:" +salariofinal);

