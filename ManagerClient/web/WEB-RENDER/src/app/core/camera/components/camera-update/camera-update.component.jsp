<link rel="stylesheet" src="WEB-RENDER/src/app/core/camera/components/camera-update/camera-update.component.scss" />
<button id="camera-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
<app-modal id="camera-update-modal">
    <app-modal-header>
        <h4>UPDATE CAMERA</h4>
    </app-modal-header>
    <app-modal-body>
        <form id="camera-update-form">
            <div class="form-group m-auto">
                <label>NAME</label>
                <input class="form-control" control="name" type="text"/>
            </div>
            <button type="button" id="camera-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
        </form>
    </app-modal-body>
</app-modal>