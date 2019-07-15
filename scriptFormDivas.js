let formularioDivas = document.querySelector('#divasForm');
formularioDivas.addEventListener("click", addDiva)

function addDiva(){
    const nome = document.getElementById('nome').value;
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    const diva = {
        nome, usuario, email, senha, cpf
    }

    fetch('http://localhost:2990/divas',{
        method: "POST",
        headers:{
            'Access-Control-Allow-Origin': "*",
            'Content-Type': 'Application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(diva)

    })
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