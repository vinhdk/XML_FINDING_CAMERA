<link rel="stylesheet" src="WEB-RENDER/src/app/core/role/components/role-create/role-create.component.scss" />
<button id="role-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
<app-modal id="role-create-modal">
    <app-modal-header>
        <h4>CREATE NEW ROLE</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="role-create-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="role-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
        </form>
    </app-modal-body>
</app-modal>