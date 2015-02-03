(function () {
    'use strict';

    (function () {
        var str = 'nblenke.github.io';

        if (window.location.hostname.search(/github/) !== -1) {
            document.querySelector('title').innerHTML = str;
            document.querySelector('header a').innerHTML = str;
        }
    }());

    (function () {
        var previewLinks = document.querySelectorAll('.preview'),
            preview = function (el) {
                el.addEventListener('click', function (ev) {
                    var body = document.body,
                        html = document.documentElement,
                        height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
                        overlay = document.createElement('div'),
                        img = document.createElement('img');

                    ev.preventDefault();

                    img.setAttribute('src', ev.currentTarget.href);

                    overlay.id = 'overlay';
                    overlay.appendChild(img);
                    overlay.setAttribute('style', 'height:' + height + 'px');

                    body.appendChild(overlay);

                    window.scroll(0, 0);

                    document.querySelector('#overlay').addEventListener('click', function () {
                        document.querySelector('#overlay').outerHTML = '';
                    });
                });
            },
            i = 0;

        for (i; i < previewLinks.length; i += 1) {
            preview(previewLinks[i]);
        }
    }());
}());

/* jshint ignore:start */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-2411695-1', 'auto');
ga('send', 'pageview');
/* jshint ignore:end */