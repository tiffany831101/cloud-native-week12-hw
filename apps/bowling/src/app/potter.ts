export class Potter {
    // discount types
    discounts = [0, 0.05, 0.1, 0.2, 0.25];

    // price per books
    price = 8;

    // basket arr for books
    basket: Book[] = [];

    countTotal(): number {

        let totalCost = 0;
        const qtyOfPacksBySize = this.sortBooksInPacks(
            this.sortRepeatedBooksByAmount()
        );

        for (let pack = 0; pack < qtyOfPacksBySize.length; pack++) {
            if (qtyOfPacksBySize[pack] > 0) {
                const numberOfBooksInPack = pack + 1;

                const subtotalCost = numberOfBooksInPack * this.price;


                // count how many different books
                const applicableDiscount = this.discounts[pack];

                // actual cost for packs
                const discountedPriceForPack =
                    subtotalCost - subtotalCost * applicableDiscount;

                // add total 
                totalCost += qtyOfPacksBySize[pack] * discountedPriceForPack;
            }
        }
        return totalCost;
    }

    sortBooksInPacks(repeatedBooksByAmount: number[]): number[] {
        const packs: number[] = new Array(this.discounts.length + 1).fill(0);

        for (let amt = 0; amt < repeatedBooksByAmount.length; amt++) {
            // if this number of book is selected
            if (repeatedBooksByAmount[amt] > 0) {
                
                packs[amt] = repeatedBooksByAmount[amt];
                repeatedBooksByAmount = repeatedBooksByAmount.map((q) => {
                    return q > 0 ? q - repeatedBooksByAmount[amt] : q;
                });
            }
        }
        return packs.reverse();
    }

    // count repeated book amount and sort it
    sortRepeatedBooksByAmount(): number[] {
        const countBookAmtByNumber: number[] = new Array(
            this.discounts.length + 1
        ).fill(0);

        this.basket.forEach((b) => {
            countBookAmtByNumber[b.number] += 1;
        });
        return countBookAmtByNumber.sort();
    }
    
    // create a object of a book
    createNewBook(bookNumber: number): Book {
        return new Book(bookNumber);
    }


    // add a new book to basket array
    addToBasket(book: Book) {
        this.basket.push(book);
    }
}

class Book {
    constructor(public number: number) {}
}