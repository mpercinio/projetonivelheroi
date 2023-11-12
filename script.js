/* Neste desafio tem um erro, pois como esta a orientação para fazer o desafio existe um erro pois se o herói tiver um xp entre 5001 e 6000 ele ficara sem classificação pois ele não seria nem ouro, nem prata por este motivo quando fiz o desafio considerei quem fosse acima de 5001 até 7000 seria Ouro.
*/

let jogador = "thebest";

let XP = 5500

switch (true) {

    case XP <= 1000:
        console.log("O Herói de nome " + jogador + " está no nível de Ferro");
        break

    case XP <= 2000:
        console.log("O Herói de nome " + jogador + " está no nível de Bronze");
        break

    case XP <= 5000:
        console.log("O Herói de nome " + jogador + " está no nível de Prata");
        break

    case XP <= 7000:
        console.log("O Herói de nome " + jogador + " está no nível de Ouro");
        break

    case XP <= 8000:
        console.log("O Herói de nome " + jogador + " está no nível de Platina");
        break

    case XP <= 9000:
        console.log("O Herói de nome " + jogador + " está no nível de Ascendente");
        break

    case XP <= 10000:
        console.log("O Herói de nome " + jogador + " está no nível de Imortal");
        break
    
    case XP > 10000:
        console.log("O Herói de nome " + jogador + " está no nível de Radiante");
        break
}


