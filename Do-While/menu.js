let op=""
do{
    op=prompt("Digite a opção escolhida (1-primeira|2-segunda|3-terceira|4-quarta|5-encerrar):")

    switch(op){
        case "1":
            alert("Você escolheu a primeira opção")
            break
        case "2":
            alert("Você escolheu a segunda opção")
            break
        case "3":
            alert("Você escolheu a terceira opção")
            break
        case "4":
            alert("Você escolheu a quarta opção")
            break
        case "5":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
    

}while(op!=="5")

