<link rel="stylesheet" src="WEB-RENDER/src/app/core/category/components/category-create/category-create.component.scss" />
<button id="category-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
<app-modal id="category-create-modal">
    <app-modal-header>
        <h4>CREATE NEW CATEGORY</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="category-create-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="category-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
        </form>
    </app-modal-body>
</app-modal>