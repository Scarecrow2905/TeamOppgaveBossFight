function viewBosses() {
    let html = `<div class="title" onclick="selectBoss(3)"> Dank Souls</div>`;
    for (let index = 0; index < 3; index++) {

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
        
        <img class="bossPic" src="${model.boss[index].picture}" alt="boss picture">
        </div>
        `;
    }
// ViewBosses viser oss alle bosser som er tilgjengelig å sloss mot og noen generelle stats om de som navn, health og damage.
// dette blir vist via en for løkke som tegner opp alle boss "kortene" i viewet med en onclick som lar deg velge hvilken boss du vil sloss mot.
    appDiv.innerHTML = html
    
}

function viewPlayer() {
    let html = '';
    for (let index = 0; index < model.player.length; index++) {

        html += /*html*/`
        <div class="center">

        <div class="player-info" onclick="selectPlayer(${index})">
        <div class="player-name">${model.player[index].name} 
        </div>

        <div class="player-hp">
        HP: ${model.player[index].health}
        </div>

        <div class="player-dmg">
        DMG: ${model.player[index].damage}
        </div>
        
        <img class="bossPic" src="${model.player[index].picture}" alt="player picture">
        </div>
        `;
    }

    html += /*html*/ `
    `;
    appDiv.innerHTML = html
}

function viewFight() {
    html = '';
        html += /*html*/`
        <div class="center">

        <div class="boss-info">
        <div class="boss-name">Boss: ${model.boss[chosenBoss].name}
        </div>

        <div class="boss-hp">HP:<progress id="bosshealth" value="${model.boss[chosenBoss].health}" max="${model.boss[chosenBoss].maxhealth}"></progress>${model.boss[chosenBoss].health}
        </div>

        <div class="boss-dmg">
        DMG: ${model.boss[chosenBoss].damage}
        </div>
        <img class="bossPic" src="${model.boss[chosenBoss].picture}"> 
        </div>
        
        <div class="player">
        <div class="player-info">
        <h2><div class="player-name">Name: ${model.player[chosenPlayer].name}<div></h2>
        
        <div class="player-hp">HP:
        <progress id="playerhealth"value="${model.player[chosenPlayer].health}" max="${model.player[chosenPlayer].maxhealth}">
        </progress>${model.player[chosenPlayer].health}<div>

        <div class="player-mana">Mana:     ${model.player[chosenPlayer].mana}</div>
        <div class="player-dmg">Damage:    ${model.player[chosenPlayer].damage}<div><br>
        <img class="bossPic" src="${model.player[chosenPlayer].picture}">
        <button onclick ="playerAttack(${chosenPlayer})" class="Attack" id="attack-btn">⚔️ Attack</button>
        <button onclick ="playerHeal(${chosenPlayer})" class="Heal" id="heal-btn">💝 Heal</button>
        <button onclick ="reset(${chosenPlayer})" class="reset" id="reset-btn">♻ Reset</button>
        </div>
        </div>
        `;
        
    appDiv.innerHTML = html;
    }
    
    //viewFight er viewet som blir tegnet opp når vi har valgt en boss og viser oss de mulighetene vi har som spiller
    //hvilke stats vi har og hvordan fighten mot bossen går. Vi får vist hvilken boss som er der via å passere tilbake chosenBoss istedenfor index.


function viewLog() {
    if (playerAttack = true) {
    html = '';
    html += /*html*/ `<div class="log-info">
    <h3>Event log </h3>
    <div class="boss-DMG">Boss did:${model.boss[index].damage} DMG</div> & <div class="player-DMG">You did: ${model.player[index].damage} DMG
    </div>
    `
        viewLog();
}

    appDiv.innerHTML = html;
}