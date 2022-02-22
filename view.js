function view() {
    let html = '';
    for (let index = 0; index < model.boss.length; index++) {
        html += /*html*/ 
        `
        <div class='boss'>

        <div class="boss-info">
        <h2><div class="boss-name">Name: ${model.boss[index].name}</div></h2><br>
        <div class="boss-health">Health: ${model.boss[index].health}</div><br>
        <div class="boss-dmg">Damage: ${model.boss[index].damage}</div><br>
        </div>
        </div>



        <div class="player">
        <div class="player-info">
        <h2><div class="player-name">Name: ${model.player[index].name}<div></h2><br>
        <div class="player-hp">Health: ${model.player[index].health}<div><br>
        <div class="player-dmg">Damage: ${model.player[index].damage}<div><br>
        </div>
        </div>
        

        <div class="player-menu">
        <button onclick="attack(${index})" class="Attack" id="attack-btn">⚔️ Attack</button>
        <button onclick="reset(${index})" class="buttons" id="reset-btn">♻ Reset</button></div>
        `;
    }
    
    
    html += /*html*/ `
    `;

    appDiv.innerHTML = html
    //html = /*html*/`
    //<h1>Boss Battle</h1>
    //<div id="monster-health"></div>
    //
    //<div id="player-health"></div>
    //
    // <h2>Boss: Therese</h2>
    //<label for="monster-health">HP</label>
    //<progress id="monster-health" max="1000" value="1000">100%</progress>
    //
    //
    //<hr>
    //
    //<h2>Player: Studenter</h2>
    //<label for="player-health">HP</label>
    //<progress id="player-health" max="1000" value="1000">100%</progress>
    //<h2>Player: Mana</h2>
    //<label for="player-mana">Mana</label>
    //<progress id="player-mana" max="100" value="100">100%</progress>
    //
    //
    //<div class="buttons">
    //    
    //<div class ="buttons">
    //     <button class="heal" id="heal-btn">💝 Heal</button></div>
    //<div class ="buttons">
    //    
    //`;
}