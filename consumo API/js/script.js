
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


    axios.get(url)
        .then(response =>{
        
           
            var vendas = response.data
            
            
        
            // vendas.forEach(venda => {
                
            //     resultados +=  `
            //                         <tr>
            //                             <td>${venda.id}</td>
            //                             <td>${venda.title}</td>
            //                             <td>${venda.preco}</td>
            //                             <td>${venda.ano}</td>
            //                             <td class="text-center"><a class=" btnEditar btn btn-primary">Editar</a><a class=" btnApagar btn btn-danger">Apagar</a></td>
            //                         <tr/>
            
            //                     `
            
            
            //     tabela.innerHTML = resultados

            // });
            
        
        })
   
















// var axiosConfig ={
//     headers: {
//         Authorization :'Bearer '+localStorage.getItem('token')
//     }
// }

/*             CRIA             */ 
// function createGame(){
//     var titleInput = document.getElementById('titulo');
//     var anoInput = document.getElementById('ano');
//     var precoInput = document.getElementById('preco')

//     var game = {
//         title: titleInput.value,
//         ano: anoInput.value,
//         preco: precoInput.value
//     }

//     console.log(game)

//     axios.post('http://localhost:8080/game', game).then(response =>{
//         if(response.status == 200){
//             alert('game cadastrado"')
//            // location.reload()
//         }else{
//             console.log('erro')
//         }
//     }).catch(err =>{

//     });
// }


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

    