//Controller - Aka Functions
function selectBoss(selected) { // selectBoss får indexen vi klikket på passert ned til seg
    console.log(selected);
    chosenBoss = selected; // vi setter chosenBoss til selected parameteret, dette er mest sansynlig overflødig kode.
    viewPlayer();
}

function selectPlayer(selected) {
    chosenPlayer = selected;
    viewFight();
}

function playerAttack() {
    if (model.gameOver == true) { //hvis vi har truffet 0 health på enten oss eller bossen så blir gameOver satt til True, når det stemmer så stopper funksjonen ifra å virke.
        return;
    }
    let playerHitChance = Math.floor(Math.random() * model.player[chosenPlayer].accuracy + 5) //playerHitChance blir regnet ut ifra ett tilfeldig rull av spilleren sin accuracy stat + 5 base accuracy.
    if (playerHitChance => 50 || playerHitChance <= 70) { //om player ruller høyere enn 50 på hitchance så gjør vi damage på bossen.
        model.boss[chosenBoss].health -= model.player[chosenPlayer].damage
        
    } else if (playerHitChance > 70) { //hvis hit chancen er over 70 så er det en critical hit og vi ganger damagen ut ifra crit multiplieren
        model.boss[chosenBoss].health -= model.player[chosenPlayer].damage * model.player[chosenPlayer].critMultiplier
        console.log('CRIT HIT');
    }
    console.log('player hit roll: ', playerHitChance);
    bossAttack(); //Etter vi er ferdig med å regne ut vår damage så kaller vi på bossen sin utregning.
}

function playerHeal() {
    if (model.gameOver == true) {
        return;
    }
    if (model.player[chosenPlayer].mana > 0) { //hvis player sin mana er over 0 så kjører funksjonen
        let healAmount = Math.floor(Math.random() * 1000); // den setter ett tilfeldig tall også legger til det tallet på healthen din
        model.player[chosenPlayer].health += healAmount;
        model.player[chosenPlayer].mana -= 10;
        console.log('Healed for :', healAmount);
    }
    bossAttack(); // bossen angriper deg fortsatt selvom du healer
}

function bossAttack() {
    //mye av det samme gjelder for boss angrepet
        let bossHitChance = Math.floor(Math.random() * model.boss[chosenBoss].accuracy + 5)
        if (bossHitChance => 50 || bossHitChance < 70) {
            model.player[chosenPlayer].health -= model.boss[chosenBoss].damage
            //model.bossHitInfo = `You were hit for ${model.boss[chosenBoss].damage}`;
        } else if (bossHitChance > 70) {
            model.player[chosenPlayer].health -= model.boss[chosenBoss].damage * model.boss[chosenBoss].critMultiplier
            console.log('BOSS CRIT');
        }
        
        checkWinner();
        console.log('boss hit roll: ', bossHitChance);
         // Etter bossen har kalkulert sitt angrep så sjekker vi om noen har dødd enda.
}

function checkWinner() {
    if (model.player[chosenPlayer].health <= 0) {
        model.player[chosenPlayer].health = 0
        model.gameOver = true;
        console.log(model.gameOver, 'GAME OVER')
        viewFight();
    } else if (model.boss[chosenBoss].health <= 0) {
        model.boss[chosenBoss].health = 0
        model.gameOver = true;
        console.log(model.gameOver, 'YOU WIN')
        viewFight();
    } else {
        viewFight();
    }
    // Denne funksjonen håndterer rett og slett bare at om noen skulle gå i minus så blir det satt til 0, sikkert ikke ideel måte å gjøre det på men det funker.
}

function reset() {
    model.gameOver = false;
    model.boss[chosenBoss].health = model.boss[chosenBoss].maxhealth;
    model.player[chosenPlayer].health = model.player[chosenPlayer].maxhealth;
    model.player[chosenPlayer].mana = model.player[chosenPlayer].maxmana;
    viewBosses();
    // Denne funksjonen resetter allesammen og sender deg tilbake til viewBosses
}