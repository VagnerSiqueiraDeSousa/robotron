
const controle = document.querySelectorAll(".controle-ajuste")
//console.log(controle)

controle.forEach((elemento) => {
    //console.log(elemento)
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.textContent, evento.target.parentNode)
     
    })
})

//somar.addEventListener("click",() => {manipulaDados("somar")})

//subtrair.addEventListener("click",() => {manipulaDados("subtrair")})
 
 function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador");


    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }
    else{
        peca.value = parseInt(peca.value) + 1
    }
 }

