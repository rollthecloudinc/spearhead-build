import { a as J } from "@nf-internal/chunk-FM6WEN77";
import { a as ut } from "@nf-internal/chunk-CIMUNS7S";
import { a as Ca } from "@nf-internal/chunk-UKAP7HNY";
import { a as ae, b as je, e as xa, f as U, g as Sa, h as xr, i as Vn, k as A } from "@nf-internal/chunk-J4XOFOAH";
var hi = U((Fe, yt) => { (function (r, t) {
    "use strict";
    var e = "1.0.41", n = "", i = "?", o = "function", a = "undefined", u = "object", f = "string", s = "major", c = "model", l = "name", d = "type", h = "vendor", p = "version", b = "architecture", E = "console", v = "mobile", m = "tablet", S = "smarttv", C = "wearable", R = "embedded", F = 500, de = "Amazon", he = "Apple", Pn = "ASUS", Rn = "BlackBerry", rt = "Browser", nt = "Chrome", ba = "Edge", it = "Firefox", ot = "Google", On = "Honor", Ln = "Huawei", wa = "Lenovo", at = "LG", vr = "Microsoft", gr = "Motorola", yr = "Nvidia", kn = "OnePlus", Ne = "Opera", br = "OPPO", Me = "Samsung", Nn = "Sharp", He = "Sony", wr = "Xiaomi", Er = "Zebra", Mn = "Facebook", Hn = "Chromium OS", Dn = "Mac OS", Un = " Browser", Ea = function (w, T) { var y = {}; for (var x in w)
        T[x] && T[x].length % 2 === 0 ? y[x] = T[x].concat(w[x]) : y[x] = w[x]; return y; }, st = function (w) { for (var T = {}, y = 0; y < w.length; y++)
        T[w[y].toUpperCase()] = w[y]; return T; }, Bn = function (w, T) { return typeof w === f ? De(T).indexOf(De(w)) !== -1 : !1; }, De = function (w) { return w.toLowerCase(); }, Ta = function (w) { return typeof w === f ? w.replace(/[^\d\.]/g, n).split(".")[0] : t; }, Tr = function (w, T) { if (typeof w === f)
        return w = w.replace(/^\s\s*/, n), typeof T === a ? w : w.substring(0, F); }, Ue = function (w, T) { for (var y = 0, x, X, q, _, g, V; y < T.length && !g;) {
        var _r = T[y], qn = T[y + 1];
        for (x = X = 0; x < _r.length && !g && _r[x];)
            if (g = _r[x++].exec(w), g)
                for (q = 0; q < qn.length; q++)
                    V = g[++X], _ = qn[q], typeof _ === u && _.length > 0 ? _.length === 2 ? typeof _[1] == o ? this[_[0]] = _[1].call(this, V) : this[_[0]] = _[1] : _.length === 3 ? typeof _[1] === o && !(_[1].exec && _[1].test) ? this[_[0]] = V ? _[1].call(this, V, _[2]) : t : this[_[0]] = V ? V.replace(_[1], _[2]) : t : _.length === 4 && (this[_[0]] = V ? _[3].call(this, V.replace(_[1], _[2])) : t) : this[_] = V || t;
        y += 2;
    } }, Be = function (w, T) { for (var y in T)
        if (typeof T[y] === u && T[y].length > 0) {
            for (var x = 0; x < T[y].length; x++)
                if (Bn(T[y][x], w))
                    return y === i ? t : y;
        }
        else if (Bn(T[y], w))
            return y === i ? t : y; return T.hasOwnProperty("*") ? T["*"] : w; }, _a = { "1.0": "/8", "1.2": "/1", "1.3": "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, jn = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", "8.1": "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Fn = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [p, [l, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [p, [l, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [l, p], [/opios[\/ ]+([\w\.]+)/i], [p, [l, Ne + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [p, [l, Ne + " GX"]], [/\bopr\/([\w\.]+)/i], [p, [l, Ne]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [p, [l, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [p, [l, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [l, p], [/quark(?:pc)?\/([-\w\.]+)/i], [p, [l, "Quark"]], [/\bddg\/([\w\.]+)/i], [p, [l, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [p, [l, "UC" + rt]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [p, [l, "WeChat"]], [/konqueror\/([\w\.]+)/i], [p, [l, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [p, [l, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [p, [l, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [p, [l, "Smart Lenovo " + rt]], [/(avast|avg)\/([\w\.]+)/i], [[l, /(.+)/, "$1 Secure " + rt], p], [/\bfocus\/([\w\.]+)/i], [p, [l, it + " Focus"]], [/\bopt\/([\w\.]+)/i], [p, [l, Ne + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [p, [l, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [p, [l, "Dolphin"]], [/coast\/([\w\.]+)/i], [p, [l, Ne + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [p, [l, "MIUI" + Un]], [/fxios\/([\w\.-]+)/i], [p, [l, it]], [/\bqihoobrowser\/?([\w\.]*)/i], [p, [l, "360"]], [/\b(qq)\/([\w\.]+)/i], [[l, /(.+)/, "$1Browser"], p], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[l, /(.+)/, "$1" + Un], p], [/samsungbrowser\/([\w\.]+)/i], [p, [l, Me + " Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [p, [l, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[l, "Sogou Mobile"], p], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [l, p], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [l], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [p, l], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[l, Mn], p], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [l, p], [/\bgsa\/([\w\.]+) .*safari\//i], [p, [l, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [p, [l, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [p, [l, nt + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[l, nt + " WebView"], p], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [p, [l, "Android " + rt]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [l, p], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [p, [l, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [p, l], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [l, [p, Be, _a]], [/(webkit|khtml)\/([\w\.]+)/i], [l, p], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[l, "Netscape"], p], [/(wolvic|librewolf)\/([\w\.]+)/i], [l, p], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [p, [l, it + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i], [l, [p, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [l, [p, /master.|lts./, ""]]], cpu: [[/\b((amd|x|x86[-_]?|wow|win)64)\b/i], [[b, "amd64"]], [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i], [[b, "ia32"]], [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i], [[b, "arm64"]], [/\b(arm(v[67])?ht?n?[fl]p?)\b/i], [[b, "armhf"]], [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i], [[b, "arm"]], [/((ppc|powerpc)(64)?)( mac|;|\))/i], [[b, /ower/, n, De]], [/ sun4\w[;\)]/i], [[b, "sparc"]], [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i], [[b, De]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [h, Me], [d, m]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [c, [h, Me], [d, v]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [h, he], [d, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [h, he], [d, m]], [/(macintosh);/i], [c, [h, he]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [h, Nn], [d, v]], [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i], [c, [h, On], [d, m]], [/honor([-\w ]+)[;\)]/i], [c, [h, On], [d, v]], [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i], [c, [h, Ln], [d, m]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [h, Ln], [d, v]], [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i], [[c, /_/g, " "], [h, wr], [d, m]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i], [[c, /_/g, " "], [h, wr], [d, v]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [h, br], [d, v]], [/\b(opd2(\d{3}a?))(?: bui|\))/i], [c, [h, Be, { OnePlus: ["304", "403", "203"], "*": br }], [d, m]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [h, "Vivo"], [d, v]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [h, "Realme"], [d, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [h, gr], [d, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [h, gr], [d, m]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [h, at], [d, m]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [h, at], [d, v]], [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i], [c, [h, wa], [d, m]], [/(nokia) (t[12][01])/i], [h, c, [d, m]], [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i], [[c, /_/g, " "], [d, v], [h, "Nokia"]], [/(pixel (c|tablet))\b/i], [c, [h, ot], [d, m]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [h, ot], [d, v]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [h, He], [d, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [h, He], [d, m]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [h, kn], [d, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [h, de], [d, m]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [h, de], [d, v]], [/(playbook);[-\w\),; ]+(rim)/i], [c, h, [d, m]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [h, Rn], [d, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [h, Pn], [d, m]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [h, Pn], [d, v]], [/(nexus 9)/i], [c, [h, "HTC"], [d, m]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [c, /_/g, " "], [d, v]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [c, [h, "TCL"], [d, m]], [/(itel) ((\w+))/i], [[h, De], c, [d, Be, { tablet: ["p10001l", "w7001"], "*": "mobile" }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [h, "Acer"], [d, m]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [h, "Meizu"], [d, v]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [h, "Ulefone"], [d, v]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [c, [h, "Energizer"], [d, v]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [c, [h, "Cat"], [d, v]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [c, [h, "Smartfren"], [d, v]], [/droid.+; (a(?:015|06[35]|142p?))/i], [c, [h, "Nothing"], [d, v]], [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i], [c, [h, "Archos"], [d, m]], [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i], [c, [h, "Archos"], [d, v]], [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i], [h, c, [d, m]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i], [h, c, [d, v]], [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, c, [d, m]], [/(surface duo)/i], [c, [h, vr], [d, m]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [h, "Fairphone"], [d, v]], [/(u304aa)/i], [c, [h, "AT&T"], [d, v]], [/\bsie-(\w*)/i], [c, [h, "Siemens"], [d, v]], [/\b(rct\w+) b/i], [c, [h, "RCA"], [d, m]], [/\b(venue[\d ]{2,7}) b/i], [c, [h, "Dell"], [d, m]], [/\b(q(?:mv|ta)\w+) b/i], [c, [h, "Verizon"], [d, m]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [h, "Barnes & Noble"], [d, m]], [/\b(tm\d{3}\w+) b/i], [c, [h, "NuVision"], [d, m]], [/\b(k88) b/i], [c, [h, "ZTE"], [d, m]], [/\b(nx\d{3}j) b/i], [c, [h, "ZTE"], [d, v]], [/\b(gen\d{3}) b.+49h/i], [c, [h, "Swiss"], [d, v]], [/\b(zur\d{3}) b/i], [c, [h, "Swiss"], [d, m]], [/\b((zeki)?tb.*\b) b/i], [c, [h, "Zeki"], [d, m]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], c, [d, m]], [/\b(ns-?\w{0,9}) b/i], [c, [h, "Insignia"], [d, m]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [h, "NextBook"], [d, m]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], c, [d, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], c, [d, v]], [/\b(ph-1) /i], [c, [h, "Essential"], [d, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [h, "Envizen"], [d, m]], [/\b(trio[-\w\. ]+) b/i], [c, [h, "MachSpeed"], [d, m]], [/\btu_(1491) b/i], [c, [h, "Rotor"], [d, m]], [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i], [c, [h, yr], [d, m]], [/(sprint) (\w+)/i], [h, c, [d, v]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [h, vr], [d, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [h, Er], [d, m]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [h, Er], [d, v]], [/smart-tv.+(samsung)/i], [h, [d, S]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [h, Me], [d, S]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, at], [d, S]], [/(apple) ?tv/i], [h, [c, he + " TV"], [d, S]], [/crkey/i], [[c, nt + "cast"], [h, ot], [d, S]], [/droid.+aft(\w+)( bui|\))/i], [c, [h, de], [d, S]], [/(shield \w+ tv)/i], [c, [h, yr], [d, S]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [h, Nn], [d, S]], [/(bravia[\w ]+)( bui|\))/i], [c, [h, He], [d, S]], [/(mi(tv|box)-?\w+) bui/i], [c, [h, wr], [d, S]], [/Hbbtv.*(technisat) (.*);/i], [h, c, [d, S]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[h, Tr], [c, Tr], [d, S]], [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i], [c, [d, S]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, S]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, c, [d, E]], [/droid.+; (shield)( bui|\))/i], [c, [h, yr], [d, E]], [/(playstation \w+)/i], [c, [h, He], [d, E]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [h, vr], [d, E]], [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i], [c, [h, Me], [d, C]], [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i], [h, c, [d, C]], [/(ow(?:19|20)?we?[1-3]{1,3})/i], [c, [h, br], [d, C]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [h, he], [d, C]], [/(opwwe\d{3})/i], [c, [h, kn], [d, C]], [/(moto 360)/i], [c, [h, gr], [d, C]], [/(smartwatch 3)/i], [c, [h, He], [d, C]], [/(g watch r)/i], [c, [h, at], [d, C]], [/droid.+; (wt63?0{2,3})\)/i], [c, [h, Er], [d, C]], [/droid.+; (glass) \d/i], [c, [h, ot], [d, C]], [/(pico) (4|neo3(?: link|pro)?)/i], [h, c, [d, C]], [/; (quest( \d| pro)?)/i], [c, [h, Mn], [d, C]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [d, R]], [/(aeobc)\b/i], [c, [h, de], [d, R]], [/(homepod).+mac os/i], [c, [h, he], [d, R]], [/windows iot/i], [[d, R]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [d, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [d, m]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, m]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, v]], [/droid .+?; ([\w\. -]+)( bui|\))/i], [c, [h, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [p, [l, ba + "HTML"]], [/(arkweb)\/([\w\.]+)/i], [l, p], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [p, [l, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [l, p], [/ladybird\//i], [[l, "LibWeb"]], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [p, l]], os: [[/microsoft (windows) (vista|xp)/i], [l, p], [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i], [l, [p, Be, jn]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[p, Be, jn], [l, "Windows"]], [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[p, /_/g, "."], [l, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[l, Dn], [p, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [p, l], [/(ubuntu) ([\w\.]+) like android/i], [[l, /(.+)/, "$1 Touch"], p], [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i], [l, p], [/\(bb(10);/i], [p, [l, Rn]], [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i], [p, [l, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [p, [l, it + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [p, [l, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [p, [l, "watchOS"]], [/crkey\/([\d\.]+)/i], [p, [l, nt + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[l, Hn], p], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [l, p], [/(sunos) ?([\w\.\d]*)/i], [[l, "Solaris"], p], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [l, p]] }, L = function (w, T) { if (typeof w === u && (T = w, w = t), !(this instanceof L))
        return new L(w, T).getResult(); var y = typeof r !== a && r.navigator ? r.navigator : t, x = w || (y && y.userAgent ? y.userAgent : n), X = y && y.userAgentData ? y.userAgentData : t, q = T ? Ea(Fn, T) : Fn, _ = y && y.userAgent == x; return this.getBrowser = function () { var g = {}; return g[l] = t, g[p] = t, Ue.call(g, x, q.browser), g[s] = Ta(g[p]), _ && y && y.brave && typeof y.brave.isBrave == o && (g[l] = "Brave"), g; }, this.getCPU = function () { var g = {}; return g[b] = t, Ue.call(g, x, q.cpu), g; }, this.getDevice = function () { var g = {}; return g[h] = t, g[c] = t, g[d] = t, Ue.call(g, x, q.device), _ && !g[d] && X && X.mobile && (g[d] = v), _ && g[c] == "Macintosh" && y && typeof y.standalone !== a && y.maxTouchPoints && y.maxTouchPoints > 2 && (g[c] = "iPad", g[d] = m), g; }, this.getEngine = function () { var g = {}; return g[l] = t, g[p] = t, Ue.call(g, x, q.engine), g; }, this.getOS = function () { var g = {}; return g[l] = t, g[p] = t, Ue.call(g, x, q.os), _ && !g[l] && X && X.platform && X.platform != "Unknown" && (g[l] = X.platform.replace(/chrome os/i, Hn).replace(/macos/i, Dn)), g; }, this.getResult = function () { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() }; }, this.getUA = function () { return x; }, this.setUA = function (g) { return x = typeof g === f && g.length > F ? Tr(g, F) : g, this; }, this.setUA(x), this; };
    L.VERSION = e, L.BROWSER = st([l, p, s]), L.CPU = st([b]), L.DEVICE = st([c, h, d, E, v, S, m, C, R]), L.ENGINE = L.OS = st([l, p]), typeof Fe !== a ? (typeof yt !== a && yt.exports && (Fe = yt.exports = L), Fe.UAParser = L) : typeof define === o && define.amd ? define(function () { return L; }) : typeof r !== a && (r.UAParser = L);
    var pe = typeof r !== a && (r.jQuery || r.Zepto);
    if (pe && !pe.ua) {
        var ct = new L;
        pe.ua = ct.getResult(), pe.ua.get = function () { return ct.getUA(); }, pe.ua.set = function (w) { ct.setUA(w); var T = ct.getResult(); for (var y in T)
            pe.ua[y] = T[y]; };
    }
})(typeof window == "object" ? window : Fe); });
var bi = U((pd, yi) => {
    "use strict";
    function jr(r) { return typeof r == "function"; }
    var O = console.error.bind(console);
    function Ve(r, t, e) { var n = !!r[t] && r.propertyIsEnumerable(t); Object.defineProperty(r, t, { configurable: !0, enumerable: n, writable: !0, value: e }); }
    function Ge(r) { r && r.logger && (jr(r.logger) ? O = r.logger : O("new logger isn't a function, not replacing")); }
    function vi(r, t, e) { if (!r || !r[t]) {
        O("no original function " + t + " to wrap");
        return;
    } if (!e) {
        O("no wrapper function"), O(new Error().stack);
        return;
    } if (!jr(r[t]) || !jr(e)) {
        O("original object and wrapper must be functions");
        return;
    } var n = r[t], i = e(n, t); return Ve(i, "__original", n), Ve(i, "__unwrap", function () { r[t] === i && Ve(r, t, n); }), Ve(i, "__wrapped", !0), Ve(r, t, i), i; }
    function ss(r, t, e) { if (r)
        Array.isArray(r) || (r = [r]);
    else {
        O("must provide one or more modules to patch"), O(new Error().stack);
        return;
    } if (!(t && Array.isArray(t))) {
        O("must provide one or more functions to wrap on modules");
        return;
    } r.forEach(function (n) { t.forEach(function (i) { vi(n, i, e); }); }); }
    function gi(r, t) { if (!r || !r[t]) {
        O("no function to unwrap."), O(new Error().stack);
        return;
    } if (!r[t].__unwrap)
        O("no original to unwrap to -- has " + t + " already been unwrapped?");
    else
        return r[t].__unwrap(); }
    function cs(r, t) { if (r)
        Array.isArray(r) || (r = [r]);
    else {
        O("must provide one or more modules to patch"), O(new Error().stack);
        return;
    } if (!(t && Array.isArray(t))) {
        O("must provide one or more functions to unwrap on modules");
        return;
    } r.forEach(function (e) { t.forEach(function (n) { gi(e, n); }); }); }
    Ge.wrap = vi;
    Ge.massWrap = ss;
    Ge.unwrap = gi;
    Ge.massUnwrap = cs;
    yi.exports = Ge;
});
var rn = {};
Sa(rn, { __assign: () => en, __asyncDelegator: () => As, __asyncGenerator: () => Is, __asyncValues: () => Ps, __await: () => Ke, __awaiter: () => Es, __classPrivateFieldGet: () => ks, __classPrivateFieldSet: () => Ns, __createBinding: () => _s, __decorate: () => ys, __exportStar: () => xs, __extends: () => vs, __generator: () => Ts, __importDefault: () => Ls, __importStar: () => Os, __makeTemplateObject: () => Rs, __metadata: () => ws, __param: () => bs, __read: () => zi, __rest: () => gs, __spread: () => Ss, __spreadArrays: () => Cs, __values: () => tn });
function vs(r, t) { Zr(r, t); function e() { this.constructor = r; } r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e); }
function gs(r, t) { var e = {}; for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]); if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
        t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]); return e; }
function ys(r, t, e, n) { var i = arguments.length, o = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, e) : n, a; if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(r, t, e, n);
else
    for (var u = r.length - 1; u >= 0; u--)
        (a = r[u]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, e, o) : a(t, e)) || o); return i > 3 && o && Object.defineProperty(t, e, o), o; }
function bs(r, t) { return function (e, n) { t(e, n, r); }; }
function ws(r, t) { if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, t); }
function Es(r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }
function Ts(r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }
function _s(r, t, e, n) { n === void 0 && (n = e), r[n] = t[e]; }
function xs(r, t) { for (var e in r)
    e !== "default" && !t.hasOwnProperty(e) && (t[e] = r[e]); }
function tn(r) { var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0; if (e)
    return e.call(r); if (r && typeof r.length == "number")
    return { next: function () { return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r }; } }; throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined."); }
