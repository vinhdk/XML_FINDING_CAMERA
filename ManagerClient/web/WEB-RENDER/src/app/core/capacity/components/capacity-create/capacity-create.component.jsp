<link rel="stylesheet" src="WEB-RENDER/src/app/core/capacity/components/capacity-create/capacity-create.component.scss" />
<button id="capacity-create-button-open-modal" class="btn btn-success w-100-per">CREATE</button>
<app-modal id="capacity-create-modal">
    <app-modal-header>
        <h4>CREATE NEW CAPACITY</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="capacity-create-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="capacity-create-button-submit" class="btn btn-primary mt-3">CREATE</button>
        </form>
    </app-modal-body>
</app-modal>