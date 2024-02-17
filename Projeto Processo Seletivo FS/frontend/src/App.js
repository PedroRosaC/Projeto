import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
        <h1>Gerenciador Financeiro</h1>
        <h2>Pedro Rosa Cauduro</h2> 
        <p>
            Aplicação web gerenciadora de finanças,
            em que seja possível adicionar o saldo inicial, 
            ganhos e despesas do mês. A partir dessas informações,
            deve ser possível consultar o saldo final. 
            Também deve ser possível editar e excluir as movimentações.
        </p>
        <div class="input">
            <h3>
                Entre com o seu saldo incial do mês:
            </h3>
            <input type="number" name="saldoInicial" id="saldoInicial" placeholder="Saldo Inicial" />
        </div> 
        <div class="tables">
            <table class="tabela">
                <tr>
                    
                    <th style="color: darkgreen;">Ganhos</th>
                </tr>
                <tr>
                    
                    <td style="color: green; display: flex; justify-content: space-between;"  ><p>R$ 300,00</p> <span>salario de estagiario</span></td>
                    

                </tr>
            
            </table>
            <table class="tabela">
                <tr>
                    <th style="color: darkred;">Despesas</th>
                    
                </tr>
                <tr>
                    <td style="color: red; display: flex; justify-content: space-between;"  ><p>R$ 300,00</p> <span>Padaria</span></td>
                   
                    

                </tr>
            
            </table>
        </div>

        <H3 function="" > Saldo Final: Resultado1 + Saldo inicial - Resultado2 = Z </H3>
    </div> 
    

  );
}

export default App;