function zi(r, t) { var e = typeof Symbol == "function" && r[Symbol.iterator]; if (!e)
    return r; var n = e.call(r), i, o = [], a; try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done;)
        o.push(i.value);
}
catch (u) {
    a = { error: u };
}
finally {
    try {
        i && !i.done && (e = n.return) && e.call(n);
    }
    finally {
        if (a)
            throw a.error;
    }
} return o; }
function Ss() { for (var r = [], t = 0; t < arguments.length; t++)
    r = r.concat(zi(arguments[t])); return r; }
function Cs() { for (var r = 0, t = 0, e = arguments.length; t < e; t++)
    r += arguments[t].length; for (var n = Array(r), i = 0, t = 0; t < e; t++)
    for (var o = arguments[t], a = 0, u = o.length; a < u; a++, i++)
        n[i] = o[a]; return n; }
function Ke(r) { return this instanceof Ke ? (this.v = r, this) : new Ke(r); }
function Is(r, t, e) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var n = e.apply(r, t || []), i, o = []; return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function () { return this; }, i; function a(d) { n[d] && (i[d] = function (h) { return new Promise(function (p, b) { o.push([d, h, p, b]) > 1 || u(d, h); }); }); } function u(d, h) { try {
    f(n[d](h));
}
catch (p) {
    l(o[0][3], p);
} } function f(d) { d.value instanceof Ke ? Promise.resolve(d.value.v).then(s, c) : l(o[0][2], d); } function s(d) { u("next", d); } function c(d) { u("throw", d); } function l(d, h) { d(h), o.shift(), o.length && u(o[0][0], o[0][1]); } }
function As(r) { var t, e; return t = {}, n("next"), n("throw", function (i) { throw i; }), n("return"), t[Symbol.iterator] = function () { return this; }, t; function n(i, o) { t[i] = r[i] ? function (a) { return (e = !e) ? { value: Ke(r[i](a)), done: i === "return" } : o ? o(a) : a; } : o; } }
function Ps(r) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var t = r[Symbol.asyncIterator], e; return t ? t.call(r) : (r = typeof tn == "function" ? tn(r) : r[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function () { return this; }, e); function n(o) { e[o] = r[o] && function (a) { return new Promise(function (u, f) { a = r[o](a), i(u, f, a.done, a.value); }); }; } function i(o, a, u, f) { Promise.resolve(f).then(function (s) { o({ value: s, done: u }); }, a); } }
function Rs(r, t) { return Object.defineProperty ? Object.defineProperty(r, "raw", { value: t }) : r.raw = t, r; }
function Os(r) { if (r && r.__esModule)
    return r; var t = {}; if (r != null)
    for (var e in r)
        Object.hasOwnProperty.call(r, e) && (t[e] = r[e]); return t.default = r, t; }
function Ls(r) { return r && r.__esModule ? r : { default: r }; }
function ks(r, t) { if (!t.has(r))
    throw new TypeError("attempted to get private field on non-instance"); return t.get(r); }
function Ns(r, t, e) { if (!t.has(r))
    throw new TypeError("attempted to set private field on non-instance"); return t.set(r, e), e; }
var Zr, en, nn = xa(() => { Zr = function (r, t) { return Zr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, n) { e.__proto__ = n; } || function (e, n) { for (var i in n)
    n.hasOwnProperty(i) && (e[i] = n[i]); }, Zr(r, t); }; en = function () { return en = Object.assign || function (t) { for (var e, n = 1, i = arguments.length; n < i; n++) {
    e = arguments[n];
    for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
} return t; }, en.apply(this, arguments); }; });
var on = U(H => {
    "use strict";
    Object.defineProperty(H, "__esModule", { value: !0 });
    H.MAX_HASHABLE_LENGTH = H.INIT = H.KEY = H.DIGEST_LENGTH = H.BLOCK_SIZE = void 0;
    H.BLOCK_SIZE = 64;
    H.DIGEST_LENGTH = 32;
    H.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    H.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    H.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
});
var Ki = U(Ot => {
    "use strict";
    Object.defineProperty(Ot, "__esModule", { value: !0 });
    Ot.RawSha256 = void 0;
    var D = on(), Ms = (function () { function r() { this.state = Int32Array.from(D.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return r.prototype.update = function (t) { if (this.finished)
        throw new Error("Attempted to update an already finished hash."); var e = 0, n = t.byteLength; if (this.bytesHashed += n, this.bytesHashed * 8 > D.MAX_HASHABLE_LENGTH)
        throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; n > 0;)
        this.buffer[this.bufferLength++] = t[e++], n--, this.bufferLength === D.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0); }, r.prototype.digest = function () { if (!this.finished) {
        var t = this.bytesHashed * 8, e = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), n = this.bufferLength;
        if (e.setUint8(this.bufferLength++, 128), n % D.BLOCK_SIZE >= D.BLOCK_SIZE - 8) {
            for (var i = this.bufferLength; i < D.BLOCK_SIZE; i++)
                e.setUint8(i, 0);
            this.hashBuffer(), this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < D.BLOCK_SIZE - 8; i++)
            e.setUint8(i, 0);
        e.setUint32(D.BLOCK_SIZE - 8, Math.floor(t / 4294967296), !0), e.setUint32(D.BLOCK_SIZE - 4, t), this.hashBuffer(), this.finished = !0;
    } for (var o = new Uint8Array(D.DIGEST_LENGTH), i = 0; i < 8; i++)
        o[i * 4] = this.state[i] >>> 24 & 255, o[i * 4 + 1] = this.state[i] >>> 16 & 255, o[i * 4 + 2] = this.state[i] >>> 8 & 255, o[i * 4 + 3] = this.state[i] >>> 0 & 255; return o; }, r.prototype.hashBuffer = function () { for (var t = this, e = t.buffer, n = t.state, i = n[0], o = n[1], a = n[2], u = n[3], f = n[4], s = n[5], c = n[6], l = n[7], d = 0; d < D.BLOCK_SIZE; d++) {
        if (d < 16)
            this.temp[d] = (e[d * 4] & 255) << 24 | (e[d * 4 + 1] & 255) << 16 | (e[d * 4 + 2] & 255) << 8 | e[d * 4 + 3] & 255;
        else {
            var h = this.temp[d - 2], p = (h >>> 17 | h << 15) ^ (h >>> 19 | h << 13) ^ h >>> 10;
            h = this.temp[d - 15];
            var b = (h >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3;
            this.temp[d] = (p + this.temp[d - 7] | 0) + (b + this.temp[d - 16] | 0);
        }
        var E = (((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & s ^ ~f & c) | 0) + (l + (D.KEY[d] + this.temp[d] | 0) | 0) | 0, v = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & o ^ i & a ^ o & a) | 0;
        l = c, c = s, s = f, f = u + E | 0, u = a, a = o, o = i, i = E + v | 0;
    } n[0] += i, n[1] += o, n[2] += a, n[3] += u, n[4] += f, n[5] += s, n[6] += c, n[7] += l; }, r; })();
    Ot.RawSha256 = Ms;
});
var Xi = U(Lt => {
    "use strict";
    Object.defineProperty(Lt, "__esModule", { value: !0 });
    Lt.convertToBuffer = void 0;
    var Hs = Ca(), Ds = typeof Buffer < "u" && Buffer.from ? function (r) { return Buffer.from(r, "utf8"); } : Hs.fromUtf8;
    function Us(r) { return r instanceof Uint8Array ? r : typeof r == "string" ? Ds(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r); }
    Lt.convertToBuffer = Us;
});
var Yi = U(kt => {
    "use strict";
    Object.defineProperty(kt, "__esModule", { value: !0 });
    kt.isEmptyData = void 0;
    function Bs(r) { return typeof r == "string" ? r.length === 0 : r.byteLength === 0; }
    kt.isEmptyData = Bs;
});
var $i = U(Nt => {
    "use strict";
    Object.defineProperty(Nt, "__esModule", { value: !0 });
    Nt.numToUint8 = void 0;
    function js(r) { return new Uint8Array([(r & 4278190080) >> 24, (r & 16711680) >> 16, (r & 65280) >> 8, r & 255]); }
    Nt.numToUint8 = js;
});
var Qi = U(Mt => {
    "use strict";
    Object.defineProperty(Mt, "__esModule", { value: !0 });
    Mt.uint32ArrayFrom = void 0;
    function Fs(r) { if (!Uint32Array.from) {
        for (var t = new Uint32Array(r.length), e = 0; e < r.length;)
            t[e] = r[e], e += 1;
        return t;
    } return Uint32Array.from(r); }
    Mt.uint32ArrayFrom = Fs;
});
var Ji = U(W => {
    "use strict";
    Object.defineProperty(W, "__esModule", { value: !0 });
    W.uint32ArrayFrom = W.numToUint8 = W.isEmptyData = W.convertToBuffer = void 0;
    var qs = Xi();
    Object.defineProperty(W, "convertToBuffer", { enumerable: !0, get: function () { return qs.convertToBuffer; } });
    var Vs = Yi();
    Object.defineProperty(W, "isEmptyData", { enumerable: !0, get: function () { return Vs.isEmptyData; } });
    var Gs = $i();
    Object.defineProperty(W, "numToUint8", { enumerable: !0, get: function () { return Gs.numToUint8; } });
    var Ws = Qi();
    Object.defineProperty(W, "uint32ArrayFrom", { enumerable: !0, get: function () { return Ws.uint32ArrayFrom; } });
});
var eo = U(Ut => {
    "use strict";
    Object.defineProperty(Ut, "__esModule", { value: !0 });
    Ut.Sha256 = void 0;
    var Zi = (nn(), Vn(rn)), Dt = on(), Ht = Ki(), an = Ji(), zs = (function () { function r(t) { this.secret = t, this.hash = new Ht.RawSha256, this.reset(); } return r.prototype.update = function (t) { if (!((0, an.isEmptyData)(t) || this.error))
        try {
            this.hash.update((0, an.convertToBuffer)(t));
        }
        catch (e) {
            this.error = e;
        } }, r.prototype.digestSync = function () { if (this.error)
        throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, r.prototype.digest = function () { return Zi.__awaiter(this, void 0, void 0, function () { return Zi.__generator(this, function (t) { return [2, this.digestSync()]; }); }); }, r.prototype.reset = function () { if (this.hash = new Ht.RawSha256, this.secret) {
        this.outer = new Ht.RawSha256;
        var t = Ks(this.secret), e = new Uint8Array(Dt.BLOCK_SIZE);
        e.set(t);
        for (var n = 0; n < Dt.BLOCK_SIZE; n++)
            t[n] ^= 54, e[n] ^= 92;
        this.hash.update(t), this.outer.update(e);
        for (var n = 0; n < t.byteLength; n++)
            t[n] = 0;
    } }, r; })();
    Ut.Sha256 = zs;
    function Ks(r) { var t = (0, an.convertToBuffer)(r); if (t.byteLength > Dt.BLOCK_SIZE) {
        var e = new Ht.RawSha256;
        e.update(t), t = e.digest();
    } var n = new Uint8Array(Dt.BLOCK_SIZE); return n.set(t), n; }
});
var to = U(sn => {
    "use strict";
    Object.defineProperty(sn, "__esModule", { value: !0 });
    var Xs = (nn(), Vn(rn));
    Xs.__exportStar(eo(), sn);
});
var k = class r {
    constructor(t) { this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? t.protocol.slice(-1) !== ":" ? `${t.protocol}:` : t.protocol : "https:", this.path = t.path ? t.path.charAt(0) !== "/" ? `/${t.path}` : t.path : "/", this.username = t.username, this.password = t.password, this.fragment = t.fragment; }
    static clone(t) { let e = new r(je(ae({}, t), { headers: ae({}, t.headers) })); return e.query && (e.query = Ia(e.query)), e; }
    static isInstance(t) { if (!t)
        return !1; let e = t; return "method" in e && "protocol" in e && "hostname" in e && "path" in e && typeof e.query == "object" && typeof e.headers == "object"; }
    clone() { return r.clone(this); }
};
function Ia(r) { return Object.keys(r).reduce((t, e) => { let n = r[e]; return je(ae({}, t), { [e]: Array.isArray(n) ? [...n] : n }); }, {}); }
var G = class {
    constructor(t) { this.statusCode = t.statusCode, this.reason = t.reason, this.headers = t.headers || {}, this.body = t.body; }
    static isInstance(t) { if (!t)
        return !1; let e = t; return typeof e.statusCode == "number" && typeof e.headers == "object"; }
};
var B = r => encodeURIComponent(r).replace(/[!'()*]/g, Aa), Aa = r => `%${r.charCodeAt(0).toString(16).toUpperCase()}`;
function Gn(r) { let t = []; for (let e of Object.keys(r).sort()) {
    let n = r[e];
    if (e = B(e), Array.isArray(n))
        for (let i = 0, o = n.length; i < o; i++)
            t.push(`${e}=${B(n[i])}`);
    else {
        let i = e;
        (n || typeof n == "string") && (i += `=${B(n)}`), t.push(i);
    }
} return t.join("&"); }
function Sr(r, t) { return new Request(r, t); }
function Wn(r = 0) { return new Promise((t, e) => { r && setTimeout(() => { let n = new Error(`Request did not complete within ${r} ms`); n.name = "TimeoutError", e(n); }, r); }); }
var Cr = { supported: void 0 }, me = class r {
    static create(t) { return typeof t?.handle == "function" ? t : new r(t); }
    constructor(t) { typeof t == "function" ? this.configProvider = t().then(e => e || {}) : (this.config = t ?? {}, this.configProvider = Promise.resolve(this.config)), Cr.supported === void 0 && (Cr.supported = typeof Request < "u" && "keepalive" in Sr("https://[::1]")); }
    destroy() { }
    handle(n) { return A(this, arguments, function* (t, { abortSignal: e } = {}) { this.config || (this.config = yield this.configProvider); let i = this.config.requestTimeout, o = this.config.keepAlive === !0, a = this.config.credentials; if (e?.aborted) {
        let m = new Error("Request aborted");
        return m.name = "AbortError", Promise.reject(m);
    } let u = t.path, f = Gn(t.query || {}); f && (u += `?${f}`), t.fragment && (u += `#${t.fragment}`); let s = ""; if (t.username != null || t.password != null) {
        let m = t.username ?? "", S = t.password ?? "";
        s = `${m}:${S}@`;
    } let { port: c, method: l } = t, d = `${t.protocol}//${s}${t.hostname}${c ? `:${c}` : ""}${u}`, h = l === "GET" || l === "HEAD" ? void 0 : t.body, p = { body: h, headers: new Headers(t.headers), method: l, credentials: a }; this.config?.cache && (p.cache = this.config.cache), h && (p.duplex = "half"), typeof AbortController < "u" && (p.signal = e), Cr.supported && (p.keepalive = o), typeof this.config.requestInit == "function" && Object.assign(p, this.config.requestInit(t)); let b = () => { }, E = Sr(d, p), v = [fetch(E).then(m => { let S = m.headers, C = {}; for (let F of S.entries())
            C[F[0]] = F[1]; return m.body != null ? { response: new G({ headers: C, reason: m.statusText, statusCode: m.status, body: m.body }) } : m.blob().then(F => ({ response: new G({ headers: C, reason: m.statusText, statusCode: m.status, body: F }) })); }), Wn(i)]; return e && v.push(new Promise((m, S) => { let C = () => { let R = new Error("Request aborted"); R.name = "AbortError", S(R); }; if (typeof e.addEventListener == "function") {
        let R = e;
        R.addEventListener("abort", C, { once: !0 }), b = () => R.removeEventListener("abort", C);
    }
    else
        e.onabort = C; })), Promise.race(v).finally(b); }); }
    updateHttpClientConfig(t, e) { this.config = void 0, this.configProvider = this.configProvider.then(n => (n[t] = e, n)); }
    httpHandlerConfigs() { return this.config ?? {}; }
};
var se = {}, ve = new Array(64);
for (let r = 0, t = 65, e = 90; r + t <= e; r++) {
    let n = String.fromCharCode(r + t);
    se[n] = r, ve[r] = n;
}
for (let r = 0, t = 97, e = 122; r + t <= e; r++) {
    let n = String.fromCharCode(r + t), i = r + 26;
    se[n] = i, ve[i] = n;
}
for (let r = 0; r < 10; r++) {
    se[r.toString(10)] = r + 52;
    let t = r.toString(10), e = r + 52;
    se[t] = e, ve[e] = t;
}
se["+"] = 62;
ve[62] = "+";
se["/"] = 63;
ve[63] = "/";
var ge = r => new TextEncoder().encode(r);
var Z = r => typeof r == "string" ? ge(r) : ArrayBuffer.isView(r) ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(r);
var zn = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, Kn = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, ft = function (r) { return zn(void 0, void 0, void 0, function () { var t; return Kn(this, function (e) { switch (e.label) {
    case 0: return [4, r.body.getReader().read()];
    case 1: return t = e.sent().value, [2, JSON.parse(String.fromCharCode.apply(null, t))];
} }); }); }, Xn = function (r) { return zn(void 0, void 0, void 0, function () { var t; return Kn(this, function (e) { switch (e.label) {
    case 0: return [4, r.body.getReader().read()];
    case 1: return t = e.sent().value, [2, String.fromCharCode.apply(null, t)];
} }); }); };
var lt = function () { return lt = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, lt.apply(this, arguments); }, Oa = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, La = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, ka = "POST", Na = "application/x-www-form-urlencoded", Ma = "https:", Ha = "AssumeRoleWithWebIdentity", Da = "2011-06-15", Yn = (function () { function r(t) { var e = this; this.assumeRoleWithWebIdentity = function (n) { return Oa(e, void 0, void 0, function () { var i, o, a, u, f, s; return La(this, function (c) { switch (c.label) {
    case 0: return c.trys.push([0, 3, , 4]), i = lt(lt({}, n), { Action: Ha, Version: Da }), o = new URLSearchParams(Object.entries(i)).toString(), a = new k({ method: ka, headers: { "content-type": Na, host: this.hostname }, protocol: Ma, hostname: this.hostname, body: o }), [4, this.fetchRequestHandler.handle(a)];
    case 1: return u = c.sent().response, [4, Xn(u)];
    case 2: return f = c.sent(), [2, { accessKeyId: f.split("<AccessKeyId>")[1].split("</AccessKeyId>")[0], secretAccessKey: f.split("<SecretAccessKey>")[1].split("</SecretAccessKey>")[0], sessionToken: f.split("<SessionToken>")[1].split("</SessionToken>")[0], expiration: new Date(f.split("<Expiration>")[1].split("</Expiration>")[0]) }];
    case 3: throw s = c.sent(), new Error("CWR: Failed to retrieve credentials from STS: ".concat(s));
    case 4: return [2];
} }); }); }, this.hostname = "sts.".concat(t.region, ".amazonaws.com"), this.fetchRequestHandler = t.fetchRequestHandler; } return r; })();
var Ir = "cwr_c", Ar = "cwr_i", Pr = "cwr_s", Rr = "cwr_u", $n = 3e4;
var Qn = "arw-module";
var Or = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, Lr = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, Ua = "POST", Ba = "application/x-amz-json-1.1", ja = "https:", Fa = "AWSCognitoIdentityService.GetId", qa = "AWSCognitoIdentityService.GetOpenIdToken", Va = "AWSCognitoIdentityService.GetCredentialsForIdentity", Jn = (function () { function r(t) { var e = this, n; this.getId = function (i) { return Or(e, void 0, void 0, function () { var o, a, u, f, s, c; return Lr(this, function (l) { switch (l.label) {
    case 0:
        o = null;
        try {
            o = JSON.parse(localStorage.getItem(this.identityStorageKey));
        }
        catch { }
        if (o && o.IdentityId)
            return [2, Promise.resolve(o)];
        l.label = 1;
    case 1: return l.trys.push([1, 4, , 5]), a = JSON.stringify(i), u = this.getHttpRequest(Fa, a), s = ft, [4, this.fetchRequestHandler.handle(u)];
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
} }); }); }, this.getOpenIdToken = function (i) { return Or(e, void 0, void 0, function () { var o, a, u, f, s; return Lr(this, function (c) { switch (c.label) {
    case 0: return c.trys.push([0, 3, , 4]), o = JSON.stringify(i), a = this.getHttpRequest(qa, o), [4, this.fetchRequestHandler.handle(a)];
    case 1: return u = c.sent().response, f = this.validateOpenIdTokenResponse, [4, ft(u)];
    case 2: return [2, f.apply(this, [c.sent()])];
    case 3: throw s = c.sent(), localStorage.removeItem(this.identityStorageKey), new Error("CWR: Failed to retrieve Cognito OpenId token: ".concat(s));
    case 4: return [2];
} }); }); }, this.getCredentialsForIdentity = function (i) { return Or(e, void 0, void 0, function () { var o, a, u, f, s, c, l, d, h, p; return Lr(this, function (b) { switch (b.label) {
    case 0: return b.trys.push([0, 3, , 4]), o = JSON.stringify({ IdentityId: i }), a = this.getHttpRequest(Va, o), [4, this.fetchRequestHandler.handle(a)];
    case 1: return u = b.sent().response, h = this.validateCredenentialsResponse, [4, ft(u)];
    case 2: return f = h.apply(this, [b.sent()]), s = f.AccessKeyId, c = f.Expiration, l = f.SecretKey, d = f.SessionToken, [2, { accessKeyId: s, secretAccessKey: l, sessionToken: d, expiration: new Date(c * 1e3) }];
    case 3: throw p = b.sent(), localStorage.removeItem(this.identityStorageKey), new Error("CWR: Failed to retrieve credentials for Cognito identity: ".concat(p));
    case 4: return [2];
} }); }); }, this.validateOpenIdTokenResponse = function (i) { if ("IdentityId" in i && "Token" in i)
    return i; throw i && "__type" in i && "message" in i ? new Error("".concat(i.__type, ": ").concat(i.message)) : new Error("Unknown OpenIdToken response"); }, this.validateCredenentialsResponse = function (i) { if ("IdentityId" in i && "Credentials" in i)
    return i.Credentials; throw i && "__type" in i && "message" in i ? new Error("".concat(i.__type, ": ").concat(i.message)) : new Error("Unknown Credentials response"); }, this.getHttpRequest = function (i, o) { return new k({ method: Ua, headers: { "content-type": Ba, "x-amz-target": i }, protocol: ja, hostname: e.hostname, body: o }); }, this.hostname = "cognito-identity.".concat(t.region, ".amazonaws.com"), this.fetchRequestHandler = t.fetchRequestHandler, this.identityStorageKey = !((n = t.clientConfig) === null || n === void 0) && n.cookieAttributes.unique ? "".concat(Ar, "_").concat(t.applicationId) : Ar; } return r; })();
var dt = function () { return dt = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, dt.apply(this, arguments); }, kr = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, Nr = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, ht = (function () { function r(t, e) { var n = this; this.ChainAnonymousCredentialsProvider = function () { return kr(n, void 0, void 0, function () { return Nr(this, function (o) { return [2, this.AnonymousCredentialsProvider().catch(this.AnonymousStorageCredentialsProvider).catch(this.AnonymousCognitoCredentialsProvider)]; }); }); }, this.AnonymousCredentialsProvider = function () { return kr(n, void 0, void 0, function () { var o = this; return Nr(this, function (a) { return [2, new Promise(function (u, f) { if (o.renewCredentials())
        return f(); u(o.credentials); })]; }); }); }, this.AnonymousStorageCredentialsProvider = function () { return kr(n, void 0, void 0, function () { var o = this; return Nr(this, function (a) { return [2, new Promise(function (u, f) { var s; try {
        s = JSON.parse(localStorage.getItem(o.credentialStorageKey));
    }
    catch {
        return f();
    } if (o.credentials = dt(dt({}, s), { expiration: new Date(s.expiration) }), o.renewCredentials())
        return f(); u(o.credentials); })]; }); }); }; var i = t.identityPoolId.split(":")[0]; this.config = t, this.cognitoIdentityClient = new Jn({ fetchRequestHandler: new me, region: i, clientConfig: t, applicationId: e }), this.credentialStorageKey = this.config.cookieAttributes.unique ? "".concat(Ir, "_").concat(e) : Ir; } return r.prototype.renewCredentials = function () { if (!this.credentials || !this.credentials.expiration)
    return !0; var t = new Date(this.credentials.expiration.getTime() - $n); return new Date > t; }, r; })();
var Ga = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), Wa = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, za = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, Zn = (function (r) { Ga(t, r); function t(e, n) { var i = r.call(this, e, n) || this; i.AnonymousCognitoCredentialsProvider = function () { return Wa(i, void 0, void 0, function () { var a, u, f, s, c; return za(this, function (l) { switch (l.label) {
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
} }); }); }; var o = e.identityPoolId.split(":")[0]; return i.stsClient = new Yn({ fetchRequestHandler: new me, region: o }), i; } return t; })(ht);
var Ka = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), Xa = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, Ya = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, ei = (function (r) { Ka(t, r); function t(e, n) { var i = r.call(this, e, n) || this; return i.AnonymousCognitoCredentialsProvider = function () { return Xa(i, void 0, void 0, function () { var o, a, u, f; return Ya(this, function (s) { switch (s.label) {
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
} }); }); }, i; } return t; })(ht);
var N = "com.amazon.rum", ti = "com.amazonaws.rum", ye = "".concat(N, ".http_event"), pt = "".concat(N, ".xray_trace_event"), ri = "".concat(N, ".largest_contentful_paint_event"), ni = "".concat(N, ".first_input_delay_event"), ii = "".concat(N, ".cumulative_layout_shift_event"), oi = "".concat(N, ".interaction_to_next_paint_event"), ce = "".concat(N, ".performance_navigation_event"), mt = "".concat(N, ".performance_resource_event"), ai = "".concat(N, ".dom_event"), si = "".concat(N, ".js_error_event"), ci = "".concat(N, ".page_view_event"), vt = "".concat(N, ".session_start_event"), ui = "".concat(N, ".time_to_interactive_event");
var P = (function () { function r(t) { this.enabled = !0, this.pluginId = r.generatePluginId(t); } return r.generatePluginId = function (t) { return "".concat(r.idPrefix, ".").concat(t); }, r.prototype.load = function (t) { var e; this.context = t, (e = this.onload) === null || e === void 0 || e.call(this); }, r.prototype.getPluginId = function () { return this.pluginId; }, r.idPrefix = ti, r; })();
var fi = (function () { function r(t) { this.context = t, this.plugins = new Map; } return r.prototype.addPlugin = function (t) { var e = t.getPluginId(); if (this.hasPlugin(e))
    throw new Error('Plugin "'.concat(e, '" already defined in the PluginManager')); this.plugins.set(e, t), t.load(this.context); }, r.prototype.updatePlugin = function (t, e) { var n, i = this.getPlugin(t); (n = i?.update) === null || n === void 0 || n.call(i, e); }, r.prototype.enable = function () { this.plugins.forEach(function (t) { return t.enable(); }); }, r.prototype.disable = function () { this.plugins.forEach(function (t) { return t.disable(); }); }, r.prototype.hasPlugin = function (t) { return !!this.getPlugin(t); }, r.prototype.record = function (t, e) { var n = this.getPlugin(t); if (n?.record instanceof Function)
    n.record(e);
else
    throw new Error("AWS RUM Client record: Invalid plugin ID"); }, r.prototype.getPlugin = function (t) { var e; return (e = this.plugins.get(t)) !== null && e !== void 0 ? e : this.plugins.get(P.generatePluginId(t)); }, r; })();
var $a = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), ue = function () { return ue = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, ue.apply(this, arguments); }, Mr = "dom-event", Qa = { interactionId: function () { return ""; }, enableMutationObserver: !1, events: [] }, li = (function (r) { $a(t, r); function t(e) { var n = r.call(this, Mr) || this; return n.enabled = !1, n.eventListenerMap = new Map, n.config = ue(ue({}, Qa), e), n; } return t.getElementInfo = function (e) { var n = { name: "UNKNOWN" }; return e.target instanceof Node && (n.name = e.target.nodeName), e.target instanceof Element && e.target.id && (n.id = e.target.id), n; }, t.prototype.enable = function () { var e = this; if (document.readyState !== "complete") {
    window.addEventListener("load", function () { return e.enable(); });
    return;
} this.enabled || (this.addListeners(), this.config.enableMutationObserver && this.observeDOMMutation(), this.enabled = !0); }, t.prototype.disable = function () { this.enabled && (this.removeListeners(), this.observer && this.observer.disconnect(), this.enabled = !1); }, t.prototype.update = function (e) { var n = this; e.forEach(function (i) { n.addEventHandler(i), n.config.events.push(i); }); }, t.prototype.onload = function () { this.enable(); }, t.prototype.removeListeners = function () { var e = this; this.config.events.forEach(function (n) { return e.removeEventHandler(n); }); }, t.prototype.addListeners = function () { var e = this; this.config.events.forEach(function (n) { return e.addEventHandler(n); }); }, t.prototype.getEventListener = function (e) { var n = this; return function (i) { var o, a = t.getElementInfo(i), u = n.config.interactionId(i), f = ue(ue(ue({ version: "1.1.0", event: i.type, element: a.name }, a.id ? { elementId: a.id } : {}), u ? { interactionId: u } : {}), e ? { cssLocator: e } : {}); !((o = n.context) === null || o === void 0) && o.record && n.context.record(ai, f); }; }, t.prototype.addEventHandler = function (e) { var n = e.event, i = this.getEventListener(e.cssLocator), o = [], a = this.eventListenerMap.has(e) ? this.eventListenerMap.get(e) : []; if (e.cssLocator) {
    var u = document.querySelectorAll(e.cssLocator);
    u.forEach(function (s) { o.push(s); });
}
else if (e.elementId) {
    var f = document.getElementById(e.elementId);
    f && o.push(f);
}
else
    e.element && o.push(e.element); o.forEach(function (s) { s.addEventListener(n, i), a.push({ element: s, eventListener: i }); }), this.eventListenerMap.set(e, a); }, t.prototype.removeEventHandler = function (e) { var n = this.eventListenerMap.get(e); n && (n.forEach(function (i) { var o = i.element, a = i.eventListener; o.removeEventListener(e.event, a); }), this.eventListenerMap.delete(e)); }, t.prototype.observeDOMMutation = function () { var e = this; this.observer = new MutationObserver(function () { e.removeListeners(), e.addListeners(); }), this.observer.observe(document, { childList: !0, subtree: !0 }); }, t; })(P);
