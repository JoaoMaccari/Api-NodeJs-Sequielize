
const url = 'http://localhost:8080/games'
const tabelaCorpo = document.getElementById('table_body')
let resultados = ''

const modalVendas = new bootstrap.Modal(document.getElementById('modalVendas'))
const formularioVenda = document.querySelector('form')
const titulo = document.getElementById('inputTitulo')
const ano = document.getElementById('inputAno')
const preco = document.getElementById('inputPreco')
let opcao =''

btnCriar.addEventListener('click', ()=>{
    titulo.value = ''
    ano.value = ''
    preco.value = ''
    opcao = 'criar'
    modalVendas.show()
})


/*             ATUALIZA          */ 

function updateGame(){

    

    var idInput = document.getElementById('inputId')
    var titleInput = document.getElementById('inputTitulo');
    var anoInput = document.getElementById('inputAno');
    var precoInput = document.getElementById('inputPreco')

    var game = {
        title: titleInput.value,
        ano: anoInput.value,
        preco: precoInput.value
    }


    var id = idInput.value

    console.log(game, id)

    axios.put('http://localhost:8080/game/'+id, game).then(response =>{
        if(response.status == 200){
            alert('game atualizado')
            //location.reload()
        }
    }).catch(err =>{

    });
}



function loadForm(linha){

    var btn1 = document.getElementById('btnSalvar');
    btn1.classList.add('esconde')

    var btn2 = document.getElementById('btnEditar')
    btn2.classList.remove('esconde')

    modalVendas.show()

    var id = linha.getAttribute('id')
    var titulo = linha.getAttribute('titulo')
    var preco = linha.getAttribute('preco')
    var ano = linha.getAttribute('ano')

    document.getElementById('inputId').value = id
    document.getElementById('inputTitulo').value = titulo
    document.getElementById('inputAno').value = ano
    document.getElementById('inputPreco').value = preco
    
    

   
    
}



/*          LISTA DADOS       */ 
    axios.get(url)
    .then(response =>{
        
           
            var vendas = response.data
            
            vendas.forEach(venda =>{
                var row = tabelaCorpo.insertRow(-1)
                row.setAttribute('id', venda.id)
                row.setAttribute('titulo', venda.title)
                row.setAttribute('preco', venda.preco)
                row.setAttribute('ano', venda.ano)

                var btnEdit = document.createElement('button')
                btnEdit.innerHTML ="Editar"
                btnEdit.addEventListener('click', function(){
                    loadForm(row)
                    //console.log(row)
                })

                var btnDelet = document.createElement('button')
                btnDelet.innerHTML = "Deletar"

                var td_id = row.insertCell()
                var td_titulo = row.insertCell()
                var td_preco = row.insertCell()
                var td_ano = row.insertCell()
                var td_acoes = row.insertCell()

                td_id.innerText = venda.id
                td_id.setAttribute('td_id', venda.id)
                td_titulo.innerText = venda.title
                td_titulo.setAttribute('td_titulo', venda.title)
                td_preco.innerText = venda.preco
                td_preco.setAttribute('td_preco', venda.preco)
                td_ano.innerText = venda.ano
                td_ano.setAttribute('td_ano', venda.ano)
                td_acoes.appendChild(btnEdit)
                td_acoes.appendChild(btnDelet)

               

                
               
                var deleteBtn = document.createElement('button');
                deleteBtn.innerHTML='Deletar'
                deleteBtn.addEventListener('click', function(){
                    
                    deleteGame(row)
                });

                  
                

                
            })
        
    
        
        })
   
















// var axiosConfig ={
//     headers: {
//         Authorization :'Bearer '+localStorage.getItem('token')
//     }
// }

/*             CRIA             */ 
function createGame(){

    var btn1 = document.getElementById('btnSalvar');
    btn1.classList.remove('esconde')

    var btn2 = document.getElementById('btnEditar')
    btn2.classList.add('mostra')

    var titleInput = document.getElementById('inputTitulo');
    var anoInput = document.getElementById('inputAno');
    var precoInput = document.getElementById('inputPreco');

    var game = {
        title: titleInput.value,
        ano: anoInput.value,
        preco: precoInput.value,
    }

    console.log(game);

    modalVendas.hide();
    axios.post('http://localhost:8080/game', game).then(response =>{
        if(response.status == 200){
            alert('game cadastrado"')
           // location.reload()
        }else{
            console.log('erro')
        }
    }).catch(err =>{

    });
}


// /*             ATUALIZA          */ 

// function updateGame(){
//     var idInput = document.getElementById('idEdit')
//     var titleInput = document.getElementById('titleEdit');
//     var anoInput = document.getElementById('yearEdit');
//     var precoInput = document.getElementById('priceEdit')

//     var game = {
//         title: titleInput.value,
//         ano: anoInput.value,
//         preco: precoInput.value
//     }

//     var id = idInput.value

//     axios.put('http://localhost:8080/game/'+id, game).then(response =>{
//         if(response.status == 200){
//             alert('game atualizado')
//             //location.reload()
//         }
//     }).catch(err =>{

//     });
// }


// function loadForm(listItem){
//     var id = listItem.getAttribute('data-id');
//     var titulo = listItem.getAttribute('data-titulo')
//     var ano = listItem.getAttribute('data-ano');
//     var preco = listItem.getAttribute('data-preco')

//     document.getElementById('idEdit').value = id
//     document.getElementById('titleEdit').value = titulo
//     document.getElementById('yearEdit').value = ano
//     document.getElementById('priceEdit').value = preco
// }

// /*             LISTA            */ 
// axios.get('http://localhost:8080/games',axiosConfig).then(response =>{
        
//     console.log(response)

//     //var games é um arrey recebe as informações da api
//     //data contem as iformações que foram inseridas no db
//     var games = response.data
//     var list = document.getElementById('games');

//     //foreach que vai percorrer todos os itens da api
//     games.forEach( game =>{
        
//         var item = document.createElement('li');

//         item.setAttribute('data-id', game.id);
//         item.setAttribute('data-titulo', game.title);
//         item.setAttribute('data-ano', game.ano);
//         item.setAttribute('data-preco', game.preco)

//         //passo as info da data da api para o item gerado 
//         //aqui eu tenho que pergar os nomes exatamente como foi criado no db e api
//         item.innerHTML = "R$ " + game.preco + " - " + game.title + " - " + game.ano ;

//         var deleteBtn = document.createElement('button');
//         deleteBtn.innerHTML='Deletar'
//         deleteBtn.addEventListener('click', function(){
            
//             deleteGame(item)
//         });

//         var editBtn = document.createElement('button')
//         editBtn.innerHTML = 'Editar'
//         editBtn.addEventListener('click', function(){
//             loadForm(item)
//         })

//         item.appendChild(editBtn);
//         item.appendChild(deleteBtn);

//         list.appendChild(item);
//     })

// }).catch(error =>{
//     console.log(error)
// })


// /*   DELETA   */ 


// function deleteGame(listItem){
//     var id = listItem.getAttribute('data-id');
//     console.log(id);
//     axios.delete('http://localhost:8080/game/'+id).then(response =>{
//         alert('game deletado')
//        //location.reload()
//     }).catch(err =>{
//         console.log(err)
//     })


// }

    