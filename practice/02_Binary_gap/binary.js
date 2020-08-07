// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function number_solution(N) {
    
    var B=[];

    var i=0,Max=0,count=0;

	

}



function toBinary(){
	alert("1111");
    var N=parseInt(document.querySelector("#Decimal").value );
    var result1=document.querySelector('#result1');
    var result2=document.querySelector('#result2');
    var result3=document.querySelector('#result3');
    var ss=""
    var B=[];
    var i=0,Max=0,count=0;
    var IsBinarygap=false;
    //result1
	while( Math.floor(N/2) >0 )
    {
        B[i]=N%2;
        N=Math.floor(N/2);
        i=i+1;  
    }
    B[i]=N;
    for(var i=B.length-1;i>=0;i--)
	{
		ss=ss+B[i].toString();
	}
    result1.innerHTML="二位元:"+ss;
     //result1
    
    for(var i=B.length-1-1;i>0;i--)
    {    
     if(B[i]==0)
        {
            count=count+1;
			if(B[i-1]==0 && i==1)
			{count=0}
			
            if(B[i-1]==1) 
            {
            if(count>Max){Max=count;}
            count=0;   
            }
        }
        if(Max!=0) {IsBinarygap=true;}
        
    }
    if(IsBinarygap){result2.innerHTML="是否有binary gap:是"}
    else{result2.innerHTML="是否有binary gap:不是"}

    result3.innerHTML="binary gap中最多幾個零連在一起(無binary gap為零):"+Max;


}

