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
    <app-layout name="CAMERA">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 mt-3">
                    <div class="row h-20 card bg-white radius-10">
                        <div class="col-12 text-center border-bottom-gray h-7">
                            <h3 style="font-family:cursive;">Action</h3>
                        </div>
                        <div class="col-3 start-2 end-5">
                            <app-camera-create></app-camera-create>
                        </div>
                        <div class="col-4">
                            <app-camera-update></app-camera-update>
                        </div>
                        <div class="col-3">
                            <button id="camera-delete-button" class="btn btn-danger w-100-per" >DELETE</button>
                        </div>
                    </div>
                    <div class="row card h-60 bg-white radius-10">
                        <div class="col-12">
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
                <div class="col-9 bg-white mt-3 h-85">
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