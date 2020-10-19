let sangue = document.getElementById('sangue');

let sangues = [document.getElementById('sangue2'),document.getElementById('sangue3'),document.getElementById('sangue4'),
document.getElementById('sangue5'), document.getElementById("sangue6"),document.getElementById("sangue7")];

let legenda = document.getElementById('legenda');

var fases = ["1. In&iacutecio do Ciclo Card&iacuteaco", "2. Di&agravestole", "3. S&iacutestole atrial", "4. Eje&ccedil&atildeo r&agravepida", "5. Eje&ccedil&atildeo lenta"];
var moveBy = 10;
let fotos = ["url('Foto 5.jpg')","url('Foto 1.jpg')","url('Foto 3.jpg')","url('Foto 2.jpg')","url('Foto 4.jpg')"];
var foto = document.getElementById('heart');
const  windowWidth = window.innerWidth - 70;
const  windowHeight = window.innerHeight - 70;
var current = 1;

window.addEventListener('load', () =>{
	sangue.style.position = 'absolute';
	sangue.style.left = 0;
	sangue.style.top = 0;
	
});

window.addEventListener('keydown', (e) => {
	switch(e.key){
		case 'ArrowLeft' :
			if(sangue.style.left >= 0 + 'px'){
			sangue.style.left =  parseInt(sangue.style.left) - moveBy + 'px';
			}
			sangue.style.transform = 'rotate(180deg)';
			
			break;
		case 'ArrowUp' :
			if(sangue.style.top >= 0 + 'px'){
			sangue.style.top = parseInt(sangue.style.top) - moveBy + 'px';
		}
			sangue.style.transform = 'rotate(270deg)';
			
			break;
		case 'ArrowRight' :
		if( parseInt(sangue.style.left) >= windowWidth) break;
			sangue.style.left = parseInt(sangue.style.left) + moveBy + 'px';
			sangue.style.transform = 'rotate(0deg)';
			
			
			break;
		case 'ArrowDown' :
		if(parseInt(sangue.style.top) >= windowHeight) break;
			sangue.style.top = parseInt(sangue.style.top) + moveBy + 'px';
			sangue.style.transform = 'rotate(90deg)';
			
			break;
	}
});

