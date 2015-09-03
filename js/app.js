$(".footnote").click(
    function(){
        var footid = $(this).attr('href').replace('#', '');
        $(".highlight").removeClass("highlight");
        $( "li[id='" + footid + "']" )
            .addClass("highlight");
    });
