function divisor(){
		
		let n1=parseInt(document.getElementById("num1").value);
		let n2=parseInt(document.getElementById("num2").value);
		let n=parseInt(document.getElementById("number").value);
		
		let i,j;
		let ans="";
		
		for(i=n1;i<n2;i++){
			if(i%n==0){
				ans=ans+i+",";
			}
		}
		document.getElementById("answer").textContent=`The numbers divisible by n from n1 to n2 are: ${ans}`;
	}