var Ja = function (r) { var t = typeof r; return (t === "object" || t === "function") && !!r; }, Za = function (r) { var t = { version: "1.0.0", type: "undefined", message: "undefined" }; return r.type !== void 0 && (t.type = r.type), r.message !== void 0 && (t.message = r.message), r.filename !== void 0 && (t.filename = r.filename), r.lineno !== void 0 && (t.lineno = r.lineno), r.colno !== void 0 && (t.colno = r.colno), t; }, es = function (r, t) { r.type !== "unhandledrejection" && (r.type = t.toString()), r.message = t.toString(); }, ts = function (r, t, e) { t.name && (r.type = t.name), t.message && (r.message = t.message), t.fileName && (r.filename = t.fileName), t.lineNumber && (r.lineno = t.lineNumber), t.columnNumber && (r.colno = t.columnNumber), e && t.stack && (r.stack = t.stack.length > e ? t.stack.substring(0, e) + "..." : t.stack); }, Hr = function (r) { return r !== Object(r) && r !== void 0 && r !== null; }, be = function (r, t) { var e = Za(r), n = r.error; return Ja(n) ? ts(e, n, t) : Hr(n) && es(e, n), e; };
var rs = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), gt = function () { return gt = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, gt.apply(this, arguments); }, Dr = "js-error", ns = { stackTraceLength: 1e3, ignore: function () { return !1; } }, di = (function (r) { rs(t, r); function t(e) { var n = r.call(this, Dr) || this; return n.eventHandler = function (i) { n.config.ignore(i) || n.recordJsErrorEvent(i); }, n.promiseRejectEventHandler = function (i) { n.config.ignore(i) || n.recordJsErrorEvent({ type: i.type, error: i.reason }); }, n.config = gt(gt({}, ns), e), n; } return t.prototype.enable = function () { this.enabled || (this.addEventHandler(), this.enabled = !0); }, t.prototype.disable = function () { this.enabled && (this.removeEventHandler(), this.enabled = !1); }, t.prototype.record = function (e) { e instanceof ErrorEvent ? this.recordJsErrorEvent(e) : this.recordJsErrorEvent({ type: "error", error: e }); }, t.prototype.onload = function () { this.addEventHandler(); }, t.prototype.recordJsErrorEvent = function (e) { var n; (n = this.context) === null || n === void 0 || n.record(si, be(e, this.config.stackTraceLength)); }, t.prototype.addEventHandler = function () { window.addEventListener("error", this.eventHandler), window.addEventListener("unhandledrejection", this.promiseRejectEventHandler); }, t.prototype.removeEventHandler = function () { window.removeEventListener("error", this.eventHandler), window.removeEventListener("unhandledrejection", this.promiseRejectEventHandler); }, t; })(P);
var Ur = function (r, t, e, n, i) { var o = r + "="; o += t || "", i !== void 0 ? o += "; Expires=".concat(i.toUTCString()) : n !== void 0 && (o += "; Expires=".concat(is(n).toUTCString())), o += "; Domain=".concat(e.domain), o += "; Path=".concat(e.path), o += "; SameSite=".concat(e.sameSite), o += e.secure ? "; Secure" : "", document.cookie = o; }, is = function (r) { return new Date(new Date().getTime() + r * 1e3); };
var Br = function (r) { for (var t = document.cookie.split("; "), e = 0, n = t; e < n.length; e++) {
    var i = n[e], o = i.split("=");
    if (o[0] === r)
        return o[1];
} return ""; };
var pi = xr(hi());
var wt = function () { return wt = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, wt.apply(this, arguments); }, qe = "00000000-0000-0000-0000-000000000000", bt = "unknown", os = "desktop", as = "web";
var mi = (function () { function r(t, e, n, i) { this.appMonitorDetails = t, this.config = e, this.recordEvent = n, this.pageManager = i, this.sessionCookieName = this.config.cookieAttributes.unique ? "".concat(Pr, "_").concat(this.appMonitorDetails.id) : Pr, this.session = { sessionId: qe, record: this.sample(), eventCount: 0 }, this.initializeUser(), this.collectAttributes(), this.addSessionAttributes(this.config.sessionAttributes), this.getSessionFromCookie(); } return r.prototype.isSampled = function () { return this.session.record; }, r.prototype.getSession = function () { return this.session.sessionId === qe ? this.createSession() : this.session.sessionId !== qe && new Date >= this.sessionExpiry && this.createSession(), this.session; }, r.prototype.getAttributes = function () { return this.attributes; }, r.prototype.addSessionAttributes = function (t) { this.attributes = wt(wt({}, this.attributes), t); }, r.prototype.getUserId = function () { return this.useCookies() ? this.userId : qe; }, r.prototype.incrementSessionEventCount = function () { this.session.eventCount++, this.renewSession(); }, r.prototype.isLimitExceeded = function () { return this.session.eventCount >= this.config.sessionEventLimit && this.config.sessionEventLimit > 0; }, r.prototype.canRecord = function () { return this.session.record && !this.isLimitExceeded(); }, r.prototype.initializeUser = function () { var t = ""; this.userExpiry = new Date, this.userExpiry.setDate(this.userExpiry.getDate() + this.config.userIdRetentionDays), this.config.userIdRetentionDays <= 0 ? this.userId = "00000000-0000-0000-0000-000000000000" : this.useCookies() ? (t = this.getUserIdCookie(), this.userId = t || J(), this.createOrRenewUserCookie(t, this.userExpiry)) : this.userId = J(); }, r.prototype.createOrRenewSessionCookie = function (t, e) { btoa && Ur(this.sessionCookieName, btoa(JSON.stringify(t)), this.config.cookieAttributes, void 0, e); }, r.prototype.createOrRenewUserCookie = function (t, e) { Ur(Rr, t, this.config.cookieAttributes, void 0, e); }, r.prototype.getUserIdCookie = function () { return Br(Rr); }, r.prototype.getSessionFromCookie = function () { if (this.useCookies()) {
    var t = Br(this.sessionCookieName);
    if (t && atob)
        try {
            this.session = JSON.parse(atob(t)), this.pageManager.resumeSession(this.session.page);
        }
        catch { }
} }, r.prototype.storeSessionAsCookie = function () { this.useCookies() && this.config.userIdRetentionDays > 0 && this.createOrRenewUserCookie(this.userId, this.userExpiry), this.useCookies() && this.createOrRenewSessionCookie(this.session, this.sessionExpiry); }, r.prototype.createSession = function () { this.session = { sessionId: J(), record: this.session.sessionId === qe ? this.session.record : this.sample(), eventCount: 0 }, this.session.page = this.pageManager.getPage(), this.sessionExpiry = new Date(new Date().getTime() + this.config.sessionLengthSeconds * 1e3), this.storeSessionAsCookie(), this.recordEvent(vt, { version: "1.0.0" }); }, r.prototype.renewSession = function () { this.sessionExpiry = new Date(new Date().getTime() + this.config.sessionLengthSeconds * 1e3), this.session.page = this.pageManager.getPage(), this.storeSessionAsCookie(); }, r.prototype.collectAttributes = function () { var t = new pi.UAParser(navigator.userAgent).getResult(); this.attributes = { browserLanguage: navigator.language, browserName: t.browser.name ? t.browser.name : bt, browserVersion: t.browser.version ? t.browser.version : bt, osName: t.os.name ? t.os.name : bt, osVersion: t.os.version ? t.os.version : bt, deviceType: t.device.type ? t.device.type : os, platformType: as, domain: window.location.hostname, "aws:releaseId": this.config.releaseId }; }, r.prototype.useCookies = function () { return navigator.cookieEnabled && this.config.allowCookies; }, r.prototype.sample = function () { return Math.random() < this.config.sessionSampleRate; }, r; })();
var we = xr(bi());
var us = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), ee = (function (r) { us(t, r); function t() { var e = r !== null && r.apply(this, arguments) || this; return e.enable = e.patch.bind(e, !0), e.disable = e.patch.bind(e, !1), e.enabled = !1, e; } return t.prototype.patchAll = function () { for (var e = we.wrap.bind(we), n = 0, i = this.patches; n < i.length; n++) {
    var o = i[n];
    e(o.nodule, o.name, o.wrapper());
} }, t.prototype.unpatchAll = function () { for (var e = we.unwrap.bind(we), n = 0, i = this.patches; n < i.length; n++) {
    var o = i[n];
    e(o.nodule, o.name);
} }, t.prototype.patch = function (e) { e === void 0 && (e = !0), this.enabled !== e && (this.enabled = e, e ? this.patchAll() : this.unpatchAll()); }, t; })(P);
var fs = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), wi = (function (r) { fs(t, r); function t(e, n, i) { var o = r.call(this, "virtual-page-load-timer") || this; return o.sendWrapper = function () { var a = o; return function (u) { return function () { return a.recordXhr(this), this.addEventListener("loadend", a.endTracking), u.apply(this, arguments); }; }; }, o.endTracking = function (a) { var u = Date.now(), f = a.target; f.removeEventListener("loadend", o.endTracking), o.removeXhr(f, u); }, o.fetch = function (a, u, f) { return a.apply(u, f).catch(function (s) { throw s; }).finally(o.decrementFetchCounter); }, o.fetchWrapper = function () { var a = o; return function (u) { return function (f, s) { return a.fetchCounter += 1, a.fetch(u, this, arguments); }; }; }, o.decrementFetchCounter = function () { o.isPageLoaded || (o.latestEndTime = Date.now()), o.fetchCounter -= 1; }, o.checkLoadStatus = function () { o.ongoingRequests.size === 0 && o.fetchCounter === 0 && (clearInterval(o.periodicCheckerId), clearTimeout(o.timeoutCheckerId), o.domMutationObserver.disconnect(), o.recordRouteChangeNavigationEvent(o.pageManager.getPage()), o.periodicCheckerId = void 0, o.timeoutCheckerId = void 0, o.isPageLoaded = !0); }, o.declareTimeout = function () { clearInterval(o.periodicCheckerId), o.periodicCheckerId = void 0, o.timeoutCheckerId = void 0, o.domMutationObserver.disconnect(), o.isPageLoaded = !0; }, o.resetInterval = function () { o.latestEndTime = Date.now(), clearInterval(o.periodicCheckerId), o.periodicCheckerId = setInterval(o.checkLoadStatus, o.config.routeChangeComplete); }, o.moveItemsFromBuffer = function (a) { o.ongoingRequests.add(a); }, o.updateLatestInteractionTime = function (a) { o.latestInteractionTime = Date.now(); }, o.periodicCheckerId = void 0, o.timeoutCheckerId = void 0, o.domMutationObserver = new MutationObserver(o.resetInterval), o.ongoingRequests = new Set, o.requestBuffer = new Set, o.fetchCounter = 0, o.isPageLoaded = !0, o.latestEndTime = 0, o.latestInteractionTime = 0, o.config = n, o.pageManager = e, o.record = i, o.enable(), document.addEventListener("mousedown", o.updateLatestInteractionTime), document.addEventListener("keydown", o.updateLatestInteractionTime), o; } return Object.defineProperty(t.prototype, "patches", { get: function () { return [{ nodule: XMLHttpRequest.prototype, name: "send", wrapper: this.sendWrapper }, { nodule: window, name: "fetch", wrapper: this.fetchWrapper }]; }, enumerable: !1, configurable: !0 }), t.prototype.startTiming = function () { this.latestEndTime = Date.now(), this.periodicCheckerId && clearInterval(this.periodicCheckerId), this.timeoutCheckerId && clearTimeout(this.timeoutCheckerId), this.domMutationObserver.disconnect(), this.periodicCheckerId = setInterval(this.checkLoadStatus, this.config.routeChangeComplete), this.timeoutCheckerId = setTimeout(this.declareTimeout, this.config.routeChangeTimeout), this.domMutationObserver.observe(document, { subtree: !0, childList: !0, attributes: !1, characterData: !1 }), this.isPageLoaded = !1, this.requestBuffer.forEach(this.moveItemsFromBuffer), this.requestBuffer.clear(); }, t.prototype.recordXhr = function (e) { var n = this.pageManager.getPage(); n && this.isPageLoaded === !1 ? this.ongoingRequests.add(e) : this.requestBuffer.add(e); }, t.prototype.removeXhr = function (e, n) { var i = this.pageManager.getPage(); i && this.ongoingRequests.has(e) ? (this.ongoingRequests.delete(e), this.latestEndTime = n) : this.requestBuffer.has(e) && this.requestBuffer.delete(e); }, t.prototype.recordRouteChangeNavigationEvent = function (e) { var n = { version: "1.0.0", initiatorType: "route_change", navigationType: "navigate", startTime: e.start, duration: this.latestEndTime - e.start }; this.record && this.record(ce, n); }, t; })(ee);
var Et = function () { return Et = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, Et.apply(this, arguments); }, Ei = (function () { function r(t, e) { this.TIMEOUT = 1e3, this.config = t, this.record = e, this.page = void 0, this.resumed = !1, this.recordInteraction = !1, this.virtualPageLoadTimer = new wi(this, t, e); } return r.prototype.getPage = function () { return this.page; }, r.prototype.getAttributes = function () { return this.attributes; }, r.prototype.resumeSession = function (t) { this.recordInteraction = !0, t && (this.page = t, this.resumed = !0); }, r.prototype.recordPageView = function (t) { var e; if (typeof t == "string" ? e = t : e = t.pageId, this.useCookies() && (this.recordInteraction = !0), !this.page)
    this.createLandingPage(e);
else if (this.page.pageId !== e)
    this.createNextPage(this.page, e);
else if (this.resumed) {
    this.collectAttributes(this.page, typeof t == "object" ? t : void 0);
    return;
}
else
    return; this.collectAttributes(this.page, typeof t == "object" ? t : void 0), this.recordPageViewEvent(this.page); }, r.prototype.createNextPage = function (t, e) { var n = Date.now(), i = this.virtualPageLoadTimer.latestInteractionTime; !this.resumed && n - i <= this.TIMEOUT && (n = i, this.virtualPageLoadTimer.startTiming()), this.timeOnParentPage = n - t.start, this.resumed = !1, this.page = { pageId: e, parentPageId: t.pageId, interaction: t.interaction + 1, referrer: document.referrer, referrerDomain: this.getDomainFromReferrer(), start: n }; }, r.prototype.createLandingPage = function (t) { this.page = { pageId: t, interaction: 0, referrer: document.referrer, referrerDomain: this.getDomainFromReferrer(), start: Date.now() }; }, r.prototype.collectAttributes = function (t, e) { var n; this.attributes = { title: !((n = e?.pageAttributes) === null || n === void 0) && n.title ? e.pageAttributes.title : document.title, pageId: t.pageId }, this.recordInteraction && (this.attributes.interaction = t.interaction, t.parentPageId !== void 0 && (this.attributes.parentPageId = t.parentPageId)), e?.pageTags && (this.attributes.pageTags = e.pageTags), e?.pageAttributes && (this.attributes = Et(Et({}, e.pageAttributes), this.attributes)); }, r.prototype.createPageViewEvent = function (t) { var e = { version: "1.0.0", pageId: t.pageId }; return this.recordInteraction && (e.interaction = t.interaction, e.pageInteractionId = t.pageId + "-" + t.interaction, t.parentPageId !== void 0 && (e.parentPageInteractionId = t.parentPageId + "-" + (t.interaction - 1), e.timeOnParentPage = this.timeOnParentPage), e.referrer = document.referrer, e.referrerDomain = this.getDomainFromReferrer()), e; }, r.prototype.recordPageViewEvent = function (t) { this.record(ci, this.createPageViewEvent(t)); }, r.prototype.useCookies = function () { return navigator.cookieEnabled && this.config.allowCookies; }, r.prototype.getDomainFromReferrer = function () { try {
    return new URL(document.referrer).hostname;
}
catch {
    return document.referrer === "localhost" ? document.referrer : "";
} }, r; })();
var Ee = (function (r) { return r.EVENT = "event", r; })(Ee || {}), ls = (function () { function r() { this.subscribers = new Map; } return r.prototype.subscribe = function (t, e) { var n, i = (n = this.subscribers.get(t)) !== null && n !== void 0 ? n : []; i.length || this.subscribers.set(t, i), i.push(e); }, r.prototype.unsubscribe = function (t, e) { var n = this.subscribers.get(t); if (n) {
    for (var i = 0; i < n.length; i++)
        if (n[i] === e)
            return n.splice(i, 1), !0;
} return !1; }, r.prototype.dispatch = function (t, e) { var n = this.subscribers.get(t); if (n)
    for (var i = 0, o = n; i < o.length; i++) {
        var a = o[i];
        a(e);
    } }, r; })(), Tt = ls;
