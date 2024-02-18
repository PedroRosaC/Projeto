

function calcularSaldoFinal(saldoInicial, 
    ganhos = [],
    despesas = []){

var resultado_ganhos = 0;
var resultado_despesas = 0;


for (var i = 0; i < ganhos.length; i++) {
resultado_ganhos +=  ganhos[i]; 
}

for (var i = 0; i < despesas.length; i++) {
resultado_despesas += despesas[i]; 
}
let saldoFinal = (saldoInicial + resultado_ganhos) - resultado_despesas;

console.log("Resultado final:", saldoFinal);

return saldoFinal;
}



