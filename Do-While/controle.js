let dinheiro=parseFloat(prompt("Digite a quantidade de dinheiro:"))
let op=""

do{
    op=prompt("Quantidade de dinheiro:"+dinheiro+"\n1-Deseja adicionar, 2-remover ou 3-sair?:")
     switch (op){
        case "1":
           dinheiro+=parseFloat(prompt("Digite a quantidade de dinheiro a ser adicionada:"))
            alert("Valor total:"+dinheiro)
            break
        case "2":
            dinheiro-=parseFloat(prompt("Digite a quantidade de dinheiro a ser adicionada:"))
            alert("Valor total:"+dinheiro)
            break
        case "3":
            alert("Saindo")
            break
        default:
            alert("Opção inválida")
            break

}} while(op!=="3");