function viewBosses() {
    let html = '';
    for (let index = 0; index < model.boss.length; index++) {

        html += /*html*/`
        <div class="center">

        <div class="boss-info" onclick="selectBoss(${index})">
        <div class="boss-name">Boss: ${model.boss[index].name}
        </div>

        <div class="boss-hp">
        HP: ${model.boss[index].health}
        </div>

        <div class="boss-dmg">
        DMG: ${model.boss[index].damage}
        </div>
        </div>
        `;
    }

    
    html += /*html*/ `
    `;
    appDiv.innerHTML = html
    
}

function viewFight() {
    html = '';
        html += `
        <div class="center">

        <div class="boss-info">
        <div class="boss-name">Boss: ${model.boss[chosenBoss].name}
        </div>

        <div class="boss-hp">
        HP: ${model.boss[chosenBoss].health}
        </div>

        <div class="boss-dmg">
        DMG: ${model.boss[chosenBoss].damage}
        </div>
        </div>
        `;
        
    
    for (let index = 0; index < model.player.length; index++) {
        html += 
        `<div class="player">
        <div class="player-info">
        <h2><div class="player-name">Name: ${model.player[index].name}<div></h2><br>
        <div class="player-hp">Health:     ${model.player[index].health}<div><br>
        <div class="player-mana">Mana:     ${model.player[index].mana}
        <div class="player-dmg">Damage:    ${model.player[index].damage}<div><br>
        <button onclick ="attack(${index})" class="Attack" id="attack-btn">⚔️ Attack</button>
        <button onclick ="heal(${index})" class="Heal" id="heal-btn">💝 Heal</button>
        <button onclick ="reset(${index})" class="reset" id="reset-btn">♻ Reset</button>
        </div>
        </div>
        `;
        
    }

    appDiv.innerHTML = html;
}