/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.constains;

import java.io.Serializable;

/**
 *
 * @author Vinh Dang
 */
public class HEADER implements Serializable {

    public static final class AGENT implements Serializable {

        public static final String KEY = "User-Agent";
        public static final String VALUE = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/86.0.172 Chrome/80.0.3987.172 Safari/537.36";
    }
}
