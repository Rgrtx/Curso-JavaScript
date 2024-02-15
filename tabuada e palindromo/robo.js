let numero=parseFloat(prompt("Digite o número:"))
let resultado=""
for(let fator=1;fator<=20;fator++){
    resultado+="->"+numero+"*"+fator+"="+(numero*fator)+"\n"
    alert("A tabuada do "+numero+ " é:\n\n"+resultado)
}