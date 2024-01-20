function check(){
		let num=parseInt(document.getElementById("num1").value);
		let c=0;
		
		if(num>c){
			document.getElementById("nop").innerHTML="Positive";
		}
		else if(num<c){
			document.getElementById("nop").innerHTML="Negative";
		}
		else{
			document.getElementById("nop").innerHTML="Neither positive nor negative";
		}
	}