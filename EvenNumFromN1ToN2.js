function even(){
		let n1=parseInt(document.getElementById("num1").value);
		let n2=parseInt(document.getElementById("num2").value);
		
		let i,j,ans="";
		for(i=n1;i<n2;i++){
			
			if(i%2==0){
				ans=ans+i+",";
			}
			
		}
		document.getElementById("Answer").textContent=`The even numbers from n1 to n2 are: ${ans}`;
		
	}