window.onload = hacking;
function hacking(){
	var c = document.getElementById("umarcbs");
	c.height = window.innerHeight; 
	c.width = window.innerWidth;  

	
	var letraTam=12;
	var columnas=c.width/letraTam; 
	
	var letras=[];
	for(var i=0; i<columnas;i++){
		letras[i]=1;
	}
	contexto= c.getContext('2d');

	function dibujar(){
		contexto.fillStyle="rgba(0,0,0,.05)";
		contexto.fillRect(0,0,c.width,c.height);

		contexto.fillStyle= "#20C20E";
		contexto.font= letraTam+"px digital-7";

		for(var i=0;i<letras.length;i++){
			text=elegirTexto();
			Texto=text.split("");
			contexto.fillText(Texto,i*letraTam, letras[i]*letraTam);
			

			if(letras[i]*letraTam > c.height && Math.random()>0.975){
				letras[i]=0;
			}
			letras[i]++;

		}

	}

		function elegirTexto(){
		var numTexto=Math.floor((Math.random()*94)+33);
				return String.fromCharCode(parseInt(numTexto));
			}
	setInterval(dibujar,60);

}