var Y = function () { return Y = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, Y.apply(this, arguments); }, ds = "1.25.0", Ti = (function () { function r(t, e, n) { n === void 0 && (n = new Tt); var i = this; this.eventBus = n, this.events = [], this.candidates = new Map, this.recordPageView = function (o) { i.isCurrentUrlAllowed() && i.pageManager.recordPageView(o); }, this.recordEvent = function (o, a) { i.enabled && i.isCurrentUrlAllowed() && (o !== vt && i.sessionManager.getSession(), i.sessionManager.canRecord() && (i.sessionManager.incrementSessionEventCount(), i.addRecordToCache(o, a))); }, this.recordCandidate = function (o, a) { var u = i.sessionManager.getSession(); if (!(!i.enabled || !i.isCurrentUrlAllowed() || !u.record)) {
    var f = i.createEvent(o, a)[0];
    if (i.candidates.has(o)) {
        i.candidates.set(o, f);
        return;
    }
    i.candidates.size < i.config.candidatesCacheSize && !i.sessionManager.isLimitExceeded() && (i.candidates.set(o, f), i.sessionManager.incrementSessionEventCount());
} }, this.getSession = function () { if (i.isCurrentUrlAllowed())
    return i.sessionManager.getSession(); }, this.addRecordToCache = function (o, a) { if (i.enabled && i.events.length !== i.config.eventCacheSize) {
    var u = i.createEvent(o, a), f = u[0], s = u[1];
    i.eventBus.dispatch(Ee.EVENT, s), i.events.push(f);
} }, this.createEvent = function (o, a) { var u = Y(Y(Y({}, i.sessionManager.getAttributes()), i.pageManager.getAttributes()), { version: "1.0.0", "aws:client": i.installationMethod, "aws:clientVersion": ds }), f = { id: J(), timestamp: new Date, type: o }; return [Y(Y({}, f), { details: JSON.stringify(a), metadata: JSON.stringify(u) }), Y(Y({}, f), { details: a, metadata: u })]; }, this.appMonitorDetails = t, this.config = e, this.enabled = !0, this.pageManager = new Ei(e, this.recordEvent), this.sessionManager = new mi(t, e, this.recordEvent, this.pageManager), this.installationMethod = e.client; } return r.prototype.enable = function () { this.enabled = !0; }, r.prototype.disable = function () { this.enabled = !1; }, r.prototype.isSessionSampled = function () { return this.sessionManager.isSampled(); }, r.prototype.hasEvents = function () { return this.events.length !== 0; }, r.prototype.hasCandidates = function () { return this.candidates.size !== 0; }, r.prototype.getEventBatch = function (t) { t === void 0 && (t = !1); var e = []; if (t && this.hasCandidates())
    if (this.candidates.size <= this.config.batchLimit)
        e = Array.from(this.candidates.values()), this.candidates.clear();
    else
        for (var n = 0, i = 0, o = Array.from(this.candidates.keys()); i < o.length; i++) {
            var a = o[i];
            if (n++ >= this.config.batchLimit)
                break;
            var u = this.candidates.get(a);
            u && (e.push(u), this.candidates.delete(a));
        } return this.events.length && (this.events.length <= this.config.batchLimit - e.length ? (e.push.apply(e, this.events), this.events = []) : e.push.apply(e, this.events.splice(0, this.config.batchLimit - e.length))), e; }, r.prototype.getAppMonitorDetails = function () { return this.appMonitorDetails; }, r.prototype.getUserDetails = function () { return { userId: this.sessionManager.getUserId(), sessionId: this.sessionManager.getSession().sessionId }; }, r.prototype.addSessionAttributes = function (t) { this.sessionManager.addSessionAttributes(t); }, r.prototype.isCurrentUrlAllowed = function () { var t = document.location.toString(), e = this.config.pagesToExclude.some(function (i) { return i.test(t); }), n = this.config.pagesToInclude.some(function (i) { return i.test(t); }); return n && !e; }, r; })();
var _i = {}, Fr = {};
for (let r = 0; r < 256; r++) {
    let t = r.toString(16).toLowerCase();
    t.length === 1 && (t = `0${t}`), _i[r] = t, Fr[t] = r;
}
function xi(r) { if (r.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length"); let t = new Uint8Array(r.length / 2); for (let e = 0; e < r.length; e += 2) {
    let n = r.slice(e, e + 2).toLowerCase();
    if (n in Fr)
        t[e / 2] = Fr[n];
    else
        throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
} return t; }
function M(r) { let t = ""; for (let e = 0; e < r.byteLength; e++)
    t += _i[r[e]]; return t; }
var qr = r => { if (typeof r == "function")
    return r; let t = Promise.resolve(r); return () => t; };
var Si = "X-Amz-Algorithm", Ci = "X-Amz-Credential", Vr = "X-Amz-Date", Ii = "X-Amz-SignedHeaders", Ai = "X-Amz-Expires", Gr = "X-Amz-Signature", Wr = "X-Amz-Security-Token";
var zr = "authorization", Kr = Vr.toLowerCase(), hs = "date", Pi = [zr, Kr, hs], Ri = Gr.toLowerCase(), We = "x-amz-content-sha256", Oi = Wr.toLowerCase();
var Li = { authorization: !0, "cache-control": !0, connection: !0, expect: !0, from: !0, "keep-alive": !0, "max-forwards": !0, pragma: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, "x-amzn-trace-id": !0 }, ki = /^proxy-/, Ni = /^sec-/;
var _t = "AWS4-HMAC-SHA256";
var Mi = "AWS4-HMAC-SHA256-PAYLOAD", Hi = "UNSIGNED-PAYLOAD", Di = 50, Xr = "aws4_request", Ui = 3600 * 24 * 7;
var xt = {}, Yr = [], St = (r, t, e) => `${r}/${t}/${e}/${Xr}`, ji = (r, t, e, n, i) => A(null, null, function* () { let o = yield Bi(r, t.secretAccessKey, t.accessKeyId), a = `${e}:${n}:${i}:${M(o)}:${t.sessionToken}`; if (a in xt)
    return xt[a]; for (Yr.push(a); Yr.length > Di;)
    delete xt[Yr.shift()]; let u = `AWS4${t.secretAccessKey}`; for (let f of [e, n, i, Xr])
    u = yield Bi(r, u, f); return xt[a] = u; });
