import { Movie } from './Movie.Class.js'; //for we need to use functinality of Movie Class here so we need to import it here.

export class BuyableMovie extends Movie {//because of extends the Movie class constructor called. now from here it goes directly to movie class. 
    // constructor ( name, genre, year, price ) {
    //     this.name = name;
    //     this.genre = genre;
    //     this.year = year;
    //     this.price = price; // Set a price now, too.
    // }
    get getPrice () {
        return this.price;
    }
    set setPrice ( price ) {
        this.price = parseFloat( price );
    }
}