let num=5;
let output = '';
for(let i=0;i<num;i++){
    for(let j=num-1;j>i;j--){
	output += ' '
    }
		    
    for(let j=0;j<2*i+1;j++){
	output += '*';
    }
    output += '\n'
}
	
for(let i=1;i<num;i++){
   for(let j=0;j<i;j++){
	 output += ' '
   }
	
    for(let j=2*num-1;j>2*i;j--){
         output += '*'
    }
    output += '\n'
}
console.log(output);
