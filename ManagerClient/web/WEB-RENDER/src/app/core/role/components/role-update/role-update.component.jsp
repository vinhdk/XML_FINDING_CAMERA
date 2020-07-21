<link rel="stylesheet" src="WEB-RENDER/src/app/core/role/components/role-update/role-update.component.scss" />
<button id="role-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
<app-modal id="role-update-modal">
    <app-modal-header>
        <h4>UPDATE ROLE</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="role-update-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" type="hidden" control="id"/>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="role-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
        </form>
    </app-modal-body>
</app-modal>