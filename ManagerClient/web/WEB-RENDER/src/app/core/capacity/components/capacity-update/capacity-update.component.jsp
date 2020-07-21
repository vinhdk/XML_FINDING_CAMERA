<link rel="stylesheet" src="WEB-RENDER/src/app/core/capacity/components/capacity-update/capacity-update.component.scss" />
<button id="capacity-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
<app-modal id="capacity-update-modal">
    <app-modal-header>
        <h4>UPDATE CAPACITY</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="capacity-update-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" type="hidden" control="id"/>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="capacity-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
        </form>
    </app-modal-body>
</app-modal>