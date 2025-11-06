import { a as $ } from "@nf-internal/chunk-7XNIKSHD";
import "@nf-internal/chunk-OKDO625G";
import { a as st } from "@nf-internal/chunk-236A42LZ";
import { a as ua } from "@nf-internal/chunk-7QKABEPV";
import { j as kn, k as Nn } from "@nf-internal/chunk-XE5S2H6D";
import { a as de, b as Be, f as he, h as yr, i as Ln, k as A } from "@nf-internal/chunk-GL2BOVXA";
var ii = he((Fe, mt) => { (function (i, t) {
    "use strict";
    var e = "1.0.41", r = "", n = "?", o = "function", a = "undefined", u = "object", f = "string", s = "major", c = "model", l = "name", d = "type", h = "vendor", p = "version", w = "architecture", E = "console", m = "mobile", v = "tablet", x = "smarttv", I = "wearable", R = "embedded", F = 500, ue = "Amazon", fe = "Apple", yn = "ASUS", bn = "BlackBerry", et = "Browser", tt = "Chrome", ia = "Edge", rt = "Firefox", nt = "Google", wn = "Honor", En = "Huawei", oa = "Lenovo", it = "LG", fr = "Microsoft", lr = "Motorola", dr = "Nvidia", Tn = "OnePlus", ke = "Opera", hr = "OPPO", Ne = "Samsung", _n = "Sharp", Me = "Sony", pr = "Xiaomi", vr = "Zebra", Sn = "Facebook", xn = "Chromium OS", In = "Mac OS", Cn = " Browser", aa = function (b, T) { var y = {}; for (var S in b)
        T[S] && T[S].length % 2 === 0 ? y[S] = T[S].concat(b[S]) : y[S] = b[S]; return y; }, ot = function (b) { for (var T = {}, y = 0; y < b.length; y++)
        T[b[y].toUpperCase()] = b[y]; return T; }, An = function (b, T) { return typeof b === f ? He(T).indexOf(He(b)) !== -1 : !1; }, He = function (b) { return b.toLowerCase(); }, sa = function (b) { return typeof b === f ? b.replace(/[^\d\.]/g, r).split(".")[0] : t; }, mr = function (b, T) { if (typeof b === f)
        return b = b.replace(/^\s\s*/, r), typeof T === a ? b : b.substring(0, F); }, De = function (b, T) { for (var y = 0, S, z, j, _, g, q; y < T.length && !g;) {
        var gr = T[y], On = T[y + 1];
        for (S = z = 0; S < gr.length && !g && gr[S];)
            if (g = gr[S++].exec(b), g)
                for (j = 0; j < On.length; j++)
                    q = g[++z], _ = On[j], typeof _ === u && _.length > 0 ? _.length === 2 ? typeof _[1] == o ? this[_[0]] = _[1].call(this, q) : this[_[0]] = _[1] : _.length === 3 ? typeof _[1] === o && !(_[1].exec && _[1].test) ? this[_[0]] = q ? _[1].call(this, q, _[2]) : t : this[_[0]] = q ? q.replace(_[1], _[2]) : t : _.length === 4 && (this[_[0]] = q ? _[3].call(this, q.replace(_[1], _[2])) : t) : this[_] = q || t;
        y += 2;
    } }, Ue = function (b, T) { for (var y in T)
        if (typeof T[y] === u && T[y].length > 0) {
            for (var S = 0; S < T[y].length; S++)
                if (An(T[y][S], b))
                    return y === n ? t : y;
        }
        else if (An(T[y], b))
            return y === n ? t : y; return T.hasOwnProperty("*") ? T["*"] : b; }, ca = { "1.0": "/8", "1.2": "/1", "1.3": "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, Pn = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", "8.1": "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Rn = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [p, [l, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [p, [l, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [l, p], [/opios[\/ ]+([\w\.]+)/i], [p, [l, ke + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [p, [l, ke + " GX"]], [/\bopr\/([\w\.]+)/i], [p, [l, ke]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [p, [l, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [p, [l, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [l, p], [/quark(?:pc)?\/([-\w\.]+)/i], [p, [l, "Quark"]], [/\bddg\/([\w\.]+)/i], [p, [l, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [p, [l, "UC" + et]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [p, [l, "WeChat"]], [/konqueror\/([\w\.]+)/i], [p, [l, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [p, [l, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [p, [l, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [p, [l, "Smart Lenovo " + et]], [/(avast|avg)\/([\w\.]+)/i], [[l, /(.+)/, "$1 Secure " + et], p], [/\bfocus\/([\w\.]+)/i], [p, [l, rt + " Focus"]], [/\bopt\/([\w\.]+)/i], [p, [l, ke + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [p, [l, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [p, [l, "Dolphin"]], [/coast\/([\w\.]+)/i], [p, [l, ke + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [p, [l, "MIUI" + Cn]], [/fxios\/([\w\.-]+)/i], [p, [l, rt]], [/\bqihoobrowser\/?([\w\.]*)/i], [p, [l, "360"]], [/\b(qq)\/([\w\.]+)/i], [[l, /(.+)/, "$1Browser"], p], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[l, /(.+)/, "$1" + Cn], p], [/samsungbrowser\/([\w\.]+)/i], [p, [l, Ne + " Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [p, [l, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[l, "Sogou Mobile"], p], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [l, p], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [l], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [p, l], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[l, Sn], p], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [l, p], [/\bgsa\/([\w\.]+) .*safari\//i], [p, [l, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [p, [l, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [p, [l, tt + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[l, tt + " WebView"], p], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [p, [l, "Android " + et]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [l, p], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [p, [l, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [p, l], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [l, [p, Ue, ca]], [/(webkit|khtml)\/([\w\.]+)/i], [l, p], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[l, "Netscape"], p], [/(wolvic|librewolf)\/([\w\.]+)/i], [l, p], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [p, [l, rt + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i], [l, [p, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [l, [p, /master.|lts./, ""]]], cpu: [[/\b((amd|x|x86[-_]?|wow|win)64)\b/i], [[w, "amd64"]], [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i], [[w, "ia32"]], [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i], [[w, "arm64"]], [/\b(arm(v[67])?ht?n?[fl]p?)\b/i], [[w, "armhf"]], [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i], [[w, "arm"]], [/((ppc|powerpc)(64)?)( mac|;|\))/i], [[w, /ower/, r, He]], [/ sun4\w[;\)]/i], [[w, "sparc"]], [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i], [[w, He]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [h, Ne], [d, v]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [c, [h, Ne], [d, m]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [h, fe], [d, m]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [h, fe], [d, v]], [/(macintosh);/i], [c, [h, fe]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [h, _n], [d, m]], [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i], [c, [h, wn], [d, v]], [/honor([-\w ]+)[;\)]/i], [c, [h, wn], [d, m]], [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i], [c, [h, En], [d, v]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [h, En], [d, m]], [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i], [[c, /_/g, " "], [h, pr], [d, v]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i], [[c, /_/g, " "], [h, pr], [d, m]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [h, hr], [d, m]], [/\b(opd2(\d{3}a?))(?: bui|\))/i], [c, [h, Ue, { OnePlus: ["304", "403", "203"], "*": hr }], [d, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [h, "Vivo"], [d, m]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [h, "Realme"], [d, m]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [h, lr], [d, m]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [h, lr], [d, v]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [h, it], [d, v]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [h, it], [d, m]], [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i], [c, [h, oa], [d, v]], [/(nokia) (t[12][01])/i], [h, c, [d, v]], [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i], [[c, /_/g, " "], [d, m], [h, "Nokia"]], [/(pixel (c|tablet))\b/i], [c, [h, nt], [d, v]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [h, nt], [d, m]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [h, Me], [d, m]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [h, Me], [d, v]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [h, Tn], [d, m]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [h, ue], [d, v]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [h, ue], [d, m]], [/(playbook);[-\w\),; ]+(rim)/i], [c, h, [d, v]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [h, bn], [d, m]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [h, yn], [d, v]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [h, yn], [d, m]], [/(nexus 9)/i], [c, [h, "HTC"], [d, v]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [c, /_/g, " "], [d, m]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [c, [h, "TCL"], [d, v]], [/(itel) ((\w+))/i], [[h, He], c, [d, Ue, { tablet: ["p10001l", "w7001"], "*": "mobile" }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [h, "Acer"], [d, v]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [h, "Meizu"], [d, m]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [h, "Ulefone"], [d, m]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [c, [h, "Energizer"], [d, m]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [c, [h, "Cat"], [d, m]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [c, [h, "Smartfren"], [d, m]], [/droid.+; (a(?:015|06[35]|142p?))/i], [c, [h, "Nothing"], [d, m]], [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i], [c, [h, "Archos"], [d, v]], [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i], [c, [h, "Archos"], [d, m]], [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i], [h, c, [d, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i], [h, c, [d, m]], [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, c, [d, v]], [/(surface duo)/i], [c, [h, fr], [d, v]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [h, "Fairphone"], [d, m]], [/(u304aa)/i], [c, [h, "AT&T"], [d, m]], [/\bsie-(\w*)/i], [c, [h, "Siemens"], [d, m]], [/\b(rct\w+) b/i], [c, [h, "RCA"], [d, v]], [/\b(venue[\d ]{2,7}) b/i], [c, [h, "Dell"], [d, v]], [/\b(q(?:mv|ta)\w+) b/i], [c, [h, "Verizon"], [d, v]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [h, "Barnes & Noble"], [d, v]], [/\b(tm\d{3}\w+) b/i], [c, [h, "NuVision"], [d, v]], [/\b(k88) b/i], [c, [h, "ZTE"], [d, v]], [/\b(nx\d{3}j) b/i], [c, [h, "ZTE"], [d, m]], [/\b(gen\d{3}) b.+49h/i], [c, [h, "Swiss"], [d, m]], [/\b(zur\d{3}) b/i], [c, [h, "Swiss"], [d, v]], [/\b((zeki)?tb.*\b) b/i], [c, [h, "Zeki"], [d, v]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], c, [d, v]], [/\b(ns-?\w{0,9}) b/i], [c, [h, "Insignia"], [d, v]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [h, "NextBook"], [d, v]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], c, [d, m]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], c, [d, m]], [/\b(ph-1) /i], [c, [h, "Essential"], [d, m]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [h, "Envizen"], [d, v]], [/\b(trio[-\w\. ]+) b/i], [c, [h, "MachSpeed"], [d, v]], [/\btu_(1491) b/i], [c, [h, "Rotor"], [d, v]], [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i], [c, [h, dr], [d, v]], [/(sprint) (\w+)/i], [h, c, [d, m]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [h, fr], [d, m]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [h, vr], [d, v]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [h, vr], [d, m]], [/smart-tv.+(samsung)/i], [h, [d, x]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [h, Ne], [d, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, it], [d, x]], [/(apple) ?tv/i], [h, [c, fe + " TV"], [d, x]], [/crkey/i], [[c, tt + "cast"], [h, nt], [d, x]], [/droid.+aft(\w+)( bui|\))/i], [c, [h, ue], [d, x]], [/(shield \w+ tv)/i], [c, [h, dr], [d, x]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [h, _n], [d, x]], [/(bravia[\w ]+)( bui|\))/i], [c, [h, Me], [d, x]], [/(mi(tv|box)-?\w+) bui/i], [c, [h, pr], [d, x]], [/Hbbtv.*(technisat) (.*);/i], [h, c, [d, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[h, mr], [c, mr], [d, x]], [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i], [c, [d, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, x]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, c, [d, E]], [/droid.+; (shield)( bui|\))/i], [c, [h, dr], [d, E]], [/(playstation \w+)/i], [c, [h, Me], [d, E]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [h, fr], [d, E]], [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i], [c, [h, Ne], [d, I]], [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i], [h, c, [d, I]], [/(ow(?:19|20)?we?[1-3]{1,3})/i], [c, [h, hr], [d, I]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [h, fe], [d, I]], [/(opwwe\d{3})/i], [c, [h, Tn], [d, I]], [/(moto 360)/i], [c, [h, lr], [d, I]], [/(smartwatch 3)/i], [c, [h, Me], [d, I]], [/(g watch r)/i], [c, [h, it], [d, I]], [/droid.+; (wt63?0{2,3})\)/i], [c, [h, vr], [d, I]], [/droid.+; (glass) \d/i], [c, [h, nt], [d, I]], [/(pico) (4|neo3(?: link|pro)?)/i], [h, c, [d, I]], [/; (quest( \d| pro)?)/i], [c, [h, Sn], [d, I]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [d, R]], [/(aeobc)\b/i], [c, [h, ue], [d, R]], [/(homepod).+mac os/i], [c, [h, fe], [d, R]], [/windows iot/i], [[d, R]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [d, m]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [d, v]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, v]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, m]], [/droid .+?; ([\w\. -]+)( bui|\))/i], [c, [h, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [p, [l, ia + "HTML"]], [/(arkweb)\/([\w\.]+)/i], [l, p], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [p, [l, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [l, p], [/ladybird\//i], [[l, "LibWeb"]], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [p, l]], os: [[/microsoft (windows) (vista|xp)/i], [l, p], [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i], [l, [p, Ue, Pn]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[p, Ue, Pn], [l, "Windows"]], [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[p, /_/g, "."], [l, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[l, In], [p, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [p, l], [/(ubuntu) ([\w\.]+) like android/i], [[l, /(.+)/, "$1 Touch"], p], [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i], [l, p], [/\(bb(10);/i], [p, [l, bn]], [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i], [p, [l, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [p, [l, rt + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [p, [l, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [p, [l, "watchOS"]], [/crkey\/([\d\.]+)/i], [p, [l, tt + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[l, xn], p], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [l, p], [/(sunos) ?([\w\.\d]*)/i], [[l, "Solaris"], p], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [l, p]] }, L = function (b, T) { if (typeof b === u && (T = b, b = t), !(this instanceof L))
        return new L(b, T).getResult(); var y = typeof i !== a && i.navigator ? i.navigator : t, S = b || (y && y.userAgent ? y.userAgent : r), z = y && y.userAgentData ? y.userAgentData : t, j = T ? aa(Rn, T) : Rn, _ = y && y.userAgent == S; return this.getBrowser = function () { var g = {}; return g[l] = t, g[p] = t, De.call(g, S, j.browser), g[s] = sa(g[p]), _ && y && y.brave && typeof y.brave.isBrave == o && (g[l] = "Brave"), g; }, this.getCPU = function () { var g = {}; return g[w] = t, De.call(g, S, j.cpu), g; }, this.getDevice = function () { var g = {}; return g[h] = t, g[c] = t, g[d] = t, De.call(g, S, j.device), _ && !g[d] && z && z.mobile && (g[d] = m), _ && g[c] == "Macintosh" && y && typeof y.standalone !== a && y.maxTouchPoints && y.maxTouchPoints > 2 && (g[c] = "iPad", g[d] = v), g; }, this.getEngine = function () { var g = {}; return g[l] = t, g[p] = t, De.call(g, S, j.engine), g; }, this.getOS = function () { var g = {}; return g[l] = t, g[p] = t, De.call(g, S, j.os), _ && !g[l] && z && z.platform && z.platform != "Unknown" && (g[l] = z.platform.replace(/chrome os/i, xn).replace(/macos/i, In)), g; }, this.getResult = function () { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() }; }, this.getUA = function () { return S; }, this.setUA = function (g) { return S = typeof g === f && g.length > F ? mr(g, F) : g, this; }, this.setUA(S), this; };
    L.VERSION = e, L.BROWSER = ot([l, p, s]), L.CPU = ot([w]), L.DEVICE = ot([c, h, d, E, m, x, v, I, R]), L.ENGINE = L.OS = ot([l, p]), typeof Fe !== a ? (typeof mt !== a && mt.exports && (Fe = mt.exports = L), Fe.UAParser = L) : typeof define === o && define.amd ? define(function () { return L; }) : typeof i !== a && (i.UAParser = L);
    var le = typeof i !== a && (i.jQuery || i.Zepto);
    if (le && !le.ua) {
        var at = new L;
        le.ua = at.getResult(), le.ua.get = function () { return at.getUA(); }, le.ua.set = function (b) { at.setUA(b); var T = at.getResult(); for (var y in T)
            le.ua[y] = T[y]; };
    }
})(typeof window == "object" ? window : Fe); });
var fi = he((Ju, ui) => {
    "use strict";
    function Nr(i) { return typeof i == "function"; }
    var O = console.error.bind(console);
    function qe(i, t, e) { var r = !!i[t] && i.propertyIsEnumerable(t); Object.defineProperty(i, t, { configurable: !0, enumerable: r, writable: !0, value: e }); }
    function Ve(i) { i && i.logger && (Nr(i.logger) ? O = i.logger : O("new logger isn't a function, not replacing")); }
    function si(i, t, e) { if (!i || !i[t]) {
        O("no original function " + t + " to wrap");
        return;
    } if (!e) {
        O("no wrapper function"), O(new Error().stack);
        return;
    } if (!Nr(i[t]) || !Nr(e)) {
        O("original object and wrapper must be functions");
        return;
    } var r = i[t], n = e(r, t); return qe(n, "__original", r), qe(n, "__unwrap", function () { i[t] === n && qe(i, t, r); }), qe(n, "__wrapped", !0), qe(i, t, n), n; }
    function Ga(i, t, e) { if (i)
        Array.isArray(i) || (i = [i]);
    else {
        O("must provide one or more modules to patch"), O(new Error().stack);
        return;
    } if (!(t && Array.isArray(t))) {
        O("must provide one or more functions to wrap on modules");
        return;
    } i.forEach(function (r) { t.forEach(function (n) { si(r, n, e); }); }); }
    function ci(i, t) { if (!i || !i[t]) {
        O("no function to unwrap."), O(new Error().stack);
        return;
    } if (!i[t].__unwrap)
        O("no original to unwrap to -- has " + t + " already been unwrapped?");
    else
        return i[t].__unwrap(); }
    function Wa(i, t) { if (i)
        Array.isArray(i) || (i = [i]);
    else {
        O("must provide one or more modules to patch"), O(new Error().stack);
        return;
    } if (!(t && Array.isArray(t))) {
        O("must provide one or more functions to unwrap on modules");
        return;
    } i.forEach(function (e) { t.forEach(function (r) { ci(e, r); }); }); }
    Ve.wrap = si;
    Ve.massWrap = Ga;
    Ve.unwrap = ci;
    Ve.massUnwrap = Wa;
    ui.exports = Ve;
});
var Kr = he(H => {
    "use strict";
    Object.defineProperty(H, "__esModule", { value: !0 });
    H.MAX_HASHABLE_LENGTH = H.INIT = H.KEY = H.DIGEST_LENGTH = H.BLOCK_SIZE = void 0;
    H.BLOCK_SIZE = 64;
    H.DIGEST_LENGTH = 32;
    H.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    H.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    H.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
});
var Di = he(Pt => {
    "use strict";
    Object.defineProperty(Pt, "__esModule", { value: !0 });
    Pt.RawSha256 = void 0;
    var D = Kr(), Za = (function () { function i() { this.state = Int32Array.from(D.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return i.prototype.update = function (t) { if (this.finished)
        throw new Error("Attempted to update an already finished hash."); var e = 0, r = t.byteLength; if (this.bytesHashed += r, this.bytesHashed * 8 > D.MAX_HASHABLE_LENGTH)
        throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; r > 0;)
        this.buffer[this.bufferLength++] = t[e++], r--, this.bufferLength === D.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0); }, i.prototype.digest = function () { if (!this.finished) {
        var t = this.bytesHashed * 8, e = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), r = this.bufferLength;
        if (e.setUint8(this.bufferLength++, 128), r % D.BLOCK_SIZE >= D.BLOCK_SIZE - 8) {
            for (var n = this.bufferLength; n < D.BLOCK_SIZE; n++)
                e.setUint8(n, 0);
            this.hashBuffer(), this.bufferLength = 0;
        }
        for (var n = this.bufferLength; n < D.BLOCK_SIZE - 8; n++)
            e.setUint8(n, 0);
        e.setUint32(D.BLOCK_SIZE - 8, Math.floor(t / 4294967296), !0), e.setUint32(D.BLOCK_SIZE - 4, t), this.hashBuffer(), this.finished = !0;
    } for (var o = new Uint8Array(D.DIGEST_LENGTH), n = 0; n < 8; n++)
        o[n * 4] = this.state[n] >>> 24 & 255, o[n * 4 + 1] = this.state[n] >>> 16 & 255, o[n * 4 + 2] = this.state[n] >>> 8 & 255, o[n * 4 + 3] = this.state[n] >>> 0 & 255; return o; }, i.prototype.hashBuffer = function () { for (var t = this, e = t.buffer, r = t.state, n = r[0], o = r[1], a = r[2], u = r[3], f = r[4], s = r[5], c = r[6], l = r[7], d = 0; d < D.BLOCK_SIZE; d++) {
        if (d < 16)
            this.temp[d] = (e[d * 4] & 255) << 24 | (e[d * 4 + 1] & 255) << 16 | (e[d * 4 + 2] & 255) << 8 | e[d * 4 + 3] & 255;
        else {
            var h = this.temp[d - 2], p = (h >>> 17 | h << 15) ^ (h >>> 19 | h << 13) ^ h >>> 10;
            h = this.temp[d - 15];
            var w = (h >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3;
            this.temp[d] = (p + this.temp[d - 7] | 0) + (w + this.temp[d - 16] | 0);
        }
        var E = (((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & s ^ ~f & c) | 0) + (l + (D.KEY[d] + this.temp[d] | 0) | 0) | 0, m = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & o ^ n & a ^ o & a) | 0;
        l = c, c = s, s = f, f = u + E | 0, u = a, a = o, o = n, n = E + m | 0;
    } r[0] += n, r[1] += o, r[2] += a, r[3] += u, r[4] += f, r[5] += s, r[6] += c, r[7] += l; }, i; })();
    Pt.RawSha256 = Za;
});
var Bi = he(Lt => {
    "use strict";
    Object.defineProperty(Lt, "__esModule", { value: !0 });
    Lt.Sha256 = void 0;
    var Ui = (Nn(), Ln(kn)), Ot = Kr(), Rt = Di(), Xr = ua(), es = (function () { function i(t) { this.secret = t, this.hash = new Rt.RawSha256, this.reset(); } return i.prototype.update = function (t) { if (!((0, Xr.isEmptyData)(t) || this.error))
        try {
            this.hash.update((0, Xr.convertToBuffer)(t));
        }
        catch (e) {
            this.error = e;
        } }, i.prototype.digestSync = function () { if (this.error)
        throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, i.prototype.digest = function () { return Ui.__awaiter(this, void 0, void 0, function () { return Ui.__generator(this, function (t) { return [2, this.digestSync()]; }); }); }, i.prototype.reset = function () { if (this.hash = new Rt.RawSha256, this.secret) {
        this.outer = new Rt.RawSha256;
        var t = ts(this.secret), e = new Uint8Array(Ot.BLOCK_SIZE);
        e.set(t);
        for (var r = 0; r < Ot.BLOCK_SIZE; r++)
            t[r] ^= 54, e[r] ^= 92;
        this.hash.update(t), this.outer.update(e);
        for (var r = 0; r < t.byteLength; r++)
            t[r] = 0;
    } }, i; })();
    Lt.Sha256 = es;
    function ts(i) { var t = (0, Xr.convertToBuffer)(i); if (t.byteLength > Ot.BLOCK_SIZE) {
        var e = new Rt.RawSha256;
        e.update(t), t = e.digest();
    } var r = new Uint8Array(Ot.BLOCK_SIZE); return r.set(t), r; }
});
var Fi = he(Yr => {
    "use strict";
    Object.defineProperty(Yr, "__esModule", { value: !0 });
    var rs = (Nn(), Ln(kn));
    rs.__exportStar(Bi(), Yr);
});
var k = class i {
    constructor(t) { this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? t.protocol.slice(-1) !== ":" ? `${t.protocol}:` : t.protocol : "https:", this.path = t.path ? t.path.charAt(0) !== "/" ? `/${t.path}` : t.path : "/", this.username = t.username, this.password = t.password, this.fragment = t.fragment; }
    static clone(t) { let e = new i(Be(de({}, t), { headers: de({}, t.headers) })); return e.query && (e.query = fa(e.query)), e; }
    static isInstance(t) { if (!t)
        return !1; let e = t; return "method" in e && "protocol" in e && "hostname" in e && "path" in e && typeof e.query == "object" && typeof e.headers == "object"; }
    clone() { return i.clone(this); }
};
function fa(i) { return Object.keys(i).reduce((t, e) => { let r = i[e]; return Be(de({}, t), { [e]: Array.isArray(r) ? [...r] : r }); }, {}); }
var V = class {
    constructor(t) { this.statusCode = t.statusCode, this.reason = t.reason, this.headers = t.headers || {}, this.body = t.body; }
    static isInstance(t) { if (!t)
        return !1; let e = t; return typeof e.statusCode == "number" && typeof e.headers == "object"; }
};
var U = i => encodeURIComponent(i).replace(/[!'()*]/g, la), la = i => `%${i.charCodeAt(0).toString(16).toUpperCase()}`;
function Mn(i) { let t = []; for (let e of Object.keys(i).sort()) {
    let r = i[e];
    if (e = U(e), Array.isArray(r))
        for (let n = 0, o = r.length; n < o; n++)
            t.push(`${e}=${U(r[n])}`);
    else {
        let n = e;
        (r || typeof r == "string") && (n += `=${U(r)}`), t.push(n);
    }
} return t.join("&"); }
function br(i, t) { return new Request(i, t); }
function Hn(i = 0) { return new Promise((t, e) => { i && setTimeout(() => { let r = new Error(`Request did not complete within ${i} ms`); r.name = "TimeoutError", e(r); }, i); }); }
var wr = { supported: void 0 }, pe = class i {
    static create(t) { return typeof t?.handle == "function" ? t : new i(t); }
    constructor(t) { typeof t == "function" ? this.configProvider = t().then(e => e || {}) : (this.config = t ?? {}, this.configProvider = Promise.resolve(this.config)), wr.supported === void 0 && (wr.supported = typeof Request < "u" && "keepalive" in br("https://[::1]")); }
    destroy() { }
    handle(r) { return A(this, arguments, function* (t, { abortSignal: e } = {}) { this.config || (this.config = yield this.configProvider); let n = this.config.requestTimeout, o = this.config.keepAlive === !0, a = this.config.credentials; if (e?.aborted) {
        let v = new Error("Request aborted");
        return v.name = "AbortError", Promise.reject(v);
    } let u = t.path, f = Mn(t.query || {}); f && (u += `?${f}`), t.fragment && (u += `#${t.fragment}`); let s = ""; if (t.username != null || t.password != null) {
        let v = t.username ?? "", x = t.password ?? "";
        s = `${v}:${x}@`;
    } let { port: c, method: l } = t, d = `${t.protocol}//${s}${t.hostname}${c ? `:${c}` : ""}${u}`, h = l === "GET" || l === "HEAD" ? void 0 : t.body, p = { body: h, headers: new Headers(t.headers), method: l, credentials: a }; this.config?.cache && (p.cache = this.config.cache), h && (p.duplex = "half"), typeof AbortController < "u" && (p.signal = e), wr.supported && (p.keepalive = o), typeof this.config.requestInit == "function" && Object.assign(p, this.config.requestInit(t)); let w = () => { }, E = br(d, p), m = [fetch(E).then(v => { let x = v.headers, I = {}; for (let F of x.entries())
            I[F[0]] = F[1]; return v.body != null ? { response: new V({ headers: I, reason: v.statusText, statusCode: v.status, body: v.body }) } : v.blob().then(F => ({ response: new V({ headers: I, reason: v.statusText, statusCode: v.status, body: F }) })); }), Hn(n)]; return e && m.push(new Promise((v, x) => { let I = () => { let R = new Error("Request aborted"); R.name = "AbortError", x(R); }; if (typeof e.addEventListener == "function") {
        let R = e;
        R.addEventListener("abort", I, { once: !0 }), w = () => R.removeEventListener("abort", I);
    }
    else
        e.onabort = I; })), Promise.race(m).finally(w); }); }
    updateHttpClientConfig(t, e) { this.config = void 0, this.configProvider = this.configProvider.then(r => (r[t] = e, r)); }
    httpHandlerConfigs() { return this.config ?? {}; }
};
var ie = {}, ve = new Array(64);
for (let i = 0, t = 65, e = 90; i + t <= e; i++) {
    let r = String.fromCharCode(i + t);
    ie[r] = i, ve[i] = r;
}
for (let i = 0, t = 97, e = 122; i + t <= e; i++) {
    let r = String.fromCharCode(i + t), n = i + 26;
    ie[r] = n, ve[n] = r;
}
for (let i = 0; i < 10; i++) {
    ie[i.toString(10)] = i + 52;
    let t = i.toString(10), e = i + 52;
    ie[t] = e, ve[e] = t;
}
ie["+"] = 62;
ve[62] = "+";
ie["/"] = 63;
ve[63] = "/";
var me = i => new TextEncoder().encode(i);
var Q = i => typeof i == "string" ? me(i) : ArrayBuffer.isView(i) ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(i);
var Dn = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, Un = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, ct = function (i) { return Dn(void 0, void 0, void 0, function () { var t; return Un(this, function (e) { switch (e.label) {
    case 0: return [4, i.body.getReader().read()];
    case 1: return t = e.sent().value, [2, JSON.parse(String.fromCharCode.apply(null, t))];
} }); }); }, Bn = function (i) { return Dn(void 0, void 0, void 0, function () { var t; return Un(this, function (e) { switch (e.label) {
    case 0: return [4, i.body.getReader().read()];
    case 1: return t = e.sent().value, [2, String.fromCharCode.apply(null, t)];
} }); }); };
var ut = function () { return ut = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, ut.apply(this, arguments); }, pa = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, va = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, ma = "POST", ga = "application/x-www-form-urlencoded", ya = "https:", ba = "AssumeRoleWithWebIdentity", wa = "2011-06-15", Fn = (function () { function i(t) { var e = this; this.assumeRoleWithWebIdentity = function (r) { return pa(e, void 0, void 0, function () { var n, o, a, u, f, s; return va(this, function (c) { switch (c.label) {
    case 0: return c.trys.push([0, 3, , 4]), n = ut(ut({}, r), { Action: ba, Version: wa }), o = new URLSearchParams(Object.entries(n)).toString(), a = new k({ method: ma, headers: { "content-type": ga, host: this.hostname }, protocol: ya, hostname: this.hostname, body: o }), [4, this.fetchRequestHandler.handle(a)];
    case 1: return u = c.sent().response, [4, Bn(u)];
    case 2: return f = c.sent(), [2, { accessKeyId: f.split("<AccessKeyId>")[1].split("</AccessKeyId>")[0], secretAccessKey: f.split("<SecretAccessKey>")[1].split("</SecretAccessKey>")[0], sessionToken: f.split("<SessionToken>")[1].split("</SessionToken>")[0], expiration: new Date(f.split("<Expiration>")[1].split("</Expiration>")[0]) }];
    case 3: throw s = c.sent(), new Error("CWR: Failed to retrieve credentials from STS: ".concat(s));
    case 4: return [2];
} }); }); }, this.hostname = "sts.".concat(t.region, ".amazonaws.com"), this.fetchRequestHandler = t.fetchRequestHandler; } return i; })();
var Er = "cwr_c", Tr = "cwr_i", _r = "cwr_s", Sr = "cwr_u", jn = 3e4;
var qn = "arw-module";
var xr = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, Ir = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, Ea = "POST", Ta = "application/x-amz-json-1.1", _a = "https:", Sa = "AWSCognitoIdentityService.GetId", xa = "AWSCognitoIdentityService.GetOpenIdToken", Ia = "AWSCognitoIdentityService.GetCredentialsForIdentity", Vn = (function () { function i(t) { var e = this, r; this.getId = function (n) { return xr(e, void 0, void 0, function () { var o, a, u, f, s, c; return Ir(this, function (l) { switch (l.label) {
    case 0:
        o = null;
        try {
            o = JSON.parse(localStorage.getItem(this.identityStorageKey));
        }
        catch { }
        if (o && o.IdentityId)
            return [2, Promise.resolve(o)];
        l.label = 1;
    case 1: return l.trys.push([1, 4, , 5]), a = JSON.stringify(n), u = this.getHttpRequest(Sa, a), s = ct, [4, this.fetchRequestHandler.handle(u)];
    case 2: return [4, s.apply(void 0, [l.sent().response])];
    case 3:
        f = l.sent();
        try {
            localStorage.setItem(this.identityStorageKey, JSON.stringify({ IdentityId: f.IdentityId }));
        }
        catch { }
        return [2, f];
    case 4: throw c = l.sent(), new Error("CWR: Failed to retrieve Cognito identity: ".concat(c));
    case 5: return [2];
} }); }); }, this.getOpenIdToken = function (n) { return xr(e, void 0, void 0, function () { var o, a, u, f, s; return Ir(this, function (c) { switch (c.label) {
    case 0: return c.trys.push([0, 3, , 4]), o = JSON.stringify(n), a = this.getHttpRequest(xa, o), [4, this.fetchRequestHandler.handle(a)];
    case 1: return u = c.sent().response, f = this.validateOpenIdTokenResponse, [4, ct(u)];
    case 2: return [2, f.apply(this, [c.sent()])];
    case 3: throw s = c.sent(), localStorage.removeItem(this.identityStorageKey), new Error("CWR: Failed to retrieve Cognito OpenId token: ".concat(s));
    case 4: return [2];
} }); }); }, this.getCredentialsForIdentity = function (n) { return xr(e, void 0, void 0, function () { var o, a, u, f, s, c, l, d, h, p; return Ir(this, function (w) { switch (w.label) {
    case 0: return w.trys.push([0, 3, , 4]), o = JSON.stringify({ IdentityId: n }), a = this.getHttpRequest(Ia, o), [4, this.fetchRequestHandler.handle(a)];
    case 1: return u = w.sent().response, h = this.validateCredenentialsResponse, [4, ct(u)];
    case 2: return f = h.apply(this, [w.sent()]), s = f.AccessKeyId, c = f.Expiration, l = f.SecretKey, d = f.SessionToken, [2, { accessKeyId: s, secretAccessKey: l, sessionToken: d, expiration: new Date(c * 1e3) }];
    case 3: throw p = w.sent(), localStorage.removeItem(this.identityStorageKey), new Error("CWR: Failed to retrieve credentials for Cognito identity: ".concat(p));
    case 4: return [2];
} }); }); }, this.validateOpenIdTokenResponse = function (n) { if ("IdentityId" in n && "Token" in n)
    return n; throw n && "__type" in n && "message" in n ? new Error("".concat(n.__type, ": ").concat(n.message)) : new Error("Unknown OpenIdToken response"); }, this.validateCredenentialsResponse = function (n) { if ("IdentityId" in n && "Credentials" in n)
    return n.Credentials; throw n && "__type" in n && "message" in n ? new Error("".concat(n.__type, ": ").concat(n.message)) : new Error("Unknown Credentials response"); }, this.getHttpRequest = function (n, o) { return new k({ method: Ea, headers: { "content-type": Ta, "x-amz-target": n }, protocol: _a, hostname: e.hostname, body: o }); }, this.hostname = "cognito-identity.".concat(t.region, ".amazonaws.com"), this.fetchRequestHandler = t.fetchRequestHandler, this.identityStorageKey = !((r = t.clientConfig) === null || r === void 0) && r.cookieAttributes.unique ? "".concat(Tr, "_").concat(t.applicationId) : Tr; } return i; })();
var ft = function () { return ft = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, ft.apply(this, arguments); }, Cr = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, Ar = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, lt = (function () { function i(t, e) { var r = this; this.ChainAnonymousCredentialsProvider = function () { return Cr(r, void 0, void 0, function () { return Ar(this, function (o) { return [2, this.AnonymousCredentialsProvider().catch(this.AnonymousStorageCredentialsProvider).catch(this.AnonymousCognitoCredentialsProvider)]; }); }); }, this.AnonymousCredentialsProvider = function () { return Cr(r, void 0, void 0, function () { var o = this; return Ar(this, function (a) { return [2, new Promise(function (u, f) { if (o.renewCredentials())
        return f(); u(o.credentials); })]; }); }); }, this.AnonymousStorageCredentialsProvider = function () { return Cr(r, void 0, void 0, function () { var o = this; return Ar(this, function (a) { return [2, new Promise(function (u, f) { var s; try {
        s = JSON.parse(localStorage.getItem(o.credentialStorageKey));
    }
    catch {
        return f();
    } if (o.credentials = ft(ft({}, s), { expiration: new Date(s.expiration) }), o.renewCredentials())
        return f(); u(o.credentials); })]; }); }); }; var n = t.identityPoolId.split(":")[0]; this.config = t, this.cognitoIdentityClient = new Vn({ fetchRequestHandler: new pe, region: n, clientConfig: t, applicationId: e }), this.credentialStorageKey = this.config.cookieAttributes.unique ? "".concat(Er, "_").concat(e) : Er; } return i.prototype.renewCredentials = function () { if (!this.credentials || !this.credentials.expiration)
    return !0; var t = new Date(this.credentials.expiration.getTime() - jn); return new Date > t; }, i; })();
var Ca = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), Aa = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, Pa = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, Gn = (function (i) { Ca(t, i); function t(e, r) { var n = i.call(this, e, r) || this; n.AnonymousCognitoCredentialsProvider = function () { return Aa(n, void 0, void 0, function () { var a, u, f, s, c; return Pa(this, function (l) { switch (l.label) {
    case 0: a = 1, l.label = 1;
    case 1: l.label = 2;
    case 2: return l.trys.push([2, 6, , 7]), [4, this.cognitoIdentityClient.getId({ IdentityPoolId: this.config.identityPoolId })];
    case 3: return u = l.sent(), [4, this.cognitoIdentityClient.getOpenIdToken(u)];
    case 4: return f = l.sent(), [4, this.stsClient.assumeRoleWithWebIdentity({ RoleArn: this.config.guestRoleArn, RoleSessionName: "cwr", WebIdentityToken: f.Token })];
    case 5:
        s = l.sent(), this.credentials = s;
        try {
            localStorage.setItem(this.credentialStorageKey, JSON.stringify(s));
        }
        catch { }
        return [2, s];
    case 6:
        if (c = l.sent(), a)
            a--;
        else
            throw c;
        return [3, 7];
    case 7: return [3, 1];
    case 8: return [2];
} }); }); }; var o = e.identityPoolId.split(":")[0]; return n.stsClient = new Fn({ fetchRequestHandler: new pe, region: o }), n; } return t; })(lt);
var Ra = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), Oa = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, La = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, Wn = (function (i) { Ra(t, i); function t(e, r) { var n = i.call(this, e, r) || this; return n.AnonymousCognitoCredentialsProvider = function () { return Oa(n, void 0, void 0, function () { var o, a, u, f; return La(this, function (s) { switch (s.label) {
    case 0: o = 1, s.label = 1;
    case 1: s.label = 2;
    case 2: return s.trys.push([2, 5, , 6]), [4, this.cognitoIdentityClient.getId({ IdentityPoolId: this.config.identityPoolId })];
    case 3: return a = s.sent(), [4, this.cognitoIdentityClient.getCredentialsForIdentity(a.IdentityId)];
    case 4:
        u = s.sent(), this.credentials = u;
        try {
            localStorage.setItem(this.credentialStorageKey, JSON.stringify(u));
        }
        catch { }
        return [2, u];
    case 5:
        if (f = s.sent(), o)
            o--;
        else
            throw f;
        return [3, 6];
    case 6: return [3, 1];
    case 7: return [2];
} }); }); }, n; } return t; })(lt);
var N = "com.amazon.rum", zn = "com.amazonaws.rum", ge = "".concat(N, ".http_event"), dt = "".concat(N, ".xray_trace_event"), Kn = "".concat(N, ".largest_contentful_paint_event"), Xn = "".concat(N, ".first_input_delay_event"), Yn = "".concat(N, ".cumulative_layout_shift_event"), $n = "".concat(N, ".interaction_to_next_paint_event"), oe = "".concat(N, ".performance_navigation_event"), ht = "".concat(N, ".performance_resource_event"), Qn = "".concat(N, ".dom_event"), Jn = "".concat(N, ".js_error_event"), Zn = "".concat(N, ".page_view_event"), pt = "".concat(N, ".session_start_event"), ei = "".concat(N, ".time_to_interactive_event");
var P = (function () { function i(t) { this.enabled = !0, this.pluginId = i.generatePluginId(t); } return i.generatePluginId = function (t) { return "".concat(i.idPrefix, ".").concat(t); }, i.prototype.load = function (t) { var e; this.context = t, (e = this.onload) === null || e === void 0 || e.call(this); }, i.prototype.getPluginId = function () { return this.pluginId; }, i.idPrefix = zn, i; })();
var ti = (function () { function i(t) { this.context = t, this.plugins = new Map; } return i.prototype.addPlugin = function (t) { var e = t.getPluginId(); if (this.hasPlugin(e))
    throw new Error('Plugin "'.concat(e, '" already defined in the PluginManager')); this.plugins.set(e, t), t.load(this.context); }, i.prototype.updatePlugin = function (t, e) { var r, n = this.getPlugin(t); (r = n?.update) === null || r === void 0 || r.call(n, e); }, i.prototype.enable = function () { this.plugins.forEach(function (t) { return t.enable(); }); }, i.prototype.disable = function () { this.plugins.forEach(function (t) { return t.disable(); }); }, i.prototype.hasPlugin = function (t) { return !!this.getPlugin(t); }, i.prototype.record = function (t, e) { var r = this.getPlugin(t); if (r?.record instanceof Function)
    r.record(e);
else
    throw new Error("AWS RUM Client record: Invalid plugin ID"); }, i.prototype.getPlugin = function (t) { var e; return (e = this.plugins.get(t)) !== null && e !== void 0 ? e : this.plugins.get(P.generatePluginId(t)); }, i; })();
var ka = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), ae = function () { return ae = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, ae.apply(this, arguments); }, Pr = "dom-event", Na = { interactionId: function () { return ""; }, enableMutationObserver: !1, events: [] }, ri = (function (i) { ka(t, i); function t(e) { var r = i.call(this, Pr) || this; return r.enabled = !1, r.eventListenerMap = new Map, r.config = ae(ae({}, Na), e), r; } return t.getElementInfo = function (e) { var r = { name: "UNKNOWN" }; return e.target instanceof Node && (r.name = e.target.nodeName), e.target instanceof Element && e.target.id && (r.id = e.target.id), r; }, t.prototype.enable = function () { var e = this; if (document.readyState !== "complete") {
    window.addEventListener("load", function () { return e.enable(); });
    return;
} this.enabled || (this.addListeners(), this.config.enableMutationObserver && this.observeDOMMutation(), this.enabled = !0); }, t.prototype.disable = function () { this.enabled && (this.removeListeners(), this.observer && this.observer.disconnect(), this.enabled = !1); }, t.prototype.update = function (e) { var r = this; e.forEach(function (n) { r.addEventHandler(n), r.config.events.push(n); }); }, t.prototype.onload = function () { this.enable(); }, t.prototype.removeListeners = function () { var e = this; this.config.events.forEach(function (r) { return e.removeEventHandler(r); }); }, t.prototype.addListeners = function () { var e = this; this.config.events.forEach(function (r) { return e.addEventHandler(r); }); }, t.prototype.getEventListener = function (e) { var r = this; return function (n) { var o, a = t.getElementInfo(n), u = r.config.interactionId(n), f = ae(ae(ae({ version: "1.1.0", event: n.type, element: a.name }, a.id ? { elementId: a.id } : {}), u ? { interactionId: u } : {}), e ? { cssLocator: e } : {}); !((o = r.context) === null || o === void 0) && o.record && r.context.record(Qn, f); }; }, t.prototype.addEventHandler = function (e) { var r = e.event, n = this.getEventListener(e.cssLocator), o = [], a = this.eventListenerMap.has(e) ? this.eventListenerMap.get(e) : []; if (e.cssLocator) {
    var u = document.querySelectorAll(e.cssLocator);
    u.forEach(function (s) { o.push(s); });
}
else if (e.elementId) {
    var f = document.getElementById(e.elementId);
    f && o.push(f);
}
else
    e.element && o.push(e.element); o.forEach(function (s) { s.addEventListener(r, n), a.push({ element: s, eventListener: n }); }), this.eventListenerMap.set(e, a); }, t.prototype.removeEventHandler = function (e) { var r = this.eventListenerMap.get(e); r && (r.forEach(function (n) { var o = n.element, a = n.eventListener; o.removeEventListener(e.event, a); }), this.eventListenerMap.delete(e)); }, t.prototype.observeDOMMutation = function () { var e = this; this.observer = new MutationObserver(function () { e.removeListeners(), e.addListeners(); }), this.observer.observe(document, { childList: !0, subtree: !0 }); }, t; })(P);
