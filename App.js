// idiaghe osaigbovo
//card validation 
//sleepless night

function checkCard(input) {		
	var sum = 0;
	var numdigits = input.length;
	var parity = numdigits % 2;
	for(var i = 0; i < numdigits; i++){
		var digit = parseInt(input.charAt(i))
		if (i % 2 == parity) digit *= 2;
		if (digit > 9) digit -= 9;
		sum += digit;
	}
	return (sum % 10) == 0;
}


function numberCheck(number){

  if(number.match(/\-|\s/g,))
        {
      		number = number.replace(/\-|\s/g, '');       		
      		if(number.length<16||number.length>16){
      			var text = "Incorrect card entry!";
        		document.getElementById("message").innerHTML=text;
        		document.getElementById("message").style.display = "block";
        		document.getElementById("message").style.color = "red";
        		document.getElementById("message").style.border = "solid red 1px";
      		} 
      		else{
      			document.getElementById("message").style.display = "none";

      			return number;
      		}   		
    }
    else if(number.length<16||number.length>16){
      		var text = "Card number inapprorate!";
      		document.getElementById("message").style.width ="250px";
        	document.getElementById("message").innerHTML=text;
        	document.getElementById("message").style.display = "block"; 
        	document.getElementById("message").style.color = "red";
        	document.getElementById("message").style.border = "solid red 1px";
        } 
        else{        	
        	document.getElementById("message").style.display = "none";        	
        	return number;
        }
}
function validate() {
	var input = document.getElementById("input_text").value;
	var test = (checkCard(numberCheck(input)));
	if(test==true){
			document.getElementById("add").addEventListener("click",addItem());
			document.getElementById("message").style.width = "250px";
        	document.getElementById("message").innerHTML= "Card is valid!";
        	document.getElementById("message").style.display = "block";
        	document.getElementById("message").style.color = "green";
        	document.getElementById("message").style.border = "solid green 1px";        	
        	
	}
	else{
			document.getElementById("message").style.width ="250px";
        	document.getElementById("message").innerHTML="Card is invalid!";
        	document.getElementById("message").style.display = "block"; 
        	document.getElementById("message").style.color = "red";
        	document.getElementById("message").style.border = "solid red 1px";
	}
}

function addItem(input){
			var input = document.getElementById("input_text").value;
			var add = numberCheck(input);
			var validated_card = document.getElementById('validated_card');
        	var newItem = document.createElement('li');
			newItem.innerText = add;			
			validated_card.appendChild(newItem);

		
}