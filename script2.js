function generate(reto){
	var reto= ["Page 22 challenge: Consiste en abrir un libro de tu elección en la página 22 y plasmar el primer parrafo en un dibujo, escrito diferente, etc...", "Black and White challenge: Consiste en poner la pantalla de tu computadora en blanco y negro y hacer un dibujo con esa gama de colores, al terminar, mira que tan colorido es tu personaje devolviendo los colores a la normalidad", "Cartoon Network pallete challenge: Este reto es en dibujar a tu personaje o crear uno nuevo con esta paleta de colores, los cuales son conocidos como CMYK, o sea, cian, magenta, amarillo y nergo, pero en este reto puedes usar también el color blanco", "Random colors challenge: Usa una ruleta de colores aleatoria y escogiendo una cantidad limitada de colores aleatorios, crea un personaje", "Draw this again challenge: Consiste en redibujar un dibujo viejo que tengas, así podrás ver lo mucho que has avanzado en tu estilo personal", "Diferent art style challenge: Dibuja a tu personaje o a ti mismo en distintos estilos de dibujo, los más comun son el estilo de: hora de aventura, Tim Burton, las chicas super poderosas, Gravity Falls, Disney, etc.."];

	var rand_reto = Math.floor(Math.random()*reto.length);

	document.getElementById('resultreto').innerHTML = "<h1>Te retamos a que hagas el:</h1><div class='alert alert-success'><h2>"+reto[rand_reto]+".</h2></div>";
}