var Ma = function (i) { var t = typeof i; return (t === "object" || t === "function") && !!i; }, Ha = function (i) { var t = { version: "1.0.0", type: "undefined", message: "undefined" }; return i.type !== void 0 && (t.type = i.type), i.message !== void 0 && (t.message = i.message), i.filename !== void 0 && (t.filename = i.filename), i.lineno !== void 0 && (t.lineno = i.lineno), i.colno !== void 0 && (t.colno = i.colno), t; }, Da = function (i, t) { i.type !== "unhandledrejection" && (i.type = t.toString()), i.message = t.toString(); }, Ua = function (i, t, e) { t.name && (i.type = t.name), t.message && (i.message = t.message), t.fileName && (i.filename = t.fileName), t.lineNumber && (i.lineno = t.lineNumber), t.columnNumber && (i.colno = t.columnNumber), e && t.stack && (i.stack = t.stack.length > e ? t.stack.substring(0, e) + "..." : t.stack); }, Rr = function (i) { return i !== Object(i) && i !== void 0 && i !== null; }, ye = function (i, t) { var e = Ha(i), r = i.error; return Ma(r) ? Ua(e, r, t) : Rr(r) && Da(e, r), e; };
var Ba = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), vt = function () { return vt = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, vt.apply(this, arguments); }, Or = "js-error", Fa = { stackTraceLength: 1e3, ignore: function () { return !1; } }, ni = (function (i) { Ba(t, i); function t(e) { var r = i.call(this, Or) || this; return r.eventHandler = function (n) { r.config.ignore(n) || r.recordJsErrorEvent(n); }, r.promiseRejectEventHandler = function (n) { r.config.ignore(n) || r.recordJsErrorEvent({ type: n.type, error: n.reason }); }, r.config = vt(vt({}, Fa), e), r; } return t.prototype.enable = function () { this.enabled || (this.addEventHandler(), this.enabled = !0); }, t.prototype.disable = function () { this.enabled && (this.removeEventHandler(), this.enabled = !1); }, t.prototype.record = function (e) { e instanceof ErrorEvent ? this.recordJsErrorEvent(e) : this.recordJsErrorEvent({ type: "error", error: e }); }, t.prototype.onload = function () { this.addEventHandler(); }, t.prototype.recordJsErrorEvent = function (e) { var r; (r = this.context) === null || r === void 0 || r.record(Jn, ye(e, this.config.stackTraceLength)); }, t.prototype.addEventHandler = function () { window.addEventListener("error", this.eventHandler), window.addEventListener("unhandledrejection", this.promiseRejectEventHandler); }, t.prototype.removeEventHandler = function () { window.removeEventListener("error", this.eventHandler), window.removeEventListener("unhandledrejection", this.promiseRejectEventHandler); }, t; })(P);
var Lr = function (i, t, e, r, n) { var o = i + "="; o += t || "", n !== void 0 ? o += "; Expires=".concat(n.toUTCString()) : r !== void 0 && (o += "; Expires=".concat(ja(r).toUTCString())), o += "; Domain=".concat(e.domain), o += "; Path=".concat(e.path), o += "; SameSite=".concat(e.sameSite), o += e.secure ? "; Secure" : "", document.cookie = o; }, ja = function (i) { return new Date(new Date().getTime() + i * 1e3); };
var kr = function (i) { for (var t = document.cookie.split("; "), e = 0, r = t; e < r.length; e++) {
    var n = r[e], o = n.split("=");
    if (o[0] === i)
        return o[1];
} return ""; };
var oi = yr(ii());
var yt = function () { return yt = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, yt.apply(this, arguments); }, je = "00000000-0000-0000-0000-000000000000", gt = "unknown", qa = "desktop", Va = "web";
var ai = (function () { function i(t, e, r, n) { this.appMonitorDetails = t, this.config = e, this.recordEvent = r, this.pageManager = n, this.sessionCookieName = this.config.cookieAttributes.unique ? "".concat(_r, "_").concat(this.appMonitorDetails.id) : _r, this.session = { sessionId: je, record: this.sample(), eventCount: 0 }, this.initializeUser(), this.collectAttributes(), this.addSessionAttributes(this.config.sessionAttributes), this.getSessionFromCookie(); } return i.prototype.isSampled = function () { return this.session.record; }, i.prototype.getSession = function () { return this.session.sessionId === je ? this.createSession() : this.session.sessionId !== je && new Date >= this.sessionExpiry && this.createSession(), this.session; }, i.prototype.getAttributes = function () { return this.attributes; }, i.prototype.addSessionAttributes = function (t) { this.attributes = yt(yt({}, this.attributes), t); }, i.prototype.getUserId = function () { return this.useCookies() ? this.userId : je; }, i.prototype.incrementSessionEventCount = function () { this.session.eventCount++, this.renewSession(); }, i.prototype.isLimitExceeded = function () { return this.session.eventCount >= this.config.sessionEventLimit && this.config.sessionEventLimit > 0; }, i.prototype.canRecord = function () { return this.session.record && !this.isLimitExceeded(); }, i.prototype.initializeUser = function () { var t = ""; this.userExpiry = new Date, this.userExpiry.setDate(this.userExpiry.getDate() + this.config.userIdRetentionDays), this.config.userIdRetentionDays <= 0 ? this.userId = "00000000-0000-0000-0000-000000000000" : this.useCookies() ? (t = this.getUserIdCookie(), this.userId = t || $(), this.createOrRenewUserCookie(t, this.userExpiry)) : this.userId = $(); }, i.prototype.createOrRenewSessionCookie = function (t, e) { btoa && Lr(this.sessionCookieName, btoa(JSON.stringify(t)), this.config.cookieAttributes, void 0, e); }, i.prototype.createOrRenewUserCookie = function (t, e) { Lr(Sr, t, this.config.cookieAttributes, void 0, e); }, i.prototype.getUserIdCookie = function () { return kr(Sr); }, i.prototype.getSessionFromCookie = function () { if (this.useCookies()) {
    var t = kr(this.sessionCookieName);
    if (t && atob)
        try {
            this.session = JSON.parse(atob(t)), this.pageManager.resumeSession(this.session.page);
        }
        catch { }
} }, i.prototype.storeSessionAsCookie = function () { this.useCookies() && this.config.userIdRetentionDays > 0 && this.createOrRenewUserCookie(this.userId, this.userExpiry), this.useCookies() && this.createOrRenewSessionCookie(this.session, this.sessionExpiry); }, i.prototype.createSession = function () { this.session = { sessionId: $(), record: this.session.sessionId === je ? this.session.record : this.sample(), eventCount: 0 }, this.session.page = this.pageManager.getPage(), this.sessionExpiry = new Date(new Date().getTime() + this.config.sessionLengthSeconds * 1e3), this.storeSessionAsCookie(), this.recordEvent(pt, { version: "1.0.0" }); }, i.prototype.renewSession = function () { this.sessionExpiry = new Date(new Date().getTime() + this.config.sessionLengthSeconds * 1e3), this.session.page = this.pageManager.getPage(), this.storeSessionAsCookie(); }, i.prototype.collectAttributes = function () { var t = new oi.UAParser(navigator.userAgent).getResult(); this.attributes = { browserLanguage: navigator.language, browserName: t.browser.name ? t.browser.name : gt, browserVersion: t.browser.version ? t.browser.version : gt, osName: t.os.name ? t.os.name : gt, osVersion: t.os.version ? t.os.version : gt, deviceType: t.device.type ? t.device.type : qa, platformType: Va, domain: window.location.hostname, "aws:releaseId": this.config.releaseId }; }, i.prototype.useCookies = function () { return navigator.cookieEnabled && this.config.allowCookies; }, i.prototype.sample = function () { return Math.random() < this.config.sessionSampleRate; }, i; })();
var be = yr(fi());
var za = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), J = (function (i) { za(t, i); function t() { var e = i !== null && i.apply(this, arguments) || this; return e.enable = e.patch.bind(e, !0), e.disable = e.patch.bind(e, !1), e.enabled = !1, e; } return t.prototype.patchAll = function () { for (var e = be.wrap.bind(be), r = 0, n = this.patches; r < n.length; r++) {
    var o = n[r];
    e(o.nodule, o.name, o.wrapper());
} }, t.prototype.unpatchAll = function () { for (var e = be.unwrap.bind(be), r = 0, n = this.patches; r < n.length; r++) {
    var o = n[r];
    e(o.nodule, o.name);
} }, t.prototype.patch = function (e) { e === void 0 && (e = !0), this.enabled !== e && (this.enabled = e, e ? this.patchAll() : this.unpatchAll()); }, t; })(P);
var Ka = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), li = (function (i) { Ka(t, i); function t(e, r, n) { var o = i.call(this, "virtual-page-load-timer") || this; return o.sendWrapper = function () { var a = o; return function (u) { return function () { return a.recordXhr(this), this.addEventListener("loadend", a.endTracking), u.apply(this, arguments); }; }; }, o.endTracking = function (a) { var u = Date.now(), f = a.target; f.removeEventListener("loadend", o.endTracking), o.removeXhr(f, u); }, o.fetch = function (a, u, f) { return a.apply(u, f).catch(function (s) { throw s; }).finally(o.decrementFetchCounter); }, o.fetchWrapper = function () { var a = o; return function (u) { return function (f, s) { return a.fetchCounter += 1, a.fetch(u, this, arguments); }; }; }, o.decrementFetchCounter = function () { o.isPageLoaded || (o.latestEndTime = Date.now()), o.fetchCounter -= 1; }, o.checkLoadStatus = function () { o.ongoingRequests.size === 0 && o.fetchCounter === 0 && (clearInterval(o.periodicCheckerId), clearTimeout(o.timeoutCheckerId), o.domMutationObserver.disconnect(), o.recordRouteChangeNavigationEvent(o.pageManager.getPage()), o.periodicCheckerId = void 0, o.timeoutCheckerId = void 0, o.isPageLoaded = !0); }, o.declareTimeout = function () { clearInterval(o.periodicCheckerId), o.periodicCheckerId = void 0, o.timeoutCheckerId = void 0, o.domMutationObserver.disconnect(), o.isPageLoaded = !0; }, o.resetInterval = function () { o.latestEndTime = Date.now(), clearInterval(o.periodicCheckerId), o.periodicCheckerId = setInterval(o.checkLoadStatus, o.config.routeChangeComplete); }, o.moveItemsFromBuffer = function (a) { o.ongoingRequests.add(a); }, o.updateLatestInteractionTime = function (a) { o.latestInteractionTime = Date.now(); }, o.periodicCheckerId = void 0, o.timeoutCheckerId = void 0, o.domMutationObserver = new MutationObserver(o.resetInterval), o.ongoingRequests = new Set, o.requestBuffer = new Set, o.fetchCounter = 0, o.isPageLoaded = !0, o.latestEndTime = 0, o.latestInteractionTime = 0, o.config = r, o.pageManager = e, o.record = n, o.enable(), document.addEventListener("mousedown", o.updateLatestInteractionTime), document.addEventListener("keydown", o.updateLatestInteractionTime), o; } return Object.defineProperty(t.prototype, "patches", { get: function () { return [{ nodule: XMLHttpRequest.prototype, name: "send", wrapper: this.sendWrapper }, { nodule: window, name: "fetch", wrapper: this.fetchWrapper }]; }, enumerable: !1, configurable: !0 }), t.prototype.startTiming = function () { this.latestEndTime = Date.now(), this.periodicCheckerId && clearInterval(this.periodicCheckerId), this.timeoutCheckerId && clearTimeout(this.timeoutCheckerId), this.domMutationObserver.disconnect(), this.periodicCheckerId = setInterval(this.checkLoadStatus, this.config.routeChangeComplete), this.timeoutCheckerId = setTimeout(this.declareTimeout, this.config.routeChangeTimeout), this.domMutationObserver.observe(document, { subtree: !0, childList: !0, attributes: !1, characterData: !1 }), this.isPageLoaded = !1, this.requestBuffer.forEach(this.moveItemsFromBuffer), this.requestBuffer.clear(); }, t.prototype.recordXhr = function (e) { var r = this.pageManager.getPage(); r && this.isPageLoaded === !1 ? this.ongoingRequests.add(e) : this.requestBuffer.add(e); }, t.prototype.removeXhr = function (e, r) { var n = this.pageManager.getPage(); n && this.ongoingRequests.has(e) ? (this.ongoingRequests.delete(e), this.latestEndTime = r) : this.requestBuffer.has(e) && this.requestBuffer.delete(e); }, t.prototype.recordRouteChangeNavigationEvent = function (e) { var r = { version: "1.0.0", initiatorType: "route_change", navigationType: "navigate", startTime: e.start, duration: this.latestEndTime - e.start }; this.record && this.record(oe, r); }, t; })(J);
var bt = function () { return bt = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, bt.apply(this, arguments); }, di = (function () { function i(t, e) { this.TIMEOUT = 1e3, this.config = t, this.record = e, this.page = void 0, this.resumed = !1, this.recordInteraction = !1, this.virtualPageLoadTimer = new li(this, t, e); } return i.prototype.getPage = function () { return this.page; }, i.prototype.getAttributes = function () { return this.attributes; }, i.prototype.resumeSession = function (t) { this.recordInteraction = !0, t && (this.page = t, this.resumed = !0); }, i.prototype.recordPageView = function (t) { var e; if (typeof t == "string" ? e = t : e = t.pageId, this.useCookies() && (this.recordInteraction = !0), !this.page)
    this.createLandingPage(e);
else if (this.page.pageId !== e)
    this.createNextPage(this.page, e);
else if (this.resumed) {
    this.collectAttributes(this.page, typeof t == "object" ? t : void 0);
    return;
}
else
    return; this.collectAttributes(this.page, typeof t == "object" ? t : void 0), this.recordPageViewEvent(this.page); }, i.prototype.createNextPage = function (t, e) { var r = Date.now(), n = this.virtualPageLoadTimer.latestInteractionTime; !this.resumed && r - n <= this.TIMEOUT && (r = n, this.virtualPageLoadTimer.startTiming()), this.timeOnParentPage = r - t.start, this.resumed = !1, this.page = { pageId: e, parentPageId: t.pageId, interaction: t.interaction + 1, referrer: document.referrer, referrerDomain: this.getDomainFromReferrer(), start: r }; }, i.prototype.createLandingPage = function (t) { this.page = { pageId: t, interaction: 0, referrer: document.referrer, referrerDomain: this.getDomainFromReferrer(), start: Date.now() }; }, i.prototype.collectAttributes = function (t, e) { var r; this.attributes = { title: !((r = e?.pageAttributes) === null || r === void 0) && r.title ? e.pageAttributes.title : document.title, pageId: t.pageId }, this.recordInteraction && (this.attributes.interaction = t.interaction, t.parentPageId !== void 0 && (this.attributes.parentPageId = t.parentPageId)), e?.pageTags && (this.attributes.pageTags = e.pageTags), e?.pageAttributes && (this.attributes = bt(bt({}, e.pageAttributes), this.attributes)); }, i.prototype.createPageViewEvent = function (t) { var e = { version: "1.0.0", pageId: t.pageId }; return this.recordInteraction && (e.interaction = t.interaction, e.pageInteractionId = t.pageId + "-" + t.interaction, t.parentPageId !== void 0 && (e.parentPageInteractionId = t.parentPageId + "-" + (t.interaction - 1), e.timeOnParentPage = this.timeOnParentPage), e.referrer = document.referrer, e.referrerDomain = this.getDomainFromReferrer()), e; }, i.prototype.recordPageViewEvent = function (t) { this.record(Zn, this.createPageViewEvent(t)); }, i.prototype.useCookies = function () { return navigator.cookieEnabled && this.config.allowCookies; }, i.prototype.getDomainFromReferrer = function () { try {
    return new URL(document.referrer).hostname;
}
catch {
    return document.referrer === "localhost" ? document.referrer : "";
} }, i; })();
var we = (function (i) { return i.EVENT = "event", i; })(we || {}), Xa = (function () { function i() { this.subscribers = new Map; } return i.prototype.subscribe = function (t, e) { var r, n = (r = this.subscribers.get(t)) !== null && r !== void 0 ? r : []; n.length || this.subscribers.set(t, n), n.push(e); }, i.prototype.unsubscribe = function (t, e) { var r = this.subscribers.get(t); if (r) {
    for (var n = 0; n < r.length; n++)
        if (r[n] === e)
            return r.splice(n, 1), !0;
} return !1; }, i.prototype.dispatch = function (t, e) { var r = this.subscribers.get(t); if (r)
    for (var n = 0, o = r; n < o.length; n++) {
        var a = o[n];
        a(e);
    } }, i; })(), wt = Xa;
