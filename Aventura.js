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
let defesaTotal = DEFESA_BASE + (nivel/2)

// Etapa 5 -> Avaliação de Prontidão com Operadores Lógicos
let vidaSuficiente = vida > 70 ;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel > 10;
let podeEnfrentarGuardião = vidaSuficiente && (ataqueForte || nivelAvancado);

// Etapa 6 ->  Geração da Lore do Personagem
console.log("Lore de:", nome);
console.log("")
console.log("---------------------------------------------------------------------------------------------------------------------")
console.log(`${nome} é um herói que tem apenas ${idade} anos de idade da classe ${classe} e já está com o seu nivel em ${nivel} que é um grande feito para sua idade.`);
console.log("")
console.log(`Recentemente ${nome} em sua jornada ele derrotou um boss secreto do andar 71 e dropou itens especiais como a espada mitica ${NOME_ARMA} e a armadura lendaria: ${NOME_ARMADURA}.`)
console.log(`Como o ${nome} já estava`)
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
