// Etapa 1 -> Criação das Variáveis Principais
// Criação e dados do personagem
let nome = "Kasume";
let idade = 16;
let classe = "Paladino";
let nivel = 122;
let vida = 1220;
let xp = 6000;
let ouro = 2547;

// Etapa 2 -> Definição de Constantes Mágicas
//Descrição das armas / armaduras
let NOME_ARMA = "Big Bertha";
let DANO_BASE = 500;
let ARMA_RARIDADE = "Mitico";
let NOME_ARMADURA = "Armadura do Guardião Real";
let ARMADURA_RARIDADE = "lendária";
let DEFESA_BASE = 750;

// Etapa 3 -> Aplicação de Operadores de Atribuição
// Eventos ocorridos

// Personagem treinou e ganhou 150 pontos de experiencia
xp += 150;

// Personagem comprou uma poção por 30 moedas de ouro 
ouro -= 30;

// Usou a poção e ganhou 40 pontos de vida 
vida +=40;

// Encantou sua arma e dobrou o dano dela 
DANO_BASE *= 2;

// Etapa 4 -> Cálculo de Atributos Finais
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel/2);
let vidaTotal = defesaTotal + vida;

// Etapa 5 -> Avaliação de Prontidão com Operadores Lógicos
let vidaSuficiente = vida > 70 ;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel > 10;
let podeEnfrentarGuardião = vidaSuficiente && (ataqueForte || nivelAvancado);

// Etapa 6 ->  Geração da Lore do Personagem
console.log("Lore de:", nome);
console.log("");
console.log("----------------------------------------------------------------------------------------------------------------------")
console.log(`${nome} é um herói que tem apenas ${idade} anos de idade da classe ${classe} e já está com o seu nivel em ${nivel} e com 6000 de XP que é um grande feito para sua idade.`);
console.log("");
console.log(`Recentemente ${nome} em sua jornada ele derrotou um boss secreto do andar 71 e dropou itens especiais como a espada ${ARMA_RARIDADE} ${NOME_ARMA} e a armadura ${ARMADURA_RARIDADE}: ${NOME_ARMADURA}, e ganhou mais 150 de XP.`);
console.log(`Como o ${nome} já estava em um andar alto da torre da ascensão ele ja tinha consegido um livro de encantamento super raro onde ele dobra o dano de sua arma. A ${NOME_ARMA} tinha um dano base de 500 e que foi duplicado e ficou com ${DANO_BASE} e o dano total de ${nome} ficou com os incriveis ${ataqueTotal}.`);
console.log(`Assim como dito antes ${nome} está no level ${nivel} e com ${xp} ele tem o total de fantando cerca de 2850 para subir ao próximo level com 1220 pontos de vidas, ele usou uma poção para ganhar mais 40 pontos de vida e ficou com um total de ${vida} já usando sua armadura lendaria que tem ${DEFESA_BASE} de defesa base ficou com ${vidaTotal} pontos de vida.`);
console.log(`Kasume pretende descer alguns andares para derrotar um boss onde tem uma chance de dropar um livro encantado em que melhora a defesa base de sua armadura, ele quer ir até o andar 31, nesse andar é necessário ter um nível igual ou maior que 10 ter pelo menos 70 pontos de vida e um ataque de 70 de dano para poder enfrentar o boss.`);
console.log("---------------------------------------------------------------------------------------------------------------------");
console.log("");
console.log(`Esse foi um breve resumo da atual aventura e alguns feito de ${nome}.`);
console.log("");
console.log(`Atuais estatisticas do Herói:`);
console.log(`📈Nivel: ${nivel}`);
console.log(`⚔️Dano:  ${ataqueTotal}`);
console.log(`❤️Vida:  ${vidaTotal}`);
console.log(`⭐XP:    ${xp} `);
console.log(`💰Ouro:  ${ouro}`);

console.log("---------------------------------------------------------------------------------------------------------------------");
// Nivel 2 - Estruturas Condicionais e Versionamento Arcano

console.log("Continuação da lore de Kasume")
console.log("")

// Etapa 1 -> Resgate do Nível 1

// Acrecentando atributos / estátisticas
let manaAtual = 650;
let manaMaxima = 650;
let agilidade = 900;
let combatesVencidos = 63;

// Estado atual da história

let local = "Torre da ascensão"
let localAtual = "Torre da ascensão - andar 46"
let missãoAtual = "Livro encantado - (protection II)"
let novaMissao = "Chefe final andar 72"

console.log("Estastiticas do herói")
console.log(`Herói  - ${nome}`);
console.log(`${classe}`)
console.log("--------------------------");
console.log(`📈Nivel:     ${nivel}`);
console.log(`⚔️Dano:      ${ataqueTotal}`);
console.log(`❤️Vida:      ${vidaTotal}`);
console.log(`🔥Mana:      ${manaMaxima}`);
console.log(`⏩Agilidade  ${agilidade}`)
console.log(`⭐XP:        ${xp} `);
console.log(`💰Ouro:      ${ouro}`);
console.log("")

