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


function createGame(){


   

    var quantidadeInput = document.getElementById('inputQuantidadeDespesa').value;
    let $quantidade = parseFloat(quantidadeInput);

    var produtoInput = document.getElementById('inputProduto').value;
    let $produto = parseFloat(produtoInput);

   

    //console.log(qt, typeof(qt))
    //console.log(m, typeof(m))
    var inputValor = document.getElementById("inputValorDespesa").value;

    var despesa = {
        
        quantidade: quantidadeInput,
        produto: produtoInput,
        valorDespesa : inputValor
    }

    

    console.log(despesa);

    
    axios.post('http://localhost:8080/despesa',despesa).then(response =>{
        
        
        if(response.status == 200){
            alert('despesa cadastrado')
            modalVendas.hide();
           location.reload()
        }else{
            console.log('erro')
        }

        return response
    }).catch(err =>{
        console.log(err)
    });


}
