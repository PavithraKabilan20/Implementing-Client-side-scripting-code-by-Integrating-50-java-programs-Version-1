function firsteven(){
		
		let n=parseInt(document.getElementById("number").value);
		
		let i=1,ans="",c=0;
		
		while(c<n){
			if(i%2==0){
				ans=ans+i+",";
				c++;
			}
			i++;
		}
		
		document.getElementById("answer").textContent=`Answer:${ans}`;
	}