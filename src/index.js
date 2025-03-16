const player1 = {
  NOME: 'Mario',
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: 'Peach',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player3 = {
  NOME: 'Yoshi',
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player4 = {
  NOME: 'Donkey Kong',
  VELOCIDADE: 4,
  MANOBRABILIDADE: 2,
  PODER: 3,
  PONTOS: 0,
};

const player5 = {
  NOME: 'Luigi',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player6 = {
  NOME: 'Bowser',
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player7 = {
  NOME: 'Wario',
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 2,
  PONTOS: 0,
};

const player8 = {
  NOME: 'Waluigi',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player9 = {
  NOME: 'Toad',
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player10 = {
  NOME: 'Koopa',
  VELOCIDADE: 4,
  MANOBRABILIDADE: 2,
  PODER: 3,
  PONTOS: 0,
};

const player11 = {
  NOME: 'Koopa Troopa',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player12 = {
  NOME: 'Goomba',
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player13 = {
  NOME: 'Piranha Plant',
  VELOCIDADE: 4,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player14 = {
  NOME: 'Kamek',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const players = [
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
  player9,
  player10,
  player11,
  player12,
  player13,
  player14,
];

async function rollDices() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandonBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = 'RETA';
      break;
    case random < 0.66:
      result = 'CURVA';
      break;
    default:
      result = 'CONFRONTO';
      break;
  }

  return result;
}
async function logRollResult(characterName, diceResult, block, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block}  ${diceResult} + ${attribute}  = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round} `);

    // Sortear bloco da pista
    let block = await getRandonBlock();
    console.log(`Bloco: ${block}`);

    // Rolar dados
    let diceResult1 = await rollDices();
    let diceResult2 = await rollDices();

    // Teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === 'RETA') {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        diceResult1,
        'velocidade',
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        diceResult2,
        'velocidade',
        character2.VELOCIDADE
      );

      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} venceu a reta! e marcou 1 ponto 🐢`);
        character1.PONTOS++;
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} venceu a reta! e marcou 1 ponto 🐢`);
        character2.PONTOS++;
      } else {
        console.log(
          `${character1.NOME} e ${character2.NOME} empataram na reta!`
        );
      }
    } else if (block === 'CURVA') {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        diceResult1,
        'manobrabilidade',
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        diceResult2,
        'manobrabilidade',
        character2.MANOBRABILIDADE
      );

      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} venceu a curva! e marcou 1 ponto 🐢`);
        character1.PONTOS++;
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} venceu a curva! e marcou 1 ponto 🐢`);
        character2.PONTOS++;
      } else {
        console.log(
          `${character1.NOME} e ${character2.NOME} empataram na curva!`
        );
      }
    } else if (block === 'CONFRONTO') {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        diceResult1,
        'poder',
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        diceResult2,
        'poder',
        character2.PODER
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
        );
        character2.PONTOS--;
      } else if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
        );
        character1.PONTOS--;
      } else {
        console.log('Empatou! Ninguém perde ponto.');
      }
    }
    console.log('------------------------------------------------');
  }
}

function winnerRacing(character1, character2) {
  console.log(`\n 🏁🏁🏁 PLACAR FINAL 🏁🏁🏁\n`);
  console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
  console.log(`${character2.NOME}: ${character2.PONTOS} pontos \n`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`🏆🏆🏆 VENCEDOR: ${character1.NOME} 🏆🏆🏆`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`🏆🏆🏆 VENCEDOR: ${character2.NOME} 🏆🏆🏆`);
  } else {
    console.log('Empataram!');
  }
}

function randomPlayers() {
  const playersCopy = [...players];
  const shuffledPLayers = playersCopy.sort(() => Math.random() - 0.5);
  return [shuffledPLayers[0], shuffledPLayers[1]];
}

(async function main() {
  const [playerA, playerB] = randomPlayers();
  console.log(
    `🏁🚨 Corrida entre ${playerA.NOME} e ${playerB.NOME} começando...`
  );
  await playRaceEngine(playerA, playerB);

  winnerRacing(playerA, playerB);
})();
