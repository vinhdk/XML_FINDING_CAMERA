/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.clients;

import java.io.Serializable;
import vinhdk.extras.clients.BaseClient;
import vinhdk.models.Brand;

/**
 * Jersey REST client generated for REST resource:BrandService [Brand]<br>
 * USAGE:
 * <pre>
 *        BrandClient client = new BrandClient();
 *        Object response = client.XXX(...);
 *        // do whatever with response
 *        client.close();
 * </pre>
 *
 * @author Vinh Dang
 */
public class BrandClient extends BaseClient<Brand> implements Serializable {

    public BrandClient() {
        super(Brand.class);
    }

}
