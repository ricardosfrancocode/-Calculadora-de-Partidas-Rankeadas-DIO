function calcularPartidasRankeadas() {
    // Matriz de jogadores: [nome, vitórias, derrotas]
    const jogadores = [
        ["Ronaldo", 110, 10],
        ["Zico", 9, 3],
        ["Romário", 19, 2],
        ["Neymar", 47, 14],
        ["Pelé", 81, 5],
        ["Cafu", 95, 20],
        ["Taffarel", 101, 0],
        
    ];

    console.log("Resultados das Partidas Rankeadas:\n");

    for (let i = 0; i < jogadores.length; i++) {
        const [nome, vitorias, derrotas] = jogadores[i];
        const saldoVitorias = vitorias - derrotas;
        let nivel = "";

        // Definição dos níveis conforme enunciado, exatamente igual
        if (vitorias < 10) {
            nivel = "Ferro";
        } else if (vitorias >= 11 && vitorias <= 20) {
            nivel = "Bronze";
        } else if (vitorias >= 21 && vitorias <= 50) {
            nivel = "Prata";
        } else if (vitorias >= 51 && vitorias <= 80) {
            nivel = "Ouro";
        } else if (vitorias >= 81 && vitorias <= 90) {
            nivel = "Diamante";
        } else if (vitorias >= 91 && vitorias <= 100) {
            nivel = "Lendário";
        } else if (vitorias >= 101) {
            nivel = "Imortal";
        }

        console.log(`${nome}: O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
    }
}

calcularPartidasRankeadas();
