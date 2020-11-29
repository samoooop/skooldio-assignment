const scoreMapper: {
    [key in PokDeng.CardType]: number;
} = {
    ACE: 1,
    EIGHT: 8,
    FIVE: 5,
    FOUR: 4,
    JACK: 0,
    KING: 0,
    NINE: 9,
    QUEEN: 0,
    SEVEN: 7,
    SIX: 6,
    TEN: 0,
    THREE: 0,
    TWO: 2,
};

export class Card {

    private _symbol: PokDeng.CardSymbol;
    private _type: PokDeng.CardType;

    constructor (symbol: PokDeng.CardSymbol, type: PokDeng.CardType) {
        this._symbol = symbol;
        this._type = type;
    }

    public getName(): string {
        return `${Card.getSymbolName(this._symbol)}-${Card.getTypeName(this._type)}`;
    }
    
    public getPokDengScore(): number {
        return scoreMapper[this._type];
    }

    private static getSymbolName(symbol: PokDeng.CardSymbol) {
        switch (symbol) {
            case 'CLUBS':
                return 'Clubs';
            case 'DIAMONDS':
                return 'Diamonds';
            case 'HEARTS':
                return 'Hearts';
            case 'SPADES':
                return 'Spades';
        }
    }

    private static getTypeName(type: PokDeng.CardType) {
        switch (type) {
            case 'KING':
                return 'King';
            case 'QUEEN':
                return 'Queen';
            case 'JACK':
                return 'Jack';
            case 'ACE':
                return 'Ace';
            default:
                return scoreMapper[type].toString();
        }
    }
}