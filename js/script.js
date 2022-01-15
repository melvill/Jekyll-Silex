

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-landing","displayName":"landing","link":{"linkType":"LinkTypePage","href":"#!page-landing"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
/*
$(function() {
    var siteWidth = $('meta[name=website-width]').attr('content');
    function doResize() {
        var viewportWidth = $(window).width();
        if(viewportWidth > 480 && viewportWidth < siteWidth) {
            $('body').css({
              'transform': 'scale(' + (viewportWidth / 1200) + ')',
              'transform-origin': '0 0',
            })
        }
        else {
            $('body').css({
              'transform': '',
              'transform-origin': '',
            })
        }
    }
    if(siteWidth) {
        $(window).resize(doResize);
        doResize();
    }
});
*/