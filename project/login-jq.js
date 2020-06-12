$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('outline','none')
        $(this).css('border','none')
        $(this).css('border-bottom','1px solid black')
    });
    $('input').blur(function(){
        $(this).css('border','1px solid black')
    });
    $('.signup-b').click(function(){
        $('.signup-form1').toggle()
        $('.login-form1').toggle()
        $('.login-b').css('background-color','gray')
        $(this).css("background-color","white")
        
    
    });
    $('.login-b').click(function(){
        //alert("hello")
        $('.login-form1').toggle();
        $('.signup-form1').toggle();
       
        $('.signup-b').css('background-color','gray')
        $(this).css('background-color',"white")
        
    })
})