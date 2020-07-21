<link rel="stylesheet" src="WEB-RENDER/src/app/core/category/components/category-update/category-update.component.scss" />
<button id="category-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
<app-modal id="category-update-modal">
    <app-modal-header>
        <h4>UPDATE CATEGORY</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="category-update-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" type="hidden" control="id"/>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="category-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
        </form>
    </app-modal-body>
</app-modal>