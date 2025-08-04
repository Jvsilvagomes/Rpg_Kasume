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
console.log("-------------------------------;--------------------------------------------------------------------------------------")
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
