<link rel="stylesheet" src="WEB-RENDER/src/app/core/card/components/card-create/card-create.component.scss" />
<button id="card-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
<app-modal id="card-create-modal">
    <app-modal-header>
        <h4>CREATE NEW CArd</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="card-create-form">
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
            <button type="button" id="card-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
        </form>
    </app-modal-body>
</app-modal>