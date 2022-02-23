//Controller - Aka Functions
function selectBoss(selected) {
    console.log(selected);
    chosenBoss = selected;
    viewFight(chosenBoss);
}

function attack(index) {
    var playerHitChance = Math.round(Math.random() * 10);
    var bossHitChance = Math.round(Math.random() * 10);
    // 
    if (model.gameOver == true) {
        return;
    }

    // Player
    if (playerHitChance <= 7) {
        model.boss[chosenBoss].health -= model.player[index].damage
    } else if (playerHitChance >= 9) {
        model.boss[chosenBoss].health -= model.player[index].damage * 3
        console.log('CRIT HIT');
    }

    // Boss
    if (bossHitChance <= 7) {
        model.player[index].health -= model.boss[chosenBoss].damage
    } else if (bossHitChance >= 10) {
        model.player[index].health -= model.boss[chosenBoss].damage * 5
        console.log('BOSS CRIT');
    }

    //
    if (model.player[index].health <= 0 || model.boss[chosenBoss].health <= 0) {
        model.gameOver = true;
        console.log(model.gameOver, 'GAME OVER')
    }
    viewFight();
}

function heal(index) {
    if (model.gameOver == true) {
        return;
    }
    if (model.player[index].mana > 0) {
        let healAmount = Math.floor(Math.random() * 10);
        model.player[index].health += healAmount;
        model.player[index].mana -= 10;
        console.log('Healed for', healAmount);
    }
    viewFight();
}

function reset(index) {
    model.gameOver = false;
    model.boss[0].health = 1000;
    model.boss[1].health = 7100;
    model.player[index].health = 100;
    model.player[index].mana = 100;
    viewBosses();
}