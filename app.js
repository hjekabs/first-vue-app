new Vue({
    el: '#app',
    data: {
        startOfGame: true,
        playerHealth: 100,
        monsterHealth: 100,
        progressBarClasses: {
            playerBar: 'player-bar',
            monsterBar: 'monster-bar',
        },
        playerHistory: [],
        monsterHistory: [],
        showHistory: false,
    },
    methods: {
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.playerHistory = [];
            this.monsterHistory = [];
            this.startOfGame = !this.startOfGame;
            this.showHistory = !this.showHistory;
        },
        checkHistory() {
            playerLen = this.playerHistory.length;
            monsterLen = this.monsterHistory.length;
            if(playerLen === 0 && monsterLen === 0) {
                return
            } else {
                this.showHistory = true;
            }
        },
        regularAttack() {
            playerDamage = Math.floor(Math.random() * 10) 
            monsterDamage = Math.floor(Math.random() * 10) 
            this.playerHealth = this.playerHealth - monsterDamage
            this.monsterHealth = this.monsterHealth - playerDamage
            this.playerHistory.push(`Player hit monster a damage of ${playerDamage}`)
            this.monsterHistory.push(`Monster hit player a damage of ${monsterDamage}`)
            this.checkHistory()
        },
        speacialAttack() {
            playerDamage = Math.floor(Math.random() * 20) 
            monsterDamage = Math.floor(Math.random() * 10) 
            this.playerHealth = this.playerHealth - monsterDamage
            this.monsterHealth = this.monsterHealth - playerDamage
            this.playerHistory.push(`Player hit monster a SPECIAL damage of ${playerDamage}`)
            this.monsterHistory.push(`Monster hit player a damage of ${monsterDamage}`)
            this.checkHistory()
        },
        playerHeal() {
            playerHeal = Math.floor(Math.random() * 10)
            monsterDamage = Math.floor(Math.random() * 10)
            this.playerHealth = this.playerHealth - monsterDamage
            this.playerHealth = this.playerHealth + playerHeal
            this.playerHistory.push(`Player just healed a ${playerHeal}`)
            this.monsterHistory.push(`Monster hit player a damage of ${monsterDamage}`)
            this.checkHistory()  
        },
    },
    watch: {
        playerHealth: function() {
            if(this.playerHealth <= 0 ) {
                alert('MONSTER HAS JUST WON');
                this.newGame()
            }
        },
        monsterHealth: function() {
            if(this.monsterHealth <= 0 ) {
                alert('PLAYER HAS JUST WON');
                this.newGame()
            }
        }
    }
})