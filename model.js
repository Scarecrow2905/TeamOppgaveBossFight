const model = {
    gameOver: false,

    player:[
        {
            name: 'Student',
            type: 'Human',
            health: 100,
            damage: 100,
            //damage: defaultPlayerDamage = Math.floor(Math.random() * (35 - 25) +25),
        },
    ],

    boss:[
        {
            name: 'Therese',
            type:'Human',
            health: 1000,
            damage: 10,
            
        },
       // {
       //     name: 'The Nameless King',
       //     type: 'dragon, human',
       //     health: 7100,
       // },
        // {  name: 'The Three Musket-T'eers
    //        type: 'Unknown', 'over 9000'}
    ]
}



// const currentVersion = 'v0.8';
// const bossHealth = document.getElementById('monster-health');
// const playerHealth = document.getElementById('player-health');
// const playerMana = document.getElementById('player-mana');
// const attackBtn = document.getElementById('attack-btn');
// const healBtn = document.getElementById('heal-btn');
// const resetBtn = document.getElementById('reset-btn');
// const bossMaxHealth = 1000;
// const playerMaxHealth = 100;
// const playerMaxMana = 100;
// const critStrikeMultiplier = 3;
// const defaultPlayerDamage = Math.floor(Math.random() * (35 - 25) + 25);
// const defaultMonsterDamage = Math.floor(Math.random() * (5 - 2) + 2);
// const healPlayerAmount = Math.floor(Math.random() * (30 - 20) + 20);
// const healManaCost = 10;
// let playerAttackDamage = defaultPlayerDamage;
// let monsterAttackDamage = defaultMonsterDamage;
// let bossEnrageDmgMultiplier = false;
// let gameOver = false;