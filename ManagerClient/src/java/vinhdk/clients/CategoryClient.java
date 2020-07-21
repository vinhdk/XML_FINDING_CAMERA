/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.clients;

import java.io.Serializable;
import vinhdk.extras.clients.BaseClient;
import vinhdk.models.Category;

/**
 * Jersey REST client generated for REST resource:CategoryService [Category]<br>
 * USAGE:
 * <pre>
 *        CategoryClient client = new CategoryClient();
 *        Object response = client.XXX(...);
 *        // do whatever with response
 *        client.close();
 * </pre>
 *
 * @author Vinh Dang
 */
public class CategoryClient extends BaseClient<Category> implements Serializable {

    public CategoryClient() {
        super(Category.class);
    }

}