function firstFunc(){
	if (current == 1){
	sangue.style.position = 'absolute';
	sangue.style.left =  40 + 'px';
	sangue.style.top = 130 + 'px';
	foto.style.backgroundImage = "url('Foto 5.jpg')";
	sangues[0].style.left = 130 + 'px';
	sangues[0].style.top = 420 + 'px';
	sangues[1].style.left = 130 + 'px';
	sangues[1].style.top = -10 + 'px';
	sangues[2].style.left = 180 + 'px';
	sangues[2].style.top = 10 + 'px';
	sangues[3].style.left = 360 + 'px';
	sangues[3].style.top = 60 + 'px';
	sangues[4].style.top = 40 + 'px';
	sangues[4].style.left = 90 + 'px';

		}

};
// var move = async ()=>{
// 		 $(sangues[2]).animate({
//       'top' : "140px",
//         'left' : "150px"
//     }, 1100);
// 		 
// 	}
$("#next").click( function(){
    
    switch(current){
	case 1:
	var move =  $(sangues[2]).animate({
      'top' : "270px",
        'left' : "150px"
    }, 1100);
     $(sangues[3]).animate({
      'top' : "140px",
        'left' : "300px"
    }, 1100);
		   $(sangues[4]).animate({
      'top' : "270px",
        'left' : "160px"
    }, 1100);
		    $(sangues[1]).animate({
      'top' : "270px",
        'left' : "130px"
    }, 1100);
		     $(sangues[0]).animate({
      'top' : "265px",
        'left' : "130px"
    }, 1100);
		 
		     $(sangue).animate({
      'top' : "135px",
        'left' : "305px"
    }, 1100);
		

	current++;
	 


	
	
	break;

	case 2:
	var move =  $(sangues[2]).animate({
      'top' : "314px",
        'left' : "240px"
    }, 1100);
     $(sangues[3]).animate({
      'top' : "260px",
        'left' : "300px"
    }, 1100);
		   $(sangues[4]).animate({
      'top' : "310px",
        'left' : "230px"
    }, 1100);
		    $(sangues[1]).animate({
      'top' : "300px",
        'left' : "220px"
    }, 1100);
		     $(sangues[0]).animate({
      'top' : "320px",
        'left' : "210px"
    }, 1100);
		  $(sangues[5]).animate({
      'top' : "260px",
        'left' : "300px"
    }, 1100);		    

    	 $(sangue).animate({
      'top' : "265px",
        'left' : "300px"
    }, 1100);
		
	current++;
	break;
	
	case 3:
	var move =  $(sangues[2]).animate({
      'top' : "119px",
        'left' : "235px"
    }, 1100);
     $(sangues[3]).animate({
      'top' : "90px",
        'left' : "185px"
    }, 1100);
		   $(sangues[4]).animate({
      'top' : "116px",
        'left' : "230px"
    }, 1100);
		    $(sangues[1]).animate({
      'top' : "120px",
        'left' : "235px"
    }, 1100);
		     $(sangues[0]).animate({
      'top' : "120px",
        'left' : "230px"
    }, 1100);
		         $(sangues[5]).animate({
      'top' : "85px",
        'left' : "180px"
    }, 1100);
		     $(sangue).animate({
      'top' : "100px",
        'left' : "187px"
    }, 1100);
		
	current++;
	break;

	case 4:
	var move =  $(sangues[2]).animate({
      'top' : "19px",
        'left' : "435px"
    }, 1100);
     $(sangues[3]).animate({
      'top' : "-110px",
        'left' : "300px"
    }, 1100);
		   $(sangues[4]).animate({
      'top' : "16px",
        'left' : "500px"
    }, 1100);
		  
		     $(sangues[0]).animate({
      'top' : "12px",
        'left' : "400px"
    }, 1100);
		         $(sangues[5]).animate({
      'top' : "-115px",
        'left' : "240px"
    }, 1100);
		     $(sangue).animate({
      'top' : "-115px",
        'left' : "280px"
    }, 1100);
		
		
	current++;
	break;

	case 5:
	alert('Recomece o ciclo');
	
	default:

	break;
	}
$.when( move ).done( function() {
	
    foto.style.backgroundImage = fotos[current -1];
    updateSub(fases[current-1]);
    if(current ==2){
    	  sangues[5].style.left = 310 + "px";
		   sangues[5].style.top = 139 + "px";
    }
    if (current == 5 ){
    	sangues[1].style.left = 10 + "px";
		sangues[1].style.top = 110 + "px";
    }

} );
    
    
});


