var olderLink;
$('.Posts-byCategory,.page-navigation,.PagePrakediv').length ? ($('body *').remove(), $('body').addClass('RE').append('<style>body.RE {background: url(https://4.bp.blogspot.com/-N_HFkoCM0PY/XbX9NsnuA8I/AAAAAAAABWM/jAslShd-aPICADvOAn3DvOIXJA8Vi7sBwCK4BGAYYCw/s1600/p_1395kyrbm1.png) no-repeat center #eee;background-position: center center;height: 98vh;}</style>')) : ($('#LinkList22 li').each(function () {
    var _0x5a2c07; - 1 == $(this).text().indexOf('+') ? $(this).addClass('ma').append('<ul/>') : (_0x5a2c07 = $(this).find('a').text().replace('+', ''), $(this).find('a').text(_0x5a2c07), $(this).prev('.ma').addClass('pluselink').find('ul').append($(this))), $('#LinkList22').fadeIn(0);
}), $($('<span class='
    icon '>' + ArrowIcon + '</span>')).insertAfter('li.ma.pluselink ul:not(.ma2ul), .pluselink2 ul'), $('.search a').click(function () {
    $('.search-box').fadeIn(0), $('.stxk').fadeIn(200);
}), $('.search-submit2, .stxk').click(function () {
    $('.search-box').fadeOut(0), $('.stxk').fadeOut(100);
}), $('a.op-one').click(function () {
    $('.sidenav').addClass('open'), $('.pos-t-t').fadeIn(300);
}), $('.pos-t-t, a.closebtn').click(function () {
    $('.sidenav').removeClass('open'), $('.pos-t-t').fadeOut(200);
}), $my_menu = $('.nav-par').html(), $('.mop-links').html($my_menu), $my_icon = $('#top-social-L').html(), $('.mop-icon').html($my_icon), $('.mop-links').html($my_menu), $my_tre = $('#pages').html(), $('.mop-pages').html($my_tre), $('.mop-links').html($my_menu), function (_0x33e9c4) {
    function _0x2955ce() {
        $('img[' + _0x33e9c4 + ']').each(function (_0x448f37) {
            var _0x255703, _0x5ba4c6, _0x47fdb6 = this.getBoundingClientRect().top - document.querySelector('body').getBoundingClientRect().top;
            window.pageYOffset + window.innerHeight > _0x47fdb6 && (_0x255703 = Math.ceil(this.parentNode.offsetWidth) + 50, _0x5ba4c6 = function (_0x244a87) {
                try {
                    _0x244a87 = -0x1 !== _0x244a87.indexOf('img.youtube.com') || -0x1 !== _0x244a87.indexOf('ytimg.com') ? _0x244a87.replace('/default', '/mqdefault') : _0x244a87.replace(/\/(s72\-c|s40\-c|s1600\-c|s72\-rc|s220|s640|s113|s0-rw-e90|s1600-rw-e90|w1600)\//, '/s' + parseInt(_0x255703) + '/');
                } finally {
                    return _0x244a87;
                }
            }(this.getAttribute(_0x33e9c4)), this.setAttribute('src', _0x5ba4c6), this.removeAttribute(_0x33e9c4), this.parentElement.classList.toggle('PLHolder', false), this.parentElement.classList.toggle('not-pl', true));
        });
    }
    window.addEventListener('load', _0x2955ce), document.addEventListener('scroll', _0x2955ce);
}('data-src'), console.log(`%cSeoplus v5.3\
`, 'font-weight: 700;color: #3560ab;font-size:21px', `Blogger Template\
------------------\
>> Programmed by : Seoplus developers\
>> Information   : https://www.seoplus-template.com\
`), (olderLink = $('.blog-pager-older-link').attr('href')) && $('.loadMorePosts').show(), $('.loadMorePosts a').on('click', function (_0x57ce3a) {
    $('.loadMorePosts').hide(), $['ajax']({
        'url': olderLink,
        'success': function (_0x49584a) {
            var _0x4403fa = $(_0x49584a).find('.blog-posts');
            _0x4403fa.children('.status-msg-wrap').remove(), $('.blog-posts').append(_0x4403fa.html()), (olderLink = $(_0x49584a).find('.blog-pager-older-link').attr('href')) ? $('.loadMorePosts').show() : $('.noMorePosts').show();
        },
        'beforeSend': function () {
            $('.loadMore > #loader').show();
        },
        'complete': function () {
            $('.loadMore > #loader').hide();
        }
    }), _0x57ce3a.preventDefault();
}), $('#StopSitkyHeadar').length || jQuery(document).ready(function (_0x3a0190) {
    var _0x4c870e = _0x3a0190('.par-tp, .head-pz, .par-bottm');
    _0x3a0190(window).scroll(function () {
        0x63 <= _0x3a0190(this).scrollTop() ? _0x4c870e.show(10).animate('.par-tp, .head-pz, .par-bottm').addClass('active') : _0x4c870e.animate('.par-tp, .head-pz, .par-bottm').removeClass('active');
    });
}), $('.bottom-footer .yemen:eq(0)').length && ($('.yemen').css({
    'display': 'flex',
    'visibility': 'visible',
    'width': 'auto',
    'height': 'auto',
    'opacity': '1',
    'transform': 'initial'
}), $('.yemen img[alt="SeoPlus Template"], .yemen a[title="SeoPlus Template"]').css({
    'display': 'block',
    'visibility': 'visible',
    'width': '27px',
    'height': '27px',
    'opacity': '1',
    'transform': 'initial'
})), $($('<a href="https://www.seoplus-template.com" rel="nofollow noopener" target="_blank" title="SeoPlus Template" style="display: block; visibility: visible; width: 27px; height: 27px; opacity: 1; transform: initial;"><img alt="SeoPlus Template" src="//3.bp.blogspot.com/-T-V-PJOU4v0/XZYzHfq1dYI/AAAAAAAABOw/obz8rMcwKgEvPkHP1ahM2tyAqm8fRYZYwCK4BGAYYCw/w27-h27-p-k-nu/0.png" style="display: block; visibility: visible; width: 27px; height: 27px; opacity: 1; transform: initial;"></a>')).insertBefore('.yemen span'));
