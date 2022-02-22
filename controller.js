//Controller - Aka Functions


function attack(index) {
    var playerHitChance = Math.round(Math.random() * 10);
    var bossHitChance = Math.round(Math.random() * 10);
    // 
    if (model.gameOver == true) {
        return;
    }

    // Player
    if (playerHitChance <= 7) {
        model.boss[index].health -= model.player[index].damage
    } else if (playerHitChance >= 9) {
        model.boss[index].health -= model.player[index].damage * 3
        console.log('CRIT HIT');
    }

    // Boss
    if (bossHitChance <= 7) {
         model.player[index].health -= model.boss[index].damage
    } else if (bossHitChance >= 10) {
        model.player[index].health -= model.boss[index].damage * 5
        console.log('BOSS CRIT');
    }

    //
    if (model.player[index].health <= 0 || model.boss[index].health <= 0) {
        model.gameOver = true;
        console.log(model.gameOver, 'GAME OVER')
    }
    view();
}

function reset(index) {
    model.gameOver = false;
    model.boss[index].health = 1000;
    model.player[index].health = 100;
    view();
}
  


function damageBoss(playerAttackDamage) {
    if (gamerOver == false) {
        return;
    }
    let critChance = Math.floor(Math.random() * 100);
    if (critChance > 80) {
        playerAttackDamage = playerAttackDamage * critStrikeMultiplier;
        console.log('You hit for: ' + playerAttackDamage + ' Critical strike!');
        bossHealth.value = +bossHealth.value - playerAttackDamage;
        return (playerAttackDamage = defaultPlayerDamage);
    }
    else { 
        const checkNormalAtk = Math.Floor(Math.random() * 10 + playerAttackDamage);
        console.log('You hit for: ' + checkNormalAtk);
        bossHealth.value = +bossHealth.value - checkNormalAtk;
    }
    if (boss.Health.value <= 0){
        console.log('Game Over! You Win!');
        alert('Game Over! You Win');
        gameOver = true;
    }
}