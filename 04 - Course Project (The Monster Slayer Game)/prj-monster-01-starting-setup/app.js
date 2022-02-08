
function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            specialAttackRound: 3,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles(){
            // if(this.monsterHealth < 0){
            //     return { width: '0%' }
            // }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles(){
            return { width: this.playerHealth + '%' }
        },
        // mayUseSpecialAttack(){
        //     return this.currentRound % 3 !== 0;
        // },
        mayUseSpecialAttack(){
            return this.specialAttackRound <= 0;
        }
    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            } else if(value <= 0){
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            } else if(value <= 0){
                this.winner = 'player';
            }
        }
    },
    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.specialAttackRound = 3;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster(){
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.monsterHealth = Math.max(this.monsterHealth, 0);
            this.currentRound++;
            this.specialAttackRound--;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();

        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.playerHealth = Math.max(this.playerHealth, 0);
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster(){
            this.specialAttackRound = 3;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.monsterHealth = Math.max(this.monsterHealth, 0);
            this.currentRound++;
            this.addLogMessage('player', 'spacial', attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            this.specialAttackRound--;
            const healValue = getRandomValue(8, 20);
            this.playerHealth += healValue;
            this.playerHealth = Math.min(this.playerHealth, 100);
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            //this.logMessages.splice(idx, 1)     // remove 1 element at index idx (first in this case)
            this.logMessages.unshift({          // add 1 element (object in this case) at beginning of the array
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
});

app.mount('#game');