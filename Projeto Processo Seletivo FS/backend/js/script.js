let saldoInicial = 300;
let saldoFinal;
let ganhos = [100, 200, 300, 400, 500];
let despesas = [100, 200];
let resultado_ganhos = 0;
let resultado_despesas = 0;


//function saldoFinal(saldoFinal, saldoInicial, ganhos, despesas, resultado_ganhos, resultado_despesas){
    
for (var i = 0; i < ganhos.length; i++) {
    resultado_ganhos +=  ganhos[i]; 
  }

  for (var i = 0; i < despesas.length; i++) {
    resultado_despesas += despesas[i]; 
  }
  saldoFinal = (saldoInicial + resultado_ganhos) - resultado_despesas;

  console.log("Resultado final:", saldoFinal);
  //return saldoFinal;
//}



var table = document.getElementById("tabela");

// Add event listener to the table cells
table.addEventListener("input", function(e) {
    var target = e.target;
    // Check if the target is a table cell (td)
    if (target && target.nodeName === "TD") {
        // Add a class to highlight the edited cell
        target.classList.add("edit-cell");
        // Update the table cell content
    }
});