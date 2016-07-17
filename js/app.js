// image popups destroyed when they "darkness" div is clicked
$(".footnote").click(
    function () {
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



/*
    $('.post-content>p>img').load(
        function(){
            var src = $(this).attr("src");
            $(this).wrap('<a href="#" data-featherlight="' + src + '"></a>');

        }
    );
*/

$('.post-content>p>img')
    .featherlight({
        targetAttr: 'src',
        loading:    '<img src="/assets/img/loading.gif" style="width: 50px; height 50px; display: block; margin: 0 auto;" />'
    });
