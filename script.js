// let menu;
// let answer;
// let gameStats = [];

// do {
//     menu = prompt(`Olá jogador, o que deseja fazer entre as opções abaixo?
//         1- Jogar
//         2- Créditos
//         3- Estatísticas
//         4- Sair
//     `);

//     switch (menu) {

//         case "1":
//             let prizeDoor = Math.random() >= 0.5 ? 1 : 2;
//             let attempts = 10;
//             let win = 0;
//             let losses = 0;

//             while (attempts > 0) {
//                 answer = prompt(`Escolha entre as portas 1 e 2. Você tem ${attempts} tentativas restantes.`);

//                 if (answer === "1") {
//                     alert(`A porta 1 revela: ${prizeDoor === 1 ? 'Prêmio!' : 'Nada.'}`);
//                 } else if (answer === "2") {
//                     alert(`A porta 2 revela: ${prizeDoor === 2 ? 'Prêmio!' : 'Nada.'}`);
//                 } else {
//                     alert("Escolha inválida! Tente novamente.");
//                     continue; // Não desconta a tentativa para escolhas inválidas
//                 }

//                 attempts--;

//                 if ((prizeDoor === 1 && answer === "1") || (prizeDoor === 2 && answer === "2")) {
//                     alert("Parabéns você encontrou o prêmio!");
//                     win++;
//                     break; // Sai do loop while quando o prêmio é encontrado
//                 }
                
//                 losses++;
//                 if (attempts === 0) {
//                     alert("Suas tentativas acabaram! Tente novamente.");
//                 }
//             }

//             gameStats.push({ wins: win, losses: losses });
//             break;

//         case "2":
//             alert(`Dev(s): João Guilherme\nJogo: Escolha de portas`);
//             break;

//         case "3":
//             if (gameStats.length > 0) {
//                 let stats = "Estatísticas dos Jogos:\n";
//                 for (let i = 0; i < gameStats.length; i++) {
//                     let stat = gameStats[i];
//                     stats += `Jogo ${i + 1}: (Vitórias: ${stat.wins}, Derrotas: ${stat.losses})\n`;
//                 }
//                 alert(stats);
//             } else {
//                 alert("Nenhuma estatística disponível.");
//             }
//             break;

//         case "4":
//             alert("Volte sempre!");
//             break;

//         default:
//             alert('Opção inválida. Tente novamente.');
//             break;
//     }

// } while (menu !== "4");

// let main = ""
// let victories = []
// do {
//     main = prompt(`
//               JOGOS DAS PORTAS
//     1-COMEÇAR
//     2-NOVO JOGO
//     3-OPÇÕES
//     4-SAIR
//     `)
//     switch (main) {
//         case '1':
//             const writes = [
//                 "Uma porta fechada pode esconder grandes mistérios.",
//                 "Portas não julgam quem passa, apenas dão passagem.",
//                 "Bater em uma porta é o primeiro passo para novas oportunidades.",
//                 "Às vezes, precisamos fechar uma porta para que outra se abra."
//             ]
//             function palavrasAleatorias(){
//                 const randomIndex = Math.floor(Math.random() * writes.length)
//                 alert(writes)
//                 return writes[randomIndex]
//             }
//             let game = (`
//                 ● DENTRE ESSAS TRÊS OPÇÕES, UMA ESTÁ COM O GRANDE PRÊMIO ●
//                                 ▶ ESCOLHA DE UM A TRÊS ◀
//                 1- PORTA NÚMERO 1
//                 2- PORTA NÚMERO 2
//                 3- PORTA NÚMERO 3
//                 4- BÔNUS (SORTE OU AZAR)
//                 `)
//             break
//         case '2':
//             break
//         case '3':
//             break
//         default:
//             alert("Opção inválida. Tente novamente.")
//     }
// } while (main !== "4");

let main = "";
let victories = [];

do {
    main = prompt(`
              JOGOS DAS PORTAS
    1-COMEÇAR
    2-NOVO JOGO
    3-OPÇÕES
    4-SAIR
    `);
    
    switch (main) {
        case '1':
            const writes = [
                "Uma porta fechada pode esconder grandes mistérios.",
                "Portas não julgam quem passa, apenas dão passagem.",
                "Bater em uma porta é o primeiro passo para novas oportunidades.",
                "Às vezes, precisamos fechar uma porta para que outra se abra."
            ];
            
            function palavrasAleatorias() {
                const randomIndex = Math.floor(Math.random() * writes.length);
                const frase = writes[randomIndex];
                alert(frase);
                return frase;
            }
            
            palavrasAleatorias(); // Mostra uma frase aleatória
            
            let game = `
            ● DENTRE ESSAS TRÊS OPÇÕES, UMA ESTÁ COM O GRANDE PRÊMIO ●
            ▶ ESCOLHA DE UM A TRÊS ◀
                1- PORTA NÚMERO 1
                2- PORTA NÚMERO 2
                3- PORTA NÚMERO 3
                4- BÔNUS (SORTE OU AZAR)
            `;
            
            let escolha = prompt(game);
            
            switch (escolha) {
                case '1':
                case '2':
                case '3':
                    // Simula vitória ou derrota
                    const resultado = Math.random() > 0.5 ? "vitória" : "derrota";
                    alert(`Você escolheu a porta ${escolha} e teve uma ${resultado}!`);
                    victories.push(resultado); // Armazena o resultado
                    break;
                case '4':
                    alert("Você escolheu o bônus! Vamos testar sua sorte...");
                    // Adicione lógica de bônus aqui
                    break;
                default:
                    alert("Escolha inválida. Tente novamente.");
            }
            break;

        case '2':
            alert("Novo jogo iniciado!");
            victories = []; // Reseta o array de vitórias
            break;

        case '3':
            alert(`Estatísticas: 
            Total de jogos: ${victories.length}
            Vitórias: ${victories.filter(v => v === "vitória").length}
            Derrotas: ${victories.filter(v => v === "derrota").length}`);
            break;

        case '4':
            alert("Obrigado por jogar! Até a próxima.");
            break;

        default:
            alert("Opção inválida. Tente novamente.");
    }
} while (main !== "4");
