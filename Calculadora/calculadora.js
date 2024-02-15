let opcao=""
function areaTriangulo(){
    let base=parseFloat(prompt("Digite a base do triangulo:"))
    let altura=parseFloat(prompt("Digite a altura do triangulo:"))
    let area=(base*altura)/2;
    return area
}
function areaRetangulo(){
    let base=parseFloat(prompt("Digite a base do retangulo:"))
    let altura=parseFloat(prompt("Digite a altura do retangulo:"))
    let area=base*altura
    return area
}
function areaQuadrado(){
    let lado=parseFloat(prompt("Digite o lado do quadrado:"))
    let area=lado**2
    return area
}
function areaTrapezio(){
    let baseMaior=parseFloat(prompt("Digite a base maior do trapézio:"))
    let baseMenor=parseFloat(prompt("Digite a base menor do trapézio:"))
    let altura=parseFloat(prompt("Digite a altura do triangulo:"))
    let area=((baseMaior+baseMenor)*altura)/2
    return area
}
function areaCirculo(){
    let raio=parseFloat(prompt("Digite o raio do círculo:"))
    area=3.14*raio**2
    return area
}
let resultado;

do{
    opcao=prompt("escolha uma opção\n 1-area do triangulo\n 2-area do retangulo\n 3-area do quadrado\n 4-area do trapezio\n 5-area do circulo \n6-Sair")
switch(opcao){
    case "1":
     resultado = areaTriangulo()
     alert(resultado)
        break
    case "2":
        resultado=areaRetangulo()
        alert(resultado)
        break
    case "3":
        resultado=areaQuadrado()
        alert(resultado)
        break
    case "4":
        resultado=areaTrapezio()
        alert(resultado)
        break
    case "5":
        resultado=areaCirculo()
        alert(resultado)
        break
    case "6":
        alert("Encerrando...")
        break
    default:
        alert("A opção inserida é inválida!!")
}
}while(opcao!=6)
