<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>VCF</title>
        <link rel="stylesheet"  href="WEB-RENDER/src/styles.scss" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="WEB-RENDER/src/assets/logo.png">
        <style>
            @-webkit-keyframes spin {
                0% {
                    transform: rotate(0)
                }
                100% {
                    transform: rotate(360deg)
                }
            }

            @-moz-keyframes spin {
                0% {
                    -moz-transform: rotate(0)
                }
                100% {
                    -moz-transform: rotate(360deg)
                }
            }

            @keyframes spin {
                0% {
                    transform: rotate(0)
                }
                100% {
                    transform: rotate(360deg)
                }
            }

            .spinner {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1003;
                background: #000000;
                overflow: hidden
            }

            .spinner div:first-child {
                display: block;
                position: relative;
                left: 50%;
                top: 50%;
                width: 150px;
                height: 150px;
                margin: -75px 0 0 -75px;
                border-radius: 50%;
                box-shadow: 0 3px 3px 0 rgba(255, 56, 106, 1);
                transform: translate3d(0, 0, 0);
                animation: spin 2s linear infinite
            }

            .spinner div:first-child:after,
            .spinner div:first-child:before {
                content: '';
                position: absolute;
                border-radius: 50%
            }

            .spinner div:first-child:before {
                top: 5px;
                left: 5px;
                right: 5px;
                bottom: 5px;
                box-shadow: 0 3px 3px 0 rgb(255, 228, 32);
                -webkit-animation: spin 3s linear infinite;
                animation: spin 3s linear infinite
            }

            .spinner div:first-child:after {
                top: 15px;
                left: 15px;
                right: 15px;
                bottom: 15px;
                box-shadow: 0 3px 3px 0 rgba(61, 175, 255, 1);
                animation: spin 1.5s linear infinite
            }
        </style>
        <script>
            setTimeout(() => {
                const URL = "${requestScope.URL}";
                document.location.href = "MainController" + (URL !== "" ? "?reload=true&URL=" + URL : "?reload=true");
            }, 1000);
        </script>
    </head>
    <body style="overflow: hidden; background: #edf1f7">
        <div id="nb-global-spinner" class="spinner">
            <div class="blob blob-0"></div>
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
            <div class="blob blob-4"></div>
            <div class="blob blob-5"></div>
        </div>
    </body>
</html>