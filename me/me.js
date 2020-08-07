$(function() {
    
    var left=document.getElementById("angleleft");
    var right=document.getElementById("angleright");
	
    var page1 = $(".page1");
    var page2 = $(".page2");
	
	var title=$("opt");
    left.addEventListener("click",add);
    right.addEventListener("click",add);
    var num=1;
	
    $("#page > div").hide();
    page1.show();
    function add()
        {	
		
            console.log(num);
            if(this.id=="angleright")
            {
                if (num<2)
                {num=num+1;}

                           }
            if(this.id=="angleleft")
            {
                if (num>1)
                {num=num-1;}
            }
            
			if(num==1)
			{
				$('#opt').html("<h1>自我介紹</h1>");
                $("#page > div").hide();
                page1.show();
			}
			if(num==2)
			{	
				$('#opt').html("<h1>學校與技術</h1>");
                $("#page > div").hide();
				page2.show();
				}
        }

    
})