<link rel="stylesheet" src="WEB-RENDER/src/app/core/brand/components/brand-create/brand-create.component.scss" />
<button id="brand-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
<app-modal id="brand-create-modal">
    <app-modal-header>
        <h4>CREATE NEW BRAND</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="brand-create-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="brand-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
        </form>
    </app-modal-body>
</app-modal>