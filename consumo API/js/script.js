
// var axiosConfig ={
//     headers: {
//         Authorization :'Bearer '+localStorage.getItem('token')
//     }
// }




const url = 'http://localhost:8080/vendas'
const tabelaCorpo = document.getElementById('table_body')
let resultados = ''

const modalVendas = new bootstrap.Modal(document.getElementById('modalVendas'))
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



/*             ATUALIZA          */ 

function updateGame(){

    var idInput = document.getElementById('inputId')
    var clienteInput = document.getElementById('inputCliente');

    var quantidadeInput = document.getElementById('inputQuantidade').value;
    var $quantidade = parseFloat(quantidadeInput)
    console.log($quantidade, typeof($quantidade))
    var produtoInput = document.getElementById('inputProduto');

    var milheiroInput = document.getElementById('inputMilheiro').value;
    var $milheiro = parseFloat(milheiroInput);
   
    var socioInput = document.getElementById('inputSocio');

    var valorVenda = vendaValor($quantidade, $milheiro)

    

    var venda = {
        cliente: clienteInput.value,
        quantidade: $quantidade,
        produto: produtoInput.value,
        milheiro: $milheiro,
        recebeu: socioInput.value,
        valorVenda : valorVenda
    }


    var id = idInput.value

    console.log(venda, id)
    

    axios.put('http://localhost:8080/venda/'+id, venda).then(response =>{
        if(response.status == 200){
            alert('Venda atualizada')
            modalVendas.hide()
            location.reload()
        }
    }).catch(err =>{

    });
}



function loadForm(linha){

    modalVendas.show()

    var id = linha.getAttribute('id')
    var cliente = linha.getAttribute('cliente')
    var quantidade = linha.getAttribute('quantidade')
    var produto = linha.getAttribute('produto')
    var milheiro = linha.getAttribute('milheiro')
    var recebeu = linha.getAttribute('recebeu')
    var valorVenda = linha.getAttribute('valorVenda')

    document.getElementById('inputId').value = id
    document.getElementById('inputCliente').value = cliente
    document.getElementById('inputQuantidade').value = quantidade
    document.getElementById('inputProduto').value = produto
    document.getElementById('inputMilheiro').value = milheiro
    document.getElementById('inputSocio').value = recebeu
    document.getElementById('valorVenda').value = valorVenda
    
    
    
}


/*          LISTA DADOS       */ 
    axios.get(url)
    .then(response =>{
        
           
            var vendas = response.data
            
            vendas.forEach(venda =>{
                var row = tabelaCorpo.insertRow(-1)
                row.setAttribute('id', venda.id)
                row.setAttribute('cliente', venda.cliente)
                row.setAttribute('quantidade', venda.quantidade)
                row.setAttribute('produto', venda.produto)
                row.setAttribute('milheiro', venda.milheiro)
                row.setAttribute('recebeu', venda.recebeu)
                row.setAttribute('valorVenda', venda.valorVenda)

                var btnEdit = document.createElement('button')
                btnEdit.innerHTML ="Editar"
                btnEdit.addEventListener('click', function(){
                    loadForm(row)
                    //console.log(row)
                })

                var deleteBtn = document.createElement('button');
                deleteBtn.innerHTML='Deletar'
                deleteBtn.addEventListener('click', function(){
                    
                    deleteGame(row)
                    //console.log(row)
                });


                

                var td_id = row.insertCell()
                var td_cliente = row.insertCell()
                var td_quantidade = row.insertCell()
                var td_produto = row.insertCell()
                var td_milheiro = row.insertCell()
                var td_recebeu = row.insertCell()
                var td_valorVenda = row.insertCell()
                var td_acoes = row.insertCell()

                td_id.innerText = venda.id
                td_id.setAttribute('td_id', venda.id)

                td_cliente.innerText = venda.cliente
                td_cliente.setAttribute('td_cliente', venda.cliente)

                td_quantidade.innerText = venda.quantidade
                td_quantidade.setAttribute('td_quantidade', venda.quantidade)

                td_produto.innerText = venda.produto
                td_produto.setAttribute('td_produto', venda.produto)

                td_milheiro.innerText = venda.milheiro
                td_milheiro.setAttribute('td_milheiro', venda.milheiro)

                td_recebeu.innerText = venda.recebeu
                td_recebeu.setAttribute('td_recebeu', venda.recebeu)

                td_valorVenda.innerText = venda.valorVenda
                td_recebeu.setAttribute('td_valorVenda', venda.valorVenda)

                
                td_acoes.appendChild(btnEdit)
                td_acoes.appendChild(deleteBtn)

            })
        
    
        
        })
   


/*             CRIA             */ 
function createGame(){


    var clienteInput = document.getElementById('inputCliente');

    var quantidadeInput = document.getElementById('inputQuantidade').value;
    let $quantidade = parseFloat(quantidadeInput)

    var produtoInput = getProduto()
   
    var milheiroInput = document.getElementById('inputMilheiro').value
    let $milheiro = parseFloat(milheiroInput)

    var socioInput = getSocio()

    //console.log(qt, typeof(qt))
    //console.log(m, typeof(m))
    var valorVenda = vendaValor($milheiro, $quantidade)

    var venda = {
        cliente: clienteInput.value,
        quantidade: $quantidade,
        produto: produtoInput,
        milheiro:$milheiro,
        recebeu: socioInput,
        valorVenda : valorVenda
    }

    

    console.log(venda);

    
    axios.post('http://localhost:8080/venda',venda).then(response =>{
        
        
        if(response.status == 200){
            alert('game cadastrado')
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




// /*   DELETA   */ 


function deleteGame(listItem){
    var id = listItem.getAttribute('id');
    console.log(id);

    axios.delete('http://localhost:8080/venda/'+id).then(response =>{
        
        alert('Venda deletada')
       location.reload()

    }).catch(err =>{
        console.log(err)
    })


}



function getProduto(){
    let inputSelect = document.getElementById('inputProduto')
    let op = inputSelect.value;
    
    return op;   
}

function getSocio(){
    let inputSelect = document.getElementById('inputSocio')
    let op = inputSelect.value;
    
    return op;
}


function vendaValor(q, m){
    
    if (q >= 10000){
        let valor =  (q * m) / 1000
        console.log("valor maior que 10k: " + valor, typeof(valor))
       


        return valor

    } else if (q >= 1000 || q<= 1000){
        let valor = (q * m ) / 1000
        console.log("valor menos de 10k: " + valor, typeof(valor))
        
        return valor

        
    }
        

    

    
}
    