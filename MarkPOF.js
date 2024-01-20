function mark(){
		let mark=parseInt(document.getElementById("num").value);
		
		if(mark>=50){
			document.getElementById("mark").textContent=`The given mark is pass`;
		}
		else{
			document.getElementById("mark").textContent=`The given mark is fail`;
		}
	}