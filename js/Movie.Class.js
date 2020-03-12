/**
* Classes.
* *** Note we're EXPORTing it.
*/
export class Movie {
   constructor( name, genre, year ) { // We can use the constructor method to set up our properties. When we make a new Movie (object), we can pass in arguments this way!
       this.name = name;
       this.genre = genre;
       this.year = year;
   }

   //getter setter for name property
   get getName() { // How we retrieve the property. A GETTER.
       return this.name;
   }
   set setName( name ) { // How we store a new property value. A SETTER.
       if ( typeof name === 'string' ) {
           this.name = name;
       } else {
           this.name = name.toString();
       }
   }

   //getter setter for genre property
   get getGenre(){
       return this.genre;
   }
   set setGenre(genre){
       if(typeof genre === "string"){
           this.genre = genre;
       } else {
           this.genre = genre.toString();
       }
   }

   //getter setter for year property
   get getYear() {
       return 'y'+this.year;
   }
   set setYear( year ) {
       this.year = Number( year );
   }
   
   showPoster() { // This is a method! We can name them as we'd like.
       const info = `
           MOVIE INFO
           ==========
           Name:  ${this.name}
           Genre: ${this.genre}
           Year:  ${this.year}
       `;
       return info;
   }
}
