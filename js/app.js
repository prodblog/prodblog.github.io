$(".footnote").click(
    function(){
        var footid = $(this).attr('href').replace('#', '');
        $(".highlight").removeClass("highlight");
        $( "li[id='" + footid + "']" )
            .addClass("highlight");
    });

$(".reversefootnote").click(
    function(){
        var footid = $(this).attr('href').replace('#', '');
        $(".highlight").removeClass("highlight");
        $( "sup[id='" + footid + "']" )
            .addClass("highlight");
    });
