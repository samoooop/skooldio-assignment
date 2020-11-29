import { print } from '../utilities';
import { Card } from './card';
import { CardDeck } from './cardDeck';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

export class GameManager {
    private totalChip: number = -1;

    constructor () {
    }

    public async start() {
        let bet = await this.inputBet();
        if (this.totalChip === -1) {
            // first game
            this.totalChip = bet;
        }
        this.playOne(bet);
        while(true) {
            const playMore = await this.inputContinue();
            print(`You got total ${this.totalChip} chip`);
            if (!playMore) {
                return;
            }
            bet = await this.inputBet();
            await this.playOne(bet);
        }

    }

    private static getCardNames(cards: Card[]) {
        return cards.map((c) => c.getName()).join(', ');
    }

    private static calculateScore(cards: Card[]) {
        return cards.reduce((total, card) => card.getPokDengScore() + total, 0) % 10;
    }

    private playOne(bet: number) {
        const cardDeck = new CardDeck();
        const playerCards = cardDeck.deal(2);
        const dealerCards = cardDeck.deal(2);
        const playerScore = GameManager.calculateScore(playerCards);
        const dealerScore = GameManager.calculateScore(dealerCards);
        print(`You got ${GameManager.getCardNames(playerCards)}`);
        print(`The dealer got ${GameManager.getCardNames(dealerCards)}`);
        let chipChange = 0;
        let result = 'tried';
        if (playerScore > dealerScore) {
            chipChange = bet;
            result = 'won!!!';
        }
        else if (playerScore === dealerScore) {
        } else {
            chipChange = -bet;
            result = 'lost...';
        }
        print(`You ${result}, received ${chipChange} chips`);
        this.totalChip += chipChange;
    }

    private async inputBet(): Promise<number> {
        let n = NaN;
        while (true) {
            const answer = await new Promise((resolve, reject) => {
                rl.question('Please put your bet\n', (answer) => {
                    resolve(answer);
                });
            });
            n = +answer;
            if (isNaN(n)) {
                print(`Please input a number`);
            } else if (n <= 0) {
                print(`Please input a number greater than 0`);
            } else if (this.totalChip !== -1 && n > this.totalChip) {
                print(`You don't have enough chip. (You have ${this.totalChip})`);
            } else {
                break;
            }
        }
        return n;
    }

    private async inputContinue(): Promise<boolean> {
        while (true) {
            const answer = await new Promise((resolve, reject) => {
                rl.question('Wanna play more (Yes/No)?\n', (answer) => {
                    resolve(answer);
                });
            });
            if (answer === 'Yes') {
                return true;
            } else if (answer === 'No') {
                return false;
            } else {
                print('Please input Yes/No');
            }
        }
    }
}