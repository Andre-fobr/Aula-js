

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.disneyplus.com/pt-br?irclickid=wuxRytSTAxyLWXzzKY1jFWz4UkBUbRzmbTDGR40&irgwc=1&cid=DSS-Affiliate-Impact-Content-Microsoft%20Online%2C%20Inc-564546");
    //window.location.href = "https://www.disneyplus.com/pt-br?irclickid=wuxRytSTAxyLWXzzKY1jFWz4UkBUbRzmbTDGR40&irgwc=1&cid=DSS-Affiliate-Impact-Content-Microsoft%20Online%2C%20Inc-564546";

}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*function soma(n1 , n2){
    return n1 + n2;
}*/

/*var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);*/

//alert(soma(5,10));


/*var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());*/


/*var count = 0;
for(count=0; count<=5; count++){
    alert(count);
}*/

/*var count = 0;
while(count<=5){
    console.log(count);
    alert(count);
    //count++;
    count = count + 1;
}*/


/*var idade = prompt("Qual sua idade");
//var idade = 18;
if(idade>=18){
    alert("Maior de idade");
} else{
    alert("Menor de idade");
};*/


/*var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/


/*var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["maça", "pera", "laranja"]
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.length);
//console.log(lista.reverse());
//alert(lista[1]);


/*var nome = "Rafael Galleani";
var idade = 29;
var idade2 = 10; 
var frase = "Japão é o melhor time do mundo";*/
/* alert("Bem vindo " + nome);
alert (nome + "tem " + idade + " anos");
alert(idade + idade2); */

/*console.log(nome);
console.log(idade + idade2);
console.log(frase.toLowerCase());*/
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));