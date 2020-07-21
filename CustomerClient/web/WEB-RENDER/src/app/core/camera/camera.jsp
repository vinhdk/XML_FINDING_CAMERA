<%-- 
    Document   : index
    Created on : Jul 5, 2020, 4:42:20 PM
    Author     : Vinh Dang
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>VCF-CAMERA</title>
        <link rel="stylesheet"  href="WEB-RENDER/src/styles.scss" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="WEB-RENDER/src/assets/logo.png">
        <script type="module" src="WEB-RENDER/src/app/core/camera/camera.js"></script>
        <style>
            .collapsible {
                background-color: #269abc;
                color: white;
                cursor: pointer;
                padding: 18px;
                width: 100%;
                border: none;
                text-align: left;
                outline: none;
                font-size: 15px;
            }

            .active-colap, .collapsible:hover {
                background-color: #555;
            }

            .collapsible:after {
                content: '\002B';
                color: white;
                font-weight: bold;
                float: right;
                margin-left: 5px;
            }

            .active-colap:after {
                content: "\2212";
            }

            .content {
                padding: 0 18px;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.2s ease-out;
            }
        </style>
        <script>
            toggle = (main) => {
                main.classList.toggle("active-colap");
                const content = main.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            };
        </script>
    </head>
    <body style="overflow: hidden; background: #edf1f7">
    <app-layout name="CAMERA">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 mt-3">
                    <div class="row card bg-white radius-10" style="height: calc(80vh + 15px)">
                        <div class="col-12 pr-1">
                            <div class="text-center border-bottom-gray h-5">
                                <h3 style="font-family:cursive;">Search</h3>
                            </div>
                            <div class="mt-3" id="main-search">
                                <!--                                <div class="form-group w-100-per m-auto">
                                                                    <label>SEARCH BY NAME</label>
                                                                    <input class="form-control" type="text" name="name"/>
                                                                </div>
                                                                <div>
                                                                    <div class="form-group float-left w-50-per m-auto">
                                                                        <label>FROM PRICE</label>
                                                                        <input class="form-control" type="text" name="formPrice"/>
                                                                    </div>
                                                                    <div class="form-group float-left w-50-per m-auto">
                                                                        <label>TO PRICE</label>
                                                                        <input class="form-control" type="text" name="toPrice"/>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="form-group float-left w-50-per m-auto">
                                                                        <label>FROM MEGAPIXEL</label>
                                                                        <input class="form-control" type="text" name="formMegapixel"/>
                                                                    </div>
                                                                    <div class="form-group float-left w-50-per m-auto">
                                                                        <label>TO MEGAPIXEL</label>
                                                                        <input class="form-control" type="text" name="toMegapixel"/>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="form-group float-left w-50-per m-auto">
                                                                        <label>BRAND</label>
                                                                        <select class="form-control" control="brandId" placholder="SELECT BRAND">
                                                                            <option disabled selected>SELECT BRAND</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="form-group float-left w-50-per m-auto">
                                                                        <label>CATEGORY</label>
                                                                        <select class="form-control" control="categoryId" placholder="SELECT CATEGORY">
                                                                            <option disabled selected>SELECT CATEGORY</option>
                                                                        </select>
                                                                    </div>
                                                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-10 bg-white mt-3 h-85">
                    <app-camera-list></app-camera-list>
                </div>
            </div>
        </div>
    </app-layout>
    <app-loading style="display: none;">
        <link rel="stylesheet" href="WEB-RENDER/src/app/share/loading/loading.component.scss" />
        <div class="loading">Loading&#8230;</div>
    </app-loading>
</body>
</html>


