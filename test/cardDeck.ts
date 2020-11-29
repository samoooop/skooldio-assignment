import { CardDeck } from "../src/model/cardDeck";

test('Created deck must contains 52 cards', () => {
    const deck = new CardDeck();
    expect(deck.size).toBe(52);
});
test('Deck.deal() without paramter should return array of one card and Deck.size should be reduced by 1.', () => {
    const deck = new CardDeck();
    const cards = deck.deal();
    expect(Array.isArray(cards)).toBe(true);
    expect(cards.length).toBe(1);
    expect(deck.size).toBe(51);
});
test('Deck.deal() with 3 as parameter should return array of 3 cards and Deck.size should be reduced by 3.', () => {
    const deck = new CardDeck();
    const cards = deck.deal(3);
    expect(Array.isArray(cards)).toBe(true);
    expect(cards.length).toBe(3);
    expect(deck.size).toBe(49);
});