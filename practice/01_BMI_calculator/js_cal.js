function bmi(height,weight){
	var w=parseInt(weight);
	var h=parseInt(height)/100;
	var bmi_var= ( w/(h*h) ).toFixed(2) 
	if( isNaN(bmi_var) )
	return(0);
	else
	{ return( bmi_var );  }
}

function calculaterBMI(){
	    
		//var height=document.getElementById
		var height=document.querySelector('#bodyHeight').value;
		var weight=document.querySelector('#bodyWeight').value;
		var result=document.querySelector('#resultText');
		var health_result=document.querySelector('#health_result');
		console.log(  bmi( height,weight ) );
		result.innerHTML=bmi( height,weight ) ;
		health_result.innerHTML=BMI_range( bmi( height,weight ) );
}

function BMI_range(bmi){	
	if(bmi>18.5 && bmi<24.5)
	{
		return("your bmi is in noral range"); }
		
	else if(bmi>24.5)
	{
		return("you need to more sport,you bmi value is out of range");
	}
	 else
	{
		return("you are so thin!!!!");
			
	}
}