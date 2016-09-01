$(function() {
    $( ".accordion" ).accordion({
        collapsible: true,
        active:false
    });
    $("#btn1").click(function () {
        $( ".set1" ).accordion( "option", "active",0   );
    });
    $("#btn2").click(function () {
        $( ".set2" ).accordion( "option", "active",0   );
    });
    $("#btn3").click(function () {
        $( ".set3" ).accordion( "option", "active",0   );
    });
    $("#btn4").click(function () {
        $( ".set4" ).accordion( "option", "active",0   );
    });
    
  
});
