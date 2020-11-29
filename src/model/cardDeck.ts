import { Card } from "./card";
import { cardType, cardSymbol } from './common';

export class CardDeck {

    private _cards: Card[] = [];

    constructor () {
        this._cards = cardType.map((type) => cardSymbol.map((symbol) => {
            return new Card(symbol, type);
        })).reduce((allCards, cards) => [...allCards, ...cards], []);
        const cardsWithRandomScores = this._cards.map((c) => {
            return {
                card: c,
                score: Math.random(),
            };
        });
        cardsWithRandomScores.sort((c1, c2) => c1.score - c2.score);
        this._cards = cardsWithRandomScores.map((cs) => cs.card);
    }
    
    public deal(n?: number): Card[] {
        n = n ?? 1;
        return this._cards.splice(0, n);
    }

    public get size() {
        return this._cards.length;
    }
}