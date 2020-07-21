/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.datas;

import java.io.Serializable;
import java.util.List;
import vinhdk.models.Camera;

/**
 *
 * @author Vinh Dang
 */
public class CameraData implements Serializable {

    private List<Camera> cameras;

    public CameraData(List<Camera> cameras) {
        this.cameras = cameras;
    }

    public List<Camera> getCameras() {
        return cameras;
    }

    public void setCameras(List<Camera> cameras) {
        this.cameras = cameras;
    }

}
