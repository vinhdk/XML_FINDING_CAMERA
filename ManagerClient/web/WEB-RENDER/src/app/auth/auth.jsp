<%-- 
    Document   : auth
    Created on : Jul 15, 2020, 8:42:29 PM
    Author     : Vinh Dang
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>VCF-AUTH</title>
        <link rel="stylesheet"  href="WEB-RENDER/src/styles.scss" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="WEB-RENDER/src/assets/logo.png">
        <script type="module" src="WEB-RENDER/src/app/auth/auth.js"></script>
    </head>
    <body class="login-wrapper">
    <app-login></app-login>
    <app-navigate></app-navigate>
    <app-loading style="display: none;">
        <link rel="stylesheet" href="WEB-RENDER/src/app/share/loading/loading.component.scss" />
        <div class="loading">Loading&#8230;</div>
    </app-loading>
</body>
</html>
