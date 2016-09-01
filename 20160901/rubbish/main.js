$(function () {
    $( ".rubbish" ).draggable({
        revert: "invalid"
    });


    $( ".red" ).draggable({
        scope:"name1"
    });

    $( ".green" ).draggable({
        scope:"name2"
    });

    $( ".blue" ).draggable({
        scope:"name3"
    });

    $( "#box1" ).droppable({
        scope:"name1",
        drop:function () {
            $("div").remove(".red")
        }

    });

    $( "#box2" ).droppable({
        scope:"name2",
        drop:function () {
            $("div").remove(".green")
        }
    });

    $( "#box3" ).droppable({
        scope:"name3",
        drop:function () {
            $("div").remove(".blue")
        }
    });


});
