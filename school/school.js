$(function() {
    
    var left=document.getElementById("angleleft");
    var right=document.getElementById("angleright");
	
    var page1 = $(".page1");
    var page2 = $(".page2");

	var title=$("opt");
    left.addEventListener("click",add);
    right.addEventListener("click",add);
    var num=1;

	$("#pic > div> div").hide();
	$("#pic > img").hide();
    $("#page > div").hide();
    page1.show();
	pic1.show();
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
				$('#opt').html("<h1>中央創遊社</h1>");
				$("#pic > div").hide();
				$("#pic > img").hide();
                $("#page > div").hide();
                page1.show();

			}
			if(num==2)
			{	
				$('#opt').html("<h1>中央夢工廠</h1>");
                $("#page > div").hide();
				$("#pic > img").hide();
				$("#pic > div").hide();
				page2.show();
	;
				}
        }

    
})