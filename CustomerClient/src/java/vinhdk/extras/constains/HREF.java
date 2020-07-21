/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.constains;

import java.io.Serializable;
import java.util.HashMap;
import vinhdk.extras.models.MapLink;

/**
 *
 * @author Vinh Dang
 */
public class HREF implements Serializable {

    public static final class MAIN implements Serializable {

        public static final String GET_HREF(String KEY) {
            HashMap<String, String> map = new MapLink(new String[]{
                DATA.CAMERA.KEY,
                DATA.CAMERA.VALUE,
                DATA.CARD.KEY,
                DATA.CARD.VALUE,
                DATA.LOGIN.KEY,
                DATA.LOGIN.VALUE,
            }).getMap();
            return map.get(KEY);
        }
    }

}
