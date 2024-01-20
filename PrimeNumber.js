function prime(){
		let n1=parseInt(document.getElementById("num1").value);
		let n2=parseInt(document.getElementById("num2").value);
		
		let i,j,c;	
		let ans="";
		
		for(i=n1;i<n2;i++){
			c=0;
			for(j=1;j<=i;j++){
				
				if(i%j==0){
					c++;
				}
			}
			if(c==2){
				ans=ans+i+",";
			}
		}
		document.getElementById("Answer").textContent=`The list of prime numbers from the given range are:${ans}`;
		
	}