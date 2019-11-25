const mainScrollFunction = () => {
    $(document).ready( () => {
        window.onscroll = () => {
            scrollFunction()
        }
        // Scroll to top 
        $(".scroller").on('click', function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
        // Anchor scroll
        $('a[href^="#"]').click(function(e) {
            e.preventDefault();
            var id = $(this).attr("href");
            $('html,body').animate({scrollTop: $(id).offset().top},'slow');
        });
    } )
    function scrollFunction() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = Math.round((scrollTop) / (docHeight - winHeight) * 100);
        if (scrollPercent > 50 || scrollPercent > 50) {
          $('.scroller').css("display", "block")
        } else {
            $('.scroller').css("display", "none")
        }
      }
}

export { mainScrollFunction };


