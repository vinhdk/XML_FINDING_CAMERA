<link rel="stylesheet" src="WEB-RENDER/src/app/core/account/components/account-update/account-update.component.scss" />
            <button id="account-update-button-open-modal" class="btn btn-info w-100-per">UPDATE</button>
            <app-modal id="account-update-modal">
                <app-modal-header>
                    <h4>UPDATE ACCOUNT</h4>
                </app-modal-header>
                <app-modal-body>
                    <form id="account-update-form">
                        <div class="form-group mx-auto">
                            <label>USERNAME</label>
                            <input class="form-control" control="username" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>PASSWORD</label>
                            <input class="form-control" control="password" type="password"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>FULLNAME</label>
                            <input min="1" class="form-control" control="fullname" type="number"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>PHONE</label>
                            <input class="form-control" control="phone" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>EMAIL</label>
                            <input class="form-control" control="email" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ADDRESS</label>
                            <input class="form-control" control="address" type="text"/>
                        </div>
                        <div class="form-group mt-3 mx-auto">
                            <label>ROLE</label>
                            <select class="form-control" control="roleId" placholder="SELECT ROLE">
                                <option disabled selected>SELECT ROLE</option>
                            </select>
                        </div>
                            </select>
                        </div>
                        <button type="button" id="account-update-button-submit" class="btn btn-primary mt-3">UPDATE</button>
                    </form>
                </app-modal-body>
            </app-modal>