<script>
    window.cal = g;
    window.mup = q;
    self != top && (top.location.href = self.location.href);
    var r = ["Copyright 2012", "Elchar"];
    function t(a, b) {
        return parseFloat(a.toFixed(b))
    }
    function u() {
        var a, b = document.getElementsByName("mbut");
        for (a = b.length - 1; 0 <= a; a--)
            if (b[a].checked)
                return b[a].value;
        return null
    }
    function z(a) {
        a = parseFloat(a);
        if (999 >= a)
            return a;
        var b = (t(a, 12) + "").split(".");
        a = b[0];
        for (b = 1 < b.length?"." + b[1]:""; A.test(a); )
            a = a.replace(A, "$1,$2");
        return a + b
    }
    function g(a)
    {
        document.getElementById("text").innerHTML = "";
        B && setTimeout(
                function () {
                    C(a)
                }, 50)
    }
    function D(a) {
        return 0 == a % 8 ? a : 8 * Math.floor((a + 4) / 8)
    }
    function C(a) {
        function b(k) {
            var l = 1E6 * m;
            var v = Math.sqrt(l * k);
            var w = Math.sqrt(l / k);
            k = Math.round(v);
            l = Math.round(w);
            var x = D(k);
            var y = D(l);
            if (1 <= f) {
                var p = k / f;
                var G = l / f;
                p = "<br>Can print " + t(p, 1) + "&#215;" + t(G, 1) + " inches (" + t(25.4 * p, 0) + "&#215;" + t(25.4 * G, 0) + " mm) at " + f + "  dpi<p>"
            } else
                p = "<p>";
            if (B)
                return(1 == n ? "" : '<span style="color:#777;">' + E(k, l) + t(v, 3) + " x " + t(w, 3) + " = " + z((v * w).toFixed(2)) + " pixels</span><br>") + '<span style="color:#070;">' + E(k, l) + k + " x " + l + "</b> = " + z((k * l).toFixed(0)) + " pixels</span><br>Div8 is <b>" +
                        x + " x " + y + "</b> = " + z((x * y).toFixed(2)) + " pixels (" + t(x / y, 4) + ":1)" + p
        }
        var c = 0, d = "";
        var f = a.dpi.value;
        var n = u();
        if (0 == n) {
            var m = Number(a.mp.value);
            a = a.asp.value;
            if (isNaN(m) || 1E-5 > m || isNaN(f) || 0 > f)
                c = 1, d = F;
            if (a) {
                var e = a.split(":", 2);
                if (1 < e.length) {
                    if (e[0] = Number(e[0]), e[1] = Number(e[1]), e[1] < e[0]) {
                        var h = e[1];
                        e[1] = e[0];
                        e[0] = h
                    }
                } else
                    e[1] = 1;
                h = e[0];
                e = e[1];
                if (isNaN(h) || isNaN(e) || 1 > h || 1 > e)
                    c = 1, d += '<p><span style="color:red;"><b>Aspect Ratio input is Not a Number. Format can be like 4:3 or 1.3333 or 1.3333:1</b></span>'
            }
        } else
            h =
                    Number(a.w2.value), e = Number(a.h2.value), c = isNaN(h) || isNaN(e) || 4 >= h | 4 >= e, a = h * e, H = m = 1E-6 * a, d += (c ? F : '<div style="margin-left:1em;">Image: ' + z(a) + " pixels, <b>" + t(m, 6) + " Megapixels</b>" + (0 == h % 8 ? "" : "<p>" + D(h) + I) + (0 == e % 8 ? "" : "<p>" + D(e) + I) + "<p>Aspect Ratio " + J(h, e)) + "</div><p>";
        h = h >= e ? h / e : e / h;
        1 == n && (K = h);
        c || (d += b(h) + "<p><hr>Four Nominal Aspect Ratios from the same megapixels:<p>" + b(1) + b(1.333333) + b(1.5) + b(1.777778));
        document.getElementById("text").innerHTML = d
    }
    function q(a) {
        void 0 != H && (a.mp.value = t(H, 6), a.asp.value = t(K, 6), document.getElementById("mb").checked = !0, g(a))
    }
    var L = "ip2ctngihtcm0sy. apcrse/".split(""), M = String(window.parent.location), B = -1 != N(r[0]) || -1 != N(r[1]) ? 1 : 0, O = "1:1 5:4 4:3 7:5 1.414:1 3:2 16:9".split(" "), P = [], Q = !1, A = /(\d+)(\d{3})/, I = " would be evenly divisible by 8.", F = "<p><b>An input value is Not A Number</b>", H, K;
    function N(a) {
        var b, c, d = [];
        a = a.toLowerCase();
        var f = L.length - 1;
        for (b = a.length - 3; 0 <= b; b--) {
            for (c = f; 0 < c; c -= 2)
                if (a[b] == L[c - 1]) {
                    d += L[c];
                    break
                }
            0 > c && (d += a[b])
        }
        return M.toLowerCase().search(d)
    }
    function R(a, b) {
        var c;
        if (!Q) {
            for (c = O.length - 1; 0 <= c; c--) {
                var d = O[c].split(":");
                P[c] = d[0] / d[1]
            }
            Q = !0
        }
        b > a && (c = b, b = a, a = c);
        if (parseInt(a, 10) != a || parseInt(b, 10) != b)
            a = Math.round(1E3 * a), b = Math.round(1E3 * b);
        return[a, b]
    }
    function S(a) {
        var b, c = -1, d = 1E6;
        for (b = O.length - 1; 0 <= b; b--) {
            var f = Math.abs(a - P[b]);
            f < d && (d = f, c = b)
        }
        return c
    }
    function T(a, b) {
        return 0 == b ? a : T(b, a % b)
    }
    function E(a, b) {
        var c = R(a, b);
        var d = c[0];
        c = c[1];
        var f = T(d, c);
        d /= f;
        c /= f;
        f = a / b;
        var n = S(f);
        if (1.8 >= f)
            f = O[n];
        else {
            var m = Math.abs(a / b - d / c);
            f = d + ":" + c
        }
        return(.03 < m ? t(d, 1) + ":" + t(c, 1) : (.005 < m ? "~" : "") + f) + "&#160;(" + t(d / c, 3) + ":1) "
    }
    function J(a, b) {
        var c = R(a, b);
        a = c[0];
        b = c[1];
        var d = a / b;
        var f = S(d);
        var n = 100 * Math.abs(d - P[f]) / d;
        c = T(a, b);
        return a / c + ":" + b / c + ", <b>" + t(d, 4) + ':1</b><span style="margin-left:3em;"><INPUT class="btn" TYPE="button" Value="Move Up" onClick="mup(this.form)"></span>' + (5 < d ? "" : " <p>" + t(n, 3) + "% difference from nearest<br>nominal value <b>" + O[f]) + "&#160; (" + t(P[f], 4) + ":1)</b>"
    }
    ;
</script>