var Bi = (r, t, e) => { let n = new r(t); return n.update(Z(e)), n.digest(); };
var Ct = ({ headers: r }, t, e) => { let n = {}; for (let i of Object.keys(r).sort()) {
    if (r[i] == null)
        continue;
    let o = i.toLowerCase();
    (o in Li || t?.has(o) || ki.test(o) || Ni.test(o)) && (!e || e && !e.has(o)) || (n[o] = r[i].trim().replace(/\s+/g, " "));
} return n; };
var $r = ({ query: r = {} }) => { let t = [], e = {}; for (let n of Object.keys(r)) {
    if (n.toLowerCase() === Ri)
        continue;
    let i = B(n);
    t.push(i);
    let o = r[n];
    typeof o == "string" ? e[i] = `${i}=${B(o)}` : Array.isArray(o) && (e[i] = o.slice(0).reduce((a, u) => a.concat([`${i}=${B(u)}`]), []).sort().join("&"));
} return t.sort().map(n => e[n]).filter(n => n).join("&"); };
var Fi = r => typeof ArrayBuffer == "function" && r instanceof ArrayBuffer || Object.prototype.toString.call(r) === "[object ArrayBuffer]";
var ze = (n, i) => A(null, [n, i], function* ({ headers: r, body: t }, e) { for (let o of Object.keys(r))
    if (o.toLowerCase() === We)
        return r[o]; if (t == null)
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; if (typeof t == "string" || ArrayBuffer.isView(t) || Fi(t)) {
    let o = new e;
    return o.update(Z(t)), M(yield o.digest());
} return Hi; });
var It = class {
    format(t) { let e = []; for (let o of Object.keys(t)) {
        let a = ge(o);
        e.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(t[o]));
    } let n = new Uint8Array(e.reduce((o, a) => o + a.byteLength, 0)), i = 0; for (let o of e)
        n.set(o, i), i += o.byteLength; return n; }
    formatHeaderValue(t) { switch (t.type) {
        case "boolean": return Uint8Array.from([t.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, t.value]);
        case "short":
            let e = new DataView(new ArrayBuffer(3));
            return e.setUint8(0, 3), e.setInt16(1, t.value, !1), new Uint8Array(e.buffer);
        case "integer":
            let n = new DataView(new ArrayBuffer(5));
            return n.setUint8(0, 4), n.setInt32(1, t.value, !1), new Uint8Array(n.buffer);
        case "long":
            let i = new Uint8Array(9);
            return i[0] = 5, i.set(t.value.bytes, 1), i;
        case "binary":
            let o = new DataView(new ArrayBuffer(3 + t.value.byteLength));
            o.setUint8(0, 6), o.setUint16(1, t.value.byteLength, !1);
            let a = new Uint8Array(o.buffer);
            return a.set(t.value, 3), a;
        case "string":
            let u = ge(t.value), f = new DataView(new ArrayBuffer(3 + u.byteLength));
            f.setUint8(0, 7), f.setUint16(1, u.byteLength, !1);
            let s = new Uint8Array(f.buffer);
            return s.set(u, 3), s;
        case "timestamp":
            let c = new Uint8Array(9);
            return c[0] = 8, c.set(Qr.fromNumber(t.value.valueOf()).bytes, 1), c;
        case "uuid":
            if (!ps.test(t.value))
                throw new Error(`Invalid UUID received: ${t.value}`);
            let l = new Uint8Array(17);
            return l[0] = 9, l.set(xi(t.value.replace(/\-/g, "")), 1), l;
    } }
};
var ps = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/, Qr = class r {
    constructor(t) { if (this.bytes = t, t.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(t) { if (t > 9223372036854776e3 || t < -9223372036854776e3)
        throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`); let e = new Uint8Array(8); for (let n = 7, i = Math.abs(Math.round(t)); n > -1 && i > 0; n--, i /= 256)
        e[n] = i; return t < 0 && qi(e), new r(e); }
    valueOf() { let t = this.bytes.slice(0), e = t[0] & 128; return e && qi(t), parseInt(M(t), 16) * (e ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function qi(r) { for (let t = 0; t < 8; t++)
    r[t] ^= 255; for (let t = 7; t > -1 && (r[t]++, r[t] === 0); t--)
    ; }
var Vi = (r, t) => { r = r.toLowerCase(); for (let e of Object.keys(t))
    if (r === e.toLowerCase())
        return !0; return !1; };
var Jr = (r, t = {}) => { let { headers: e, query: n = {} } = k.clone(r); for (let i of Object.keys(e)) {
    let o = i.toLowerCase();
    (o.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(o) || t.hoistableHeaders?.has(o)) && (n[i] = e[i], delete e[i]);
} return je(ae({}, r), { headers: e, query: n }); };
var At = r => { r = k.clone(r); for (let t of Object.keys(r.headers))
    Pi.indexOf(t.toLowerCase()) > -1 && delete r.headers[t]; return r; };
var Gi = r => ms(r).toISOString().replace(/\.\d{3}Z$/, "Z"), ms = r => typeof r == "number" ? new Date(r * 1e3) : typeof r == "string" ? Number(r) ? new Date(Number(r) * 1e3) : new Date(r) : r;
var Rt = class {
    constructor({ applyChecksum: t, credentials: e, region: n, service: i, sha256: o, uriEscapePath: a = !0 }) { this.headerFormatter = new It, this.service = i, this.sha256 = o, this.uriEscapePath = a, this.applyChecksum = typeof t == "boolean" ? t : !0, this.regionProvider = qr(n), this.credentialProvider = qr(e); }
    presign(n) { return A(this, arguments, function* (t, e = {}) { let { signingDate: i = new Date, expiresIn: o = 3600, unsignableHeaders: a, unhoistableHeaders: u, signableHeaders: f, hoistableHeaders: s, signingRegion: c, signingService: l } = e, d = yield this.credentialProvider(); this.validateResolvedCredentials(d); let h = c ?? (yield this.regionProvider()), { longDate: p, shortDate: b } = Pt(i); if (o > Ui)
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future"); let E = St(b, h, l ?? this.service), v = Jr(At(t), { unhoistableHeaders: u, hoistableHeaders: s }); d.sessionToken && (v.query[Wr] = d.sessionToken), v.query[Si] = _t, v.query[Ci] = `${d.accessKeyId}/${E}`, v.query[Vr] = p, v.query[Ai] = o.toString(10); let m = Ct(v, a, f); return v.query[Ii] = Wi(m), v.query[Gr] = yield this.getSignature(p, E, this.getSigningKey(d, h, b, l), this.createCanonicalRequest(v, m, yield ze(t, this.sha256))), v; }); }
    sign(t, e) { return A(this, null, function* () { return typeof t == "string" ? this.signString(t, e) : t.headers && t.payload ? this.signEvent(t, e) : t.message ? this.signMessage(t, e) : this.signRequest(t, e); }); }
    signEvent(u, f) {
        return A(this, arguments, function* ({ headers: t, payload: e }, { signingDate: n = new Date, priorSignature: i, signingRegion: o, signingService: a }) {
            let s = o ?? (yield this.regionProvider()), { shortDate: c, longDate: l } = Pt(n), d = St(c, s, a ?? this.service), h = yield ze({ headers: {}, body: e }, this.sha256), p = new this.sha256;
            p.update(t);
            let b = M(yield p.digest()), E = [Mi, l, d, i, b, h].join(`
`);
            return this.signString(E, { signingDate: n, signingRegion: s, signingService: a });
        });
    }
    signMessage(o, a) { return A(this, arguments, function* (t, { signingDate: e = new Date, signingRegion: n, signingService: i }) { return this.signEvent({ headers: this.headerFormatter.format(t.message.headers), payload: t.message.body }, { signingDate: e, signingRegion: n, signingService: i, priorSignature: t.priorSignature }).then(f => ({ message: t.message, signature: f })); }); }
    signString(o) { return A(this, arguments, function* (t, { signingDate: e = new Date, signingRegion: n, signingService: i } = {}) { let a = yield this.credentialProvider(); this.validateResolvedCredentials(a); let u = n ?? (yield this.regionProvider()), { shortDate: f } = Pt(e), s = new this.sha256(yield this.getSigningKey(a, u, f, i)); return s.update(Z(t)), M(yield s.digest()); }); }
    signRequest(u) { return A(this, arguments, function* (t, { signingDate: e = new Date, signableHeaders: n, unsignableHeaders: i, signingRegion: o, signingService: a } = {}) { let f = yield this.credentialProvider(); this.validateResolvedCredentials(f); let s = o ?? (yield this.regionProvider()), c = At(t), { longDate: l, shortDate: d } = Pt(e), h = St(d, s, a ?? this.service); c.headers[Kr] = l, f.sessionToken && (c.headers[Oi] = f.sessionToken); let p = yield ze(c, this.sha256); !Vi(We, c.headers) && this.applyChecksum && (c.headers[We] = p); let b = Ct(c, i, n), E = yield this.getSignature(l, h, this.getSigningKey(f, s, d, a), this.createCanonicalRequest(c, b, p)); return c.headers[zr] = `${_t} Credential=${f.accessKeyId}/${h}, SignedHeaders=${Wi(b)}, Signature=${E}`, c; }); }
    createCanonicalRequest(t, e, n) {
        let i = Object.keys(e).sort();
        return `${t.method}
${this.getCanonicalPath(t)}
${$r(t)}
${i.map(o => `${o}:${e[o]}`).join(`
`)}

${i.join(";")}
${n}`;
    }
    createStringToSign(t, e, n) {
        return A(this, null, function* () {
            let i = new this.sha256;
            i.update(Z(n));
            let o = yield i.digest();
            return `${_t}
${t}
${e}
${M(o)}`;
        });
    }
    getCanonicalPath({ path: t }) { if (this.uriEscapePath) {
        let e = [];
        for (let o of t.split("/"))
            o?.length !== 0 && o !== "." && (o === ".." ? e.pop() : e.push(o));
        let n = `${t?.startsWith("/") ? "/" : ""}${e.join("/")}${e.length > 0 && t?.endsWith("/") ? "/" : ""}`;
        return B(n).replace(/%2F/g, "/");
    } return t; }
    getSignature(t, e, n, i) { return A(this, null, function* () { let o = yield this.createStringToSign(t, e, i), a = new this.sha256(yield n); return a.update(Z(o)), M(yield a.digest()); }); }
    getSigningKey(t, e, n, i) { return ji(this.sha256, t, n, e, i || this.service); }
    validateResolvedCredentials(t) { if (typeof t != "object" || typeof t.accessKeyId != "string" || typeof t.secretAccessKey != "string")
        throw new Error("Resolved credential object is not valid"); }
}, Pt = r => { let t = Gi(r).replace(/[\-:]/g, ""); return { longDate: t, shortDate: t.slice(0, 8) }; }, Wi = r => Object.keys(r).sort().join(";");
var cn = xr(to());
var $ = function () { return $ = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, $.apply(this, arguments); }, Bt = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, jt = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, Ys = "rum", $s = "POST", Qs = "application/json", Js = "text/plain;charset=UTF-8", Zs = { expiresIn: 60 }, ro = (function () { function r(t) { var e = this; this.sendFetch = function (n) { return Bt(e, void 0, void 0, function () { var i, o, a; return jt(this, function (u) { switch (u.label) {
    case 0: return [4, this.getHttpRequestOptions(n, Qs)];
    case 1: return i = u.sent(), o = new k(i), this.awsSigV4 ? [4, this.awsSigV4.sign(o)] : [3, 3];
    case 2: o = u.sent(), u.label = 3;
    case 3: return a = this.config.fetchRequestHandler.handle(o), [2, a];
} }); }); }, this.sendBeacon = function (n) { return Bt(e, void 0, void 0, function () { var i, o, a; return jt(this, function (u) { switch (u.label) {
    case 0: return [4, this.getHttpRequestOptions(n, Js)];
    case 1: return i = u.sent(), o = new k(i), this.awsSigV4 ? [4, this.awsSigV4.presign(o, Zs)] : [3, 3];
    case 2: o = u.sent(), u.label = 3;
    case 3: return a = this.config.beaconRequestHandler.handle(o), [2, a];
} }); }); }, this.getHttpRequestOptions = function (n, i) { return Bt(e, void 0, void 0, function () { var o, a, u, f, s, c, l, d; return jt(this, function (h) { switch (h.label) {
    case 0: return o = JSON.stringify(ec(n)), a = this.config.endpoint.pathname.replace(/\/$/, ""), u = { method: $s, protocol: this.config.endpoint.protocol, port: Number(this.config.endpoint.port) || void 0, headers: $({ "content-type": i, host: this.config.endpoint.host }, this.config.headers), hostname: this.config.endpoint.hostname, path: "".concat(a, "/appmonitors/").concat(n.AppMonitorDetails.id), body: o }, this.awsSigV4 ? (f = [$({}, u)], l = {}, s = [$({}, u.headers)], d = {}, c = "X-Amz-Content-Sha256", [4, rc(o)]) : [3, 2];
    case 1: return [2, $.apply(void 0, f.concat([(l.headers = $.apply(void 0, s.concat([(d[c] = h.sent(), d)])), l)]))];
    case 2: return [2, u];
} }); }); }, this.config = t, t.credentials && (this.awsSigV4 = new Rt({ applyChecksum: !0, credentials: t.credentials, region: t.region, service: Ys, uriEscapePath: !0, sha256: cn.Sha256 })); } return r; })();
var ec = function (r) { var t = []; r.RumEvents.forEach(function (n) { return t.push(tc(n)); }); var e = { BatchId: r.BatchId, AppMonitorDetails: r.AppMonitorDetails, UserDetails: r.UserDetails, RumEvents: t }; return r.Alias && (e = $($({}, e), { Alias: r.Alias })), e; }, tc = function (r) { return { id: r.id, timestamp: Math.round(r.timestamp.getTime() / 1e3), type: r.type, metadata: r.metadata, details: r.details }; }, rc = function (r) { return Bt(void 0, void 0, void 0, function () { var t, e; return jt(this, function (n) { switch (n.label) {
    case 0: return t = new cn.Sha256, t.update(r), e = M, [4, t.digest()];
    case 1: return [2, e.apply(void 0, [n.sent()]).toLowerCase()];
} }); }); };
function Ft(r) { let t = []; for (let e of Object.keys(r).sort()) {
    let n = r[e];
    if (e = ut(e), Array.isArray(n))
        for (let i = 0, o = n.length; i < o; i++)
            t.push(`${e}=${ut(n[i])}`);
    else {
        let i = e;
        (n || typeof n == "string") && (i += `=${ut(n)}`), t.push(i);
    }
} return t.join("&"); }
var no = (function () { function r() { } return r.prototype.handle = function (t) { var e = this.sendBeacon(t); return new Promise(function (n, i) { e ? n({ response: new G({ statusCode: 200 }) }) : i(); }); }, r.prototype.updateHttpClientConfig = function (t, e) { }, r.prototype.httpHandlerConfigs = function () { return {}; }, r.prototype.sendBeacon = function (t) { var e = t.path; if (t.query) {
    var n = Ft(t.query);
    n && (e += "?".concat(n));
} var i = t.port, o = "".concat(t.protocol, "//").concat(t.hostname).concat(i ? ":".concat(i) : "").concat(e); return navigator.sendBeacon(o, t.body); }, r; })();
var io = function (r) { return r === void 0 && (r = 0), new Promise(function (t, e) { r && setTimeout(function () { var n = new Error("Request did not complete within ".concat(r, " ms")); n.name = "TimeoutError", e(n); }, r); }); };
var oo = (function () { function r(t) { var e = t === void 0 ? {} : t, n = e.fetchFunction, i = e.requestTimeout; this.requestTimeout = i, this.fetchFunction = n; } return r.prototype.destroy = function () { }, r.prototype.handle = function (t, e) { var n = e === void 0 ? {} : e, i = n.abortSignal, o = this.requestTimeout; if (i?.aborted) {
    var a = new Error("Request aborted");
    return a.name = "AbortError", Promise.reject(a);
} var u = t.path; if (t.query) {
    var f = Ft(t.query);
    f && (u += "?".concat(f));
} var s = t.port, c = t.method, l = "".concat(t.protocol, "//").concat(t.hostname).concat(s ? ":".concat(s) : "").concat(u), d = c === "GET" || c === "HEAD" ? void 0 : t.body, h = { body: d, headers: new Headers(t.headers), method: c }; typeof AbortController < "u" && (h.signal = i); var p = new Request(l, h), b = [this.fetchFunction.apply(window, [p]).then(function (E) { for (var v = E.headers, m = {}, S = 0, C = v.entries(); S < C.length; S++) {
        var R = C[S];
        m[R[0]] = R[1];
    } var F = E.body !== void 0; return F ? { response: new G({ headers: m, statusCode: E.status, body: E.body }) } : E.blob().then(function (de) { return { response: new G({ headers: m, statusCode: E.status, body: de }) }; }); }), io(o)]; return i && b.push(new Promise(function (E, v) { i.onabort = function () { var m = new Error("Request aborted"); m.name = "AbortError", v(m); }; })), Promise.race(b); }, r.prototype.updateHttpClientConfig = function (t, e) { }, r.prototype.httpHandlerConfigs = function () { return {}; }, r; })();
var qt = function (r) { if (crypto)
    return crypto.getRandomValues(r); if (msCrypto)
    return msCrypto.getRandomValues(r); throw new Error("No crypto library found."); };
var ao = [];
for (Xe = 0; Xe < 256; Xe++)
    ao[Xe] = (Xe + 256).toString(16).substr(1);
var Xe, Ye = "X-Amzn-Trace-Id", $e = "traceparent", nc = 2, ic = 32, oc = 16, ac = 4, Vt = function (r, t) { return Array.isArray(t) ? t.some(function (e) { return e.test(r); }) : t; }, Gt = { logicalServiceName: "rum.aws.amazon.com", urlsToInclude: [/.*/], urlsToExclude: [/cognito\-identity\.([^\.]*\.)?amazonaws\.com/, /sts\.([^\.]*\.)?amazonaws\.com/], stackTraceLength: 200, recordAllRequests: !1, addXRayTraceIdHeader: !1 }, so = function (r) { return 200 <= r && r < 300; }, Wt = function (r) { return Math.floor(r / 100) === 4; }, Te = function (r) { return Math.floor(r / 100) === 5; }, _e = function (r) { return r === 429; }, zt = function (r, t) { var e = t.urlsToInclude.some(function (i) { return i.test(r); }), n = t.urlsToExclude.some(function (i) { return i.test(r); }); return e && !n; }, te = function () { return Date.now() / 1e3; }, co = function (r, t, e) { var n = { request: {} }; return n.request.method = t?.method ? t.method : "GET", n.request.traced = e, n.request.url = Qe(r), n; }, Kt = function (r, t, e, n) { var i = { version: "1.0.0", name: r, origin: "AWS::RUM::AppMonitor", id: ho(), start_time: t, trace_id: e ? uc() : cc(), end_time: void 0, subsegments: [], in_progress: !1 }; return n && (i.http = n), i; }, Xt = function (r, t, e) { var n = { id: ho(), name: r, start_time: t, end_time: void 0, in_progress: !1, namespace: r.endsWith("amazonaws.com") ? "aws" : "remote" }; return e && (n.http = e), n; }, Yt = function (r) { try {
    return r.hostname ? r.hostname : r.url ? new URL(r.url).hostname : new URL(r.toString()).hostname;
}
catch {
    return window.location.hostname;
} }, uo = function (r, t, e, n) { r.headers || (r.headers = {}), n ? r.headers[$e] = Qt(t, e) : r.headers[Ye] = $t(t, e); }, fo = function (r, t, e, n) { n ? r.set($e, Qt(t, e)) : r.set(Ye, $t(t, e)); }, $t = function (r, t) { return "Root=" + r + ";Parent=" + t + ";Sampled=1"; }, Qt = function (r, t) { return "00-" + r + "-" + t + "-01"; }, sc = function (r) { return r?.length === ac && r[0].length === nc && r[1].length === ic && r[2].length === oc && (r[3] === "00" || r[3] === "01"); }, lo = function (r, t) { var e, n, i = {}; if (r)
    if (t) {
        var o = (e = r.get($e)) === null || e === void 0 ? void 0 : e.split("-");
        o && sc(o) && (i.traceId = o[1], i.segmentId = o[2]);
    }
    else {
        var o = (n = r.get(Ye)) === null || n === void 0 ? void 0 : n.split(";");
        o?.length === 3 && (i.traceId = o[0].split("Root=")[1], i.segmentId = o[1].split("Parent=")[1]);
    } return i; }, Qe = function (r) { return r.url ? r.url : r.toString(); }, cc = function () { return "1-".concat(fc(), "-").concat(lc()); }, uc = function () { var r = new Uint8Array(16); return qt(r), "".concat(un(r)); }, ho = function () { var r = new Uint8Array(8); return qt(r), un(r); }, fc = function () { return Math.floor(Date.now() / 1e3).toString(16); }, lc = function () { var r = new Uint8Array(12); return qt(r), un(r); }, un = function (r) { for (var t = "", e = 0; e < r.length; e++)
    t += ao[r[e]]; return t; };
var po = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, mo = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, vo = (function () { function r(t, e, n) { n === void 0 && (n = function (i) { return 2e3 * Math.pow(2, i - 1); }), this.handler = t, this.retries = e, this.backoff = n; } return r.prototype.handle = function (t) { return po(this, void 0, void 0, function () { var e, n, i; return mo(this, function (o) { switch (o.label) {
    case 0: e = this.retries, o.label = 1;
    case 1: o.label = 2;
    case 2: return o.trys.push([2, 4, , 6]), [4, this.handler.handle(t)];
    case 3:
        if (n = o.sent(), so(n.response.statusCode))
            return [2, n];
        throw n.response.statusCode;
    case 4:
        if (i = o.sent(), typeof i == "number" && !_e(i) && !Te(i))
            throw new Error("".concat(i));
        if (e <= 0)
            throw i;
        return e--, [4, this.sleep(this.backoff(this.retries - e))];
    case 5: return o.sent(), [3, 6];
    case 6: return [3, 1];
    case 7: return [2];
} }); }); }, r.prototype.sleep = function (t) { return po(this, void 0, void 0, function () { return mo(this, function (e) { return [2, new Promise(function (n) { return setTimeout(n, t); })]; }); }); }, r.prototype.updateHttpClientConfig = function (t, e) { }, r.prototype.httpHandlerConfigs = function () { return {}; }, r; })();
var Jt = function (r, t, e, n) { function i(o) { return o instanceof e ? o : new e(function (a) { a(o); }); } return new (e || (e = Promise))(function (o, a) { function u(c) { try {
    s(n.next(c));
}
catch (l) {
    a(l);
} } function f(c) { try {
    s(n.throw(c));
}
catch (l) {
    a(l);
} } function s(c) { c.done ? o(c.value) : i(c.value).then(u, f); } s((n = n.apply(r, t || [])).next()); }); }, Zt = function (r, t) { var e = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, i, o, a; return a = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function u(s) { return function (c) { return f([s, c]); }; } function f(s) { if (n)
    throw new TypeError("Generator is already executing."); for (; a && (a = 0, s[0] && (e = 0)), e;)
    try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
            return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
            case 0:
            case 1:
                o = s;
                break;
            case 4: return e.label++, { value: s[1], done: !1 };
            case 5:
                e.label++, i = s[1], s = [0];
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
        s = t.call(r, e);
    }
    catch (c) {
        s = [6, c], i = 0;
    }
    finally {
        n = o = 0;
    } if (s[0] & 5)
    throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; } }, go = "CWR: Cannot dispatch; no AWS credentials.", yo = (function () { function r(t, e, n, i) { var o = this; this.disableCodes = ["403", "404"], this.dispatchFetch = function () { return Jt(o, void 0, void 0, function () { return Zt(this, function (a) { return this.doRequest() ? [2, this.rum.sendFetch(this.createRequest()).catch(this.handleReject)] : [2]; }); }); }, this.dispatchBeacon = function () { return Jt(o, void 0, void 0, function () { var a, u = this; return Zt(this, function (f) { return this.doRequest() ? (a = this.createRequest(), [2, this.rum.sendBeacon(a).catch(function () { return u.rum.sendFetch(a); })]) : [2]; }); }); }, this.dispatchFetchFailSilent = function () { return Jt(o, void 0, void 0, function () { return Zt(this, function (a) { return [2, this.dispatchFetch().catch(function () { })]; }); }); }, this.dispatchBeaconFailSilent = function () { return Jt(o, void 0, void 0, function () { return Zt(this, function (a) { return [2, this.dispatchBeacon().catch(function () { })]; }); }); }, this.flushSync = function () { var a; if (document.visibilityState === "hidden" && o.doRequest(!0)) {
    var u = o.rum.sendBeacon, f = o.rum.sendFetch;
    o.config.useBeacon || (a = [f, u], u = a[0], f = a[1]);
    var s = o.createRequest(!0);
    u(s).catch(function () { return f(s); }).catch(function () { });
} }, this.handleReject = function (a) { throw a instanceof Error && o.disableCodes.includes(a.message) && o.disable(), a; }, this.defaultClientBuilder = function (a, u, f) { return new ro({ fetchRequestHandler: new vo(new oo({ fetchFunction: o.config.fetchFunction }), o.config.retries), beaconRequestHandler: new no, endpoint: a, region: u, credentials: f, headers: o.headers }); }, this.region = t, this.endpoint = e, this.eventCache = n, this.enabled = !0, this.buildClient = i.clientBuilder || this.defaultClientBuilder, this.config = i, this.headers = i.headers, this.startDispatchTimer(), i.signing ? this.rum = { sendFetch: function () { return Promise.reject(new Error(go)); }, sendBeacon: function () { return Promise.reject(new Error(go)); } } : this.rum = this.buildClient(this.endpoint, this.region, void 0); } return r.prototype.enable = function () { this.enabled = !0, this.startDispatchTimer(); }, r.prototype.disable = function () { this.stopDispatchTimer(), this.enabled = !1; }, r.prototype.setAwsCredentials = function (t) { this.rum = this.buildClient(this.endpoint, this.region, t), typeof t == "function" && t(); }, r.prototype.startDispatchTimer = function () { document.addEventListener("visibilitychange", this.flushSync), document.addEventListener("pagehide", this.flushSync), !(this.config.dispatchInterval <= 0 || this.dispatchTimerId) && (this.dispatchTimerId = window.setInterval(this.dispatchFetchFailSilent, this.config.dispatchInterval)); }, r.prototype.stopDispatchTimer = function () { document.removeEventListener("visibilitychange", this.flushSync), document.removeEventListener("pagehide", this.flushSync), this.dispatchTimerId && (window.clearInterval(this.dispatchTimerId), this.dispatchTimerId = void 0); }, r.prototype.doRequest = function (t) { return t === void 0 && (t = !1), this.enabled ? t && this.eventCache.hasCandidates() ? !0 : this.eventCache.hasEvents() : !1; }, r.prototype.createRequest = function (t) { return t === void 0 && (t = !1), { BatchId: J(), AppMonitorDetails: this.eventCache.getAppMonitorDetails(), UserDetails: this.eventCache.getUserDetails(), RumEvents: this.eventCache.getEventBatch(t), Alias: this.config.alias }; }, r; })();
var I = (function (r) { return r.OTHER = "other", r.STYLESHEET = "stylesheet", r.DOCUMENT = "document", r.SCRIPT = "script", r.IMAGE = "image", r.FONT = "font", r; })(I || {}), re = (function (r) { return r.IMG = "img", r.IMAGE = "image", r.INPUT = "input", r.IFRAME = "iframe", r.FRAME = "frame", r.SCRIPT = "script", r.CSS = "css", r; })(re || {}), fn = function (r) { return [r.startTime, r.duration].join("#"); }, dc = [{ name: I.STYLESHEET, list: ["css", "less"] }, { name: I.DOCUMENT, list: ["htm", "html", "ts", "doc", "docx", "pdf", "xls", "xlsx"] }, { name: I.SCRIPT, list: ["js"] }, { name: I.IMAGE, list: ["ai", "bmp", "gif", "ico", "jpeg", "jpg", "png", "ps", "psd", "svg", "tif", "tiff"] }, { name: I.FONT, list: ["fnt", "fon", "otf", "ttf", "woff"] }], bo = function (r) { for (var t = r.length - 1; t > 0; t--) {
    var e = Math.floor(Math.random() * (t + 1)), n = r[t];
    r[t] = r[e], r[e] = n;
} }, ln = function (r, t) { var e = I.OTHER; if (r) {
    var n = r.substring(r.lastIndexOf("/") + 1), i = n.substring(n.lastIndexOf(".") + 1).split(/[?#]/)[0];
    dc.forEach(function (o) { o.list.indexOf(i) > -1 && (e = o.name); });
} if (t && e === I.OTHER)
    switch (t) {
        case re.IMAGE:
        case re.IMG:
        case re.INPUT:
            e = I.IMAGE;
            break;
        case re.IFRAME:
        case re.FRAME:
            e = I.DOCUMENT;
            break;
        case re.SCRIPT:
            e = I.SCRIPT;
            break;
        case re.CSS:
            e = I.STYLESHEET;
            break;
    } return e; };
var er = function () { return PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint"); }, wo = function () { return PerformanceObserver.supportedEntryTypes.includes("paint"); }, Eo = function () { return PerformanceObserver.supportedEntryTypes.includes("longtask"); }, hc = /.*\/application\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/events/, To = function (r, t) { try {
    return new URL(r).hostname === t && hc.test(r);
}
catch {
    return !1;
} };
var pc = function (r) { return r.entryType === "resource" && (!/^https?:/.test(r.name) || /^(fetch|xmlhttprequest)$/.test(r.initiatorType)); }, xe = { eventLimit: 10, ignore: pc, recordAllTypes: [I.DOCUMENT, I.SCRIPT, I.STYLESHEET, I.FONT], sampleTypes: [I.IMAGE, I.OTHER], reportAllLCP: !1, reportAllCLS: !1, reportAllINP: !1 };
var mc = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), tr = function () { return tr = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, tr.apply(this, arguments); }, vc = "navigation", Se = "navigation", dn = "load", _o = (function (r) { mc(t, r); function t(e) { var n = r.call(this, vc) || this; return n.eventListener = function () { if (performance.getEntriesByType(Se).length === 0)
    n.performanceNavigationEventHandlerTimingLevel1();
else {
    var i = new PerformanceObserver(function (o) { o.getEntries().filter(function (a) { return a.entryType === Se; }).filter(function (a) { return !n.config.ignore(a); }).forEach(function (a) { n.performanceNavigationEventHandlerTimingLevel2(a); }); });
    i.observe({ entryTypes: [Se] });
} }, n.performanceNavigationEventHandlerTimingLevel1 = function () { var i = function () { var o, a = performance.timing, u = a.navigationStart, f = { version: "1.0.0", initiatorType: "navigation", startTime: 0, unloadEventStart: a.unloadEventStart > 0 ? a.unloadEventStart - u : 0, promptForUnload: a.unloadEventEnd - a.unloadEventStart, redirectStart: a.redirectStart > 0 ? a.redirectStart - u : 0, redirectTime: a.redirectEnd - a.redirectStart, fetchStart: a.fetchStart > 0 ? a.fetchStart - u : 0, domainLookupStart: a.domainLookupStart > 0 ? a.domainLookupStart - u : 0, dns: a.domainLookupEnd - a.domainLookupStart, connectStart: a.connectStart > 0 ? a.connectStart - u : 0, connect: a.connectEnd - a.connectStart, secureConnectionStart: a.secureConnectionStart > 0 ? a.secureConnectionStart - u : 0, tlsTime: a.secureConnectionStart > 0 ? a.connectEnd - a.secureConnectionStart : 0, requestStart: a.requestStart > 0 ? a.requestStart - u : 0, timeToFirstByte: a.responseStart - a.requestStart, responseStart: a.responseStart > 0 ? a.responseStart - u : 0, responseTime: a.responseStart > 0 ? a.responseEnd - a.responseStart : 0, domInteractive: a.domInteractive > 0 ? a.domInteractive - u : 0, domContentLoadedEventStart: a.domContentLoadedEventStart > 0 ? a.domContentLoadedEventStart - u : 0, domContentLoaded: a.domContentLoadedEventEnd - a.domContentLoadedEventStart, domComplete: a.domComplete > 0 ? a.domComplete - u : 0, domProcessingTime: a.loadEventStart - a.responseEnd, loadEventStart: a.loadEventStart > 0 ? a.loadEventStart - u : 0, loadEventTime: a.loadEventEnd - a.loadEventStart, duration: a.loadEventEnd - a.navigationStart, navigationTimingLevel: 1 }; !((o = n.context) === null || o === void 0) && o.record && n.context.record(ce, f); }; setTimeout(i, 0); }, n.performanceNavigationEventHandlerTimingLevel2 = function (i) { var o, a = { version: "1.0.0", initiatorType: i.initiatorType, navigationType: i.type, startTime: i.startTime, unloadEventStart: i.unloadEventStart, promptForUnload: i.unloadEventEnd - i.unloadEventStart, redirectCount: i.redirectCount, redirectStart: i.redirectStart, redirectTime: i.redirectEnd - i.redirectStart, workerStart: i.workerStart, workerTime: i.workerStart > 0 ? i.fetchStart - i.workerStart : 0, fetchStart: i.fetchStart, domainLookupStart: i.domainLookupStart, dns: i.domainLookupEnd - i.domainLookupStart, nextHopProtocol: i.nextHopProtocol, connectStart: i.connectStart, connect: i.connectEnd - i.connectStart, secureConnectionStart: i.secureConnectionStart, tlsTime: i.secureConnectionStart > 0 ? i.connectEnd - i.secureConnectionStart : 0, requestStart: i.requestStart, timeToFirstByte: i.responseStart - i.requestStart, responseStart: i.responseStart, responseTime: i.responseStart > 0 ? i.responseEnd - i.responseStart : 0, domInteractive: i.domInteractive, domContentLoadedEventStart: i.domContentLoadedEventStart, domContentLoaded: i.domContentLoadedEventEnd - i.domContentLoadedEventStart, domComplete: i.domComplete, domProcessingTime: i.loadEventStart - i.responseEnd, loadEventStart: i.loadEventStart, loadEventTime: i.loadEventEnd - i.loadEventStart, duration: i.duration, headerSize: i.transferSize > 0 ? i.transferSize - i.encodedBodySize : 0, transferSize: i.transferSize, compressionRatio: i.encodedBodySize > 0 ? i.decodedBodySize / i.encodedBodySize : 0, navigationTimingLevel: 2 }; !((o = n.context) === null || o === void 0) && o.record && n.context.record(ce, a); }, n.config = tr(tr({}, xe), e), n; } return t.prototype.enable = function () { this.enabled || (this.enabled = !0, window.addEventListener(dn, this.eventListener)); }, t.prototype.disable = function () { this.enabled && (this.enabled = !1, this.eventListener && window.removeEventListener(dn, this.eventListener)); }, t.prototype.hasTheWindowLoadEventFired = function () { if (window.performance && window.performance.getEntriesByType(Se).length) {
    var e = window.performance.getEntriesByType(Se)[0];
    return !!e.loadEventEnd;
} return !1; }, t.prototype.onload = function () { var e = this; this.enabled && (this.hasTheWindowLoadEventFired() ? window.performance.getEntriesByType(Se).filter(function (n) { return !e.config.ignore(n); }).forEach(function (n) { return e.performanceNavigationEventHandlerTimingLevel2(n); }) : window.addEventListener(dn, this.eventListener)); }, t; })(P);
var gc = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), rr = function () { return rr = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, rr.apply(this, arguments); }, yc = "resource", hn = "resource", xo = (function (r) { gc(t, r); function t(e) { var n = r.call(this, yc) || this; return n.performanceEntryHandler = function (i) { n.recordPerformanceEntries(i.getEntries()); }, n.recordPerformanceEntries = function (i) { var o = [], a = []; for (i.filter(function (u) { return u.entryType === hn; }).filter(function (u) { return !n.config.ignore(u); }).forEach(function (u) { var f = u, s = f.name, c = f.initiatorType, l = ln(s, c); n.config.recordAllTypes.includes(l) ? o.push(u) : n.config.sampleTypes.includes(l) && a.push(u); }), o.forEach(function (u) { return n.recordResourceEvent(u); }), bo(a); a.length > 0 && n.eventCount < n.config.eventLimit;)
    n.recordResourceEvent(a.pop()), n.eventCount++; }, n.recordResourceEvent = function (i) { var o, a = i.name, u = i.startTime, f = i.initiatorType, s = i.duration, c = i.transferSize; if (!To(a, n.context.config.endpointUrl.hostname) && !((o = n.context) === null || o === void 0) && o.record) {
    var l = { version: "1.0.0", initiatorType: f, startTime: u, duration: s, fileType: ln(a, f), transferSize: c };
    n.context.config.recordResourceUrl && (l.targetUrl = a), n.context.record(mt, l);
} }, n.config = rr(rr({}, xe), e), n.eventCount = 0, n.resourceObserver = new PerformanceObserver(n.performanceEntryHandler), n; } return t.prototype.enable = function () { this.enabled || (this.enabled = !0, this.resourceObserver.observe({ type: hn, buffered: !0 })); }, t.prototype.disable = function () { this.enabled && (this.enabled = !1, this.resourceObserver.disconnect()); }, t.prototype.onload = function () { this.resourceObserver.observe({ type: hn, buffered: !0 }); }, t; })(P);
var vn, So, ar = function () { var r = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]; if (r && r.responseStart > 0 && r.responseStart < performance.now())
    return r; }, bn = function (r) { if (document.readyState === "loading")
    return "loading"; var t = ar(); if (t) {
    if (r < t.domInteractive)
        return "loading";
    if (t.domContentLoadedEventStart === 0 || r < t.domContentLoadedEventStart)
        return "dom-interactive";
    if (t.domComplete === 0 || r < t.domComplete)
        return "dom-content-loaded";
} return "complete"; }, bc = function (r) { var t = r.nodeName; return r.nodeType === 1 ? t.toLowerCase() : t.toUpperCase().replace(/^#/, ""); }, sr = function (r, t) { var e = ""; try {
    for (; r && r.nodeType !== 9;) {
        var n = r, i = n.id ? "#" + n.id : bc(n) + (n.classList && n.classList.value && n.classList.value.trim() && n.classList.value.trim().length ? "." + n.classList.value.trim().replace(/\s+/g, ".") : "");
        if (e.length + i.length > (t || 100) - 1)
            return e || i;
        if (e = e ? i + ">" + e : i, n.id)
            break;
        r = n.parentNode;
    }
}
catch { } return e; }, No = -1, wc = function () { return No; }, Pe = function (r) { addEventListener("pageshow", function (t) { t.persisted && (No = t.timeStamp, r(t)); }, !0); }, wn = function () { var r = ar(); return r && r.activationStart || 0; }, z = function (r, t) { var e = ar(), n = "navigate"; return wc() >= 0 ? n = "back-forward-cache" : e && (document.prerendering || wn() > 0 ? n = "prerender" : document.wasDiscarded ? n = "restore" : e.type && (n = e.type.replace(/_/g, "-"))), { name: r, value: t === void 0 ? -1 : t, rating: "good", delta: 0, entries: [], id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: n }; }, fe = function (r, t, e) { try {
    if (PerformanceObserver.supportedEntryTypes.includes(r)) {
        var n = new PerformanceObserver(function (i) { Promise.resolve().then(function () { t(i.getEntries()); }); });
        return n.observe(Object.assign({ type: r, buffered: !0 }, e || {})), n;
    }
}
catch { } }, K = function (r, t, e, n) { var i, o; return function (a) { t.value >= 0 && (a || n) && ((o = t.value - (i || 0)) || i === void 0) && (i = t.value, t.delta = o, t.rating = (function (u, f) { return u > f[1] ? "poor" : u > f[0] ? "needs-improvement" : "good"; })(t.value, e), r(t)); }; }, En = function (r) { requestAnimationFrame(function () { return requestAnimationFrame(function () { return r(); }); }); }, tt = function (r) { document.addEventListener("visibilitychange", function () { document.visibilityState === "hidden" && r(); }); }, cr = function (r) { var t = !1; return function () { t || (r(), t = !0); }; }, Ce = -1, Co = function () { return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0; }, ir = function (r) { document.visibilityState === "hidden" && Ce > -1 && (Ce = r.type === "visibilitychange" ? r.timeStamp : 0, Ec()); }, Io = function () { addEventListener("visibilitychange", ir, !0), addEventListener("prerenderingchange", ir, !0); }, Ec = function () { removeEventListener("visibilitychange", ir, !0), removeEventListener("prerenderingchange", ir, !0); }, Tn = function () { return Ce < 0 && (Ce = Co(), Io(), Pe(function () { setTimeout(function () { Ce = Co(), Io(); }, 0); })), { get firstHiddenTime() { return Ce; } }; }, ur = function (r) { document.prerendering ? addEventListener("prerenderingchange", function () { return r(); }, !0) : r(); }, Ao = [1800, 3e3], Tc = function (r, t) { t = t || {}, ur(function () { var e, n = Tn(), i = z("FCP"), o = fe("paint", function (a) { a.forEach(function (u) { u.name === "first-contentful-paint" && (o.disconnect(), u.startTime < n.firstHiddenTime && (i.value = Math.max(u.startTime - wn(), 0), i.entries.push(u), e(!0))); }); }); o && (e = K(r, i, Ao, t.reportAllChanges), Pe(function (a) { i = z("FCP"), e = K(r, i, Ao, t.reportAllChanges), En(function () { i.value = performance.now() - a.timeStamp, e(!0); }); })); }); }, Po = [.1, .25], Mo = function (r, t) { (function (e, n) { n = n || {}, Tc(cr(function () { var i, o = z("CLS", 0), a = 0, u = [], f = function (c) { c.forEach(function (l) { if (!l.hadRecentInput) {
    var d = u[0], h = u[u.length - 1];
    a && l.startTime - h.startTime < 1e3 && l.startTime - d.startTime < 5e3 ? (a += l.value, u.push(l)) : (a = l.value, u = [l]);
} }), a > o.value && (o.value = a, o.entries = u, i()); }, s = fe("layout-shift", f); s && (i = K(e, o, Po, n.reportAllChanges), tt(function () { f(s.takeRecords()), i(!0); }), Pe(function () { a = 0, o = z("CLS", 0), i = K(e, o, Po, n.reportAllChanges), En(function () { return i(); }); }), setTimeout(i, 0)); })); })(function (e) { var n = (function (i) { var o, a = {}; if (i.entries.length) {
    var u = i.entries.reduce(function (s, c) { return s && s.value > c.value ? s : c; });
    if (u && u.sources && u.sources.length) {
        var f = (o = u.sources).find(function (s) { return s.node && s.node.nodeType === 1; }) || o[0];
        f && (a = { largestShiftTarget: sr(f.node), largestShiftTime: u.startTime, largestShiftValue: u.value, largestShiftSource: f, largestShiftEntry: u, loadState: bn(u.startTime) });
    }
} return Object.assign(i, { attribution: a }); })(e); r(n); }, t); };
var Ho = 0, pn = 1 / 0, nr = 0, _c = function (r) { r.forEach(function (t) { t.interactionId && (pn = Math.min(pn, t.interactionId), nr = Math.max(nr, t.interactionId), Ho = nr ? (nr - pn) / 7 + 1 : 0); }); }, Do = function () { return vn ? Ho : performance.interactionCount || 0; }, xc = function () { "interactionCount" in performance || vn || (vn = fe("event", _c, { type: "event", buffered: !0, durationThreshold: 0 })); }, j = [], Ze = new Map, Uo = 0, Sc = function () { var r = Math.min(j.length - 1, Math.floor((Do() - Uo) / 50)); return j[r]; }, Bo = [], Cc = function (r) { if (Bo.forEach(function (i) { return i(r); }), r.interactionId || r.entryType === "first-input") {
    var t = j[j.length - 1], e = Ze.get(r.interactionId);
    if (e || j.length < 10 || r.duration > t.latency) {
        if (e)
            r.duration > e.latency ? (e.entries = [r], e.latency = r.duration) : r.duration === e.latency && r.startTime === e.entries[0].startTime && e.entries.push(r);
        else {
            var n = { id: r.interactionId, latency: r.duration, entries: [r] };
            Ze.set(n.id, n), j.push(n);
        }
        j.sort(function (i, o) { return o.latency - i.latency; }), j.length > 10 && j.splice(10).forEach(function (i) { return Ze.delete(i.id); });
    }
} }, _n = function (r) { var t = self.requestIdleCallback || self.setTimeout, e = -1; return r = cr(r), document.visibilityState === "hidden" ? r() : (e = t(r), tt(r)), e; }, Ro = [200, 500], Ic = function (r, t) { "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (t = t || {}, ur(function () { var e; xc(); var n, i = z("INP"), o = function (u) { _n(function () { u.forEach(Cc); var f = Sc(); f && f.latency !== i.value && (i.value = f.latency, i.entries = f.entries, n()); }); }, a = fe("event", o, { durationThreshold: (e = t.durationThreshold) !== null && e !== void 0 ? e : 40 }); n = K(r, i, Ro, t.reportAllChanges), a && (a.observe({ type: "first-input", buffered: !0 }), tt(function () { o(a.takeRecords()), n(!0); }), Pe(function () { Uo = Do(), j.length = 0, Ze.clear(), i = z("INP"), n = K(r, i, Ro, t.reportAllChanges); })); })); }, Ie = [], ne = [], gn = 0, xn = new WeakMap, Ae = new Map, yn = -1, Ac = function (r) { Ie = Ie.concat(r), jo(); }, jo = function () { yn < 0 && (yn = _n(Pc)); }, Pc = function () { Ae.size > 10 && Ae.forEach(function (a, u) { Ze.has(u) || Ae.delete(u); }); var r = j.map(function (a) { return xn.get(a.entries[0]); }), t = ne.length - 50; ne = ne.filter(function (a, u) { return u >= t || r.includes(a); }); for (var e = new Set, n = 0; n < ne.length; n++) {
    var i = ne[n];
    qo(i.startTime, i.processingEnd).forEach(function (a) { e.add(a); });
} var o = Ie.length - 1 - 50; Ie = Ie.filter(function (a, u) { return a.startTime > gn && u > o || e.has(a); }), yn = -1; };
Bo.push(function (r) { r.interactionId && r.target && !Ae.has(r.interactionId) && Ae.set(r.interactionId, r.target); }, function (r) { var t, e = r.startTime + r.duration; gn = Math.max(gn, r.processingEnd); for (var n = ne.length - 1; n >= 0; n--) {
    var i = ne[n];
    if (Math.abs(e - i.renderTime) <= 8) {
        (t = i).startTime = Math.min(r.startTime, t.startTime), t.processingStart = Math.min(r.processingStart, t.processingStart), t.processingEnd = Math.max(r.processingEnd, t.processingEnd), t.entries.push(r);
        break;
    }
} t || (t = { startTime: r.startTime, processingStart: r.processingStart, processingEnd: r.processingEnd, renderTime: e, entries: [r] }, ne.push(t)), (r.interactionId || r.entryType === "first-input") && xn.set(r, t), jo(); });
var ie, et, Fo, or, qo = function (r, t) { for (var e, n = [], i = 0; e = Ie[i]; i++)
    if (!(e.startTime + e.duration < r)) {
        if (e.startTime > t)
            break;
        n.push(e);
    } return n; }, Vo = function (r, t) { So || (So = fe("long-animation-frame", Ac)), Ic(function (e) { var n = (function (i) { var o = i.entries[0], a = xn.get(o), u = o.processingStart, f = a.processingEnd, s = a.entries.sort(function (E, v) { return E.processingStart - v.processingStart; }), c = qo(o.startTime, f), l = i.entries.find(function (E) { return E.target; }), d = l && l.target || Ae.get(o.interactionId), h = [o.startTime + o.duration, f].concat(c.map(function (E) { return E.startTime + E.duration; })), p = Math.max.apply(Math, h), b = { interactionTarget: sr(d), interactionTargetElement: d, interactionType: o.name.startsWith("key") ? "keyboard" : "pointer", interactionTime: o.startTime, nextPaintTime: p, processedEventEntries: s, longAnimationFrameEntries: c, inputDelay: u - o.startTime, processingDuration: f - u, presentationDelay: Math.max(p - f, 0), loadState: bn(o.startTime) }; return Object.assign(i, { attribution: b }); })(e); r(n); }, t); }, Oo = [2500, 4e3], mn = {}, Go = function (r, t) { (function (e, n) { n = n || {}, ur(function () { var i, o = Tn(), a = z("LCP"), u = function (c) { n.reportAllChanges || (c = c.slice(-1)), c.forEach(function (l) { l.startTime < o.firstHiddenTime && (a.value = Math.max(l.startTime - wn(), 0), a.entries = [l], i()); }); }, f = fe("largest-contentful-paint", u); if (f) {
    i = K(e, a, Oo, n.reportAllChanges);
    var s = cr(function () { mn[a.id] || (u(f.takeRecords()), f.disconnect(), mn[a.id] = !0, i(!0)); });
    ["keydown", "click"].forEach(function (c) { addEventListener(c, function () { return _n(s); }, { once: !0, capture: !0 }); }), tt(s), Pe(function (c) { a = z("LCP"), i = K(e, a, Oo, n.reportAllChanges), En(function () { a.value = performance.now() - c.timeStamp, mn[a.id] = !0, i(!0); }); });
} }); })(function (e) { var n = (function (i) { var o = { timeToFirstByte: 0, resourceLoadDelay: 0, resourceLoadDuration: 0, elementRenderDelay: i.value }; if (i.entries.length) {
    var a = ar();
    if (a) {
        var u = a.activationStart || 0, f = i.entries[i.entries.length - 1], s = f.url && performance.getEntriesByType("resource").filter(function (p) { return p.name === f.url; })[0], c = Math.max(0, a.responseStart - u), l = Math.max(c, s ? (s.requestStart || s.startTime) - u : 0), d = Math.max(l, s ? s.responseEnd - u : 0), h = Math.max(d, f.startTime - u);
        o = { element: sr(f.element), timeToFirstByte: c, resourceLoadDelay: l - c, resourceLoadDuration: d - l, elementRenderDelay: h - d, navigationEntry: a, lcpEntry: f }, f.url && (o.url = f.url), s && (o.lcpResourceEntry = s);
    }
} return Object.assign(i, { attribution: o }); })(e); r(n); }, t); };
var Je = { passive: !0, capture: !0 }, Rc = new Date, Lo = function (r, t) { ie || (ie = t, et = r, Fo = new Date, zo(removeEventListener), Wo()); }, Wo = function () { if (et >= 0 && et < Fo - Rc) {
    var r = { entryType: "first-input", name: ie.type, target: ie.target, cancelable: ie.cancelable, startTime: ie.timeStamp, processingStart: ie.timeStamp + et };
    or.forEach(function (t) { t(r); }), or = [];
} }, Oc = function (r) { if (r.cancelable) {
    var t = (r.timeStamp > 1e12 ? new Date : performance.now()) - r.timeStamp;
    r.type == "pointerdown" ? (function (e, n) { var i = function () { Lo(e, n), a(); }, o = function () { a(); }, a = function () { removeEventListener("pointerup", i, Je), removeEventListener("pointercancel", o, Je); }; addEventListener("pointerup", i, Je), addEventListener("pointercancel", o, Je); })(t, r) : Lo(t, r);
} }, zo = function (r) { ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) { return r(t, Oc, Je); }); }, ko = [100, 300], Lc = function (r, t) { t = t || {}, ur(function () { var e, n = Tn(), i = z("FID"), o = function (f) { f.startTime < n.firstHiddenTime && (i.value = f.processingStart - f.startTime, i.entries.push(f), e(!0)); }, a = function (f) { f.forEach(o); }, u = fe("first-input", a); e = K(r, i, ko, t.reportAllChanges), u && (tt(cr(function () { a(u.takeRecords()), u.disconnect(); })), Pe(function () { var f; i = z("FID"), e = K(r, i, ko, t.reportAllChanges), or = [], et = -1, ie = null, zo(addEventListener), f = o, or.push(f), Wo(); })); }); }, Ko = function (r, t) { Lc(function (e) { var n = (function (i) { var o = i.entries[0], a = { eventTarget: sr(o.target), eventType: o.name, eventTime: o.startTime, eventEntry: o, loadState: bn(o.startTime) }; return Object.assign(i, { attribution: a }); })(e); r(n); }, t); };
var kc = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), fr = function () { return fr = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, fr.apply(this, arguments); }, Nc = "web-vitals", Xo = (function (r) { kc(t, r); function t(e) { var n = r.call(this, Nc) || this; return n.resourceEventIds = new Map, n.cacheLCPCandidates = er(), n.handleEvent = function (i) { switch (i.type) {
    case mt:
        var o = i.details;
        n.cacheLCPCandidates && o.fileType === I.IMAGE && n.resourceEventIds.set(fn(i.details), i.id);
        break;
    case ce:
        n.navigationEventId = i.id;
        break;
} }, n.config = fr(fr({}, xe), e), n; } return t.prototype.enable = function () { }, t.prototype.disable = function () { }, t.prototype.onload = function () { var e = this; this.context.eventBus.subscribe(Ee.EVENT, this.handleEvent), Go(function (n) { return e.handleLCP(n); }, { reportAllChanges: this.config.reportAllLCP }), Ko(function (n) { return e.handleFID(n); }), Mo(function (n) { return e.handleCLS(n); }, { reportAllChanges: !0 }), Vo(function (n) { return e.handleINP(n); }, { reportAllChanges: !0 }); }, t.prototype.handleLCP = function (e) { var n, i, o = e.attribution, a = { element: o.element, url: o.url, timeToFirstByte: o.timeToFirstByte, resourceLoadDelay: o.resourceLoadDelay, resourceLoadTime: o.resourceLoadDuration, elementRenderDelay: o.elementRenderDelay }; if (o.lcpResourceEntry) {
    var u = fn(o.lcpResourceEntry);
    a.lcpResourceEntry = this.resourceEventIds.get(u);
} this.navigationEventId && (a.navigationEntry = this.navigationEventId), (n = this.context) === null || n === void 0 || n.record(ri, { version: "1.0.0", value: e.value, attribution: a }), (i = this.context) === null || i === void 0 || i.eventBus.unsubscribe(Ee.EVENT, this.handleEvent), this.resourceEventIds.clear(), this.navigationEventId = void 0; }, t.prototype.handleCLS = function (e) { var n = e.attribution, i = this.context, o = i.record, a = i.recordCandidate; (this.config.reportAllCLS ? o : a)(ii, { version: "1.0.0", value: e.value, attribution: { largestShiftTarget: n.largestShiftTarget, largestShiftValue: n.largestShiftValue, largestShiftTime: n.largestShiftTime, loadState: n.loadState } }); }, t.prototype.handleFID = function (e) { var n, i = e.attribution; (n = this.context) === null || n === void 0 || n.record(ni, { version: "1.0.0", value: e.value, attribution: { eventTarget: i.eventTarget, eventType: i.eventType, eventTime: i.eventTime, loadState: i.loadState } }); }, t.prototype.handleINP = function (e) { var n = e.attribution, i = this.context, o = i.record, a = i.recordCandidate; (this.config.reportAllINP ? o : a)(oi, { version: "1.0.0", value: e.value, attribution: { interactionTarget: n.interactionTarget, interactionTime: n.interactionTime, nextPaintTime: n.nextPaintTime, interactionType: n.interactionType, inputDelay: n.inputDelay, processingDuration: n.processingDuration, presentationDelay: n.presentationDelay, loadState: n.loadState } }); }, t; })(P);
var Mc = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), Yo = (function (r) { Mc(t, r); function t(e) { var n = r.call(this, e) || this; return n.name = "XMLHttpRequest error", n; } return t; })(Error);
var Hc = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), lr = function () { return lr = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, lr.apply(this, arguments); }, Dc = "xhr", $o = (function (r) { Hc(t, r); function t(e) { var n = r.call(this, Dc) || this; return n.addXRayTraceIdHeader = function (i) { return Vt(i, n.config.addXRayTraceIdHeader); }, n.isTracingEnabled = function () { return n.context.config.enableXRay; }, n.isSessionRecorded = function () { var i; return ((i = n.context.getSession()) === null || i === void 0 ? void 0 : i.record) || !1; }, n.handleXhrLoadEvent = function (i) { var o = i.target, a = n.xhrMap.get(o); if (a) {
    var u = te();
    a.trace.end_time = u, a.trace.subsegments[0].end_time = u, a.trace.subsegments[0].http.response = { status: o.status }, _e(o.status) ? (a.trace.subsegments[0].throttle = !0, a.trace.throttle = !0) : Wt(o.status) ? (a.trace.subsegments[0].error = !0, a.trace.error = !0) : Te(o.status) && (a.trace.subsegments[0].fault = !0, a.trace.fault = !0);
    var f = o.getResponseHeader("Content-Length"), s = f ? parseInt(f, 10) : NaN;
    isNaN(s) || (a.trace.subsegments[0].http.response.content_length = s), n.recordTraceEvent(a.trace), n.recordHttpEventWithResponse(a, o);
} }, n.handleXhrErrorEvent = function (i) { var o = i.target, a = n.xhrMap.get(o), u = "XMLHttpRequest error", f = o.statusText ? o.status.toString() + ": " + o.statusText : o.status.toString(); if (a) {
    var s = te();
    a.trace.fault = !0, a.trace.end_time = s, a.trace.subsegments[0].end_time = s, a.trace.subsegments[0].fault = !0, a.trace.subsegments[0].cause = { exceptions: [{ type: u, message: f }] }, n.recordTraceEvent(a.trace), n.recordHttpEventWithError(a, o, new Yo(f));
} }, n.handleXhrAbortEvent = function (i) { var o = i.target, a = n.xhrMap.get(o); a && n.handleXhrDetailsOnError(a, o, "XMLHttpRequest abort"); }, n.handleXhrTimeoutEvent = function (i) { var o = i.target, a = n.xhrMap.get(o), u = "XMLHttpRequest timeout"; n.handleXhrDetailsOnError(a, o, u); }, n.initializeTrace = function (i) { var o = te(); i.trace = Kt(n.config.logicalServiceName, o, n.context.config.enableW3CTraceId), i.trace.subsegments.push(Xt(Yt(i.url), o, { request: { method: i.method, url: i.url, traced: !0 } })); }, n.sendWrapper = function () { var i = n; return function (o) { return function () { var a = i.xhrMap.get(this); return a && (this.addEventListener("load", i.handleXhrLoadEvent), this.addEventListener("error", i.handleXhrErrorEvent), this.addEventListener("abort", i.handleXhrAbortEvent), this.addEventListener("timeout", i.handleXhrTimeoutEvent), i.initializeTrace(a), !i.isSyntheticsUA && i.isTracingEnabled() && i.addXRayTraceIdHeader(a.url) && i.isSessionRecorded() && (i.context.config.enableW3CTraceId ? this.setRequestHeader($e, Qt(a.trace.trace_id, a.trace.subsegments[0].id)) : this.setRequestHeader(Ye, $t(a.trace.trace_id, a.trace.subsegments[0].id)))), o.apply(this, arguments); }; }; }, n.openWrapper = function () { var i = n; return function (o) { return function (a, u, f) { return zt(u, i.config) && i.xhrMap.set(this, { url: u, method: a, async: f }), o.apply(this, arguments); }; }; }, n.config = lr(lr({}, Gt), e), n.xhrMap = new Map, n.isSyntheticsUA = navigator.userAgent.includes("CloudWatchSynthetics"), n; } return t.prototype.onload = function () { this.enable(); }, Object.defineProperty(t.prototype, "patches", { get: function () { return [{ nodule: XMLHttpRequest.prototype, name: "send", wrapper: this.sendWrapper }, { nodule: XMLHttpRequest.prototype, name: "open", wrapper: this.openWrapper }]; }, enumerable: !1, configurable: !0 }), t.prototype.handleXhrDetailsOnError = function (e, n, i) { if (e) {
    var o = te();
    e.trace.end_time = o, e.trace.subsegments[0].end_time = o, e.trace.subsegments[0].error = !0, e.trace.subsegments[0].cause = { exceptions: [{ type: i }] }, this.recordTraceEvent(e.trace), this.recordHttpEventWithError(e, n, i);
} }, t.prototype.statusOk = function (e) { return e >= 200 && e < 300; }, t.prototype.recordHttpEventWithResponse = function (e, n) { this.xhrMap.delete(n); var i = { version: "1.0.0", request: { method: e.method, url: e.url }, response: { status: n.status, statusText: n.statusText } }; this.isTracingEnabled() && (i.trace_id = e.trace.trace_id, i.segment_id = e.trace.subsegments[0].id), (this.config.recordAllRequests || !this.statusOk(n.status)) && this.context.record(ye, i); }, t.prototype.recordHttpEventWithError = function (e, n, i) { this.xhrMap.delete(n); var o = { version: "1.0.0", request: { method: e.method, url: e.url }, error: be({ type: "error", error: i }, this.config.stackTraceLength) }; this.isTracingEnabled() && (o.trace_id = e.trace.trace_id, o.segment_id = e.trace.subsegments[0].id), this.context.record(ye, o); }, t.prototype.recordTraceEvent = function (e) { !this.isSyntheticsUA && this.isTracingEnabled() && this.isSessionRecorded() && this.context.record(pt, e); }, t; })(ee);
var Uc = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), dr = function () { return dr = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, dr.apply(this, arguments); }, Bc = "fetch", Qo = (function (r) { Uc(t, r); function t(e) { var n = r.call(this, Bc) || this; return n.isTracingEnabled = function () { return n.context.config.enableXRay; }, n.isSessionRecorded = function () { var i; return ((i = n.context.getSession()) === null || i === void 0 ? void 0 : i.record) || !1; }, n.beginTrace = function (i, o, a) { var u = te(), f = co(i, o, !0), s = Kt(n.config.logicalServiceName, u, n.context.config.enableW3CTraceId), c = Xt(Yt(i), u, f); return s.subsegments.push(c), n.isTraceIdHeaderEnabled(i) && n.addXRayTraceIdHeader(i, o, a, s), s; }, n.addXRayTraceIdHeader = function (i, o, a, u) { if (i.headers)
    return fo(i.headers, u.trace_id, u.subsegments[0].id, n.context.config.enableW3CTraceId); o || (o = {}, [].push.call(a, o)), uo(o, u.trace_id, u.subsegments[0].id, n.context.config.enableW3CTraceId); }, n.endTrace = function (i, o, a) { if (i) {
    var u = te();
    if (i.subsegments[0].end_time = u, i.end_time = u, o) {
        i.subsegments[0].http.response = { status: o.status }, _e(o.status) ? (i.subsegments[0].throttle = !0, i.throttle = !0) : Wt(o.status) ? (i.subsegments[0].error = !0, i.error = !0) : Te(o.status) && (i.subsegments[0].fault = !0, i.fault = !0);
        var f = o.headers.get("Content-Length"), s = f ? parseInt(f, 10) : NaN;
        isNaN(s) || (i.subsegments[0].http.response.content_length = s);
    }
    a && (i.fault = !0, i.subsegments[0].fault = !0, a instanceof Object ? n.appendErrorCauseFromObject(i.subsegments[0], a) : Hr(a) && n.appendErrorCauseFromPrimitive(i.subsegments[0], a.toString())), n.context.record(pt, i);
} }, n.createHttpEvent = function (i, o) { var a = i; return { version: "1.0.0", request: { url: Qe(i), method: o?.method ? o.method : a.method ? a.method : "GET" } }; }, n.recordHttpEventWithResponse = function (i, o) { (n.config.recordAllRequests || !o.ok) && (i.response = { status: o.status, statusText: o.statusText }, n.context.record(ye, i)); }, n.recordHttpEventWithError = function (i, o) { i.error = be({ type: "error", error: o }, n.config.stackTraceLength), n.context.record(ye, i); }, n.fetch = function (i, o, a, u, f) { var s = n.createHttpEvent(u, f), c; if (!zt(Qe(u), n.config))
    return i.apply(o, a); var l = lo(u.headers, n.context.config.enableW3CTraceId); return l.traceId && l.segmentId ? (s.trace_id = l.traceId, s.segment_id = l.segmentId) : n.isTracingEnabled() && n.isSessionRecorded() && (c = n.beginTrace(u, f, a), s.trace_id = c.trace_id, s.segment_id = c.subsegments[0].id), i.apply(o, a).then(function (d) { return n.endTrace(c, d, void 0), n.recordHttpEventWithResponse(s, d), d; }).catch(function (d) { throw n.endTrace(c, void 0, d), n.recordHttpEventWithError(s, d), d; }); }, n.fetchWrapper = function () { var i = n; return function (o) { return function (a, u) { return i.fetch(o, this, arguments, a, u); }; }; }, n.config = dr(dr({}, Gt), e), n; } return Object.defineProperty(t.prototype, "patches", { get: function () { return [{ nodule: window, name: "fetch", wrapper: this.fetchWrapper }]; }, enumerable: !1, configurable: !0 }), t.prototype.onload = function () { this.enable(); }, t.prototype.isTraceIdHeaderEnabled = function (e) { var n = Qe(e); return Vt(n, this.config.addXRayTraceIdHeader); }, t.prototype.appendErrorCauseFromPrimitive = function (e, n) { e.cause = { exceptions: [{ type: n }] }; }, t.prototype.appendErrorCauseFromObject = function (e, n) { e.cause = { exceptions: [{ type: n.name, message: n.message }] }; }, t; })(ee);
var jc = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), Fc = "page-view", Jo = (function (r) { jc(t, r); function t() { var e = r.call(this, Fc) || this; return e.pushState = function () { var n = e; return function (i) { return function (o, a, u) { var f = i.apply(this, arguments); return n.recordPageView(), f; }; }; }, e.replaceState = function () { var n = e; return function (i) { return function (o, a, u) { var f = i.apply(this, arguments); return n.recordPageView(), f; }; }; }, e.popstateListener = function (n) { e.recordPageView(); }, e.recordPageView = function () { e.context.recordPageView(e.createIdForCurrentPage()); }, e.enable(), e; } return t.prototype.onload = function () { this.addListener(), this.recordPageView(); }, Object.defineProperty(t.prototype, "patches", { get: function () { return [{ nodule: History.prototype, name: "pushState", wrapper: this.pushState }, { nodule: History.prototype, name: "replaceState", wrapper: this.replaceState }]; }, enumerable: !1, configurable: !0 }), t.prototype.addListener = function () { window.addEventListener("popstate", this.popstateListener); }, t.prototype.createIdForCurrentPage = function () { var e = window.location.pathname, n = window.location.hash; switch (this.context.config.pageIdFormat) {
    case le.PathAndHash: return e && n ? e + n : e || n || "";
    case le.Hash: return n || "";
    case le.Path:
    default: return e || "";
} }, t; })(ee);
var oe = function () { return oe = Object.assign || function (r) { for (var t, e = 1, n = arguments.length; e < n; e++) {
    t = arguments[e];
    for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
} return r; }, oe.apply(this, arguments); }, qc = function (r, t) { var e = {}; for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]); if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
        t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]); return e; }, Re = function (r, t, e) { if (e || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
        (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]); return r.concat(o || Array.prototype.slice.call(t)); }, Zo = "us-west-2", Sn = "https://dataplane.rum.".concat(Zo, ".amazonaws.com"), Oe = (function (r) { return r.Errors = "errors", r.Performance = "performance", r.Interaction = "interaction", r.Http = "http", r; })(Oe || {}), le = (function (r) { return r.Path = "PATH", r.Hash = "HASH", r.PathAndHash = "PATH_AND_HASH", r; })(le || {}), Vc = function () { return { unique: !1, domain: window.location.hostname, path: "/", sameSite: "Strict", secure: !0 }; }, Gc = function (r) { return oe({ allowCookies: !1, batchLimit: 100, client: Qn, cookieAttributes: r, disableAutoPageView: !1, dispatchInterval: 5 * 1e3, enableRumClient: !0, enableXRay: !1, endpoint: Sn, endpointUrl: new URL(Sn), eventCacheSize: 200, eventPluginsToLoad: [], pageIdFormat: le.Path, pagesToExclude: [], pagesToInclude: [/.*/], signing: !0, recordResourceUrl: !0, retries: 2, routeChangeComplete: 100, routeChangeTimeout: 1e4, sessionAttributes: {}, sessionEventLimit: 200, sessionLengthSeconds: 1800, sessionSampleRate: 1, telemetries: [], useBeacon: !0, userIdRetentionDays: 30, enableW3CTraceId: !1 }, ea); }, ea = { candidatesCacheSize: 10 }, Wc = (function () { function r(t, e, n, i) { i === void 0 && (i = {}); var o = i.cookieAttributes, a = qc(i, ["cookieAttributes"]); this.eventBus = new Tt, typeof n > "u" && (n = "us-west-2"); var u = oe(oe({}, Vc()), o); this.config = oe(oe(oe({ fetchFunction: fetch }, Gc(u)), a), ea), this.config.endpoint = this.getDataPlaneEndpoint(n, a), this.config.endpointUrl = new URL(this.config.endpoint), this.eventCache = this.initEventCache(t, e), this.dispatchManager = this.initDispatch(n, t), this.pluginManager = this.initPluginManager(t, e), this.config.enableRumClient ? this.enable() : this.disable(); } return r.prototype.setAwsCredentials = function (t) { this.dispatchManager.setAwsCredentials(t); }, r.prototype.addSessionAttributes = function (t) { this.eventCache.addSessionAttributes(t); }, r.prototype.addPlugin = function (t) { this.pluginManager.addPlugin(t); }, r.prototype.dispatch = function () { this.dispatchManager.dispatchFetch(); }, r.prototype.dispatchBeacon = function () { this.dispatchManager.dispatchBeacon(); }, r.prototype.enable = function () { this.eventCache.enable(), this.pluginManager.enable(), this.dispatchManager.enable(); }, r.prototype.disable = function () { this.dispatchManager.disable(), this.pluginManager.disable(), this.eventCache.disable(); }, r.prototype.allowCookies = function (t) { this.config.allowCookies = t; }, r.prototype.recordPageView = function (t) { this.eventCache.recordPageView(t); }, r.prototype.recordError = function (t) { this.pluginManager.record(Dr, t); }, r.prototype.registerDomEvents = function (t) { this.pluginManager.updatePlugin(Mr, t); }, r.prototype.recordEvent = function (t, e) { this.eventCache.recordEvent(t, e); }, r.prototype.initEventCache = function (t, e) { return new Ti({ id: t, version: e }, this.config, this.eventBus); }, r.prototype.initDispatch = function (t, e) { var n = new yo(t, this.config.endpointUrl, this.eventCache, this.config); return this.eventCache.isSessionSampled() && (this.config.identityPoolId && this.config.guestRoleArn ? n.setAwsCredentials(new Zn(this.config, e).ChainAnonymousCredentialsProvider) : this.config.identityPoolId && n.setAwsCredentials(new ei(this.config, e).ChainAnonymousCredentialsProvider)), n; }, r.prototype.initPluginManager = function (t, e) { var n = this.constructBuiltinPlugins(), i = Re(Re([], n, !0), this.config.eventPluginsToLoad, !0), o = { applicationId: t, applicationVersion: e, config: this.config, record: this.eventCache.recordEvent, recordCandidate: this.eventCache.recordCandidate, recordPageView: this.eventCache.recordPageView, getSession: this.eventCache.getSession, eventBus: this.eventBus }, a = new fi(o); return this.config.disableAutoPageView || a.addPlugin(new Jo), i.forEach(function (u) { a.addPlugin(u); }), a; }, r.prototype.constructBuiltinPlugins = function () { var t = [], e = this.telemetryFunctor(); return this.config.telemetries.forEach(function (n) { typeof n == "string" && e[n.toLowerCase()] ? t = Re(Re([], t, !0), e[n.toLowerCase()]({}), !0) : Array.isArray(n) && e[n[0].toLowerCase()] && (t = Re(Re([], t, !0), e[n[0].toLowerCase()](n[1]), !0)); }), t; }, r.prototype.getDataPlaneEndpoint = function (t, e) { return e.endpoint ? e.endpoint : Sn.replace(Zo, t); }, r.prototype.telemetryFunctor = function () { var t; return t = {}, t[Oe.Errors] = function (e) { return [new di(e)]; }, t[Oe.Performance] = function (e) { return [new _o(e), new xo(e), new Xo(e)]; }, t[Oe.Interaction] = function (e) { return [new li(e)]; }, t[Oe.Http] = function (e) { return [new $o(e), new Qo(e)]; }, t; }, r; })();
var oa = -1, In = function (r) { addEventListener("pageshow", function (t) { t.persisted && (oa = t.timeStamp, r(t)); }, !0); }, aa = function () { var r = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]; if (r && r.responseStart > 0 && r.responseStart < performance.now())
    return r; }, An = function () { var r = aa(); return r && r.activationStart || 0; }, hr = function (r, t) { var e = aa(), n = "navigate"; return oa >= 0 ? n = "back-forward-cache" : e && (document.prerendering || An() > 0 ? n = "prerender" : document.wasDiscarded ? n = "restore" : e.type && (n = e.type.replace(/_/g, "-"))), { name: r, value: t === void 0 ? -1 : t, rating: "good", delta: 0, entries: [], id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: n }; }, sa = function (r, t, e) { try {
    if (PerformanceObserver.supportedEntryTypes.includes(r)) {
        var n = new PerformanceObserver(function (i) { Promise.resolve().then(function () { t(i.getEntries()); }); });
        return n.observe(Object.assign({ type: r, buffered: !0 }, e || {})), n;
    }
}
catch { } }, pr = function (r, t, e, n) { var i, o; return function (a) { t.value >= 0 && (a || n) && ((o = t.value - (i || 0)) || i === void 0) && (i = t.value, t.delta = o, t.rating = (function (u, f) { return u > f[1] ? "poor" : u > f[0] ? "needs-improvement" : "good"; })(t.value, e), r(t)); }; }, ca = function (r) { requestAnimationFrame(function () { return requestAnimationFrame(function () { return r(); }); }); }, ua = function (r) { document.addEventListener("visibilitychange", function () { document.visibilityState === "hidden" && r(); }); }, fa = function (r) { var t = !1; return function () { t || (r(), t = !0); }; }, Le = -1, ta = function () { return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0; }, mr = function (r) { document.visibilityState === "hidden" && Le > -1 && (Le = r.type === "visibilitychange" ? r.timeStamp : 0, zc()); }, ra = function () { addEventListener("visibilitychange", mr, !0), addEventListener("prerenderingchange", mr, !0); }, zc = function () { removeEventListener("visibilitychange", mr, !0), removeEventListener("prerenderingchange", mr, !0); }, la = function () { return Le < 0 && (Le = ta(), ra(), In(function () { setTimeout(function () { Le = ta(), ra(); }, 0); })), { get firstHiddenTime() { return Le; } }; }, da = function (r) { document.prerendering ? addEventListener("prerenderingchange", function () { return r(); }, !0) : r(); }, na = [1800, 3e3], ha = function (r, t) { t = t || {}, da(function () { var e, n = la(), i = hr("FCP"), o = sa("paint", function (a) { a.forEach(function (u) { u.name === "first-contentful-paint" && (o.disconnect(), u.startTime < n.firstHiddenTime && (i.value = Math.max(u.startTime - An(), 0), i.entries.push(u), e(!0))); }); }); o && (e = pr(r, i, na, t.reportAllChanges), In(function (a) { i = hr("FCP"), e = pr(r, i, na, t.reportAllChanges), ca(function () { i.value = performance.now() - a.timeStamp, e(!0); }); })); }); };
var Kc = function (r) { var t = self.requestIdleCallback || self.setTimeout, e = -1; return r = fa(r), document.visibilityState === "hidden" ? r() : (e = t(r), ua(r)), e; };
var ia = [2500, 4e3], Cn = {}, pa = function (r, t) { t = t || {}, da(function () { var e, n = la(), i = hr("LCP"), o = function (f) { t.reportAllChanges || (f = f.slice(-1)), f.forEach(function (s) { s.startTime < n.firstHiddenTime && (i.value = Math.max(s.startTime - An(), 0), i.entries = [s], e()); }); }, a = sa("largest-contentful-paint", o); if (a) {
    e = pr(r, i, ia, t.reportAllChanges);
    var u = fa(function () { Cn[i.id] || (o(a.takeRecords()), a.disconnect(), Cn[i.id] = !0, e(!0)); });
    ["keydown", "click"].forEach(function (f) { addEventListener(f, function () { return Kc(u); }, { once: !0, capture: !0 }); }), ua(u), In(function (f) { i = hr("LCP"), e = pr(r, i, ia, t.reportAllChanges), ca(function () { i.value = performance.now() - f.timeStamp, Cn[i.id] = !0, e(!0); }); });
} }); };
var ma = "navigation", Xc = "FCP", Yc = "LCP", va = (function () { function r(t) { var e = this; this.visuallyReadyTimestamp = 0, this.timeIntervals = 0, this.fcpSupported = !1, this.lcpSupported = !1, this.cleanupVisuallyReadySearch = !1, this.CHECK_PERIOD = 1e3, this.VISUALLY_READY_RESOLVE_TIMEOUT = 1e4, this.visualReadyIntervalHandler = function () { var n = e.timeIntervals * e.CHECK_PERIOD > e.VISUALLY_READY_RESOLVE_TIMEOUT; e.isOkToResolveVisuallyReady(n) ? (e.visuallyReadyTimestamp = Math.max(e.fcpTime ? e.fcpTime : 0, e.lcpTime ? e.lcpTime : 0, e.domContentLoadedEventEnd ? e.domContentLoadedEventEnd : 0), clearInterval(e.visualReadyInterval), e.cleanupVisuallyReadySearch = !0, e.quietWindowSearch.startTtiSearch(e.visuallyReadyTimestamp)) : n && (e.cleanupVisuallyReadySearch = !0, e.quietWindowSearch.cleanupQuietWindowSearch()), e.timeIntervals += 1; }, this.navEventListener = function () { var n = new PerformanceObserver(function (i) { e.cleanupVisuallyReadySearch && n.disconnect(), i.getEntries().filter(function (o) { return o.entryType === ma; }).map(function (o) { return o; }).forEach(function (o) { o.domContentLoadedEventEnd && (e.domContentLoadedEventEnd = o.domContentLoadedEventEnd); }); }); n.observe({ type: ma, buffered: !0 }); }, this.initListeners(), this.quietWindowSearch = t, this.visualReadyInterval = this.startVisualReadyInterval(); } return r.prototype.startVisualReadyInterval = function () { return setInterval(this.visualReadyIntervalHandler, this.CHECK_PERIOD); }, r.prototype.isOkToResolveVisuallyReady = function (t) { var e = this.lcpTime !== void 0 && this.fcpTime !== void 0 && this.domContentLoadedEventEnd !== void 0, n = this.lcpSupported && this.lcpTime !== void 0 || this.fcpSupported && this.fcpTime !== void 0 || this.domContentLoadedEventEnd !== void 0; return e ? !0 : !!(t && n); }, r.prototype.handleWebVitals = function (t) { var e = this; t.name === Xc && t.entries.forEach(function (n) { return e.fcpTime = n.startTime + n.duration; }), t.name === Yc && t.entries.forEach(function (n) { return e.lcpTime = n.startTime + n.duration; }); }, r.prototype.initListeners = function () { var t = this; this.navEventListener(), this.lcpSupported = er(), this.fcpSupported = wo(), this.fcpSupported && (this.fcpTime = void 0, ha(function (e) { return t.handleWebVitals(e); })), this.lcpSupported && (this.lcpTime = void 0, pa(function (e) { return t.handleWebVitals(e); })); }, r; })();
var Q = "longtask", ke = "fps", $c = "navigation", ga = (function () { function r(t, e) { var n = this; this.ttiTracker = {}, this.ttiResolved = !1, this.startBucket = 0, this.currBucket = 0, this.acceptedIntervals = 0, this.totalIntervals = 0, this.visuallyReadyTimestamp = 0, this.fpsEnabled = !1, this.COLLECTION_PERIOD = 100, this.REQUIRED_ACCEPTED_INTERVALS = 5, this.CHECK_PERIOD = 1e3, this.TTI_RESOLVE_TIMEOUT = 1e4, this.FPS_THRESHOLD = 20 / (1e3 / this.COLLECTION_PERIOD), this.LONG_TASK_THRESHOLD = 0, this.ttiIntervalHandler = function () { var i = n.totalIntervals * n.CHECK_PERIOD > n.TTI_RESOLVE_TIMEOUT; i && (n.ttiResolved = !0, n.ttiTracker = {}, clearInterval(n.ttiInterval)); for (var o = n.computeTimeWindow(), a = n.currBucket; a <= o; a++) {
    n.currBucket = a;
    var u = !0;
    if (n.isTTIConditionNotFulfilied(Q, a) && (u = !1), n.fpsEnabled && n.isTTIConditionNotFulfilied(ke, a) && (u = !1), !u) {
        n.acceptedIntervals = 0;
        continue;
    }
    if (n.acceptedIntervals += 1, n.isTTIResolved(n.acceptedIntervals)) {
        n.ttiResolved = !0, clearInterval(n.ttiInterval), n.onReport({ name: "TTI", value: n.computeTTIValue() });
        break;
    }
    else
        continue;
} n.totalIntervals += 1; }, this.longTaskEventListener = function () { var i = new PerformanceObserver(function (o) { n.ttiResolved && i.disconnect(), o.getEntries().filter(function (a) { return a.entryType === Q; }).forEach(function (a) { if (a.startTime && a.duration) {
    var u = a.startTime + a.duration;
    n.addToTracker(Q, n.computeTimeWindow(a.startTime), 1), n.addToTracker(Q, n.computeTimeWindow(u), 1);
} }); }); i.observe({ type: Q }); }, this.framesPerSecondListener = function () { var i = function () { n.addToTracker(ke, n.computeTimeWindow(), 1), window.requestAnimationFrame(i); }; n.ttiResolved || window.requestAnimationFrame(i); }, this.fpsEnabled = t, this.initListeners(), this.onReport = e; } return r.prototype.startTtiSearch = function (t) { this.startBucket = Math.max(this.computeTimeWindow(t), 0), this.currBucket = this.startBucket, this.acceptedIntervals = 0, this.totalIntervals = 0, this.visuallyReadyTimestamp = t, this.ttiInterval = setInterval(this.ttiIntervalHandler, this.CHECK_PERIOD); }, r.prototype.isTTIResolved = function (t) { return t >= this.REQUIRED_ACCEPTED_INTERVALS; }, r.prototype.computeTTIValue = function () { var t = (this.currBucket - this.REQUIRED_ACCEPTED_INTERVALS - this.startBucket + 1) * this.COLLECTION_PERIOD; return this.ttiTracker = {}, this.getPrerenderedOffset(this.visuallyReadyTimestamp + t); }, r.prototype.getPrerenderedOffset = function (t) { var e = this.getActivationStart(); if (e === void 0)
    return t; var n = Math.floor(t) - e; return n >= 0 ? Math.max(1, n) : t; }, r.prototype.getActivationStart = function () { if (this.prerenderedOffset !== void 0)
    return this.prerenderedOffset; if (typeof document.prerendering != "boolean")
    return this.prerenderedOffset; if (window.performance) {
    var t = window.performance.getEntriesByType($c)[0];
    t && t.activationStart && (this.prerenderedOffset = Math.floor(t.activationStart));
} return this.prerenderedOffset; }, r.prototype.isTTIConditionNotFulfilied = function (t, e) { if (t === Q)
    return this.ttiTracker[Q] !== void 0 && this.ttiTracker[Q][e] !== void 0 && this.ttiTracker[Q][e] > this.LONG_TASK_THRESHOLD; if (t === ke)
    return this.fpsEnabled && this.ttiTracker[ke] !== void 0 && this.ttiTracker[ke][e] !== void 0 && this.ttiTracker[ke][e] < this.FPS_THRESHOLD; }, r.prototype.initListeners = function () { this.longTaskEventListener(), this.fpsEnabled && window.requestAnimationFrame !== void 0 && this.framesPerSecondListener(); }, r.prototype.computeTimeWindow = function (t) { return Math.floor(t === void 0 ? performance.now() / this.COLLECTION_PERIOD : t / this.COLLECTION_PERIOD); }, r.prototype.addToTracker = function (t, e, n) { this.ttiTracker[t] || (this.ttiTracker[t] = []), this.ttiTracker[t][e] || (this.ttiTracker[t][e] = 0), this.ttiTracker[t][e] += n; }, r.prototype.cleanupQuietWindowSearch = function () { this.ttiResolved = !0, this.ttiTracker = {}; }, r; })();
function ya(r, t) { Eo() && new Qc(r, t); }
var Qc = (function () { function r(t, e) { this.onReport = t, this.quietWindowSearch = new ga(e.fpsEnabled, this.onReport), this.visuallyReadySearch = new va(this.quietWindowSearch); } return r; })();
var Jc = (function () { var r = function (t, e) { return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (n, i) { n.__proto__ = i; } || function (n, i) { for (var o in i)
    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]); }, r(t, e); }; return function (t, e) { if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); r(t, e); function n() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n); }; })(), Zc = "time-to-interactive", eu = (function (r) { Jc(t, r); function t(e) { e === void 0 && (e = !1); var n = r.call(this, Zc) || this; return n.recordTTIEvent = function () { ya(n.handleTTI, { fpsEnabled: n.fpsEnabled }); }, n.checkPrerenderingActivity = function () { if (typeof document < "u" && typeof document.prerendering == "boolean" && document.prerendering && (n.normalPageLoad = !1, document.addEventListener("prerenderingchange", function () { n.prerenderedPageLoad = !0, n.recordTTIEvent(); })), typeof performance < "u" && typeof performance.getEntriesByType == "function")
    try {
        var i = performance.getEntriesByType("navigation");
        if (i && i.length > 0) {
            var o = i[0];
            o && o.activationStart && o.activationStart > 0 && (n.prerenderedPageLoad = !0, n.normalPageLoad = !1);
        }
    }
    catch (a) {
        console.debug("Error accessing Performance API:", a);
    } }, n.handleTTI = function (i) { var o = { version: "1.0.0", value: Math.round(i.value) }; n.context.record(ui, o); }, n.fpsEnabled = e, n.prerenderedPageLoad = !1, n.normalPageLoad = !0, n.checkPrerenderingActivity(), n; } return t.prototype.enable = function () { }, t.prototype.disable = function () { }, t.prototype.configure = function () { }, t.prototype.onload = function () { (this.normalPageLoad || this.prerenderedPageLoad) && this.recordTTIEvent(); }, t; })(P);
export { Wc as AwsRum, Mr as DOM_EVENT_PLUGIN_ID, li as DomEventPlugin, Bc as FETCH_PLUGIN_ID, Qo as FetchPlugin, Dr as JS_ERROR_EVENT_PLUGIN_ID, di as JsErrorPlugin, vc as NAVIGATION_EVENT_PLUGIN_ID, _o as NavigationPlugin, Fc as PAGE_EVENT_PLUGIN_ID, le as PageIdFormatEnum, Jo as PageViewPlugin, yc as RESOURCE_EVENT_PLUGIN_ID, xo as ResourcePlugin, eu as TTIPlugin, Oe as TelemetryEnum, Nc as WEB_VITAL_EVENT_PLUGIN_ID, Xo as WebVitalsPlugin, Dc as XHR_PLUGIN_ID, $o as XhrPlugin };
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
