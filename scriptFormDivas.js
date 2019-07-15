let formularioDivas = document.querySelector('#divasForm');
formularioDivas.addEventListener("click", addDiva)

function addDiva(){
    const nome = document.getElementById('nome').value;
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    const diva = {
        nome, user, email, senha, cpf
    }


    fetch('http://localhost:2990/divas',{
        method: "POST",
        headers:{
            'Accept': 'application/json', 'Conten-Type': 'application/json'
        },
        body: JSON.stringify(diva)

    })
            console.log("oi")


    .then(function(response){

        return response.json();

    })
    .then(function(data){
        console.log(data);
        document.getElementById('message').textContent = ('Sucesso !! ')
        window.location.reload()

        
    })

    .catch(function(erro){

        console.log(erro);
  })
}