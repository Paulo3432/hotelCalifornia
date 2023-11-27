function hotelCalifornea() {
    alert("Seja Bem vindo(a) ao Hotel Californea!\n Digite a opção desejada.")
    let usuario = Number(prompt("Digite a opção desejada:\n1. Fazer Check-in\n2. Chamar serviço de quarto\n3. Fazer pedido"));
    let mensagem; 

    switch (usuario) {
        case 1:
            CheckIn();
            break;
    
        case 2:
            ServicoDeQuarto();
            break;
    
        case 3: 
            pedidoClienete();
            break;
    
        default:
            mensagem = 'Opção inválida';
    }


    function CheckIn() {
        let person = {};
        alert("Esta é a lista que você precisa preencher para darmos continuidade!");
        alert("Nome completo:\nEndereço:\nCidade:\nEstado:\nTelefone:");
        person.nome = prompt("Digite o Seu nome completo");
        person.endereco = prompt("Digite o seu endereço");
        person.cidade = prompt("Digite a cidade onde você mora");
        person.estado = prompt("Estado");
        person.telefone = prompt("Telefone");

        exibirDetalhesCheckIn(person);
    }

    function exibirDetalhesCheckIn(person) {
        alert("Detalhes do Check-in\n" +
            "Nome: " + person.nome + "\n" + 
            "Endereço: " + person.endereco + "\n" +
            "Cidade: " + person.cidade + "\n" +
            "Estado: " + person.estado + "\n" + 
            "Telefone: " + person.telefone + "\n");

        let confirmacao = Number(prompt("Se estiver tudo certo, digite 1 para confirmar"));

        if (confirmacao === 1) {
            alert("Tudo certo!\nAqui está a chave do seu quarto");
        } else {
            alert("Vamos tentar novamente");
        }
    }

    function ServicoDeQuarto() {
        alert("Toc Toc!!!\nOlá, eu sou a pessoa responsável pelo serviço de quarto!!!\nAqui está a lista de opções:");
        let servico = Number(prompt("1. Reabastecer Frigobar\n2. Organizar Quarto\n3. Itens de higiene pessoal"));
    
        if (servico === 1) {
            alert("Irei cuidar do reabastecimento do Frigobar!\nEspere só um momento");
            setTimeout(function() {
                alert("Tudo pronto!\nFrigobar reabastecido!\nÓtima Hospedagem");
            }, 2000);
        } else if (servico === 2) {
            alert("O quarto estará pronto em 15 minutos");
            setTimeout(function() {
                alert("O quarto está pronto!\nBom proveito.");
            }, 2000);
        } else if (servico === 3) {
            alert("Aqui estão os ítens que você pediu!\nBoa hospedagem");
        } else {
            alert("Opção inválida");
        }
    } 

    function pedidoClienete(){
        alert("=== Cardápio === \n" + 
        "1.Pizza \n" + "2.Hambúrguer\n" +
        "3.Salada\n" + "4.Massas\n" + "5.Sobremesa\n");
    let cardapioSelecao = Number(prompt("Digite a opção desejada: \n" + 
    "1.Pizza \n 2.Hambúrguer \n 3.Salada \n 4.Massas \n 5.Sobremesa"));

    if(cardapioSelecao === 1){
        alert("Aqui está a sua pizza!")

    }else if(cardapioSelecao === 2){
        alert("Aqui está o seu Hambúrguer");    
    }else if(cardapioSelecao === 3){
        alert("Aqui está a sua salada")
    }else if(cardapioSelecao === 4){
        alert("Aqui está o seu macarrão")
    }else if(cardapioSelecao === 5){
        alert("Aqui está a sobremesa que você pediu");
    }else{
        alert("Opção inválida")
    }
}


 }

// Chamada da função principal
hotelCalifornea();


