var v = new Array();
v[0] = "recursos/video1.mp4";
v[1] = "recursos/video2.mp4";
v[2] = "recursos/video3.mp4";
v[3] = "recursos/video4.mp4";
v[4] = "recursos/video5.mp4";
v[5] = "recursos/video6.mp4";

document.getElementById('video').style.display='block';
document.getElementById('video2').style.display='none';

var contador = 0;

function ocultarBotones(miArray,video){
	miArray.forEach(element => document.getElementById(element).style.display='none');
	video= video+1;
	if (document.getElementById('video').style.display == 'block') {
		document.getElementById('video').style.display ='none';
		document.getElementById('video').setAttribute("src", v[video]);
	  	document.getElementById('video').load();
  		document.getElementById('video2').style.display='block';
  		document.getElementById('video2').play();
	} else{
		document.getElementById('video2').style.display = 'none';
		document.getElementById('video2').setAttribute("src", v[video]);
	  	document.getElementById('video2').load();
  		document.getElementById('video').style.display='block';
  		document.getElementById('video').play();
	}

	if (video == 6){
		document.getElementById('video2').addEventListener('ended',myHandler,false);
    	function myHandler(e) {
    		alert("(Hacer algo)");
   		}
   	};
	this.contador = this.contador + 1;

}

function mostrarBotones(){

	switch(this.contador){

		case 0:
			document.getElementById('q1a1').style.display='block';
			document.getElementById('q1a2').style.display='block';	 
			document.getElementById('q1a3').style.display='block';
			document.getElementById('continuarDatos').style.display='block';	 
			break;

		case 1:
			document.getElementById('q2a1').style.display='block';
			document.getElementById('q2a2').style.display='block';	 
			document.getElementById('q2a3').style.display='block'; 
			document.getElementById('q2a4').style.display='block'; 
			document.getElementById('q2a5').style.display='block'; 
			document.getElementById('q2a6').style.display='block'; 
			break;	

		case 2:
			document.getElementById('q3a1').style.display='block';
			document.getElementById('q3a2').style.display='block';	 
			document.getElementById('q3a3').style.display='block'; 
			document.getElementById('q3a4').style.display='block'; 
			document.getElementById('q3a5').style.display='block'; 
			document.getElementById('q3a6').style.display='block'; 
			document.getElementById('q3a7').style.display='block'; 
			document.getElementById('q3a8').style.display='block'; 			
			document.getElementById('continuarDistritos').style.display='block'; 
			break;	

		case 3:
			document.getElementById('q4a1').style.display='block';
			document.getElementById('q4a2').style.display='block';	 
			document.getElementById('q4a3').style.display='block';
			document.getElementById('q4a4').style.display='block'; 			 
			break;	

		case 4:
			document.getElementById('ansPeor').style.display='block';
			document.getElementById('submit').style.display='block'; 
			break;	

	}

}

//alternan muted
function checkMuted(){
	if(document.getElementById('musica').muted == true){
		document.getElementById('musica').muted = false;
		document.getElementById('swapMuted').firstChild.data = 'Mute';		
	} else{
		document.getElementById('musica').muted = true;
		document.getElementById('swapMuted').firstChild.data = 'Unmute';				
	}
}

//mostrar cuando carga video
document.getElementById('video').oncanplay = function(){
    document.getElementById('btnPlayPause').style.display='block';
    document.getElementById('etiqueta').style.display='block';
    document.getElementById('swapMuted').style.display='inline-block';    
}


//empezar los videos y la musica
function empezar(){
   	document.getElementById('video').play();
    document.getElementById('btnPlayPause').style.display='none';
    document.getElementById('etiqueta').style.display='none';
    document.getElementById('musica').play();
    var vol = 0.1;
  	document.getElementById('musica').volume = vol;
  	var interval = 400; // 200ms interval
  	var fadeout = setInterval(
  		function() {
   			if (vol < 0.3) {
  	  			vol += 0.01;
   	  			document.getElementById('musica').volume= vol;
    		}
    		else {
      			clearInterval(fadeout);
   			}
  		}, interval);
};

//fecha maxima de nacimiento
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById('q1a3').setAttribute("max", today);


//enviar y administrar distritos
var q3a1 = false;
var q3a2 = false;
var q3a3 = false;
var q3a4 = false;
var q3a5 = false;
var q3a6 = false;
var q3a7 = false;
var q3a8 = false;

function checkear(bool,id){
	if(bool==true){
		document.getElementById(id).style.background='#000';
	} else{
		document.getElementById(id).style.background='#2292A4';
	}
}

//verifica si existe distrito otros
function verificaCaracteres(){
	if (document.getElementById('q3a8').value != '') {
		q3a8 = true;
	} else{
		q3a8 = false;
	}
	checkear(q3a8,'q3a8');
}

function seleccionado(id){
	if(id=="q3a1"){
		q3a1 = !q3a1;
		checkear(q3a1,'q3a1');
	} else if(id=="q3a2"){
		q3a2 = !q3a2;
		checkear(q3a2,'q3a2');
	} else if(id=="q3a3"){
		q3a3 = !q3a3;
		checkear(q3a3,'q3a3');
	} else if(id=="q3a4"){
		q3a4 = !q3a4;
		checkear(q3a4,'q3a4');
	} else if(id=="q3a5"){
		q3a5 = !q3a5;
		checkear(q3a5,'q3a5');
	} else if(id=="q3a6"){
		q3a6 = !q3a6;
		checkear(q3a6,'q3a6');
	} else if(id=="q3a7"){
		q3a7 = !q3a7;
		checkear(q3a7,'q3a7');
	}
}

//ordena distritos para envio
function agruparDistritos(){
	var respuestaDistritos = '';
	if(q3a1==true){
		respuestaDistritos += document.getElementById('q3a1').value + ', ';
	}
	if(q3a2==true){
		respuestaDistritos += document.getElementById('q3a2').value + ', ';
	}
	if(q3a3==true){
		respuestaDistritos += document.getElementById('q3a3').value + ', ';
	}
	if(q3a4==true){
		respuestaDistritos += document.getElementById('q3a4').value + ', ';
	}
	if(q3a5==true){
		respuestaDistritos += document.getElementById('q3a5').value + ', ';
	}
	if(q3a6==true){
		respuestaDistritos += document.getElementById('q3a6').value + ', ';
	}
	if(q3a7==true){
		respuestaDistritos += document.getElementById('q3a7').value + ', ';
	}
	if(q3a8==true){
		respuestaDistritos += document.getElementById('q3a8').value;
	}
	if (respuestaDistritos.charAt(respuestaDistritos.length - 2) == ',') {
  		respuestaDistritos = respuestaDistritos.substr(0, respuestaDistritos.length - 2);
	}
	document.getElementById('ansDistritos').value = respuestaDistritos;
	document.getElementById('ansDistritos').click();
}

//envio de
const scriptURL = 'https://script.google.com/macros/s/AKfycby6ocsmOCnYdMjGLCNH2W4wPDwE7iOkQYXu5XFXXb07JKOnC6tKnDey82jCMPWL0sw/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
 	e.preventDefault()
    fetch(scriptURL, { method: 'POST' , body: new FormData(form)})
       .then(response => document.getElementById('gracias').style.display='block')
       .catch(error => console.error('Error!', error.message))
        })