class Media {
  constructor (){
    this._title = title;
    this._isCheckedOut = isChekedOut;
    this._ratings = ratings;
    
  }
  get title {
    return  this._title;
  }
  get isChekedOut {
    return this._isCheckedOut;
  }
  get ratings {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isChekedOut = value;
  }




/*
Debajo de sus captadores, cree un método llamado toggleCheckOutStatusque cambie el valor guardado en la _isCheckedOutpropiedad.

Si el valor es true, cámbielo a false. Si el valor es false, cámbielo a verdadero. */



  toggleCheckOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
  }


/* 
Debajo .toggleCheckOutStatus(), crea un método llamado getAverageRating. Devuelve el valor promedio de la ratingsmatriz.

Utilice el método de reducción para encontrar la suma de la ratingsmatriz. Divida esta suma por la longitud de la ratingsmatriz y devuelva el resultado.

Eche un vistazo a la pista si necesita ayuda con la sintaxis para encontrar la suma de la ratingsmatriz. */

   getAverageRating () {
     let ratingsSum = this.ratings.reduce((accumulator, ratings) => accumulator + ratings);
        return ratingsSum / this.ratings.length;
   }




/* Agreguemos un método llamado addRatingque acepta un argumento y lo usa .push()para agregarlo al final de la ratingsmatriz. */


  addRating(value) {
    this.ratings.push(value);
  }
}





class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  
  
  /* Dado que nuestra Bookclase hereda Medialas propiedades y los captadores, solo necesitamos crear dos captadores nuevos en la Bookclase.

Agregue dos nuevos captadores a la Bookclase. Cada captador debe devolver el valor guardado a su propiedad coincidente.*/
  
  
    get author () {
       return this._author;
  }

    get pages () {
      return this._pages; 
   }

}







class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director () {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }
  
}
    



/* 
Cree una Bookinstancia con las siguientes propiedades:

Autor: 'Bill Bryson'
Título: 'A Short History of Nearly Everything'
páginas: 544
Guarde la instancia en una variable constante denominada historyOfEverything.*/


const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverythings.isCheckedOut);

historyOfEverything.addRatings(4);
historyOfEverything.addRatings(5);
historyOfEverything.addRatings(5);

console.log(historyOfEverything.getAverageRatings());


/* Cree una Movieinstancia con las siguientes propiedades:

Director: 'Jan de Bont'
Título: 'Speed'
Tiempo de ejecución: 116
Guarde la instancia en una variable constante denominada speed.*/



const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRatings(1);
speed.addRatings(1);
speed.addRatings(5);
console.log(speed.getAverageRatings());
    
    
    
    
    
    
    
    
    
    
    
