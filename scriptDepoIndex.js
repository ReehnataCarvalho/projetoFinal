const containerDepo = document.querySelector('.boxDepoIndex');


fetch("http://localhost:2990/maravilhosas")
.then(function(response){

    return response.json();

})
.then(function(maravilhosas){

    maravilhosas.forEach(depoimento => {
        const boxDepo = document.createElement('div');
        boxDepo.setAttribute('class','depoIndex');
        containerDepo.appendChild(boxDepo);

        const depo = document.createElement('p');
        depo.textContent = depoimento.depoimento;
        boxDepo.appendChild(depo);

        const nome = document.createElement('h3');
        nome.textContent = depoimento.nome 
        boxDepo.appendChild(nome);

    });

})
.catch(function(erro){

    console.log(erro);

})


