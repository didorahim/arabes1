$(document).ready((function () {
    setInterval((function () {
        $("#mycontent:visible").length || (window.location.href = 'ht' + 'tps://' + 'ar' + 'a' + 'be' + 's1.c' + 'om')
    }), 3e3)
})), window.onload = function () {
    var t = document.getElementById("mycontent");
    t.setAttribute("href", 'ht' + 'tps://' + 'ar' + 'a' + 'be' + 's1.c' + 'om'), t.setAttribute("rel", "dofollow"), t.setAttribute("title", "تعريب من طرف مدونة علوم و تقنيات"), t.setAttribute("style", "display: inline-block!important; font-size: inherit!important; color: #4e74ff!important; visibility: visible!important;z-index:99!important;text-decoration: underline; opacity: 1!important;"), t.innerHTML = "علوم و تقنيات"
}, $((function (t) {
    t.fn.snlazy = function () {
        return this.each((function () {
            var e = t(this),
                a = e.attr("src"),
                s = "/w" + Math.round(e.width()) + "-h" + Math.round(e.height()) + "-p-k-no-nu",
                i = "";

            function n() {
                var a = t(window).height();
                if (t(window).scrollTop() + a > e.offset().top) {
                    var s = new Image;
                    s.onload = function () {
                        e.addClass("lazy-load")
                    }, s.src = i
                }
            }
            i = a.match("s72-c") ? a.replace("/s72-c", s).replace("/s72-rc", s) : a.match("w72-h") ? a.replace("/w72-h72-p-k-no-nu", s) : a, t(window).on("load resize scroll", n), n()
        }))
    }
})), $((function () {
    function t(t, e) {
        for (var a = 0; a < t[e].link.length; a++)
            if ("alternate" == t[e].link[a].rel) {
                var s = t[e].link[a].href;
                break
            } return s
    }

    function e(t, e, a) {
        return '<a href="' + a + '">' + t[e].title.$t + "</a>"
    }

    function a(t, e) {
        return '<span class="post-author">' + t[e].author[0].name.$t + " </span>"
    }

    function s(t, e) {
        var a = t[e].published.$t,
            s = a.substring(0, 4),
            i = a.substring(5, 7),
            n = a.substring(8, 10);
        return '<span class="post-date">' + (monthFormat[parseInt(i, 10) - 1] + " " + n + ", " + s) + "</span>"
    }

    function i(t, e) {
        var a = t[e].title.$t,
            s = t[e].content.$t,
            i = $("<div>").html(s);
        if ("media$thumbnail" in t[e]) {
            var n = t[e].media$thumbnail.url,
                r = n.replace("/s72-c", "/w200-rw").replace("/s72-rc", "/w200-rw");
            n.match("img.youtube.com") && (r = n.replace("/default.", "/hqdefault."))
        } else r = s.indexOf("<img") > -1 ? i.find("img:first").attr("src") : noThumbnail;
        return '<img class="post-thumb" alt="' + a + '" src="' + r + '"/>'
    }

    function n(t, e) {
        if (null != t[e].category) var a = '<span class="post-tag">' + t[e].category[0].term + "</span>";
        else a = "";
        return a
    }

    function r(t, e) {
        var a = t[e].content.$t;
        return '<p class="post-snippet">' + $("<div>").html(a).text().trim().substr(0, 86) + "…</p>"
    }

    function o(t, e) {
        var a = t[e].content.$t;
        return '<p class="post-snippet">' + $("<div>").html(a).text().trim().substr(0, 150) + "…</p>"
    }

    function l(l, c, m, d) {
        if (c.match("mega-menu") || c.match("post-list") || c.match("related")) {
            var h = "";
            if ("recent" == d) h = "/feeds/posts/default?alt=json-in-script&max-results=" + m;
            else if ("random" == d) {
                h = "/feeds/posts/default?max-results=" + m + "&start-index=" + (Math.floor(Math.random() * m) + 1) + "&alt=json-in-script"
            } else h = "/feeds/posts/default/-/" + d + "?alt=json-in-script&max-results=" + m;
            $.ajax({
                url: h,
                type: "get",
                dataType: "jsonp",
                beforeSend: function () {
                    c.match("ticker-posts") && l.html('<ul class="loading-post">Loading......</ul>').parent().addClass("show-ticker")
                },
                success: function (m) {
                    if (c.match("mega-menu")) var h = '<ul class="mega-menu-inner">';
                    else if (c.match("post-list")) h = '<ul class="custom-widget">';
                    else if (c.match("related")) h = '<ul class="related-posts">';
                    var p = m.feed.entry;
                    if (null != p) {
                        for (var u = 0, f = p; u < f.length; u++) {
                            var g = t(f, u),
                                b = e(f, u, g),
                                $ = i(f, u),
                                v = n(f, u),
                                w = (a(f, u), s(f, u)),
                                y = (r(f, u), o(f, u), "");
                            c.match("mega-menu") ? y += '<div class="mega-item item-' + u + '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' + g + '">' + $ + "</a>" + v + '</div><h2 class="post-title">' + b + '</h2><div class="post-meta">' + w + "</div></div></div>" : c.match("post-list") ? y += '<li class="item-' + u + '"><a class="post-image-link" href="' + g + '">' + $ + '</a><h2 class="post-title">' + b + '</h2><div class="post-meta">' + w + "</div></div></li>" : c.match("related") && (y += '<li class="related-item item-' + u + '"><div class="post-image-wrap"><a class="post-image-link" href="' + g + '">' + $ + "</a>" + v + '</div><h2 class="post-title">' + b + '</h2><div class="post-meta">' + w + "</div></li>"), h += y
                        }
                        h += "</ul>"
                    } else h = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown-o"/></ul>';
                    c.match("mega-menu") ? (l.addClass("has-sub mega-menu").append(h), l.find("a:first").attr("href", (function (t, e) {
                        return e = "recent" == d || "random" == d ? e.replace(e, "/search/?&max-results=" + postPerPage) : e.replace(e, "/search/label/" + d + "?&max-results=" + postPerPage)
                    }))) : c.match("feat-big") || c.match("feat-list") || c.match("col-left") || c.match("col-right") || c.match("grid-small") || c.match("grid-big") ? (l.parent().find(".widget-title").append('<a class="view-all" href="/search/label/' + d + "?&max-results=" + postPerPage + '">' + messages.viewAll + "</a>"), (c.match("col-left") || c.match("col-right")) && (c.match("col-right") && l.parent().addClass("col-right"), l.parent().addClass("col-width")), l.html(h).parent().addClass("show-widget")) : l.html(h), l.find(".post-thumb").snlazy()
                }
            })
        }
    }
    $(".index-post .post-image-link .post-thumb, .PopularPosts .post-image-link .post-thumb, .FeaturedPost .entry-image-link .post-thumb,.about-author .author-avatar, .item-post .post-body img").snlazy(), $(".show-search, .show-mobile-search").on("click", (function () {
        $("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()
    })), $(".hide-search, .hide-mobile-search").on("click", (function () {
        $("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()
    })), $(".Label a, a.b-label").attr("href", (function (t, e) {
        return e.replace(e, e + "?&max-results=" + postPerPage)
    })), $(".avatar-image-container img").attr("src", (function (t, e) {
        return e = (e = e.replace("/s35-c/", "/s45-c/")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")
    })), $(".index-post .post-image-link img").attr("src", (function (t, e) {
        return e = e.replace("https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680-rw/nth.png", noThumbnail)
    })), $(".author-description a").each((function () {
        $(this).attr("target", "_blank")
    })), $.each($(".list-label li a"), (function () {
        var t = "#" + ("000000" + Math.floor(16777215 * Math.random()).toString(16)).slice(-6);
        $(this).css("background-color", t)
    })), $(".post-nav").each((function () {
        var t = $("a.prev-post-link").attr("href"),
            e = $("a.next-post-link").attr("href");
        $.ajax({
            url: t,
            type: "get",
            success: function (t) {
                var e = $(t).find(".blog-post h1.post-title").text();
                $(".post-prev a .post-nav-inner p").text(e)
            }
        }), $.ajax({
            url: e,
            type: "get",
            success: function (t) {
                var e = $(t).find(".blog-post h1.post-title").text();
                $(".post-next a .post-nav-inner p").text(e)
            }
        })
    })), $(".post-body strike").each((function () {
        var t = $(this),
            e = t.text();
        e.match("left-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:right;padding:0 15px 0 0px}.item #sidebar-wrapper{float:left}margin:0}</style>"), e.match("right-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:left;padding:0 0 0 15px}.item #sidebar-wrapper{float:right}</style>"), e.match("full-width") && t.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}.item #content-wrapper > .container{margin:0}</style>")
    })), $("#main-wrapper, #sidebar-wrapper").each((function () {
        1 == fixedSidebar && $(this).theiaStickySidebar({
            additionalMarginTop: 25,
            additionalMarginBottom: 25
        })
    })), $(".back-top").each((function () {
        var t = $(this);
        $(window).on("scroll", (function () {
            $(this).scrollTop() >= 100 ? t.fadeIn(250) : t.fadeOut(250)
        })), t.click((function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        }))
    })), $("#main-menu #main-menu-nav li").each((function () {
        var t = $(this),
            e = t.find("a").attr("href").trim();
        l(t, e.toLowerCase(), 5, e.split("/")[0])
    })), $("#break-section .widget-content").each((function () {
        var t = $(this),
            e = t.text().trim(),
            a = e.toLowerCase(),
            s = e.split("/");
        l(t, a, s[0], s[1])
    })), $("#hot-section .widget-content").each((function () {
        var t = $(this),
            e = t.text().trim();
        l(t, e.toLowerCase(), 4, e.split("/")[0])
    })), $("#carousel-section .widget-content").each((function () {
        var t = $(this),
            e = t.text().trim(),
            a = e.toLowerCase(),
            s = e.split("/");
        l(t, a, s[0], s[1])
    })), $(".featured-posts .widget-content").each((function () {
        var t = $(this),
            e = t.text().trim(),
            a = e.toLowerCase(),
            s = e.split("/");
        if (a.match("feat-big")) var i = 5,
            n = s[0];
        else i = s[0], n = s[1];
        l(t, a, i, n)
    })), $(".common-widget .widget-content").each((function () {
        var t = $(this),
            e = t.text().trim(),
            a = e.toLowerCase(),
            s = e.split("/");
        l(t, a, s[0], s[1])
    })), $(".related-ready").each((function () {
        var t = $(this),
            e = t.find(".related-tag").data("label");
        l(t, "related", 3, e)
    })), $(".blog-post-comments").each((function () {
        var t, e = commentsSystem,
            a = (disqus_blogger_current_url, '<div class="fb-comments" data-width="100%" data-href="' + $(location).attr("href") + '" data-numposts="5"></div>'),
            s = "comments-system-" + e;
        "blogger" == e ? $(this).addClass(s).show() : "disqus" == e ? ((t = document.createElement("script")).type = "text/javascript", t.async = !0, t.src = "//" + disqusShortname + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t), $("#comments, #gpluscomments").remove(), $(this).append('<div id="disqus_thread"/>').addClass(s).show()) : "facebook" == e ? ($("#comments, #gpluscomments").remove(), $(this).append(a).addClass(s).show()) : "hide" == e ? $(this).hide() : $(this).addClass("comments-system-default").show()
    }))
})), $(document).scroll((function () {
    1 == fixedMenu && $(window).on("scroll", (function (t) {
        var e = 0;
        $(this).scrollTop() < 240 ? (e = $(".header-header").height(), $(".header-menu, .mobile-header").removeClass("scrolled-header")) : ($(".header-menu, .mobile-header").addClass("scrolled-header"), $("body").css({
            marginTop: e
        }))
    }))
}));