var K = function () { return K = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, K.apply(this, arguments); }, Ya = "1.25.0", hi = (function () { function i(t, e, r) { r === void 0 && (r = new wt); var n = this; this.eventBus = r, this.events = [], this.candidates = new Map, this.recordPageView = function (o) { n.isCurrentUrlAllowed() && n.pageManager.recordPageView(o); }, this.recordEvent = function (o, a) { n.enabled && n.isCurrentUrlAllowed() && (o !== pt && n.sessionManager.getSession(), n.sessionManager.canRecord() && (n.sessionManager.incrementSessionEventCount(), n.addRecordToCache(o, a))); }, this.recordCandidate = function (o, a) { var u = n.sessionManager.getSession(); if (!(!n.enabled || !n.isCurrentUrlAllowed() || !u.record)) {
    var f = n.createEvent(o, a)[0];
    if (n.candidates.has(o)) {
        n.candidates.set(o, f);
        return;
    }
    n.candidates.size < n.config.candidatesCacheSize && !n.sessionManager.isLimitExceeded() && (n.candidates.set(o, f), n.sessionManager.incrementSessionEventCount());
} }, this.getSession = function () { if (n.isCurrentUrlAllowed())
    return n.sessionManager.getSession(); }, this.addRecordToCache = function (o, a) { if (n.enabled && n.events.length !== n.config.eventCacheSize) {
    var u = n.createEvent(o, a), f = u[0], s = u[1];
    n.eventBus.dispatch(we.EVENT, s), n.events.push(f);
} }, this.createEvent = function (o, a) { var u = K(K(K({}, n.sessionManager.getAttributes()), n.pageManager.getAttributes()), { version: "1.0.0", "aws:client": n.installationMethod, "aws:clientVersion": Ya }), f = { id: $(), timestamp: new Date, type: o }; return [K(K({}, f), { details: JSON.stringify(a), metadata: JSON.stringify(u) }), K(K({}, f), { details: a, metadata: u })]; }, this.appMonitorDetails = t, this.config = e, this.enabled = !0, this.pageManager = new di(e, this.recordEvent), this.sessionManager = new ai(t, e, this.recordEvent, this.pageManager), this.installationMethod = e.client; } return i.prototype.enable = function () { this.enabled = !0; }, i.prototype.disable = function () { this.enabled = !1; }, i.prototype.isSessionSampled = function () { return this.sessionManager.isSampled(); }, i.prototype.hasEvents = function () { return this.events.length !== 0; }, i.prototype.hasCandidates = function () { return this.candidates.size !== 0; }, i.prototype.getEventBatch = function (t) { t === void 0 && (t = !1); var e = []; if (t && this.hasCandidates())
    if (this.candidates.size <= this.config.batchLimit)
        e = Array.from(this.candidates.values()), this.candidates.clear();
    else
        for (var r = 0, n = 0, o = Array.from(this.candidates.keys()); n < o.length; n++) {
            var a = o[n];
            if (r++ >= this.config.batchLimit)
                break;
            var u = this.candidates.get(a);
            u && (e.push(u), this.candidates.delete(a));
        } return this.events.length && (this.events.length <= this.config.batchLimit - e.length ? (e.push.apply(e, this.events), this.events = []) : e.push.apply(e, this.events.splice(0, this.config.batchLimit - e.length))), e; }, i.prototype.getAppMonitorDetails = function () { return this.appMonitorDetails; }, i.prototype.getUserDetails = function () { return { userId: this.sessionManager.getUserId(), sessionId: this.sessionManager.getSession().sessionId }; }, i.prototype.addSessionAttributes = function (t) { this.sessionManager.addSessionAttributes(t); }, i.prototype.isCurrentUrlAllowed = function () { var t = document.location.toString(), e = this.config.pagesToExclude.some(function (n) { return n.test(t); }), r = this.config.pagesToInclude.some(function (n) { return n.test(t); }); return r && !e; }, i; })();
