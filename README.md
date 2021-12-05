# biblioteca
Construir una biblioteca
Books-'N-Stuff incluye tres tipos diferentes de medios: libros, CD y películas. En este proyecto se creará una clase padre llamado Mediacon tres subclases: Book, Movie, y CD. Estas tres subclases tienen las siguientes propiedades y métodos:

Libro
Propiedades : author(cadena), title(cadena), pages(número), isCheckedOut(booleano, inicialmente false) y ratings(matriz, inicialmente vacía).
Getters : todas las propiedades tienen un getter
Métodos : .getAverageRating(), .toggleCheckOutStatus()y.addRating()


Película
Propiedades : director(cadena), title(cadena), runTime(número), isCheckedOut(booleano, inicialmente false) y ratings(matriz, inicialmente vacía)
Getters : todas las propiedades tienen un getter
Métodos : .getAverageRating(), .toggleCheckOutStatus()y.addRating()
CD


Propiedades : artist(cadena), title(cadena), isCheckedOut(booleano, inicialmente false) y ratings(matriz, inicialmente vacía), songs(matriz de cadenas)
Getters : todas las propiedades tienen un getter
Métodos : .getAverageRating(), .toggleCheckOutStatus()y.addRating()
