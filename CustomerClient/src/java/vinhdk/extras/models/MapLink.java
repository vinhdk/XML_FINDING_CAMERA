/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.models;

import java.io.Serializable;
import java.util.HashMap;

/**
 *
 * @author Vinh Dang
 */
public class MapLink implements Serializable {

    protected HashMap<String, String> map;

    public MapLink() {
        this.map = new HashMap<String, String>();
    }

    public MapLink(String[] data) {
        this.map = new HashMap<String, String>();
        for (int i = 0; i < data.length; i += 2) {
            this.map.put(data[i], data[i + 1]);
        }
    }

    public HashMap<String, String> getMap() {
        return this.map;
    }

    public void setMap(String[] data) {
        for (int i = 0; i < data.length; i += 2) {
            this.map.put(data[i], data[i + 1]);
        }
    }

}
