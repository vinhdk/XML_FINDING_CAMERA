<link rel="stylesheet" src="WEB-RENDER/src/app/core/brand/components/brand-update/brand-update.component.scss" />
<button id="brand-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
<app-modal id="brand-update-modal">
    <app-modal-header>
        <h4>UPDATE BRAND</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="brand-update-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="brand-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
        </form>
    </app-modal-body>
</app-modal>