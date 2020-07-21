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
        <title>VCF-ACCOUNT</title>
        <link rel="stylesheet"  href="WEB-RENDER/src/styles.scss" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="WEB-RENDER/src/assets/logo.png">
        <script type="module" src="WEB-RENDER/src/app/core/account/account.js"></script>
        <script>
            window.onclick = (event) => {
                if (event.target.classList.contains("modal")) {
                    [...document.querySelectorAll("div.modal")].forEach((modal) => {
                        modal.style.display = "none";
                    });
                }
                if (event.target.classList.contains("swal") && document.body.querySelector("app-swal")) {
                    document.body.removeChild(document.body.querySelector("app-swal"));
                }
            };
        </script>
    </head>
    <body style="overflow: hidden; background: #edf1f7">
    <app-layout name="ACCOUNT">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 mt-3">
                    <div class="row h-20 card bg-white radius-10">
                        <div class="col-12 text-center border-bottom-gray h-7">
                            <h3 style="font-family:cursive;">Action</h3>
                        </div>
                        <div class="col-3 start-2 end-5">
                            <app-account-create></app-account-create>
                        </div>
                        <div class="col-4">
                            <app-account-update></app-account-update>
                        </div>
                        <div class="col-3">
                            <button id="account-delete-button" class="btn btn-danger w-100-per" >DELETE</button>
                        </div>
                    </div>
                    <div class="row card h-60 bg-white radius-10">
                        <div class="col-12">
                            <div class="text-center border-bottom-gray h-5">
                                <h3 style="font-family:cursive;">Search</h3>
                            </div>
                            <div class="mt-3">
                                <div class="form-group w-90-per m-auto">
                                    <label>SEARCH BY NAME</label>
                                    <input class="form-control" type="text" name="name"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9 bg-white mt-3 h-85">
                    <app-account-list></app-account-list>
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