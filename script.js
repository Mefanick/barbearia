const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    const idMenosUm = id - 1 
    const corteEscolhido = barbearia.cortes[idMenosUm]
    if (typeof id == 'number') {
        if (id <= barbearia.cortes.length && id >= barbearia.cortes[0].id) {
            return corteEscolhido
            // return `O corte de id:${id} é do tipo ${corteEscolhido.tipo} e custa ${corteEscolhido.valor}`
            // de início fiz e coloquei esse retorno que acharia mais aceitavel para o site mas o algoritimo de testes não aceitava a saida
            //então deixei anotado por que gostei dessa outra opção de saída
        } else {
            return "Corte não encontrado"
        }
    }
    if (typeof id == "string") {
        return 'ID inválido.'
    }
}

function buscaBarbaPorId(id) {
    const idMenosUm = id - 1
    const barbaEscolhida = barbearia.barbas[idMenosUm]
    if (typeof id == 'number') {
        if (id <= barbearia.barbas.length && id >= barbearia.barbas[0].id) {
            return barbaEscolhida
            // aqui eu poderia ter feito novamente a saída mais bonitinha, mas como não ia fazer parte do código ignorei
        } else {
            return "Barba não encontrada"
        }
    }
    if (typeof id != "number") {
        return 'ID inválido.'
    }
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto == true){
        return 'Estamos abertos'
    } else if (barbearia.estaAberto == false){
        return 'Estamos fechados'
    }
}

function retornaTodosCortes() {
    return barbearia.cortes
}

function retornaTodasBarbas() {
    return barbearia.barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const pedido = {
        nome: nomeCliente,
        pedidoCorte: buscaCortePorId(corteId).tipo,
        pedidoCortePreco:  buscaCortePorId(corteId).valor,
        pedidoBarba: buscaBarbaPorId(barbaId).tipo,
        pedidoBarbaPreco: buscaBarbaPorId(barbaId).valor,
    }
    return pedido
}

function atualizarServico(lista, id, valor, tipo) {
    const idMenosUm = id - 1
    lista[idMenosUm].id = id
    lista[idMenosUm].valor = valor
    lista[idMenosUm].tipo = tipo
    return lista
}

function calculaTotal(pedido) {
    const valorFinal = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
    return valorFinal
}