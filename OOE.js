function func(){
			let number=parseInt(document.getElementById("num").value);
			
			if(number<0){
				document.getElementById("ore").textContent=`Invalid Input`;
			}
			else if(number%2==0){
				document.getElementById("ore").textContent=`The given number is even`;
			}
			else{
				document.getElementById("ore").textContent=`The given number is odd`;
			}
		}