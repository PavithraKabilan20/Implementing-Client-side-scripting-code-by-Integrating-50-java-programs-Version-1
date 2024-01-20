function Calculate(){
		
		let value=document.getElementById('Operation').value;
		let a=parseFloat(document.getElementById('num1').value);
		let b=parseFloat(document.getElementById('num2').value);
		let result;
		
		switch(value){
		case 'addition':
			result=a+b;
			break;
			
		case 'subtraction':
			result=a-b;
			break;
			
		case 'multiplication':
			result=a*b;
			break;
			
		case 'division':
			result=a/b;
			break;
		}
		
		document.getElementById('Answer').textContent=`Answer:${result}`;
	}