/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.clients;

import java.io.Serializable;
import vinhdk.extras.clients.BaseClient;
import vinhdk.models.Capacity;

/**
 * Jersey REST client generated for REST resource:CapacityService [Capacity]<br>
 * USAGE:
 * <pre>
 *        CapacityClient client = new CapacityClient();
 *        Object response = client.XXX(...);
 *        // do whatever with response
 *        client.close();
 * </pre>
 *
 * @author Vinh Dang
 */
public class CapacityClient extends BaseClient<Capacity> implements Serializable {
    
    public CapacityClient() {
        super(Capacity.class);
    }
    
}