var pi = {}, Mr = {};
for (let i = 0; i < 256; i++) {
    let t = i.toString(16).toLowerCase();
    t.length === 1 && (t = `0${t}`), pi[i] = t, Mr[t] = i;
}
function vi(i) { if (i.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length"); let t = new Uint8Array(i.length / 2); for (let e = 0; e < i.length; e += 2) {
    let r = i.slice(e, e + 2).toLowerCase();
    if (r in Mr)
        t[e / 2] = Mr[r];
    else
        throw new Error(`Cannot decode unrecognized sequence ${r} as hexadecimal`);
} return t; }
function M(i) { let t = ""; for (let e = 0; e < i.byteLength; e++)
    t += pi[i[e]]; return t; }
var Hr = i => { if (typeof i == "function")
    return i; let t = Promise.resolve(i); return () => t; };
var mi = "X-Amz-Algorithm", gi = "X-Amz-Credential", Dr = "X-Amz-Date", yi = "X-Amz-SignedHeaders", bi = "X-Amz-Expires", Ur = "X-Amz-Signature", Br = "X-Amz-Security-Token";
var Fr = "authorization", jr = Dr.toLowerCase(), $a = "date", wi = [Fr, jr, $a], Ei = Ur.toLowerCase(), Ge = "x-amz-content-sha256", Ti = Br.toLowerCase();
var _i = { authorization: !0, "cache-control": !0, connection: !0, expect: !0, from: !0, "keep-alive": !0, "max-forwards": !0, pragma: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, "x-amzn-trace-id": !0 }, Si = /^proxy-/, xi = /^sec-/;
var Et = "AWS4-HMAC-SHA256";
var Ii = "AWS4-HMAC-SHA256-PAYLOAD", Ci = "UNSIGNED-PAYLOAD", Ai = 50, qr = "aws4_request", Pi = 3600 * 24 * 7;
var Tt = {}, Vr = [], _t = (i, t, e) => `${i}/${t}/${e}/${qr}`, Oi = (i, t, e, r, n) => A(null, null, function* () { let o = yield Ri(i, t.secretAccessKey, t.accessKeyId), a = `${e}:${r}:${n}:${M(o)}:${t.sessionToken}`; if (a in Tt)
    return Tt[a]; for (Vr.push(a); Vr.length > Ai;)
    delete Tt[Vr.shift()]; let u = `AWS4${t.secretAccessKey}`; for (let f of [e, r, n, qr])
    u = yield Ri(i, u, f); return Tt[a] = u; });
