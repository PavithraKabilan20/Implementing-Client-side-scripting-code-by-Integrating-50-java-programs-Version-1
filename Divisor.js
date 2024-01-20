function divisor(){
		let n=parseInt(document.getElementById("num").value);
		let i;
		let ans="";
		for(i=1;i<n;i++){
			if(n%i==0){
				ans=ans+i+",";
				document.write=i;
			}
		}
		
		document.getElementById("divisor").textContent=`The divisors for the given number are:${ans}`;
		
	}