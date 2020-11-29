import { Card } from "../src/model/card";

test('Clubs King Card.getName() should return Clubs-King', () => {
    const c = new Card('CLUBS', 'KING');
    expect(c.getName()).toBe('Clubs-King');
});

test('Clubs King Card.getPokDengScore() should return 0', () => {
    const c = new Card('CLUBS', 'KING');
    expect(c.getPokDengScore()).toBe(0);
});

test('Spades-8 Card.getName() should return Spades-8', () => {
    const c = new Card('SPADES', 'EIGHT');
    expect(c.getPokDengScore()).toBe(8);
});

test('Spades-8 Card.getPokDengScore() should return 8', () => {
    const c = new Card('CLUBS', 'EIGHT');
    expect(c.getPokDengScore()).toBe(8);
});