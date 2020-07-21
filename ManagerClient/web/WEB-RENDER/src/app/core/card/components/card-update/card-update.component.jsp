<link rel="stylesheet" src="WEB-RENDER/src/app/core/card/components/card-update/card-update.component.scss" />
<button id="card-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
<app-modal id="card-update-modal">
    <app-modal-header>
        <h4>UPDATE CARD</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="card-update-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="card-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
        </form>
    </app-modal-body>
</app-modal>