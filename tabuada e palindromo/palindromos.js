const palavra=prompt("Digite uma palavra:")
let inverso=""

for(let i=palavra.length-1; i>=0; i--) {
    inverso+=palavra[i]
}
if(palavra===inverso){
    alert("A palavra: "+palavra+" é um palíndromo")
}
else{
    alert("A palavra: "+palavra+" não é um palíndromo\n"+palavra+" !== "+inverso)
}