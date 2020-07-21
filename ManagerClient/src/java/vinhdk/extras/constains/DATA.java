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
        public static final String CLIENT = "WEB-RENDER\\src\\app\\auth\\components\\login\\login.component.jsp";

    }

    public static final class AUTH implements Serializable {

        public static final String KEY = "AUTH";
        public static final String VALUE = "AuthController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\auth\\auth.jsp";

    }

    public static final class DASHBOARD implements Serializable {

        public static final String KEY = "DASHBOARD";
        public static final String VALUE = "DashboardController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\dashboard\\dashboard.jsp";

    }

    public static final class ACCOUNT implements Serializable {

        public static final String KEY = "ACCOUNT";
        public static final String VALUE = "AccountController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\account\\account.jsp";

    }

    public static final class ROLE implements Serializable {

        public static final String KEY = "ROLE";
        public static final String VALUE = "RoleController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\role\\role.jsp";

    }

    public static final class BRAND implements Serializable {

        public static final String KEY = "BRAND";
        public static final String VALUE = "BrandController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\brand\\brand.jsp";

    }

    public static final class CATEGORY implements Serializable {

        public static final String KEY = "CATEGORY";
        public static final String VALUE = "CategoryController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\category\\category.jsp";

    }

    public static final class CAMERA implements Serializable {

        public static final String KEY = "CAMERA";
        public static final String VALUE = "CameraController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\camera\\camera.jsp";

    }

    public static final class CAPACITY implements Serializable {

        public static final String KEY = "CAPACITY";
        public static final String VALUE = "CapacityController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\capacity\\capacity.jsp";

    }

    public static final class CARD implements Serializable {

        public static final String KEY = "CARD";
        public static final String VALUE = "CardController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\card\\card.jsp";
    }

    public static final class CRAWLER implements Serializable {

        public static final String KEY = "CRAWLER";
        public static final String VALUE = "CrawlerController";
        public static final String CLIENT = "WEB-RENDER\\src\\app\\core\\crawler\\crawler.jsp";

    }

    public static final class ERROR implements Serializable {

        public static final String KEY = "";
        public static final String VALUE = "";

    }
}
