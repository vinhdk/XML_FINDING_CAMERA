<link rel="stylesheet" src="WEB-RENDER/src/app/core/camera/components/camera-create/camera-create.component.scss" />
<button id="camera-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
<app-modal id="camera-create-modal">
    <app-modal-header>
        <h4>CREATE NEW CAMERA</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="camera-create-form">
            <div class="form-group mx-auto">
                <label>NAME</label>
                <input class="form-control" control="name" type="text"/>
            </div>
            <div class="form-group mt-3 mx-auto">
                <label>MEGAPIXEL</label>
                <input min="1" class="form-control" control="megapixel" type="number"/>
            </div>
            <div class="form-group mt-3 mx-auto">
                <label>PRICE</label>
                <input min="1" class="form-control" control="price" type="number"/>
            </div>
            <div class="form-group mt-3 mx-auto">
                <label>DETAIL URL</label>
                <input class="form-control" control="url" type="text"/>
            </div>
            <div class="form-group mt-3 mx-auto">
                <label>IMAGE URL</label>
                <input class="form-control" control="image" type="text"/>
            </div>
            <div class="form-group mt-3 mx-auto">
                <label>BRAND</label>
                <select class="form-control" control="brandId" placholder="SELECT BRAND">
                    <option disabled selected>SELECT BRAND</option>
                </select>
            </div>
            <div class="form-group mt-3 mx-auto">
                <label>CATEGORY</label>
                <select class="form-control" control="categoryId" placholder="SELECT BRAND">
                    <option disabled selected>SELECT CATEGORY</option>
                </select>
            </div>
            <button type="button" id="camera-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
        </form>
    </app-modal-body>
</app-modal>