/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.clients;

import java.io.Serializable;
import vinhdk.extras.clients.BaseClient;
import vinhdk.models.Camera;

/**
 * Jersey REST client generated for REST resource:CameraService [Camera]<br>
 * USAGE:
 * <pre>
 *        CameraClient client = new CameraClient();
 *        Object response = client.XXX(...);
 *        // do whatever with response
 *        client.close();
 * </pre>
 *
 * @author Vinh Dang
 */
public class CameraClient extends BaseClient<Camera> implements Serializable {

    public CameraClient() {
        super(Camera.class);
    }

}
