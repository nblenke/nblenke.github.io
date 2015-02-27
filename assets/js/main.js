(function () {
    'use strict';

    if (window.location.hostname.search(/github/) !== -1) {
        document.querySelector('header a').innerHTML = 'nblenke.github.io';
    }

    (function () {
        var sendMailTo = function (name, domain, ext) {
                var str = 'mai' + 'lto:' + name + '@' + domain + '.' + ext;
                window.location.replace(str);
            },
            previewLinks = document.querySelectorAll('.preview'),
            preview = function (el) {
                el.addEventListener('click', function (ev) {
                    var body = document.body,
                        html = document.documentElement,
                        height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
                        overlay = document.createElement('div'),
                        img = document.createElement('img'),
                        iframe = document.createElement('iframe'),
                        isMobilePreview = el.className.search(/mobile/) !== -1;

                    if (isMobilePreview && window.navigator.userAgent.search(/iphone|android/i) !== -1) {
                        el.setAttribute('target', '_blank');
                        return;
                    }
                    
                    ev.preventDefault();

                    if (isMobilePreview) {
                        iframe.setAttribute('src', el.href);
                        overlay.appendChild(iframe);
                    } else {
                        img.setAttribute('src', ev.currentTarget.href);
                        overlay.appendChild(img);
                    }
                    
                    overlay.id = 'overlay';
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
        
        document.querySelector('#email').addEventListener('click', function (ev) {
            ev.preventDefault();
            sendMailTo('nathan', 'blenke', 'com');
        });
    }());
    
}());