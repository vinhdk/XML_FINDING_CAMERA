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
public class DATA implements Serializable {

    public static final class LOGIN implements Serializable {

        public static final String KEY = "LOGIN";
        public static final String VALUE = "LoginController";

    }

    public static final class CAMERA implements Serializable {

        public static final String KEY = "CAMERA";
        public static final String VALUE = "CameraController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\camera\\camera.jsp";

    }

    public static final class CARD implements Serializable {

        public static final String KEY = "CARD";
        public static final String VALUE = "CardController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\card\\card.jsp";
    }
}
