# Calculadora de Partidas Rankeadas - DIO

Este projeto foi desenvolvido como parte de um desafio da [DIO (Digital Innovation One)](https://www.dio.me/), com o objetivo de praticar os conceitos básicos de programação em JavaScript, como variáveis, operadores, laços de repetição e estruturas de decisão.

A proposta é criar uma lista de jogadores e classificá-los em níveis conforme a quantidade de vitórias nas partidas ranqueadas.

---

## 📚 Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js (para executar o código localmente)
- Git (para versionamento)
- GitHub (para hospedagem do repositório)

---

## 🎯 Objetivo do Desafio

Criar um algoritmo que classifique um jogador com base na quantidade de vitórias, de acordo com os seguintes critérios:

| Faixa de Vitórias     | Nível     |
|-----------------------|-----------|
| Menor que 10          | Ferro     |
| Entre 11 e 20         | Bronze    |
| Entre 21 e 50         | Prata     |
| Entre 51 e 80         | Ouro      |
| Entre 81 e 90         | Diamante  |
| Entre 91 e 100        | Lendário  |
| Maior ou igual a 101  | Imortal   |

O **saldo de partidas ranqueadas** é calculado com a fórmula:  
**saldo = vitórias - derrotas**

---

## 💡 Como Funciona

Cada jogador possui um nome, quantidade de vitórias e derrotas.  
O programa percorre a lista de jogadores, calcula o saldo e determina o nível de cada um conforme as faixas acima.  
Por fim, exibe uma mensagem com o resultado no seguinte formato:

"O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}"

---

## 📄 Exemplo de Saída

```text
🎮 Resultados das Partidas Rankeadas:

Ronaldo: O Herói tem de saldo de 100 está no nível de Imortal
Zico: O Herói tem de saldo de 6 está no nível de Ferro
Romário: O Herói tem de saldo de 17 está no nível de Bronze
Neymar: O Herói tem de saldo de 33 está no nível de Prata
Pelé: O Herói tem de saldo de 76 está no nível de Diamante
Cafu: O Herói tem de saldo de 75 está no nível de Lendário
Taffarel: O Herói tem de saldo de 101 está no nível de Imortal
