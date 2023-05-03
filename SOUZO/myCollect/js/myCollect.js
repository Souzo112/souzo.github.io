$(".seemoreBtn").click(function(){
    var x =  $(".seemoreFiles").siblings(".allFiles")
    if( x.css("display") == "none" ){
        x.slideDown(); 
    }else{
        x.slideUp();
    };
});