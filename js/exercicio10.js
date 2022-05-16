// O custo final de um carro novo 

let custoautomovel,custodistribuidor,custoimposto,valorfinalcarro;

custoautomovel=parseFloat(prompt("Digite o valor do custo de fabricação do automovel"));

custodistribuidor=custoautomovel*28/100
custoimposto=custoautomovel*45/100
valorfinalcarro=custoautomovel+custodistribuidor+custoimposto

alert("O valor final do automovel corresponde a: " +valorfinalcarro);

