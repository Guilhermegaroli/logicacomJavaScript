let numeroContaCliente; 
let saldo;
let debito;
let credito;
let saldoAtual;

numeroContaCliente=prompt("Digite o número da conta do cliente: ");
saldo=parseFloat(prompt("Digite o saldo da conta do cliente: "));
debito=parseFloat(prompt("Digite o valor do débito na conta do cliente: "));
credito=parseFloat(prompt("Digite o valor do débito na conta do cliente"));
saldoAtual=saldo-debito+credito;

if (saldoAtual>10) {
    alert("Saldo positivo no valor de: "+saldoAtual);
} else {
    alert("Saldo negativo no valor de: "+saldoAtual);
}