// var axiosConfig ={
//     headers: {
//         Authorization :'Bearer '+localStorage.getItem('token')
//     }
// }


const url = 'http://localhost:8080/vendas'
const tabelaCorpo = document.getElementById('table_body')
let resultados = ''

const modalVendas = new bootstrap.Modal(document.getElementById('modalDespesas'))
const formularioVenda = document.querySelector('form')


// var clienteInput = document.getElementById('inputCliente');
// var quantidadeInput = document.getElementById('inputQuantidade');
// var produtoInput = getProduto()
// var milheiroInput = document.getElementById('inputMilheiro')
// var socioInput = getSocio()
// var valorVenda = vendaValor(quantidadeInput, milheiroInput)



//let opcao =''

btnCriar.addEventListener('click', ()=>{

    modalVendas.show()

    // clienteInput.value = ''
    // quantidadeInput.value = ''
    // produtoInput.value = ''
    // milheiroInput = ''
    // socioInput = ''
    // valorVenda = ''
    
    //opcao = 'criar'
    
})
