const containerDivas = document.querySelector('.boxDivasDoBem');


fetch("http://localhost:2990/divas")
.then(function(response){

    return response.json();

})
.then(function(divas){

    divas.forEach(divasDoBem => {
        const boxDiva = document.createElement('div');
        boxDiva.setAttribute('class','boxDivas');
        containerDivas.appendChild(boxDiva);

        const nome = document.createElement('h2');
        nome.textContent = divasDoBem.usuario 
        boxDiva.appendChild(nome);

        const email = document.createElement('h3');
        email.textContent = divasDoBem.email;
        boxDiva.appendChild(email);
       

    });

})
.catch(function(erro){

    console.log(erro);

})