console.log("---------------------------------------------------------------------------------------------------------------------")

// Prólogo
console.log(`${nome} está a caminho do andar 31 para concluir sua atual missão do ${missãoAtual}, ele precisa desse encantamento para poder aumentar mais um pouco sua defesa antes de avançar para o proximo andar da ${local}, para poder enfrentar o boss da sua proxima missão que é o ${novaMissao} a recomendação minima de defesa é de 2300. `)

// Etapa 2 -> Estrutura Narrativa
// Capitulo 1 

// Criação e dados da nova personagem
let antigaEspada = "Ultimate sword";
let EspadaAntigaDano = 150;
let novaPersonagem = "Korozumi Tama";
let classeTama = "Guerreira";
let nivelTama = 56;
let defesaTama = 300;
let dinheiro = 200;
let espadaTama = 0;
let equipeTama = "nao tem";

console.log("")

console.log(`${nome} atualmente está na ${localAtual}, enquanto nosso herói caminha até o andar 31 ele encontra um grupo de aventureiros derrotando monstros, nessa batalha ele repara que tem uma menininha em perigo próximo dele, a menininha ja era uma criança aventureira que estava com sua espada quebrada.`);
console.log("")
console.log(`Vendo isso o herói decide salvar a menininha, como ${nome} ja estava muito avançado para aquele andar ele derrota o monstro facilmente e decide ajudar a menininha dando novos equipamentos a ela. Conversando com ela o herói descobre mais sobre ela, seu nome é ${novaPersonagem} e é uma ${classeTama}, ele quer dar uma nova espada para a Tama nisso ele lembra que ele ainda tem sua antiga espada guardada a ${antigaEspada}. Ele pergunta se a Tama tem alguma espada para usar`);

console.log("");
console.log(" -Minha espada quebrou e não tenho nenhuma outra para usar");
if (espadaTama ==0){
    console.log("Tama precisa de uma nova espada!");
} else {
    console.log("Tama não precisa de uma nova espada.");
}

console.log(`${nome} decide entregar sua antiga espada para Tama, e a convida para ser sua companheira durante sua aventura.`);
 
if(equipeTama = "nao tem"){
    console.log(`Tama entra e vira companheira de ${nome}`);
} else {
    console.log(`Kasume apenas convida Tama para ser sua nova companheira`);
}

console.log("")
// Comprando uma armadura para tama

let armadura1 = "Couro de Dragão";
let armadura2 = "Placas Celestias";
let preco1 = 800;
let preco2 = 1500;
let defesa1 = 300;
let defesa2 = 450;
let armaduraEscolhida = "Couro de Dragão";

console.log(`${nome} e Tama chegam ao andar 31 e lá encontram um mercador misterioso vendendo armaduras, falando com ele ${nome} decide comprar uma armadura para ${novaPersonagem}, as armaduras disponveis eram ${armadura1} custando ${preco1} de ouros com uma defesa de ${defesa1} e a outra é ${armadura2} custando o total de ${preco2} ouros com a defesa de ${defesa2}.`);

console.log("");

// Sistema de compra da armadura

if (ouro >= preco1 === armaduraEscolhida ){
    console.log(`${nome} compra a armadura ${armaduraEscolhida} por ${preco1}`);
    ouro -= preco1;
}
    // efeitos da nova armadura
    if(armaduraEscolhida === "Couro de Dragão"){
        console.log(`${nome} compra a armadura ${armaduraEscolhida} para Tama!`);
        console.log(`${novaPersonagem} ganha resistencia ao fogo!, imune a queimaduras.`);
        defesaTama += 300;
    } else if (armaduraEscolhida === "Placas Celestiais"){
        console.log(`As Placas emitem luz sagras! + 100 de defesa contra morrtos-vivos.`);
} else if (ouro <= 500){
        console.log(`${nome} não consegue comprar ${armaduraEscolhida} e compra armadura de ferro basica.`);
        defesaTama += 100;
} else {
        console.log(`${nome} está falido e nâo consegue comprar a armadura, vendedor ri e desaparece sobre as nevoas!`);
        console.log(`${novaPersonagem} fica sem armadura nova. Kasume promete compensa-la depois.`);
}

console.log("");

// Pós compra, Atualização do ouro dos personagens

if (ouro < 1000 && armaduraEscolhida === "Couro de Dragão"){
    console.log(`${nome} agora tem ${ouro} de ouro`);
    console.log(`${novaPersonagem} pode caçar monstros com mais facilidade`);
} else if (ouro >= 2000){
    console.log(`${nome} ainda tem bastante dinheiro,`);
} else {
    console.log(`${novaPersonagem} inspeceiona a sua mais nova armadura "isso vai me ajudar muito"`);
}

console.log("");
console.log("---------------------------------------------------------------------------------------------------------------------");

// Chegada a sala do boss do andar 31 -> em busca do livro encantado
let vasculhar = true;
let repetir = false;

