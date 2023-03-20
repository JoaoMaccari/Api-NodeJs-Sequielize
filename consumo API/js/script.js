
var axiosConfig ={
    headers: {
        Authorization :'Bearer '+localStorage.getItem('token')
    }
}


function createGame(){
    var titleInput = document.getElementById('titulo');
    var anoInput = document.getElementById('ano');
    var precoInput = document.getElementById('preco')

    var game = {
        title: titleInput.value,
        ano: anoInput.value,
        preco: precoInput.value
    }

    console.log(game)

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


axios.get('http://localhost:8080/games',axiosConfig).then(response =>{
        
    console.log(response)

    //var games é um arrey recebe as informações da api
    //data contem as iformações que foram inseridas no db
    var games = response.data
    var list = document.getElementById('games');

    //foreach que vai percorrer todos os itens da api
    games.forEach( game =>{
        
        var item = document.createElement('li');

        item.setAttribute('data-id', game.id);
        item.setAttribute('data-titulo', game.title);
        item.setAttribute('data-ano', game.ano);
        item.setAttribute('data-preco', game.preco)

        //passo as info da data da api para o item gerado 
        //aqui eu tenho que pergar os nomes exatamente como foi criado no db e api
        item.innerHTML = "R$ " + game.preco + " - " + game.title + " - " + game.ano ;

        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML='Deletar'
        deleteBtn.addEventListener('click', function(){
            
            deleteGame(item)
        });

        var editBtn = document.createElement('button')
        editBtn.innerHTML = 'Editar'
        editBtn.addEventListener('click', function(){
            loadForm(item)
        })

        item.appendChild(editBtn);
        item.appendChild(deleteBtn);

        list.appendChild(item);
    })

}).catch(error =>{
    console.log(error)
})
    