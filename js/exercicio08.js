// Numero total de eleitores

let totaleleitores,totalbrancos,totalnulos,totalvalidos;
let porcentagemVotosbrancos,porcentagemVotosnulos,porcentagemVotosvalidos;

totaleleitores=parseInt(prompt("Digite o numero total de eleitores: "));

totalbrancos=parseInt(prompt("Digite o numero total de votos brancos: "));

totalnulos=parseInt(prompt("Digite o numero total de votos nulos: "));

totalvalidos=parseInt(prompt("Digite o numero total de votos válidos: "));

porcentagemVotosbrancos=totalbrancos/totaleleitores*100
porcentagemVotosnulos=totalnulos/totaleleitores*100
porcentagemVotosvalidos=totalvalidos/totaleleitores*100

alert("O valor da porcentagem de votos brancos corresponde a:" +porcentagemVotosbrancos+"%");
alert("O valor da porcentagem de votos brancos corresponde a:" +porcentagemVotosnulos+"%");
alert("O valor da porcentagem de votos brancos corresponde a:" +porcentagemVotosvalidos+"%");

