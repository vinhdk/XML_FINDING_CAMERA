/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.clients;

import java.io.Serializable;
import vinhdk.extras.clients.BaseClient;
import vinhdk.models.Account;

/**
 *
 * @author Vinh Dang
 */
public class AccountClient extends BaseClient<Account> implements Serializable {

    public AccountClient() {
        super(Account.class);
    }

}