var Ri = (i, t, e) => { let r = new i(t); return r.update(Q(e)), r.digest(); };
var St = ({ headers: i }, t, e) => { let r = {}; for (let n of Object.keys(i).sort()) {
    if (i[n] == null)
        continue;
    let o = n.toLowerCase();
    (o in _i || t?.has(o) || Si.test(o) || xi.test(o)) && (!e || e && !e.has(o)) || (r[o] = i[n].trim().replace(/\s+/g, " "));
} return r; };
var Gr = ({ query: i = {} }) => { let t = [], e = {}; for (let r of Object.keys(i)) {
    if (r.toLowerCase() === Ei)
        continue;
    let n = U(r);
    t.push(n);
    let o = i[r];
    typeof o == "string" ? e[n] = `${n}=${U(o)}` : Array.isArray(o) && (e[n] = o.slice(0).reduce((a, u) => a.concat([`${n}=${U(u)}`]), []).sort().join("&"));
} return t.sort().map(r => e[r]).filter(r => r).join("&"); };
var Li = i => typeof ArrayBuffer == "function" && i instanceof ArrayBuffer || Object.prototype.toString.call(i) === "[object ArrayBuffer]";
var We = (r, n) => A(null, [r, n], function* ({ headers: i, body: t }, e) { for (let o of Object.keys(i))
    if (o.toLowerCase() === Ge)
        return i[o]; if (t == null)
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; if (typeof t == "string" || ArrayBuffer.isView(t) || Li(t)) {
    let o = new e;
    return o.update(Q(t)), M(yield o.digest());
} return Ci; });
var xt = class {
    format(t) { let e = []; for (let o of Object.keys(t)) {
        let a = me(o);
        e.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(t[o]));
    } let r = new Uint8Array(e.reduce((o, a) => o + a.byteLength, 0)), n = 0; for (let o of e)
        r.set(o, n), n += o.byteLength; return r; }
    formatHeaderValue(t) { switch (t.type) {
        case "boolean": return Uint8Array.from([t.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, t.value]);
        case "short":
            let e = new DataView(new ArrayBuffer(3));
            return e.setUint8(0, 3), e.setInt16(1, t.value, !1), new Uint8Array(e.buffer);
        case "integer":
            let r = new DataView(new ArrayBuffer(5));
            return r.setUint8(0, 4), r.setInt32(1, t.value, !1), new Uint8Array(r.buffer);
        case "long":
            let n = new Uint8Array(9);
            return n[0] = 5, n.set(t.value.bytes, 1), n;
        case "binary":
            let o = new DataView(new ArrayBuffer(3 + t.value.byteLength));
            o.setUint8(0, 6), o.setUint16(1, t.value.byteLength, !1);
            let a = new Uint8Array(o.buffer);
            return a.set(t.value, 3), a;
        case "string":
            let u = me(t.value), f = new DataView(new ArrayBuffer(3 + u.byteLength));
            f.setUint8(0, 7), f.setUint16(1, u.byteLength, !1);
            let s = new Uint8Array(f.buffer);
            return s.set(u, 3), s;
        case "timestamp":
            let c = new Uint8Array(9);
            return c[0] = 8, c.set(Wr.fromNumber(t.value.valueOf()).bytes, 1), c;
        case "uuid":
            if (!Qa.test(t.value))
                throw new Error(`Invalid UUID received: ${t.value}`);
            let l = new Uint8Array(17);
            return l[0] = 9, l.set(vi(t.value.replace(/\-/g, "")), 1), l;
    } }
};
var Qa = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/, Wr = class i {
    constructor(t) { if (this.bytes = t, t.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(t) { if (t > 9223372036854776e3 || t < -9223372036854776e3)
        throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`); let e = new Uint8Array(8); for (let r = 7, n = Math.abs(Math.round(t)); r > -1 && n > 0; r--, n /= 256)
        e[r] = n; return t < 0 && ki(e), new i(e); }
    valueOf() { let t = this.bytes.slice(0), e = t[0] & 128; return e && ki(t), parseInt(M(t), 16) * (e ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function ki(i) { for (let t = 0; t < 8; t++)
    i[t] ^= 255; for (let t = 7; t > -1 && (i[t]++, i[t] === 0); t--)
    ; }
var Ni = (i, t) => { i = i.toLowerCase(); for (let e of Object.keys(t))
    if (i === e.toLowerCase())
        return !0; return !1; };
var zr = (i, t = {}) => { let { headers: e, query: r = {} } = k.clone(i); for (let n of Object.keys(e)) {
    let o = n.toLowerCase();
    (o.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(o) || t.hoistableHeaders?.has(o)) && (r[n] = e[n], delete e[n]);
} return Be(de({}, i), { headers: e, query: r }); };
var It = i => { i = k.clone(i); for (let t of Object.keys(i.headers))
    wi.indexOf(t.toLowerCase()) > -1 && delete i.headers[t]; return i; };
var Mi = i => Ja(i).toISOString().replace(/\.\d{3}Z$/, "Z"), Ja = i => typeof i == "number" ? new Date(i * 1e3) : typeof i == "string" ? Number(i) ? new Date(Number(i) * 1e3) : new Date(i) : i;
var At = class {
    constructor({ applyChecksum: t, credentials: e, region: r, service: n, sha256: o, uriEscapePath: a = !0 }) { this.headerFormatter = new xt, this.service = n, this.sha256 = o, this.uriEscapePath = a, this.applyChecksum = typeof t == "boolean" ? t : !0, this.regionProvider = Hr(r), this.credentialProvider = Hr(e); }
    presign(r) { return A(this, arguments, function* (t, e = {}) { let { signingDate: n = new Date, expiresIn: o = 3600, unsignableHeaders: a, unhoistableHeaders: u, signableHeaders: f, hoistableHeaders: s, signingRegion: c, signingService: l } = e, d = yield this.credentialProvider(); this.validateResolvedCredentials(d); let h = c ?? (yield this.regionProvider()), { longDate: p, shortDate: w } = Ct(n); if (o > Pi)
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future"); let E = _t(w, h, l ?? this.service), m = zr(It(t), { unhoistableHeaders: u, hoistableHeaders: s }); d.sessionToken && (m.query[Br] = d.sessionToken), m.query[mi] = Et, m.query[gi] = `${d.accessKeyId}/${E}`, m.query[Dr] = p, m.query[bi] = o.toString(10); let v = St(m, a, f); return m.query[yi] = Hi(v), m.query[Ur] = yield this.getSignature(p, E, this.getSigningKey(d, h, w, l), this.createCanonicalRequest(m, v, yield We(t, this.sha256))), m; }); }
    sign(t, e) { return A(this, null, function* () { return typeof t == "string" ? this.signString(t, e) : t.headers && t.payload ? this.signEvent(t, e) : t.message ? this.signMessage(t, e) : this.signRequest(t, e); }); }
    signEvent(u, f) {
        return A(this, arguments, function* ({ headers: t, payload: e }, { signingDate: r = new Date, priorSignature: n, signingRegion: o, signingService: a }) {
            let s = o ?? (yield this.regionProvider()), { shortDate: c, longDate: l } = Ct(r), d = _t(c, s, a ?? this.service), h = yield We({ headers: {}, body: e }, this.sha256), p = new this.sha256;
            p.update(t);
            let w = M(yield p.digest()), E = [Ii, l, d, n, w, h].join(`
`);
            return this.signString(E, { signingDate: r, signingRegion: s, signingService: a });
        });
    }
    signMessage(o, a) { return A(this, arguments, function* (t, { signingDate: e = new Date, signingRegion: r, signingService: n }) { return this.signEvent({ headers: this.headerFormatter.format(t.message.headers), payload: t.message.body }, { signingDate: e, signingRegion: r, signingService: n, priorSignature: t.priorSignature }).then(f => ({ message: t.message, signature: f })); }); }
    signString(o) { return A(this, arguments, function* (t, { signingDate: e = new Date, signingRegion: r, signingService: n } = {}) { let a = yield this.credentialProvider(); this.validateResolvedCredentials(a); let u = r ?? (yield this.regionProvider()), { shortDate: f } = Ct(e), s = new this.sha256(yield this.getSigningKey(a, u, f, n)); return s.update(Q(t)), M(yield s.digest()); }); }
    signRequest(u) { return A(this, arguments, function* (t, { signingDate: e = new Date, signableHeaders: r, unsignableHeaders: n, signingRegion: o, signingService: a } = {}) { let f = yield this.credentialProvider(); this.validateResolvedCredentials(f); let s = o ?? (yield this.regionProvider()), c = It(t), { longDate: l, shortDate: d } = Ct(e), h = _t(d, s, a ?? this.service); c.headers[jr] = l, f.sessionToken && (c.headers[Ti] = f.sessionToken); let p = yield We(c, this.sha256); !Ni(Ge, c.headers) && this.applyChecksum && (c.headers[Ge] = p); let w = St(c, n, r), E = yield this.getSignature(l, h, this.getSigningKey(f, s, d, a), this.createCanonicalRequest(c, w, p)); return c.headers[Fr] = `${Et} Credential=${f.accessKeyId}/${h}, SignedHeaders=${Hi(w)}, Signature=${E}`, c; }); }
    createCanonicalRequest(t, e, r) {
        let n = Object.keys(e).sort();
        return `${t.method}
${this.getCanonicalPath(t)}
${Gr(t)}
${n.map(o => `${o}:${e[o]}`).join(`
`)}

${n.join(";")}
${r}`;
    }
    createStringToSign(t, e, r) {
        return A(this, null, function* () {
            let n = new this.sha256;
            n.update(Q(r));
            let o = yield n.digest();
            return `${Et}
${t}
${e}
${M(o)}`;
        });
    }
    getCanonicalPath({ path: t }) { if (this.uriEscapePath) {
        let e = [];
        for (let o of t.split("/"))
            o?.length !== 0 && o !== "." && (o === ".." ? e.pop() : e.push(o));
        let r = `${t?.startsWith("/") ? "/" : ""}${e.join("/")}${e.length > 0 && t?.endsWith("/") ? "/" : ""}`;
        return U(r).replace(/%2F/g, "/");
    } return t; }
    getSignature(t, e, r, n) { return A(this, null, function* () { let o = yield this.createStringToSign(t, e, n), a = new this.sha256(yield r); return a.update(Q(o)), M(yield a.digest()); }); }
    getSigningKey(t, e, r, n) { return Oi(this.sha256, t, r, e, n || this.service); }
    validateResolvedCredentials(t) { if (typeof t != "object" || typeof t.accessKeyId != "string" || typeof t.secretAccessKey != "string")
        throw new Error("Resolved credential object is not valid"); }
}, Ct = i => { let t = Mi(i).replace(/[\-:]/g, ""); return { longDate: t, shortDate: t.slice(0, 8) }; }, Hi = i => Object.keys(i).sort().join(";");
var $r = yr(Fi());
var X = function () { return X = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, X.apply(this, arguments); }, kt = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, Nt = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, ns = "rum", is = "POST", os = "application/json", as = "text/plain;charset=UTF-8", ss = { expiresIn: 60 }, ji = (function () { function i(t) { var e = this; this.sendFetch = function (r) { return kt(e, void 0, void 0, function () { var n, o, a; return Nt(this, function (u) { switch (u.label) {
    case 0: return [4, this.getHttpRequestOptions(r, os)];
    case 1: return n = u.sent(), o = new k(n), this.awsSigV4 ? [4, this.awsSigV4.sign(o)] : [3, 3];
    case 2: o = u.sent(), u.label = 3;
    case 3: return a = this.config.fetchRequestHandler.handle(o), [2, a];
} }); }); }, this.sendBeacon = function (r) { return kt(e, void 0, void 0, function () { var n, o, a; return Nt(this, function (u) { switch (u.label) {
    case 0: return [4, this.getHttpRequestOptions(r, as)];
    case 1: return n = u.sent(), o = new k(n), this.awsSigV4 ? [4, this.awsSigV4.presign(o, ss)] : [3, 3];
    case 2: o = u.sent(), u.label = 3;
    case 3: return a = this.config.beaconRequestHandler.handle(o), [2, a];
} }); }); }, this.getHttpRequestOptions = function (r, n) { return kt(e, void 0, void 0, function () { var o, a, u, f, s, c, l, d; return Nt(this, function (h) { switch (h.label) {
    case 0: return o = JSON.stringify(cs(r)), a = this.config.endpoint.pathname.replace(/\/$/, ""), u = { method: is, protocol: this.config.endpoint.protocol, port: Number(this.config.endpoint.port) || void 0, headers: X({ "content-type": n, host: this.config.endpoint.host }, this.config.headers), hostname: this.config.endpoint.hostname, path: "".concat(a, "/appmonitors/").concat(r.AppMonitorDetails.id), body: o }, this.awsSigV4 ? (f = [X({}, u)], l = {}, s = [X({}, u.headers)], d = {}, c = "X-Amz-Content-Sha256", [4, fs(o)]) : [3, 2];
    case 1: return [2, X.apply(void 0, f.concat([(l.headers = X.apply(void 0, s.concat([(d[c] = h.sent(), d)])), l)]))];
    case 2: return [2, u];
} }); }); }, this.config = t, t.credentials && (this.awsSigV4 = new At({ applyChecksum: !0, credentials: t.credentials, region: t.region, service: ns, uriEscapePath: !0, sha256: $r.Sha256 })); } return i; })();
var cs = function (i) { var t = []; i.RumEvents.forEach(function (r) { return t.push(us(r)); }); var e = { BatchId: i.BatchId, AppMonitorDetails: i.AppMonitorDetails, UserDetails: i.UserDetails, RumEvents: t }; return i.Alias && (e = X(X({}, e), { Alias: i.Alias })), e; }, us = function (i) { return { id: i.id, timestamp: Math.round(i.timestamp.getTime() / 1e3), type: i.type, metadata: i.metadata, details: i.details }; }, fs = function (i) { return kt(void 0, void 0, void 0, function () { var t, e; return Nt(this, function (r) { switch (r.label) {
    case 0: return t = new $r.Sha256, t.update(i), e = M, [4, t.digest()];
    case 1: return [2, e.apply(void 0, [r.sent()]).toLowerCase()];
} }); }); };
function Mt(i) { let t = []; for (let e of Object.keys(i).sort()) {
    let r = i[e];
    if (e = st(e), Array.isArray(r))
        for (let n = 0, o = r.length; n < o; n++)
            t.push(`${e}=${st(r[n])}`);
    else {
        let n = e;
        (r || typeof r == "string") && (n += `=${st(r)}`), t.push(n);
    }
} return t.join("&"); }
var qi = (function () { function i() { } return i.prototype.handle = function (t) { var e = this.sendBeacon(t); return new Promise(function (r, n) { e ? r({ response: new V({ statusCode: 200 }) }) : n(); }); }, i.prototype.updateHttpClientConfig = function (t, e) { }, i.prototype.httpHandlerConfigs = function () { return {}; }, i.prototype.sendBeacon = function (t) { var e = t.path; if (t.query) {
    var r = Mt(t.query);
    r && (e += "?".concat(r));
} var n = t.port, o = "".concat(t.protocol, "//").concat(t.hostname).concat(n ? ":".concat(n) : "").concat(e); return navigator.sendBeacon(o, t.body); }, i; })();
var Vi = function (i) { return i === void 0 && (i = 0), new Promise(function (t, e) { i && setTimeout(function () { var r = new Error("Request did not complete within ".concat(i, " ms")); r.name = "TimeoutError", e(r); }, i); }); };
var Gi = (function () { function i(t) { var e = t === void 0 ? {} : t, r = e.fetchFunction, n = e.requestTimeout; this.requestTimeout = n, this.fetchFunction = r; } return i.prototype.destroy = function () { }, i.prototype.handle = function (t, e) { var r = e === void 0 ? {} : e, n = r.abortSignal, o = this.requestTimeout; if (n?.aborted) {
    var a = new Error("Request aborted");
    return a.name = "AbortError", Promise.reject(a);
} var u = t.path; if (t.query) {
    var f = Mt(t.query);
    f && (u += "?".concat(f));
} var s = t.port, c = t.method, l = "".concat(t.protocol, "//").concat(t.hostname).concat(s ? ":".concat(s) : "").concat(u), d = c === "GET" || c === "HEAD" ? void 0 : t.body, h = { body: d, headers: new Headers(t.headers), method: c }; typeof AbortController < "u" && (h.signal = n); var p = new Request(l, h), w = [this.fetchFunction.apply(window, [p]).then(function (E) { for (var m = E.headers, v = {}, x = 0, I = m.entries(); x < I.length; x++) {
        var R = I[x];
        v[R[0]] = R[1];
    } var F = E.body !== void 0; return F ? { response: new V({ headers: v, statusCode: E.status, body: E.body }) } : E.blob().then(function (ue) { return { response: new V({ headers: v, statusCode: E.status, body: ue }) }; }); }), Vi(o)]; return n && w.push(new Promise(function (E, m) { n.onabort = function () { var v = new Error("Request aborted"); v.name = "AbortError", m(v); }; })), Promise.race(w); }, i.prototype.updateHttpClientConfig = function (t, e) { }, i.prototype.httpHandlerConfigs = function () { return {}; }, i; })();
var Ht = function (i) { if (crypto)
    return crypto.getRandomValues(i); if (msCrypto)
    return msCrypto.getRandomValues(i); throw new Error("No crypto library found."); };
var Wi = [];
for (ze = 0; ze < 256; ze++)
    Wi[ze] = (ze + 256).toString(16).substr(1);
var ze, Ke = "X-Amzn-Trace-Id", Xe = "traceparent", ls = 2, ds = 32, hs = 16, ps = 4, Dt = function (i, t) { return Array.isArray(t) ? t.some(function (e) { return e.test(i); }) : t; }, Ut = { logicalServiceName: "rum.aws.amazon.com", urlsToInclude: [/.*/], urlsToExclude: [/cognito\-identity\.([^\.]*\.)?amazonaws\.com/, /sts\.([^\.]*\.)?amazonaws\.com/], stackTraceLength: 200, recordAllRequests: !1, addXRayTraceIdHeader: !1 }, zi = function (i) { return 200 <= i && i < 300; }, Bt = function (i) { return Math.floor(i / 100) === 4; }, Ee = function (i) { return Math.floor(i / 100) === 5; }, Te = function (i) { return i === 429; }, Ft = function (i, t) { var e = t.urlsToInclude.some(function (n) { return n.test(i); }), r = t.urlsToExclude.some(function (n) { return n.test(i); }); return e && !r; }, Z = function () { return Date.now() / 1e3; }, Ki = function (i, t, e) { var r = { request: {} }; return r.request.method = t?.method ? t.method : "GET", r.request.traced = e, r.request.url = Ye(i), r; }, jt = function (i, t, e, r) { var n = { version: "1.0.0", name: i, origin: "AWS::RUM::AppMonitor", id: Qi(), start_time: t, trace_id: e ? gs() : ms(), end_time: void 0, subsegments: [], in_progress: !1 }; return r && (n.http = r), n; }, qt = function (i, t, e) { var r = { id: Qi(), name: i, start_time: t, end_time: void 0, in_progress: !1, namespace: i.endsWith("amazonaws.com") ? "aws" : "remote" }; return e && (r.http = e), r; }, Vt = function (i) { try {
    return i.hostname ? i.hostname : i.url ? new URL(i.url).hostname : new URL(i.toString()).hostname;
}
catch {
    return window.location.hostname;
} }, Xi = function (i, t, e, r) { i.headers || (i.headers = {}), r ? i.headers[Xe] = Wt(t, e) : i.headers[Ke] = Gt(t, e); }, Yi = function (i, t, e, r) { r ? i.set(Xe, Wt(t, e)) : i.set(Ke, Gt(t, e)); }, Gt = function (i, t) { return "Root=" + i + ";Parent=" + t + ";Sampled=1"; }, Wt = function (i, t) { return "00-" + i + "-" + t + "-01"; }, vs = function (i) { return i?.length === ps && i[0].length === ls && i[1].length === ds && i[2].length === hs && (i[3] === "00" || i[3] === "01"); }, $i = function (i, t) { var e, r, n = {}; if (i)
    if (t) {
        var o = (e = i.get(Xe)) === null || e === void 0 ? void 0 : e.split("-");
        o && vs(o) && (n.traceId = o[1], n.segmentId = o[2]);
    }
    else {
        var o = (r = i.get(Ke)) === null || r === void 0 ? void 0 : r.split(";");
        o?.length === 3 && (n.traceId = o[0].split("Root=")[1], n.segmentId = o[1].split("Parent=")[1]);
    } return n; }, Ye = function (i) { return i.url ? i.url : i.toString(); }, ms = function () { return "1-".concat(ys(), "-").concat(bs()); }, gs = function () { var i = new Uint8Array(16); return Ht(i), "".concat(Qr(i)); }, Qi = function () { var i = new Uint8Array(8); return Ht(i), Qr(i); }, ys = function () { return Math.floor(Date.now() / 1e3).toString(16); }, bs = function () { var i = new Uint8Array(12); return Ht(i), Qr(i); }, Qr = function (i) { for (var t = "", e = 0; e < i.length; e++)
    t += Wi[i[e]]; return t; };
var Ji = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, Zi = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, eo = (function () { function i(t, e, r) { r === void 0 && (r = function (n) { return 2e3 * Math.pow(2, n - 1); }), this.handler = t, this.retries = e, this.backoff = r; } return i.prototype.handle = function (t) { return Ji(this, void 0, void 0, function () { var e, r, n; return Zi(this, function (o) { switch (o.label) {
    case 0: e = this.retries, o.label = 1;
    case 1: o.label = 2;
    case 2: return o.trys.push([2, 4, , 6]), [4, this.handler.handle(t)];
    case 3:
        if (r = o.sent(), zi(r.response.statusCode))
            return [2, r];
        throw r.response.statusCode;
    case 4:
        if (n = o.sent(), typeof n == "number" && !Te(n) && !Ee(n))
            throw new Error("".concat(n));
        if (e <= 0)
            throw n;
        return e--, [4, this.sleep(this.backoff(this.retries - e))];
    case 5: return o.sent(), [3, 6];
    case 6: return [3, 1];
    case 7: return [2];
} }); }); }, i.prototype.sleep = function (t) { return Ji(this, void 0, void 0, function () { return Zi(this, function (e) { return [2, new Promise(function (r) { return setTimeout(r, t); })]; }); }); }, i.prototype.updateHttpClientConfig = function (t, e) { }, i.prototype.httpHandlerConfigs = function () { return {}; }, i; })();
var zt = function (i, t, e, r) { function n(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(r.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(r.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : n(c.value).then(u, f); } s((r = r.apply(i, t || [])).next()); }); }, Kt = function (i, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, r, n, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (r)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (r = 1, n && (o = s[0] & 2 ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done)
            return o;
        switch (n = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, n = s[1], s = [0];
                continue;
            case 7:
                s = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                    e.label = s[1];
                    break;
                }
                if (s[0] === 6 && e.label < o[1]) {
                    e.label = o[1], o = s;
                    break;
                }
                if (o && e.label < o[2]) {
                    e.label = o[2], e.ops.push(s);
                    break;
                }
                o[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        s = t.call(i, e);
    }
    catch (c) {
        s = [6, c], n = 0;
    }
    finally {
        r = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, to = "CWR: Cannot dispatch; no AWS credentials.", ro = (function () { function i(t, e, r, n) { var o = this; this.disableCodes = ["403", "404"], this.dispatchFetch = function () { return zt(o, void 0, void 0, function () { return Kt(this, function (a) { return this.doRequest() ? [2, this.rum.sendFetch(this.createRequest()).catch(this.handleReject)] : [2]; }); }); }, this.dispatchBeacon = function () { return zt(o, void 0, void 0, function () { var a, u = this; return Kt(this, function (f) { return this.doRequest() ? (a = this.createRequest(), [2, this.rum.sendBeacon(a).catch(function () { return u.rum.sendFetch(a); })]) : [2]; }); }); }, this.dispatchFetchFailSilent = function () { return zt(o, void 0, void 0, function () { return Kt(this, function (a) { return [2, this.dispatchFetch().catch(function () { })]; }); }); }, this.dispatchBeaconFailSilent = function () { return zt(o, void 0, void 0, function () { return Kt(this, function (a) { return [2, this.dispatchBeacon().catch(function () { })]; }); }); }, this.flushSync = function () { var a; if (document.visibilityState === "hidden" && o.doRequest(!0)) {
    var u = o.rum.sendBeacon, f = o.rum.sendFetch;
    o.config.useBeacon || (a = [f, u], u = a[0], f = a[1]);
    var s = o.createRequest(!0);
    u(s).catch(function () { return f(s); }).catch(function () { });
} }, this.handleReject = function (a) { throw a instanceof Error && o.disableCodes.includes(a.message) && o.disable(), a; }, this.defaultClientBuilder = function (a, u, f) { return new ji({ fetchRequestHandler: new eo(new Gi({ fetchFunction: o.config.fetchFunction }), o.config.retries), beaconRequestHandler: new qi, endpoint: a, region: u, credentials: f, headers: o.headers }); }, this.region = t, this.endpoint = e, this.eventCache = r, this.enabled = !0, this.buildClient = n.clientBuilder || this.defaultClientBuilder, this.config = n, this.headers = n.headers, this.startDispatchTimer(), n.signing ? this.rum = { sendFetch: function () { return Promise.reject(new Error(to)); }, sendBeacon: function () { return Promise.reject(new Error(to)); } } : this.rum = this.buildClient(this.endpoint, this.region, void 0); } return i.prototype.enable = function () { this.enabled = !0, this.startDispatchTimer(); }, i.prototype.disable = function () { this.stopDispatchTimer(), this.enabled = !1; }, i.prototype.setAwsCredentials = function (t) { this.rum = this.buildClient(this.endpoint, this.region, t), typeof t == "function" && t(); }, i.prototype.startDispatchTimer = function () { document.addEventListener("visibilitychange", this.flushSync), document.addEventListener("pagehide", this.flushSync), !(this.config.dispatchInterval <= 0 || this.dispatchTimerId) && (this.dispatchTimerId = window.setInterval(this.dispatchFetchFailSilent, this.config.dispatchInterval)); }, i.prototype.stopDispatchTimer = function () { document.removeEventListener("visibilitychange", this.flushSync), document.removeEventListener("pagehide", this.flushSync), this.dispatchTimerId && (window.clearInterval(this.dispatchTimerId), this.dispatchTimerId = void 0); }, i.prototype.doRequest = function (t) { return t === void 0 && (t = !1), this.enabled ? t && this.eventCache.hasCandidates() ? !0 : this.eventCache.hasEvents() : !1; }, i.prototype.createRequest = function (t) { return t === void 0 && (t = !1), { BatchId: $(), AppMonitorDetails: this.eventCache.getAppMonitorDetails(), UserDetails: this.eventCache.getUserDetails(), RumEvents: this.eventCache.getEventBatch(t), Alias: this.config.alias }; }, i; })();
var C = (function (i) { return i.OTHER = "other", i.STYLESHEET = "stylesheet", i.DOCUMENT = "document", i.SCRIPT = "script", i.IMAGE = "image", i.FONT = "font", i; })(C || {}), ee = (function (i) { return i.IMG = "img", i.IMAGE = "image", i.INPUT = "input", i.IFRAME = "iframe", i.FRAME = "frame", i.SCRIPT = "script", i.CSS = "css", i; })(ee || {}), Jr = function (i) { return [i.startTime, i.duration].join("#"); }, ws = [{ name: C.STYLESHEET, list: ["css", "less"] }, { name: C.DOCUMENT, list: ["htm", "html", "ts", "doc", "docx", "pdf", "xls", "xlsx"] }, { name: C.SCRIPT, list: ["js"] }, { name: C.IMAGE, list: ["ai", "bmp", "gif", "ico", "jpeg", "jpg", "png", "ps", "psd", "svg", "tif", "tiff"] }, { name: C.FONT, list: ["fnt", "fon", "otf", "ttf", "woff"] }], no = function (i) { for (var t = i.length - 1; t > 0; t--) {
    var e = Math.floor(Math.random() * (t + 1)), r = i[t];
    i[t] = i[e], i[e] = r;
} }, Zr = function (i, t) { var e = C.OTHER; if (i) {
    var r = i.substring(i.lastIndexOf("/") + 1), n = r.substring(r.lastIndexOf(".") + 1).split(/[?#]/)[0];
    ws.forEach(function (o) { o.list.indexOf(n) > -1 && (e = o.name); });
} if (t && e === C.OTHER)
    switch (t) {
        case ee.IMAGE:
        case ee.IMG:
        case ee.INPUT:
            e = C.IMAGE;
            break;
        case ee.IFRAME:
        case ee.FRAME:
            e = C.DOCUMENT;
            break;
        case ee.SCRIPT:
            e = C.SCRIPT;
            break;
        case ee.CSS:
            e = C.STYLESHEET;
            break;
    } return e; };
var Xt = function () { return PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint"); }, io = function () { return PerformanceObserver.supportedEntryTypes.includes("paint"); }, oo = function () { return PerformanceObserver.supportedEntryTypes.includes("longtask"); }, Es = /.*\/application\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/events/, ao = function (i, t) { try {
    return new URL(i).hostname === t && Es.test(i);
}
catch {
    return !1;
} };
var Ts = function (i) { return i.entryType === "resource" && (!/^https?:/.test(i.name) || /^(fetch|xmlhttprequest)$/.test(i.initiatorType)); }, _e = { eventLimit: 10, ignore: Ts, recordAllTypes: [C.DOCUMENT, C.SCRIPT, C.STYLESHEET, C.FONT], sampleTypes: [C.IMAGE, C.OTHER], reportAllLCP: !1, reportAllCLS: !1, reportAllINP: !1 };
var _s = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), Yt = function () { return Yt = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, Yt.apply(this, arguments); }, Ss = "navigation", Se = "navigation", en = "load", so = (function (i) { _s(t, i); function t(e) { var r = i.call(this, Ss) || this; return r.eventListener = function () { if (performance.getEntriesByType(Se).length === 0)
    r.performanceNavigationEventHandlerTimingLevel1();
else {
    var n = new PerformanceObserver(function (o) { o.getEntries().filter(function (a) { return a.entryType === Se; }).filter(function (a) { return !r.config.ignore(a); }).forEach(function (a) { r.performanceNavigationEventHandlerTimingLevel2(a); }); });
    n.observe({ entryTypes: [Se] });
} }, r.performanceNavigationEventHandlerTimingLevel1 = function () { var n = function () { var o, a = performance.timing, u = a.navigationStart, f = { version: "1.0.0", initiatorType: "navigation", startTime: 0, unloadEventStart: a.unloadEventStart > 0 ? a.unloadEventStart - u : 0, promptForUnload: a.unloadEventEnd - a.unloadEventStart, redirectStart: a.redirectStart > 0 ? a.redirectStart - u : 0, redirectTime: a.redirectEnd - a.redirectStart, fetchStart: a.fetchStart > 0 ? a.fetchStart - u : 0, domainLookupStart: a.domainLookupStart > 0 ? a.domainLookupStart - u : 0, dns: a.domainLookupEnd - a.domainLookupStart, connectStart: a.connectStart > 0 ? a.connectStart - u : 0, connect: a.connectEnd - a.connectStart, secureConnectionStart: a.secureConnectionStart > 0 ? a.secureConnectionStart - u : 0, tlsTime: a.secureConnectionStart > 0 ? a.connectEnd - a.secureConnectionStart : 0, requestStart: a.requestStart > 0 ? a.requestStart - u : 0, timeToFirstByte: a.responseStart - a.requestStart, responseStart: a.responseStart > 0 ? a.responseStart - u : 0, responseTime: a.responseStart > 0 ? a.responseEnd - a.responseStart : 0, domInteractive: a.domInteractive > 0 ? a.domInteractive - u : 0, domContentLoadedEventStart: a.domContentLoadedEventStart > 0 ? a.domContentLoadedEventStart - u : 0, domContentLoaded: a.domContentLoadedEventEnd - a.domContentLoadedEventStart, domComplete: a.domComplete > 0 ? a.domComplete - u : 0, domProcessingTime: a.loadEventStart - a.responseEnd, loadEventStart: a.loadEventStart > 0 ? a.loadEventStart - u : 0, loadEventTime: a.loadEventEnd - a.loadEventStart, duration: a.loadEventEnd - a.navigationStart, navigationTimingLevel: 1 }; !((o = r.context) === null || o === void 0) && o.record && r.context.record(oe, f); }; setTimeout(n, 0); }, r.performanceNavigationEventHandlerTimingLevel2 = function (n) { var o, a = { version: "1.0.0", initiatorType: n.initiatorType, navigationType: n.type, startTime: n.startTime, unloadEventStart: n.unloadEventStart, promptForUnload: n.unloadEventEnd - n.unloadEventStart, redirectCount: n.redirectCount, redirectStart: n.redirectStart, redirectTime: n.redirectEnd - n.redirectStart, workerStart: n.workerStart, workerTime: n.workerStart > 0 ? n.fetchStart - n.workerStart : 0, fetchStart: n.fetchStart, domainLookupStart: n.domainLookupStart, dns: n.domainLookupEnd - n.domainLookupStart, nextHopProtocol: n.nextHopProtocol, connectStart: n.connectStart, connect: n.connectEnd - n.connectStart, secureConnectionStart: n.secureConnectionStart, tlsTime: n.secureConnectionStart > 0 ? n.connectEnd - n.secureConnectionStart : 0, requestStart: n.requestStart, timeToFirstByte: n.responseStart - n.requestStart, responseStart: n.responseStart, responseTime: n.responseStart > 0 ? n.responseEnd - n.responseStart : 0, domInteractive: n.domInteractive, domContentLoadedEventStart: n.domContentLoadedEventStart, domContentLoaded: n.domContentLoadedEventEnd - n.domContentLoadedEventStart, domComplete: n.domComplete, domProcessingTime: n.loadEventStart - n.responseEnd, loadEventStart: n.loadEventStart, loadEventTime: n.loadEventEnd - n.loadEventStart, duration: n.duration, headerSize: n.transferSize > 0 ? n.transferSize - n.encodedBodySize : 0, transferSize: n.transferSize, compressionRatio: n.encodedBodySize > 0 ? n.decodedBodySize / n.encodedBodySize : 0, navigationTimingLevel: 2 }; !((o = r.context) === null || o === void 0) && o.record && r.context.record(oe, a); }, r.config = Yt(Yt({}, _e), e), r; } return t.prototype.enable = function () { this.enabled || (this.enabled = !0, window.addEventListener(en, this.eventListener)); }, t.prototype.disable = function () { this.enabled && (this.enabled = !1, this.eventListener && window.removeEventListener(en, this.eventListener)); }, t.prototype.hasTheWindowLoadEventFired = function () { if (window.performance && window.performance.getEntriesByType(Se).length) {
    var e = window.performance.getEntriesByType(Se)[0];
    return !!e.loadEventEnd;
} return !1; }, t.prototype.onload = function () { var e = this; this.enabled && (this.hasTheWindowLoadEventFired() ? window.performance.getEntriesByType(Se).filter(function (r) { return !e.config.ignore(r); }).forEach(function (r) { return e.performanceNavigationEventHandlerTimingLevel2(r); }) : window.addEventListener(en, this.eventListener)); }, t; })(P);
var xs = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), $t = function () { return $t = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, $t.apply(this, arguments); }, Is = "resource", tn = "resource", co = (function (i) { xs(t, i); function t(e) { var r = i.call(this, Is) || this; return r.performanceEntryHandler = function (n) { r.recordPerformanceEntries(n.getEntries()); }, r.recordPerformanceEntries = function (n) { var o = [], a = []; for (n.filter(function (u) { return u.entryType === tn; }).filter(function (u) { return !r.config.ignore(u); }).forEach(function (u) { var f = u, s = f.name, c = f.initiatorType, l = Zr(s, c); r.config.recordAllTypes.includes(l) ? o.push(u) : r.config.sampleTypes.includes(l) && a.push(u); }), o.forEach(function (u) { return r.recordResourceEvent(u); }), no(a); a.length > 0 && r.eventCount < r.config.eventLimit;)
    r.recordResourceEvent(a.pop()), r.eventCount++; }, r.recordResourceEvent = function (n) { var o, a = n.name, u = n.startTime, f = n.initiatorType, s = n.duration, c = n.transferSize; if (!ao(a, r.context.config.endpointUrl.hostname) && !((o = r.context) === null || o === void 0) && o.record) {
    var l = { version: "1.0.0", initiatorType: f, startTime: u, duration: s, fileType: Zr(a, f), transferSize: c };
    r.context.config.recordResourceUrl && (l.targetUrl = a), r.context.record(ht, l);
} }, r.config = $t($t({}, _e), e), r.eventCount = 0, r.resourceObserver = new PerformanceObserver(r.performanceEntryHandler), r; } return t.prototype.enable = function () { this.enabled || (this.enabled = !0, this.resourceObserver.observe({ type: tn, buffered: !0 })); }, t.prototype.disable = function () { this.enabled && (this.enabled = !1, this.resourceObserver.disconnect()); }, t.prototype.onload = function () { this.resourceObserver.observe({ type: tn, buffered: !0 }); }, t; })(P);
var on, uo, er = function () { var i = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]; if (i && i.responseStart > 0 && i.responseStart < performance.now())
    return i; }, cn = function (i) { if (document.readyState === "loading")
    return "loading"; var t = er(); if (t) {
    if (i < t.domInteractive)
        return "loading";
    if (t.domContentLoadedEventStart === 0 || i < t.domContentLoadedEventStart)
        return "dom-interactive";
    if (t.domComplete === 0 || i < t.domComplete)
        return "dom-content-loaded";
} return "complete"; }, Cs = function (i) { var t = i.nodeName; return i.nodeType === 1 ? t.toLowerCase() : t.toUpperCase().replace(/^#/, ""); }, tr = function (i, t) { var e = ""; try {
    for (; i && i.nodeType !== 9;) {
        var r = i, n = r.id ? "#" + r.id : Cs(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
        if (e.length + n.length > (t || 100) - 1)
            return e || n;
        if (e = e ? n + ">" + e : n, r.id)
            break;
        i = r.parentNode;
    }
}
catch { } return e; }, bo = -1, As = function () { return bo; }, Ae = function (i) { addEventListener("pageshow", function (t) { t.persisted && (bo = t.timeStamp, i(t)); }, !0); }, un = function () { var i = er(); return i && i.activationStart || 0; }, G = function (i, t) { var e = er(), r = "navigate"; return As() >= 0 ? r = "back-forward-cache" : e && (document.prerendering || un() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : e.type && (r = e.type.replace(/_/g, "-"))), { name: i, value: t === void 0 ? -1 : t, rating: "good", delta: 0, entries: [], id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r }; }, se = function (i, t, e) { try {
    if (PerformanceObserver.supportedEntryTypes.includes(i)) {
        var r = new PerformanceObserver(function (n) { Promise.resolve().then(function () { t(n.getEntries()); }); });
        return r.observe(Object.assign({ type: i, buffered: !0 }, e || {})), r;
    }
}
catch { } }, W = function (i, t, e, r) { var n, o; return function (a) { t.value >= 0 && (a || r) && ((o = t.value - (n || 0)) || n === void 0) && (n = t.value, t.delta = o, t.rating = (function (u, f) { return u > f[1] ? "poor" : u > f[0] ? "needs-improvement" : "good"; })(t.value, e), i(t)); }; }, fn = function (i) { requestAnimationFrame(function () { return requestAnimationFrame(function () { return i(); }); }); }, Ze = function (i) { document.addEventListener("visibilitychange", function () { document.visibilityState === "hidden" && i(); }); }, rr = function (i) { var t = !1; return function () { t || (i(), t = !0); }; }, xe = -1, fo = function () { return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0; }, Jt = function (i) { document.visibilityState === "hidden" && xe > -1 && (xe = i.type === "visibilitychange" ? i.timeStamp : 0, Ps()); }, lo = function () { addEventListener("visibilitychange", Jt, !0), addEventListener("prerenderingchange", Jt, !0); }, Ps = function () { removeEventListener("visibilitychange", Jt, !0), removeEventListener("prerenderingchange", Jt, !0); }, ln = function () { return xe < 0 && (xe = fo(), lo(), Ae(function () { setTimeout(function () { xe = fo(), lo(); }, 0); })), { get firstHiddenTime() { return xe; } }; }, nr = function (i) { document.prerendering ? addEventListener("prerenderingchange", function () { return i(); }, !0) : i(); }, ho = [1800, 3e3], Rs = function (i, t) { t = t || {}, nr(function () { var e, r = ln(), n = G("FCP"), o = se("paint", function (a) { a.forEach(function (u) { u.name === "first-contentful-paint" && (o.disconnect(), u.startTime < r.firstHiddenTime && (n.value = Math.max(u.startTime - un(), 0), n.entries.push(u), e(!0))); }); }); o && (e = W(i, n, ho, t.reportAllChanges), Ae(function (a) { n = G("FCP"), e = W(i, n, ho, t.reportAllChanges), fn(function () { n.value = performance.now() - a.timeStamp, e(!0); }); })); }); }, po = [.1, .25], wo = function (i, t) { (function (e, r) { r = r || {}, Rs(rr(function () { var n, o = G("CLS", 0), a = 0, u = [], f = function (c) { c.forEach(function (l) { if (!l.hadRecentInput) {
    var d = u[0], h = u[u.length - 1];
    a && l.startTime - h.startTime < 1e3 && l.startTime - d.startTime < 5e3 ? (a += l.value, u.push(l)) : (a = l.value, u = [l]);
} }), a > o.value && (o.value = a, o.entries = u, n()); }, s = se("layout-shift", f); s && (n = W(e, o, po, r.reportAllChanges), Ze(function () { f(s.takeRecords()), n(!0); }), Ae(function () { a = 0, o = G("CLS", 0), n = W(e, o, po, r.reportAllChanges), fn(function () { return n(); }); }), setTimeout(n, 0)); })); })(function (e) { var r = (function (n) { var o, a = {}; if (n.entries.length) {
    var u = n.entries.reduce(function (s, c) { return s && s.value > c.value ? s : c; });
    if (u && u.sources && u.sources.length) {
        var f = (o = u.sources).find(function (s) { return s.node && s.node.nodeType === 1; }) || o[0];
        f && (a = { largestShiftTarget: tr(f.node), largestShiftTime: u.startTime, largestShiftValue: u.value, largestShiftSource: f, largestShiftEntry: u, loadState: cn(u.startTime) });
    }
} return Object.assign(n, { attribution: a }); })(e); i(r); }, t); };
var Eo = 0, rn = 1 / 0, Qt = 0, Os = function (i) { i.forEach(function (t) { t.interactionId && (rn = Math.min(rn, t.interactionId), Qt = Math.max(Qt, t.interactionId), Eo = Qt ? (Qt - rn) / 7 + 1 : 0); }); }, To = function () { return on ? Eo : performance.interactionCount || 0; }, Ls = function () { "interactionCount" in performance || on || (on = se("event", Os, { type: "event", buffered: !0, durationThreshold: 0 })); }, B = [], Qe = new Map, _o = 0, ks = function () { var i = Math.min(B.length - 1, Math.floor((To() - _o) / 50)); return B[i]; }, So = [], Ns = function (i) { if (So.forEach(function (n) { return n(i); }), i.interactionId || i.entryType === "first-input") {
    var t = B[B.length - 1], e = Qe.get(i.interactionId);
    if (e || B.length < 10 || i.duration > t.latency) {
        if (e)
            i.duration > e.latency ? (e.entries = [i], e.latency = i.duration) : i.duration === e.latency && i.startTime === e.entries[0].startTime && e.entries.push(i);
        else {
            var r = { id: i.interactionId, latency: i.duration, entries: [i] };
            Qe.set(r.id, r), B.push(r);
        }
        B.sort(function (n, o) { return o.latency - n.latency; }), B.length > 10 && B.splice(10).forEach(function (n) { return Qe.delete(n.id); });
    }
} }, dn = function (i) { var t = self.requestIdleCallback || self.setTimeout, e = -1; return i = rr(i), document.visibilityState === "hidden" ? i() : (e = t(i), Ze(i)), e; }, vo = [200, 500], Ms = function (i, t) { "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (t = t || {}, nr(function () { var e; Ls(); var r, n = G("INP"), o = function (u) { dn(function () { u.forEach(Ns); var f = ks(); f && f.latency !== n.value && (n.value = f.latency, n.entries = f.entries, r()); }); }, a = se("event", o, { durationThreshold: (e = t.durationThreshold) !== null && e !== void 0 ? e : 40 }); r = W(i, n, vo, t.reportAllChanges), a && (a.observe({ type: "first-input", buffered: !0 }), Ze(function () { o(a.takeRecords()), r(!0); }), Ae(function () { _o = To(), B.length = 0, Qe.clear(), n = G("INP"), r = W(i, n, vo, t.reportAllChanges); })); })); }, Ie = [], te = [], an = 0, hn = new WeakMap, Ce = new Map, sn = -1, Hs = function (i) { Ie = Ie.concat(i), xo(); }, xo = function () { sn < 0 && (sn = dn(Ds)); }, Ds = function () { Ce.size > 10 && Ce.forEach(function (a, u) { Qe.has(u) || Ce.delete(u); }); var i = B.map(function (a) { return hn.get(a.entries[0]); }), t = te.length - 50; te = te.filter(function (a, u) { return u >= t || i.includes(a); }); for (var e = new Set, r = 0; r < te.length; r++) {
    var n = te[r];
    Co(n.startTime, n.processingEnd).forEach(function (a) { e.add(a); });
} var o = Ie.length - 1 - 50; Ie = Ie.filter(function (a, u) { return a.startTime > an && u > o || e.has(a); }), sn = -1; };
So.push(function (i) { i.interactionId && i.target && !Ce.has(i.interactionId) && Ce.set(i.interactionId, i.target); }, function (i) { var t, e = i.startTime + i.duration; an = Math.max(an, i.processingEnd); for (var r = te.length - 1; r >= 0; r--) {
    var n = te[r];
    if (Math.abs(e - n.renderTime) <= 8) {
        (t = n).startTime = Math.min(i.startTime, t.startTime), t.processingStart = Math.min(i.processingStart, t.processingStart), t.processingEnd = Math.max(i.processingEnd, t.processingEnd), t.entries.push(i);
        break;
    }
} t || (t = { startTime: i.startTime, processingStart: i.processingStart, processingEnd: i.processingEnd, renderTime: e, entries: [i] }, te.push(t)), (i.interactionId || i.entryType === "first-input") && hn.set(i, t), xo(); });
var re, Je, Io, Zt, Co = function (i, t) { for (var e, r = [], n = 0; e = Ie[n]; n++)
    if (!(e.startTime + e.duration < i)) {
        if (e.startTime > t)
            break;
        r.push(e);
    } return r; }, Ao = function (i, t) { uo || (uo = se("long-animation-frame", Hs)), Ms(function (e) { var r = (function (n) { var o = n.entries[0], a = hn.get(o), u = o.processingStart, f = a.processingEnd, s = a.entries.sort(function (E, m) { return E.processingStart - m.processingStart; }), c = Co(o.startTime, f), l = n.entries.find(function (E) { return E.target; }), d = l && l.target || Ce.get(o.interactionId), h = [o.startTime + o.duration, f].concat(c.map(function (E) { return E.startTime + E.duration; })), p = Math.max.apply(Math, h), w = { interactionTarget: tr(d), interactionTargetElement: d, interactionType: o.name.startsWith("key") ? "keyboard" : "pointer", interactionTime: o.startTime, nextPaintTime: p, processedEventEntries: s, longAnimationFrameEntries: c, inputDelay: u - o.startTime, processingDuration: f - u, presentationDelay: Math.max(p - f, 0), loadState: cn(o.startTime) }; return Object.assign(n, { attribution: w }); })(e); i(r); }, t); }, mo = [2500, 4e3], nn = {}, Po = function (i, t) { (function (e, r) { r = r || {}, nr(function () { var n, o = ln(), a = G("LCP"), u = function (c) { r.reportAllChanges || (c = c.slice(-1)), c.forEach(function (l) { l.startTime < o.firstHiddenTime && (a.value = Math.max(l.startTime - un(), 0), a.entries = [l], n()); }); }, f = se("largest-contentful-paint", u); if (f) {
    n = W(e, a, mo, r.reportAllChanges);
    var s = rr(function () { nn[a.id] || (u(f.takeRecords()), f.disconnect(), nn[a.id] = !0, n(!0)); });
    ["keydown", "click"].forEach(function (c) { addEventListener(c, function () { return dn(s); }, { once: !0, capture: !0 }); }), Ze(s), Ae(function (c) { a = G("LCP"), n = W(e, a, mo, r.reportAllChanges), fn(function () { a.value = performance.now() - c.timeStamp, nn[a.id] = !0, n(!0); }); });
} }); })(function (e) { var r = (function (n) { var o = { timeToFirstByte: 0, resourceLoadDelay: 0, resourceLoadDuration: 0, elementRenderDelay: n.value }; if (n.entries.length) {
    var a = er();
    if (a) {
        var u = a.activationStart || 0, f = n.entries[n.entries.length - 1], s = f.url && performance.getEntriesByType("resource").filter(function (p) { return p.name === f.url; })[0], c = Math.max(0, a.responseStart - u), l = Math.max(c, s ? (s.requestStart || s.startTime) - u : 0), d = Math.max(l, s ? s.responseEnd - u : 0), h = Math.max(d, f.startTime - u);
        o = { element: tr(f.element), timeToFirstByte: c, resourceLoadDelay: l - c, resourceLoadDuration: d - l, elementRenderDelay: h - d, navigationEntry: a, lcpEntry: f }, f.url && (o.url = f.url), s && (o.lcpResourceEntry = s);
    }
} return Object.assign(n, { attribution: o }); })(e); i(r); }, t); };
var $e = { passive: !0, capture: !0 }, Us = new Date, go = function (i, t) { re || (re = t, Je = i, Io = new Date, Oo(removeEventListener), Ro()); }, Ro = function () { if (Je >= 0 && Je < Io - Us) {
    var i = { entryType: "first-input", name: re.type, target: re.target, cancelable: re.cancelable, startTime: re.timeStamp, processingStart: re.timeStamp + Je };
    Zt.forEach(function (t) { t(i); }), Zt = [];
} }, Bs = function (i) { if (i.cancelable) {
    var t = (i.timeStamp > 1e12 ? new Date : performance.now()) - i.timeStamp;
    i.type == "pointerdown" ? (function (e, r) { var n = function () { go(e, r), a(); }, o = function () { a(); }, a = function () { removeEventListener("pointerup", n, $e), removeEventListener("pointercancel", o, $e); }; addEventListener("pointerup", n, $e), addEventListener("pointercancel", o, $e); })(t, i) : go(t, i);
} }, Oo = function (i) { ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) { return i(t, Bs, $e); }); }, yo = [100, 300], Fs = function (i, t) { t = t || {}, nr(function () { var e, r = ln(), n = G("FID"), o = function (f) { f.startTime < r.firstHiddenTime && (n.value = f.processingStart - f.startTime, n.entries.push(f), e(!0)); }, a = function (f) { f.forEach(o); }, u = se("first-input", a); e = W(i, n, yo, t.reportAllChanges), u && (Ze(rr(function () { a(u.takeRecords()), u.disconnect(); })), Ae(function () { var f; n = G("FID"), e = W(i, n, yo, t.reportAllChanges), Zt = [], Je = -1, re = null, Oo(addEventListener), f = o, Zt.push(f), Ro(); })); }); }, Lo = function (i, t) { Fs(function (e) { var r = (function (n) { var o = n.entries[0], a = { eventTarget: tr(o.target), eventType: o.name, eventTime: o.startTime, eventEntry: o, loadState: cn(o.startTime) }; return Object.assign(n, { attribution: a }); })(e); i(r); }, t); };
var js = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), ir = function () { return ir = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, ir.apply(this, arguments); }, qs = "web-vitals", ko = (function (i) { js(t, i); function t(e) { var r = i.call(this, qs) || this; return r.resourceEventIds = new Map, r.cacheLCPCandidates = Xt(), r.handleEvent = function (n) { switch (n.type) {
    case ht:
        var o = n.details;
        r.cacheLCPCandidates && o.fileType === C.IMAGE && r.resourceEventIds.set(Jr(n.details), n.id);
        break;
    case oe:
        r.navigationEventId = n.id;
        break;
} }, r.config = ir(ir({}, _e), e), r; } return t.prototype.enable = function () { }, t.prototype.disable = function () { }, t.prototype.onload = function () { var e = this; this.context.eventBus.subscribe(we.EVENT, this.handleEvent), Po(function (r) { return e.handleLCP(r); }, { reportAllChanges: this.config.reportAllLCP }), Lo(function (r) { return e.handleFID(r); }), wo(function (r) { return e.handleCLS(r); }, { reportAllChanges: !0 }), Ao(function (r) { return e.handleINP(r); }, { reportAllChanges: !0 }); }, t.prototype.handleLCP = function (e) { var r, n, o = e.attribution, a = { element: o.element, url: o.url, timeToFirstByte: o.timeToFirstByte, resourceLoadDelay: o.resourceLoadDelay, resourceLoadTime: o.resourceLoadDuration, elementRenderDelay: o.elementRenderDelay }; if (o.lcpResourceEntry) {
    var u = Jr(o.lcpResourceEntry);
    a.lcpResourceEntry = this.resourceEventIds.get(u);
} this.navigationEventId && (a.navigationEntry = this.navigationEventId), (r = this.context) === null || r === void 0 || r.record(Kn, { version: "1.0.0", value: e.value, attribution: a }), (n = this.context) === null || n === void 0 || n.eventBus.unsubscribe(we.EVENT, this.handleEvent), this.resourceEventIds.clear(), this.navigationEventId = void 0; }, t.prototype.handleCLS = function (e) { var r = e.attribution, n = this.context, o = n.record, a = n.recordCandidate; (this.config.reportAllCLS ? o : a)(Yn, { version: "1.0.0", value: e.value, attribution: { largestShiftTarget: r.largestShiftTarget, largestShiftValue: r.largestShiftValue, largestShiftTime: r.largestShiftTime, loadState: r.loadState } }); }, t.prototype.handleFID = function (e) { var r, n = e.attribution; (r = this.context) === null || r === void 0 || r.record(Xn, { version: "1.0.0", value: e.value, attribution: { eventTarget: n.eventTarget, eventType: n.eventType, eventTime: n.eventTime, loadState: n.loadState } }); }, t.prototype.handleINP = function (e) { var r = e.attribution, n = this.context, o = n.record, a = n.recordCandidate; (this.config.reportAllINP ? o : a)($n, { version: "1.0.0", value: e.value, attribution: { interactionTarget: r.interactionTarget, interactionTime: r.interactionTime, nextPaintTime: r.nextPaintTime, interactionType: r.interactionType, inputDelay: r.inputDelay, processingDuration: r.processingDuration, presentationDelay: r.presentationDelay, loadState: r.loadState } }); }, t; })(P);
var Vs = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), No = (function (i) { Vs(t, i); function t(e) { var r = i.call(this, e) || this; return r.name = "XMLHttpRequest error", r; } return t; })(Error);
var Gs = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), or = function () { return or = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, or.apply(this, arguments); }, Ws = "xhr", Mo = (function (i) { Gs(t, i); function t(e) { var r = i.call(this, Ws) || this; return r.addXRayTraceIdHeader = function (n) { return Dt(n, r.config.addXRayTraceIdHeader); }, r.isTracingEnabled = function () { return r.context.config.enableXRay; }, r.isSessionRecorded = function () { var n; return ((n = r.context.getSession()) === null || n === void 0 ? void 0 : n.record) || !1; }, r.handleXhrLoadEvent = function (n) { var o = n.target, a = r.xhrMap.get(o); if (a) {
    var u = Z();
    a.trace.end_time = u, a.trace.subsegments[0].end_time = u, a.trace.subsegments[0].http.response = { status: o.status }, Te(o.status) ? (a.trace.subsegments[0].throttle = !0, a.trace.throttle = !0) : Bt(o.status) ? (a.trace.subsegments[0].error = !0, a.trace.error = !0) : Ee(o.status) && (a.trace.subsegments[0].fault = !0, a.trace.fault = !0);
    var f = o.getResponseHeader("Content-Length"), s = f ? parseInt(f, 10) : NaN;
    isNaN(s) || (a.trace.subsegments[0].http.response.content_length = s), r.recordTraceEvent(a.trace), r.recordHttpEventWithResponse(a, o);
} }, r.handleXhrErrorEvent = function (n) { var o = n.target, a = r.xhrMap.get(o), u = "XMLHttpRequest error", f = o.statusText ? o.status.toString() + ": " + o.statusText : o.status.toString(); if (a) {
    var s = Z();
    a.trace.fault = !0, a.trace.end_time = s, a.trace.subsegments[0].end_time = s, a.trace.subsegments[0].fault = !0, a.trace.subsegments[0].cause = { exceptions: [{ type: u, message: f }] }, r.recordTraceEvent(a.trace), r.recordHttpEventWithError(a, o, new No(f));
} }, r.handleXhrAbortEvent = function (n) { var o = n.target, a = r.xhrMap.get(o); a && r.handleXhrDetailsOnError(a, o, "XMLHttpRequest abort"); }, r.handleXhrTimeoutEvent = function (n) { var o = n.target, a = r.xhrMap.get(o), u = "XMLHttpRequest timeout"; r.handleXhrDetailsOnError(a, o, u); }, r.initializeTrace = function (n) { var o = Z(); n.trace = jt(r.config.logicalServiceName, o, r.context.config.enableW3CTraceId), n.trace.subsegments.push(qt(Vt(n.url), o, { request: { method: n.method, url: n.url, traced: !0 } })); }, r.sendWrapper = function () { var n = r; return function (o) { return function () { var a = n.xhrMap.get(this); return a && (this.addEventListener("load", n.handleXhrLoadEvent), this.addEventListener("error", n.handleXhrErrorEvent), this.addEventListener("abort", n.handleXhrAbortEvent), this.addEventListener("timeout", n.handleXhrTimeoutEvent), n.initializeTrace(a), !n.isSyntheticsUA && n.isTracingEnabled() && n.addXRayTraceIdHeader(a.url) && n.isSessionRecorded() && (n.context.config.enableW3CTraceId ? this.setRequestHeader(Xe, Wt(a.trace.trace_id, a.trace.subsegments[0].id)) : this.setRequestHeader(Ke, Gt(a.trace.trace_id, a.trace.subsegments[0].id)))), o.apply(this, arguments); }; }; }, r.openWrapper = function () { var n = r; return function (o) { return function (a, u, f) { return Ft(u, n.config) && n.xhrMap.set(this, { url: u, method: a, async: f }), o.apply(this, arguments); }; }; }, r.config = or(or({}, Ut), e), r.xhrMap = new Map, r.isSyntheticsUA = navigator.userAgent.includes("CloudWatchSynthetics"), r; } return t.prototype.onload = function () { this.enable(); }, Object.defineProperty(t.prototype, "patches", { get: function () { return [{ nodule: XMLHttpRequest.prototype, name: "send", wrapper: this.sendWrapper }, { nodule: XMLHttpRequest.prototype, name: "open", wrapper: this.openWrapper }]; }, enumerable: !1, configurable: !0 }), t.prototype.handleXhrDetailsOnError = function (e, r, n) { if (e) {
    var o = Z();
    e.trace.end_time = o, e.trace.subsegments[0].end_time = o, e.trace.subsegments[0].error = !0, e.trace.subsegments[0].cause = { exceptions: [{ type: n }] }, this.recordTraceEvent(e.trace), this.recordHttpEventWithError(e, r, n);
} }, t.prototype.statusOk = function (e) { return e >= 200 && e < 300; }, t.prototype.recordHttpEventWithResponse = function (e, r) { this.xhrMap.delete(r); var n = { version: "1.0.0", request: { method: e.method, url: e.url }, response: { status: r.status, statusText: r.statusText } }; this.isTracingEnabled() && (n.trace_id = e.trace.trace_id, n.segment_id = e.trace.subsegments[0].id), (this.config.recordAllRequests || !this.statusOk(r.status)) && this.context.record(ge, n); }, t.prototype.recordHttpEventWithError = function (e, r, n) { this.xhrMap.delete(r); var o = { version: "1.0.0", request: { method: e.method, url: e.url }, error: ye({ type: "error", error: n }, this.config.stackTraceLength) }; this.isTracingEnabled() && (o.trace_id = e.trace.trace_id, o.segment_id = e.trace.subsegments[0].id), this.context.record(ge, o); }, t.prototype.recordTraceEvent = function (e) { !this.isSyntheticsUA && this.isTracingEnabled() && this.isSessionRecorded() && this.context.record(dt, e); }, t; })(J);
var zs = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), ar = function () { return ar = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, ar.apply(this, arguments); }, Ks = "fetch", Ho = (function (i) { zs(t, i); function t(e) { var r = i.call(this, Ks) || this; return r.isTracingEnabled = function () { return r.context.config.enableXRay; }, r.isSessionRecorded = function () { var n; return ((n = r.context.getSession()) === null || n === void 0 ? void 0 : n.record) || !1; }, r.beginTrace = function (n, o, a) { var u = Z(), f = Ki(n, o, !0), s = jt(r.config.logicalServiceName, u, r.context.config.enableW3CTraceId), c = qt(Vt(n), u, f); return s.subsegments.push(c), r.isTraceIdHeaderEnabled(n) && r.addXRayTraceIdHeader(n, o, a, s), s; }, r.addXRayTraceIdHeader = function (n, o, a, u) { if (n.headers)
    return Yi(n.headers, u.trace_id, u.subsegments[0].id, r.context.config.enableW3CTraceId); o || (o = {}, [].push.call(a, o)), Xi(o, u.trace_id, u.subsegments[0].id, r.context.config.enableW3CTraceId); }, r.endTrace = function (n, o, a) { if (n) {
    var u = Z();
    if (n.subsegments[0].end_time = u, n.end_time = u, o) {
        n.subsegments[0].http.response = { status: o.status }, Te(o.status) ? (n.subsegments[0].throttle = !0, n.throttle = !0) : Bt(o.status) ? (n.subsegments[0].error = !0, n.error = !0) : Ee(o.status) && (n.subsegments[0].fault = !0, n.fault = !0);
        var f = o.headers.get("Content-Length"), s = f ? parseInt(f, 10) : NaN;
        isNaN(s) || (n.subsegments[0].http.response.content_length = s);
    }
    a && (n.fault = !0, n.subsegments[0].fault = !0, a instanceof Object ? r.appendErrorCauseFromObject(n.subsegments[0], a) : Rr(a) && r.appendErrorCauseFromPrimitive(n.subsegments[0], a.toString())), r.context.record(dt, n);
} }, r.createHttpEvent = function (n, o) { var a = n; return { version: "1.0.0", request: { url: Ye(n), method: o?.method ? o.method : a.method ? a.method : "GET" } }; }, r.recordHttpEventWithResponse = function (n, o) { (r.config.recordAllRequests || !o.ok) && (n.response = { status: o.status, statusText: o.statusText }, r.context.record(ge, n)); }, r.recordHttpEventWithError = function (n, o) { n.error = ye({ type: "error", error: o }, r.config.stackTraceLength), r.context.record(ge, n); }, r.fetch = function (n, o, a, u, f) { var s = r.createHttpEvent(u, f), c; if (!Ft(Ye(u), r.config))
    return n.apply(o, a); var l = $i(u.headers, r.context.config.enableW3CTraceId); return l.traceId && l.segmentId ? (s.trace_id = l.traceId, s.segment_id = l.segmentId) : r.isTracingEnabled() && r.isSessionRecorded() && (c = r.beginTrace(u, f, a), s.trace_id = c.trace_id, s.segment_id = c.subsegments[0].id), n.apply(o, a).then(function (d) { return r.endTrace(c, d, void 0), r.recordHttpEventWithResponse(s, d), d; }).catch(function (d) { throw r.endTrace(c, void 0, d), r.recordHttpEventWithError(s, d), d; }); }, r.fetchWrapper = function () { var n = r; return function (o) { return function (a, u) { return n.fetch(o, this, arguments, a, u); }; }; }, r.config = ar(ar({}, Ut), e), r; } return Object.defineProperty(t.prototype, "patches", { get: function () { return [{ nodule: window, name: "fetch", wrapper: this.fetchWrapper }]; }, enumerable: !1, configurable: !0 }), t.prototype.onload = function () { this.enable(); }, t.prototype.isTraceIdHeaderEnabled = function (e) { var r = Ye(e); return Dt(r, this.config.addXRayTraceIdHeader); }, t.prototype.appendErrorCauseFromPrimitive = function (e, r) { e.cause = { exceptions: [{ type: r }] }; }, t.prototype.appendErrorCauseFromObject = function (e, r) { e.cause = { exceptions: [{ type: r.name, message: r.message }] }; }, t; })(J);
var Xs = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), Ys = "page-view", Do = (function (i) { Xs(t, i); function t() { var e = i.call(this, Ys) || this; return e.pushState = function () { var r = e; return function (n) { return function (o, a, u) { var f = n.apply(this, arguments); return r.recordPageView(), f; }; }; }, e.replaceState = function () { var r = e; return function (n) { return function (o, a, u) { var f = n.apply(this, arguments); return r.recordPageView(), f; }; }; }, e.popstateListener = function (r) { e.recordPageView(); }, e.recordPageView = function () { e.context.recordPageView(e.createIdForCurrentPage()); }, e.enable(), e; } return t.prototype.onload = function () { this.addListener(), this.recordPageView(); }, Object.defineProperty(t.prototype, "patches", { get: function () { return [{ nodule: History.prototype, name: "pushState", wrapper: this.pushState }, { nodule: History.prototype, name: "replaceState", wrapper: this.replaceState }]; }, enumerable: !1, configurable: !0 }), t.prototype.addListener = function () { window.addEventListener("popstate", this.popstateListener); }, t.prototype.createIdForCurrentPage = function () { var e = window.location.pathname, r = window.location.hash; switch (this.context.config.pageIdFormat) {
    case ce.PathAndHash: return e && r ? e + r : e || r || "";
    case ce.Hash: return r || "";
    case ce.Path:
    default: return e || "";
} }, t; })(J);
var ne = function () { return ne = Object.assign || function (i) { for (var t, e = 1, r = arguments.length; e < r; e++) {
    t = arguments[e];
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
} return i; }, ne.apply(this, arguments); }, $s = function (i, t) { var e = {}; for (var r in i)
    Object.prototype.hasOwnProperty.call(i, r) && t.indexOf(r) < 0 && (e[r] = i[r]); if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(i); n < r.length; n++)
        t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(i, r[n]) && (e[r[n]] = i[r[n]]); return e; }, Pe = function (i, t, e) { if (e || arguments.length === 2)
    for (var r = 0, n = t.length, o; r < n; r++)
        (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]); return i.concat(o || Array.prototype.slice.call(t)); }, Uo = "us-west-2", pn = "https://dataplane.rum.".concat(Uo, ".amazonaws.com"), Re = (function (i) { return i.Errors = "errors", i.Performance = "performance", i.Interaction = "interaction", i.Http = "http", i; })(Re || {}), ce = (function (i) { return i.Path = "PATH", i.Hash = "HASH", i.PathAndHash = "PATH_AND_HASH", i; })(ce || {}), Qs = function () { return { unique: !1, domain: window.location.hostname, path: "/", sameSite: "Strict", secure: !0 }; }, Js = function (i) { return ne({ allowCookies: !1, batchLimit: 100, client: qn, cookieAttributes: i, disableAutoPageView: !1, dispatchInterval: 5 * 1e3, enableRumClient: !0, enableXRay: !1, endpoint: pn, endpointUrl: new URL(pn), eventCacheSize: 200, eventPluginsToLoad: [], pageIdFormat: ce.Path, pagesToExclude: [], pagesToInclude: [/.*/], signing: !0, recordResourceUrl: !0, retries: 2, routeChangeComplete: 100, routeChangeTimeout: 1e4, sessionAttributes: {}, sessionEventLimit: 200, sessionLengthSeconds: 1800, sessionSampleRate: 1, telemetries: [], useBeacon: !0, userIdRetentionDays: 30, enableW3CTraceId: !1 }, Bo); }, Bo = { candidatesCacheSize: 10 }, Zs = (function () { function i(t, e, r, n) { n === void 0 && (n = {}); var o = n.cookieAttributes, a = $s(n, ["cookieAttributes"]); this.eventBus = new wt, typeof r > "u" && (r = "us-west-2"); var u = ne(ne({}, Qs()), o); this.config = ne(ne(ne({ fetchFunction: fetch }, Js(u)), a), Bo), this.config.endpoint = this.getDataPlaneEndpoint(r, a), this.config.endpointUrl = new URL(this.config.endpoint), this.eventCache = this.initEventCache(t, e), this.dispatchManager = this.initDispatch(r, t), this.pluginManager = this.initPluginManager(t, e), this.config.enableRumClient ? this.enable() : this.disable(); } return i.prototype.setAwsCredentials = function (t) { this.dispatchManager.setAwsCredentials(t); }, i.prototype.addSessionAttributes = function (t) { this.eventCache.addSessionAttributes(t); }, i.prototype.addPlugin = function (t) { this.pluginManager.addPlugin(t); }, i.prototype.dispatch = function () { this.dispatchManager.dispatchFetch(); }, i.prototype.dispatchBeacon = function () { this.dispatchManager.dispatchBeacon(); }, i.prototype.enable = function () { this.eventCache.enable(), this.pluginManager.enable(), this.dispatchManager.enable(); }, i.prototype.disable = function () { this.dispatchManager.disable(), this.pluginManager.disable(), this.eventCache.disable(); }, i.prototype.allowCookies = function (t) { this.config.allowCookies = t; }, i.prototype.recordPageView = function (t) { this.eventCache.recordPageView(t); }, i.prototype.recordError = function (t) { this.pluginManager.record(Or, t); }, i.prototype.registerDomEvents = function (t) { this.pluginManager.updatePlugin(Pr, t); }, i.prototype.recordEvent = function (t, e) { this.eventCache.recordEvent(t, e); }, i.prototype.initEventCache = function (t, e) { return new hi({ id: t, version: e }, this.config, this.eventBus); }, i.prototype.initDispatch = function (t, e) { var r = new ro(t, this.config.endpointUrl, this.eventCache, this.config); return this.eventCache.isSessionSampled() && (this.config.identityPoolId && this.config.guestRoleArn ? r.setAwsCredentials(new Gn(this.config, e).ChainAnonymousCredentialsProvider) : this.config.identityPoolId && r.setAwsCredentials(new Wn(this.config, e).ChainAnonymousCredentialsProvider)), r; }, i.prototype.initPluginManager = function (t, e) { var r = this.constructBuiltinPlugins(), n = Pe(Pe([], r, !0), this.config.eventPluginsToLoad, !0), o = { applicationId: t, applicationVersion: e, config: this.config, record: this.eventCache.recordEvent, recordCandidate: this.eventCache.recordCandidate, recordPageView: this.eventCache.recordPageView, getSession: this.eventCache.getSession, eventBus: this.eventBus }, a = new ti(o); return this.config.disableAutoPageView || a.addPlugin(new Do), n.forEach(function (u) { a.addPlugin(u); }), a; }, i.prototype.constructBuiltinPlugins = function () { var t = [], e = this.telemetryFunctor(); return this.config.telemetries.forEach(function (r) { typeof r == "string" && e[r.toLowerCase()] ? t = Pe(Pe([], t, !0), e[r.toLowerCase()]({}), !0) : Array.isArray(r) && e[r[0].toLowerCase()] && (t = Pe(Pe([], t, !0), e[r[0].toLowerCase()](r[1]), !0)); }), t; }, i.prototype.getDataPlaneEndpoint = function (t, e) { return e.endpoint ? e.endpoint : pn.replace(Uo, t); }, i.prototype.telemetryFunctor = function () { var t; return t = {}, t[Re.Errors] = function (e) { return [new ni(e)]; }, t[Re.Performance] = function (e) { return [new so(e), new co(e), new ko(e)]; }, t[Re.Interaction] = function (e) { return [new ri(e)]; }, t[Re.Http] = function (e) { return [new Mo(e), new Ho(e)]; }, t; }, i; })();
var Go = -1, mn = function (i) { addEventListener("pageshow", function (t) { t.persisted && (Go = t.timeStamp, i(t)); }, !0); }, Wo = function () { var i = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]; if (i && i.responseStart > 0 && i.responseStart < performance.now())
    return i; }, gn = function () { var i = Wo(); return i && i.activationStart || 0; }, sr = function (i, t) { var e = Wo(), r = "navigate"; return Go >= 0 ? r = "back-forward-cache" : e && (document.prerendering || gn() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : e.type && (r = e.type.replace(/_/g, "-"))), { name: i, value: t === void 0 ? -1 : t, rating: "good", delta: 0, entries: [], id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r }; }, zo = function (i, t, e) { try {
    if (PerformanceObserver.supportedEntryTypes.includes(i)) {
        var r = new PerformanceObserver(function (n) { Promise.resolve().then(function () { t(n.getEntries()); }); });
        return r.observe(Object.assign({ type: i, buffered: !0 }, e || {})), r;
    }
}
catch { } }, cr = function (i, t, e, r) { var n, o; return function (a) { t.value >= 0 && (a || r) && ((o = t.value - (n || 0)) || n === void 0) && (n = t.value, t.delta = o, t.rating = (function (u, f) { return u > f[1] ? "poor" : u > f[0] ? "needs-improvement" : "good"; })(t.value, e), i(t)); }; }, Ko = function (i) { requestAnimationFrame(function () { return requestAnimationFrame(function () { return i(); }); }); }, Xo = function (i) { document.addEventListener("visibilitychange", function () { document.visibilityState === "hidden" && i(); }); }, Yo = function (i) { var t = !1; return function () { t || (i(), t = !0); }; }, Oe = -1, Fo = function () { return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0; }, ur = function (i) { document.visibilityState === "hidden" && Oe > -1 && (Oe = i.type === "visibilitychange" ? i.timeStamp : 0, ec()); }, jo = function () { addEventListener("visibilitychange", ur, !0), addEventListener("prerenderingchange", ur, !0); }, ec = function () { removeEventListener("visibilitychange", ur, !0), removeEventListener("prerenderingchange", ur, !0); }, $o = function () { return Oe < 0 && (Oe = Fo(), jo(), mn(function () { setTimeout(function () { Oe = Fo(), jo(); }, 0); })), { get firstHiddenTime() { return Oe; } }; }, Qo = function (i) { document.prerendering ? addEventListener("prerenderingchange", function () { return i(); }, !0) : i(); }, qo = [1800, 3e3], Jo = function (i, t) { t = t || {}, Qo(function () { var e, r = $o(), n = sr("FCP"), o = zo("paint", function (a) { a.forEach(function (u) { u.name === "first-contentful-paint" && (o.disconnect(), u.startTime < r.firstHiddenTime && (n.value = Math.max(u.startTime - gn(), 0), n.entries.push(u), e(!0))); }); }); o && (e = cr(i, n, qo, t.reportAllChanges), mn(function (a) { n = sr("FCP"), e = cr(i, n, qo, t.reportAllChanges), Ko(function () { n.value = performance.now() - a.timeStamp, e(!0); }); })); }); };
var tc = function (i) { var t = self.requestIdleCallback || self.setTimeout, e = -1; return i = Yo(i), document.visibilityState === "hidden" ? i() : (e = t(i), Xo(i)), e; };
var Vo = [2500, 4e3], vn = {}, Zo = function (i, t) { t = t || {}, Qo(function () { var e, r = $o(), n = sr("LCP"), o = function (f) { t.reportAllChanges || (f = f.slice(-1)), f.forEach(function (s) { s.startTime < r.firstHiddenTime && (n.value = Math.max(s.startTime - gn(), 0), n.entries = [s], e()); }); }, a = zo("largest-contentful-paint", o); if (a) {
    e = cr(i, n, Vo, t.reportAllChanges);
    var u = Yo(function () { vn[n.id] || (o(a.takeRecords()), a.disconnect(), vn[n.id] = !0, e(!0)); });
    ["keydown", "click"].forEach(function (f) { addEventListener(f, function () { return tc(u); }, { once: !0, capture: !0 }); }), Xo(u), mn(function (f) { n = sr("LCP"), e = cr(i, n, Vo, t.reportAllChanges), Ko(function () { n.value = performance.now() - f.timeStamp, vn[n.id] = !0, e(!0); }); });
} }); };
var ea = "navigation", rc = "FCP", nc = "LCP", ta = (function () { function i(t) { var e = this; this.visuallyReadyTimestamp = 0, this.timeIntervals = 0, this.fcpSupported = !1, this.lcpSupported = !1, this.cleanupVisuallyReadySearch = !1, this.CHECK_PERIOD = 1e3, this.VISUALLY_READY_RESOLVE_TIMEOUT = 1e4, this.visualReadyIntervalHandler = function () { var r = e.timeIntervals * e.CHECK_PERIOD > e.VISUALLY_READY_RESOLVE_TIMEOUT; e.isOkToResolveVisuallyReady(r) ? (e.visuallyReadyTimestamp = Math.max(e.fcpTime ? e.fcpTime : 0, e.lcpTime ? e.lcpTime : 0, e.domContentLoadedEventEnd ? e.domContentLoadedEventEnd : 0), clearInterval(e.visualReadyInterval), e.cleanupVisuallyReadySearch = !0, e.quietWindowSearch.startTtiSearch(e.visuallyReadyTimestamp)) : r && (e.cleanupVisuallyReadySearch = !0, e.quietWindowSearch.cleanupQuietWindowSearch()), e.timeIntervals += 1; }, this.navEventListener = function () { var r = new PerformanceObserver(function (n) { e.cleanupVisuallyReadySearch && r.disconnect(), n.getEntries().filter(function (o) { return o.entryType === ea; }).map(function (o) { return o; }).forEach(function (o) { o.domContentLoadedEventEnd && (e.domContentLoadedEventEnd = o.domContentLoadedEventEnd); }); }); r.observe({ type: ea, buffered: !0 }); }, this.initListeners(), this.quietWindowSearch = t, this.visualReadyInterval = this.startVisualReadyInterval(); } return i.prototype.startVisualReadyInterval = function () { return setInterval(this.visualReadyIntervalHandler, this.CHECK_PERIOD); }, i.prototype.isOkToResolveVisuallyReady = function (t) { var e = this.lcpTime !== void 0 && this.fcpTime !== void 0 && this.domContentLoadedEventEnd !== void 0, r = this.lcpSupported && this.lcpTime !== void 0 || this.fcpSupported && this.fcpTime !== void 0 || this.domContentLoadedEventEnd !== void 0; return e ? !0 : !!(t && r); }, i.prototype.handleWebVitals = function (t) { var e = this; t.name === rc && t.entries.forEach(function (r) { return e.fcpTime = r.startTime + r.duration; }), t.name === nc && t.entries.forEach(function (r) { return e.lcpTime = r.startTime + r.duration; }); }, i.prototype.initListeners = function () { var t = this; this.navEventListener(), this.lcpSupported = Xt(), this.fcpSupported = io(), this.fcpSupported && (this.fcpTime = void 0, Jo(function (e) { return t.handleWebVitals(e); })), this.lcpSupported && (this.lcpTime = void 0, Zo(function (e) { return t.handleWebVitals(e); })); }, i; })();
var Y = "longtask", Le = "fps", ic = "navigation", ra = (function () { function i(t, e) { var r = this; this.ttiTracker = {}, this.ttiResolved = !1, this.startBucket = 0, this.currBucket = 0, this.acceptedIntervals = 0, this.totalIntervals = 0, this.visuallyReadyTimestamp = 0, this.fpsEnabled = !1, this.COLLECTION_PERIOD = 100, this.REQUIRED_ACCEPTED_INTERVALS = 5, this.CHECK_PERIOD = 1e3, this.TTI_RESOLVE_TIMEOUT = 1e4, this.FPS_THRESHOLD = 20 / (1e3 / this.COLLECTION_PERIOD), this.LONG_TASK_THRESHOLD = 0, this.ttiIntervalHandler = function () { var n = r.totalIntervals * r.CHECK_PERIOD > r.TTI_RESOLVE_TIMEOUT; n && (r.ttiResolved = !0, r.ttiTracker = {}, clearInterval(r.ttiInterval)); for (var o = r.computeTimeWindow(), a = r.currBucket; a <= o; a++) {
    r.currBucket = a;
    var u = !0;
    if (r.isTTIConditionNotFulfilied(Y, a) && (u = !1), r.fpsEnabled && r.isTTIConditionNotFulfilied(Le, a) && (u = !1), !u) {
        r.acceptedIntervals = 0;
        continue;
    }
    if (r.acceptedIntervals += 1, r.isTTIResolved(r.acceptedIntervals)) {
        r.ttiResolved = !0, clearInterval(r.ttiInterval), r.onReport({ name: "TTI", value: r.computeTTIValue() });
        break;
    }
    else
        continue;
} r.totalIntervals += 1; }, this.longTaskEventListener = function () { var n = new PerformanceObserver(function (o) { r.ttiResolved && n.disconnect(), o.getEntries().filter(function (a) { return a.entryType === Y; }).forEach(function (a) { if (a.startTime && a.duration) {
    var u = a.startTime + a.duration;
    r.addToTracker(Y, r.computeTimeWindow(a.startTime), 1), r.addToTracker(Y, r.computeTimeWindow(u), 1);
} }); }); n.observe({ type: Y }); }, this.framesPerSecondListener = function () { var n = function () { r.addToTracker(Le, r.computeTimeWindow(), 1), window.requestAnimationFrame(n); }; r.ttiResolved || window.requestAnimationFrame(n); }, this.fpsEnabled = t, this.initListeners(), this.onReport = e; } return i.prototype.startTtiSearch = function (t) { this.startBucket = Math.max(this.computeTimeWindow(t), 0), this.currBucket = this.startBucket, this.acceptedIntervals = 0, this.totalIntervals = 0, this.visuallyReadyTimestamp = t, this.ttiInterval = setInterval(this.ttiIntervalHandler, this.CHECK_PERIOD); }, i.prototype.isTTIResolved = function (t) { return t >= this.REQUIRED_ACCEPTED_INTERVALS; }, i.prototype.computeTTIValue = function () { var t = (this.currBucket - this.REQUIRED_ACCEPTED_INTERVALS - this.startBucket + 1) * this.COLLECTION_PERIOD; return this.ttiTracker = {}, this.getPrerenderedOffset(this.visuallyReadyTimestamp + t); }, i.prototype.getPrerenderedOffset = function (t) { var e = this.getActivationStart(); if (e === void 0)
    return t; var r = Math.floor(t) - e; return r >= 0 ? Math.max(1, r) : t; }, i.prototype.getActivationStart = function () { if (this.prerenderedOffset !== void 0)
    return this.prerenderedOffset; if (typeof document.prerendering != "boolean")
    return this.prerenderedOffset; if (window.performance) {
    var t = window.performance.getEntriesByType(ic)[0];
    t && t.activationStart && (this.prerenderedOffset = Math.floor(t.activationStart));
} return this.prerenderedOffset; }, i.prototype.isTTIConditionNotFulfilied = function (t, e) { if (t === Y)
    return this.ttiTracker[Y] !== void 0 && this.ttiTracker[Y][e] !== void 0 && this.ttiTracker[Y][e] > this.LONG_TASK_THRESHOLD; if (t === Le)
    return this.fpsEnabled && this.ttiTracker[Le] !== void 0 && this.ttiTracker[Le][e] !== void 0 && this.ttiTracker[Le][e] < this.FPS_THRESHOLD; }, i.prototype.initListeners = function () { this.longTaskEventListener(), this.fpsEnabled && window.requestAnimationFrame !== void 0 && this.framesPerSecondListener(); }, i.prototype.computeTimeWindow = function (t) { return Math.floor(t === void 0 ? performance.now() / this.COLLECTION_PERIOD : t / this.COLLECTION_PERIOD); }, i.prototype.addToTracker = function (t, e, r) { this.ttiTracker[t] || (this.ttiTracker[t] = []), this.ttiTracker[t][e] || (this.ttiTracker[t][e] = 0), this.ttiTracker[t][e] += r; }, i.prototype.cleanupQuietWindowSearch = function () { this.ttiResolved = !0, this.ttiTracker = {}; }, i; })();
function na(i, t) { oo() && new oc(i, t); }
var oc = (function () { function i(t, e) { this.onReport = t, this.quietWindowSearch = new ra(e.fpsEnabled, this.onReport), this.visuallyReadySearch = new ta(this.quietWindowSearch); } return i; })();
var ac = (function () { var i = function (t, e) { return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]); }, i(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); i(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }; })(), sc = "time-to-interactive", cc = (function (i) { ac(t, i); function t(e) { e === void 0 && (e = !1); var r = i.call(this, sc) || this; return r.recordTTIEvent = function () { na(r.handleTTI, { fpsEnabled: r.fpsEnabled }); }, r.checkPrerenderingActivity = function () { if (typeof document < "u" && typeof document.prerendering == "boolean" && document.prerendering && (r.normalPageLoad = !1, document.addEventListener("prerenderingchange", function () { r.prerenderedPageLoad = !0, r.recordTTIEvent(); })), typeof performance < "u" && typeof performance.getEntriesByType == "function")
    try {
        var n = performance.getEntriesByType("navigation");
        if (n && n.length > 0) {
            var o = n[0];
            o && o.activationStart && o.activationStart > 0 && (r.prerenderedPageLoad = !0, r.normalPageLoad = !1);
        }
    }
    catch (a) {
        console.debug("Error accessing Performance API:", a);
    } }, r.handleTTI = function (n) { var o = { version: "1.0.0", value: Math.round(n.value) }; r.context.record(ei, o); }, r.fpsEnabled = e, r.prerenderedPageLoad = !1, r.normalPageLoad = !0, r.checkPrerenderingActivity(), r; } return t.prototype.enable = function () { }, t.prototype.disable = function () { }, t.prototype.configure = function () { }, t.prototype.onload = function () { (this.normalPageLoad || this.prerenderedPageLoad) && this.recordTTIEvent(); }, t; })(P);
export { Zs as AwsRum, Pr as DOM_EVENT_PLUGIN_ID, ri as DomEventPlugin, Ks as FETCH_PLUGIN_ID, Ho as FetchPlugin, Or as JS_ERROR_EVENT_PLUGIN_ID, ni as JsErrorPlugin, Ss as NAVIGATION_EVENT_PLUGIN_ID, so as NavigationPlugin, Ys as PAGE_EVENT_PLUGIN_ID, ce as PageIdFormatEnum, Do as PageViewPlugin, Is as RESOURCE_EVENT_PLUGIN_ID, co as ResourcePlugin, cc as TTIPlugin, Re as TelemetryEnum, qs as WEB_VITAL_EVENT_PLUGIN_ID, ko as WebVitalsPlugin, Ws as XHR_PLUGIN_ID, Mo as XhrPlugin };
//# sourceMappingURL=aws_rum_web.0iD4ttngnj.js.map