function thirdFunc(){
  switch(current){
  	case 2:
  	
  	var move =  $(sangues[2]).animate({
      'top' : "10px",
        'left' : "180px"
    }, 1100);
     $(sangues[3]).animate({
      'top' : "120px",
        'left' : "420px"
    }, 1100);
		   $(sangues[4]).animate({
      'top' : "40px",
        'left' : "90px"
    }, 1100);
		    $(sangues[1]).animate({
      'top' : "-10px",
        'left' : "130px"
    }, 1100);
		     $(sangues[0]).animate({
      'top' : "420px",
        'left' : "130px"
    }, 1100);
		 
		     $(sangue).animate({
      'top' : "140px",
        'left' : "440px"
    }, 1100);

		     $.when( move ).done( function() {
	
    foto.style.backgroundImage = fotos[current - 1];
    updateSub(fases[current-1]);
  		if(current == 1){
    	  sangues[5].style.left = 40 + "px";
		   sangues[5].style.top = 140 + "px";
    }

	} );

	current--;
	break;

	case 3:
	var move =  $(sangues[2]).animate({
      'top' : "270px",
        'left' : "150px"
    }, 1100);
     $(sangues[3]).animate({
      'top' : "140px",
        'left' : "300px"
    }, 1100);
		   $(sangues[4]).animate({
      'top' : "270px",
        'left' : "160px"
    }, 1100);
		    $(sangues[1]).animate({
      'top' : "270px",
        'left' : "130px"
    }, 1100);
		     $(sangues[0]).animate({
      'top' : "265px",
        'left' : "130px"
    }, 1100);
		 
		     $(sangue).animate({
      'top' : "135px",
        'left' : "305px"
    }, 1100);
		
	$.when( move ).done( function() {
	
    foto.style.backgroundImage = fotos[current - 1];
  	updateSub(fases[current-1]);
  	 if (current == 2 ){
    	  sangues[5].style.left = 310 + "px";
		   sangues[5].style.top = 136 + "px";
    }
	} );

	current--;
	break;

	case 4:
	var move =  $(sangues[2]).animate({
      'top' : "314px",
        'left' : "240px"
    }, 1100);
     $(sangues[3]).animate({
      'top' : "260px",
        'left' : "300px"
    }, 1100);
		   $(sangues[4]).animate({
      'top' : "310px",
        'left' : "230px"
    }, 1100);
		    $(sangues[1]).animate({
      'top' : "300px",
        'left' : "220px"
    }, 1100);
		     $(sangues[0]).animate({
      'top' : "320px",
        'left' : "210px"
    }, 1100);
		  $(sangues[5]).animate({
      'top' : "260px",
        'left' : "300px"
    }, 1100);		    

    	 $(sangue).animate({
      'top' : "265px",
        'left' : "300px"
    }, 1100);

    	 $.when( move ).done( function() {
	
    foto.style.backgroundImage = fotos[current - 1];
    updateSub(fases[current-1]);
  
	} );
	current--;

	break;

	case 5:
	var move =  $(sangues[2]).animate({
      'top' : "119px",
        'left' : "235px"
    }, 1100);
     $(sangues[3]).animate({
      'top' : "90px",
        'left' : "185px"
    }, 1100);
		   $(sangues[4]).animate({
      'top' : "116px",
        'left' : "230px"
    }, 1100);
		    $(sangues[1]).animate({
      'top' : "120px",
        'left' : "235px"
    }, 1100);
		     $(sangues[0]).animate({
      'top' : "120px",
        'left' : "230px"
    }, 1100);
		         $(sangues[5]).animate({
      'top' : "85px",
        'left' : "180px"
    }, 1100);
		     $(sangue).animate({
      'top' : "100px",
        'left' : "187px"
    }, 1100);

		      $.when( move ).done( function() {
	
    foto.style.backgroundImage = fotos[current - 1];
  	updateSub(fases[current-1]);
	} );	

	current--;

	default:

	break;
	};
};

function fourthFunc(){
	sangue.style.position = 'absolute';
	sangue.style.left =440 + 'px';
	sangue.style.top = 140 + 'px';
	foto.style.backgroundImage = "url('Foto 5.jpg')";
	sangues[0].style.left = 130 + 'px';
	sangues[0].style.top = 420 + 'px';
	sangues[1].style.left = 130 + 'px';
	sangues[1].style.top = -10 + 'px';
	sangues[2].style.left = 180 + 'px';
	sangues[2].style.top = 10 + 'px';
	sangues[3].style.left = 420 + 'px';
	sangues[3].style.top = 120 + 'px';
	sangues[4].style.top = 40 + 'px';
	sangues[4].style.left = 90 + 'px';
	sangues[5].style.left = 40 + 'px';
	sangues[5].style.top = 140 + 'px';
	updateSub(fases[0]);
	current = 1;
	
};

window.addEventListener('load', () =>{
	sangue.style.position = 'absolute';
	sangue.style.left = 440 + 'px';
	sangue.style.top = 140 + 'px';
	foto.style.backgroundImage = "url('Foto 5.jpg')";
	sangues[0].style.left = 130 + 'px';
	sangues[0].style.top = 420 + 'px';
	sangues[1].style.left = 130 + 'px';
	sangues[1].style.top = -10 + 'px';
	sangues[2].style.left = 180 + 'px';
	sangues[2].style.top = 10 + 'px';
	sangues[3].style.left = 420 + 'px';
	sangues[3].style.top = 120 + 'px';
	sangues[4].style.top = 20 + 'px';
	sangues[4].style.left = 80 + 'px';
	sangues[5].style.left = 40 + 'px';
	sangues[5].style.top = 140 + 'px';
	updateSub(fases[0]);
	current = 1;
});

function updateSub(content){
	legenda.innerHTML = content;
}