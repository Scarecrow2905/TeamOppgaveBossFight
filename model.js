const model = {
    gameOver: false, //gameOver er satt til false til å begynne med sånn at vi kan stoppe spillet senere.
    bossHitInfo: '',
    player:[
        {
            name: 'Student', // objektene våres holder på forskjellige data som navn, health, damage, mana etc.
            type: 'Human',
            health: 1000,
            maxhealth: 1000,
            mana: 100,
            maxmana: 100,
            damage: 65,
            accuracy: 80,
            dodge: 60,
            critMultiplier: 2,
            picture: 'Bilder/studentMilhouse.JPG',
        },
        {
            name: 'Knight',
            type: 'Human',
            health: 2000,
            maxhealth: 2000,
            mana: 20,
            maxmana: 20,
            damage: 100,
            accuracy: 75,
            dodge: 75,
            critMultiplier: 3,
            picture: 'Bilder/playerKnight.JPG', 
        },
        {
            name: 'Unkindled one',
            type: 'Undead',
            health: 1250,
            maxhealth: 1250,
            mana: 30,
            maxmana: 30,
            damage: 90,
            accuracy: 70,
            dodge: 80,
            critMultiplier: 4,
            picture: 'Bilder/unkindledOne.JPG', 
        },
    ],


    boss:[ // samme gjelder for bosser
        {
            name: 'Therese',
            type: 'Human',
            health: 1000,
            maxhealth: 1000,
            damage: 150,
            accuracy: 2000,
            critMultiplier: 2,
            picture: 'Bilder/ThereseBoss.JPG',
            
        },
        {
            name: 'The Nameless King',
            type: 'dragon, human',
            health: 7100,
            maxhealth: 7100,
            damage: 200,
            accuracy: 60,
            critMultiplier: 5,
            picture: 'Bilder/NamelessKing.JPG',
        },
        {
            name: 'Terje',
            type: 'Kode-Gud',
            health: 10000,
            maxhealth: 10000,
            damage: 300,
            accuracy: 100,
            critMultiplier: 2,
            picture: 'Bilder/Terje.JPG',
        },
        { 
            name: 'Rick Astley',
            type: 'No stranger to love',
            health: 621966,
            maxhealth: 10000,
            damage: 1987,
            accuracy: 1000,
            critMultiplier: 332,
            picture: ('Bilder/HiddenBoss.JPG'),
        },
    ],
}


// {  name: 'The Three Musket-T'eers
//        type: 'Unknown', 'over 9000'}