// Veriificando se podem entrar na sala do boss - para poder entrar na sala do boss o nivel minimo é  35
if( nivelTama && nivel > 35){
    console.log("Pode entrar na sala do boss");
}
console.log("Boss foi derrotado com extrama facilidade pela nova dupla dinamica.");

// Verificando seos hérois querem vasculhar  boss
if(vasculhar === true){
    console.log("Boss vasculhado com sucesso!");
}
console.log(`${nome} consegue dropar o livro mágico de primeira`);

// Tem a opção de repetir a sala do boss caso queira repetir a sala do boss, caso contrário saindo da salaa do boss ele só pode ser derrotado novamente em 4 horas
if(repetir != true){
    console.log(`Saindo da sala do boss. Chefe retorna em 4 horas!`);
}

console.log(`${nome} e ${novaPersonagem} começam a ir até o andar 72, para fazer a ${novaMissao}`);

// Conrinuação da saga de Kasume -> Nivel 3
// dados atuais dos personagens

console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("Continuação da saga de Kasume e Tama");

console.log("Estastiticas do herói");
console.log(`Herói  - ${nome}`);
console.log(`${classe}`)
console.log("--------------------------");
console.log(`📈Nivel:     ${nivel}`);
console.log(`⚔️Dano:      ${ataqueTotal}`);
console.log(`❤️Vida:      ${vidaTotal}`);
console.log(`🔥Mana:      ${manaMaxima}`);
console.log(`⏩Agilidade  ${agilidade}`)
console.log(`⭐XP:        ${xp} `);
console.log(`💰Ouro:      ${ouro}`);
console.log("")
console.log("--------------------------");

console.log(`Herói  - ${novaPersonagem}`);
console.log(`${classeTama}`)
console.log(`📈Nivel:     ${nivelTama}`);
console.log(`⚔️Dano:      ${EspadaAntigaDano}`);
console.log(`❤️Vida:      ${defesaTama}`);
console.log(`💰Ouro:      ${dinheiro}`);
console.log("--------------------------");

// Criação de novos elementos para poder ir a próxima missão

let iventarioKasume = ["Big Bertha", "Armadura do guardião real", "Poção de vida"];
let iventarioTama = ["Ultimate sword", "Armadura - Couro de Dragão", "Poção de vida instantanea"];
let aliados = ["Korozumi Tama"];
let inimigosEncontrados = ["Principe das Trevas", "Cavaleiro somrio", "Guarda das sombras"];
let inimigo = "Principe das trevas"
let tesouroColetado = [];

// Chegada ao andar 71

console.log(`${nome} e ${novaPersonagem} chegam ao andar 71 da torre da ascensão e la encontra um homem descansando após uma batalha contra o chefe final daquele andar onde Kasume ja havia derrotado a algum tempo atrás. `);

console.log(`${nome} convida ele para ir até o boss final do andar 72 junto a eles`);

aliados.push("Arthur Targaryen");
let itemRemovido = iventarioKasume.pop();
console.log(`Para ele poder se juntar a nossa dupla ${nome} lhe deu uma poção de vida instantanea do seu iventario para ele se curar`);

// Exploração do andar e Batalha
console.log(`O trio avança e sente um tremor, e de repente aparecem ${inimigosEncontrados.length}monstros sombrios`);

for (let i = 0; i < inimigosEncontrados.length; i++){
    const inimigo = inimigosEncontrados[i];
    console.log(`Rodada ${i + 1}: o grupo enfrenta o terrivel ${inimigo}.`);
}
let i = 0
if (i === 0) {
    console.log(` ${nome} golpeia o ${inimigo} com a lendária ${iventarioKasume[0]}, causando um grande dano.`);
    ouro += 50;
} else if (i === 1) {
    console.log(`${aliados[0]} desfere um ataque preciso com a ${iventarioTama[0]}, enfraquecendo o Cavaleiro Sombrio`);
    vida += 10;
} else {
    console.log(` O novo aliado, ${aliados[1]}, usa sua magia para quebrar a defesa do Dragão do Fogo, garantindo a vitória`);
    tesouroColetado.push("Pedra da Chama Eterna");
    xp += 200;
}

console.log(`Kasume, ${aliados[0]} e ${aliados[1]} vasculham o campo de batalha, coletando espólios.`);

// Loop for para adicionar itens ao tesouro coletado
let novosItens = ["Fragmentos de esmeralda", "Essência de Sombra", "Elixir do Vigor"];
for (let i = 0; i < novosItens.length; i++) {
tesouroColetado.push(novosItens[i]);
}

console.log(`Tesouros coletados na batalha: ${tesouroColetado.length} itens mágicos!`);

console.log(`Com a ajuda de seus novos aliados, ${nome} conquistou o andar 72 da Torre da Ascensão.`);
console.log(`${nome}, agora um verdadeiro mestre, sentiu seu destino se expandir`);
console.log(`Pois rumores de mundos além, regidos por funções e objetos, começavam a se espalhar.`);
console.log(`${nome} olhou para o horizonte, com seu novo inventário e equipe e percebe o quanto ja chegou longe.`);
console.log(`A jornada do Herói esta longe de acabar`);
