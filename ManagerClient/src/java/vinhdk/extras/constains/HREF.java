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
                DATA.ACCOUNT.KEY,
                DATA.ACCOUNT.VALUE,
                DATA.ROLE.KEY,
                DATA.ROLE.VALUE,
                DATA.BRAND.KEY,
                DATA.BRAND.VALUE,
                DATA.CATEGORY.KEY,
                DATA.CATEGORY.VALUE,
                DATA.CAMERA.KEY,
                DATA.CAMERA.VALUE,
                DATA.CAPACITY.KEY,
                DATA.CAPACITY.VALUE,
                DATA.CARD.KEY,
                DATA.CARD.VALUE,
                DATA.CRAWLER.KEY,
                DATA.CRAWLER.VALUE,
                DATA.LOGIN.KEY,
                DATA.LOGIN.VALUE,
                DATA.DASHBOARD.KEY,
                DATA.DASHBOARD.VALUE,
                DATA.AUTH.KEY,
                DATA.AUTH.VALUE,
                DATA.ERROR.KEY,
                DATA.ERROR.VALUE}).getMap();
            return map.get(KEY);
        }
    }

}
