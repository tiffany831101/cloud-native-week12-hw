import { Potter } from './potter';
describe('Harry Potter book kata', function() {


    // test for a single book to check if return correct value
    test('... a single book should cost 8 EUR', function() {
        const potter = new Potter();

        // pick a random number from 1 to 5
        const number = Math.floor(Math.random() * 5) + 1;
        potter.addToBasket(potter.createNewBook(number));
        expect(potter.countTotal()).toBe(8);
    });

    test('...the createNewBook method should return a book with expected number', function() {
        const potter = new Potter();
        const number = 2;
        expect(potter.createNewBook(number)).toMatchObject({ number });
    });

    test('...the addToBasket method should add books to the shopping basket', function() {
        const potter = new Potter();
        const book = potter.createNewBook(1);
        potter.addToBasket(book);
        expect(potter.basket).toHaveLength(1);
    });

    test('...x number of the same books should result in base price * x', function() {
        const potter = new Potter();
        const book = potter.createNewBook(1);
        potter.addToBasket(book);
        potter.addToBasket(book);
        expect(potter.countTotal()).toBe(16);
        potter.addToBasket(book);
        expect(potter.countTotal()).toBe(24);
    });


    // check if the result is correct of buying different books
    test('...buying two different books results in a 5% discount', function() {
        const potter = new Potter();
        const book = potter.createNewBook(1);
        const book2 = potter.createNewBook(3);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        expect(potter.countTotal()).toBe(15.2);
    });

    test('...buying three different books results in a 10% discount', function() {
        const potter = new Potter();
        const book = potter.createNewBook(1);
        const book2 = potter.createNewBook(2);
        const book3 = potter.createNewBook(3);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        expect(potter.countTotal()).toBe(21.6);
    });

    test('...buying four different books results in a 20% discount', function() {
        const potter = new Potter();
        const book = potter.createNewBook(1);
        const book2 = potter.createNewBook(2);
        const book3 = potter.createNewBook(3);
        const book4 = potter.createNewBook(4);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        expect(potter.countTotal()).toBe(25.6);
    });

    test('...buying five different books results in a 25% discount', function() {
        const potter = new Potter();
        const book = potter.createNewBook(1);
        const book2 = potter.createNewBook(2);
        const book3 = potter.createNewBook(3);
        const book4 = potter.createNewBook(4);
        const book5 = potter.createNewBook(5);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);
        expect(potter.countTotal()).toBe(30);
    });

    test('...buying five different books and one duplicate', function() {

        const potter = new Potter();
        const book = potter.createNewBook(1);
        const book2 = potter.createNewBook(2);
        const book3 = potter.createNewBook(3);
        const book4 = potter.createNewBook(4);
        const book5 = potter.createNewBook(5);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);
        expect(potter.countTotal()).toBe(38);

    });

    test('...buying two sets of different books', function() {

        const potter = new Potter();
        const book = potter.createNewBook(1);
        const book2 = potter.createNewBook(2);
        const book3 = potter.createNewBook(3);
        const book4 = potter.createNewBook(4);
        const book5 = potter.createNewBook(5);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);
        expect(potter.countTotal()).toBe(45.2);

    });

    test('...buying five different books, and four additional same books', function() {

        const potter = new Potter();
        const book = potter.createNewBook(1);
        const book2 = potter.createNewBook(2);
        const book3 = potter.createNewBook(3);
        const book4 = potter.createNewBook(4);
        const book5 = potter.createNewBook(5);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);
        expect(potter.countTotal()).toBe(62);

    });

    test(`
    2 copies of the first book
    2 copies of the second book
    2 copies of the third book
    1 copy of the fourth book
    1 copy of the fifth book = 51.60`, function() {

        const potter = new Potter();
        const book = potter.createNewBook(1);
        const book2 = potter.createNewBook(2);
        const book3 = potter.createNewBook(3);
        const book4 = potter.createNewBook(4);
        const book5 = potter.createNewBook(5);

        potter.addToBasket(book);
        potter.addToBasket(book);
        potter.addToBasket(book2);
        potter.addToBasket(book2);
        potter.addToBasket(book3);
        potter.addToBasket(book3);
        potter.addToBasket(book4);
        potter.addToBasket(book5);

        expect(potter.countTotal()).toBe(51.60);
    });

});
