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
public class PATH implements Serializable {

    public static final class AVATAR implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/AVATAR/";
    }

    public static final class JAXB implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/JAXB/";

        public static final String BRAND = "/WEB-INF/JAXB/brand.xsd";
        public static final String CATEGORY = "/WEB-INF/JAXB/category.xsd";
        public static final String CAMERA = "/WEB-INF/JAXB/camera.xsd";
        public static final String CARD = "/WEB-INF/JAXB/card.xsd";
        public static final String CAPACITY = "/WEB-INF/JAXB/capacity.xsd";
        public static final String ACCOUNT = "/WEB-INF/JAXB/account.xsd";
        public static final String ROLE = "/WEB-INF/JAXB/role.xsd";
    }

    public static final class XML implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/XML/";

        public static final String BRAND = "/WEB-INF/XML/brand.xml";
        public static final String CATEGORY = "/WEB-INF/XML/category.xml";
        public static final String CAMERA = "/WEB-INF/XML/camera.xml";
        public static final String CARD = "/WEB-INF/XML/card.xml";
        public static final String CAPACITY = "/WEB-INF/XML/capacity.xml";
        public static final String ACCOUNT = "/WEB-INF/XML/account.xml";
        public static final String ROLE = "/WEB-INF/XML/role.xml";
    }

    public static final class DTD implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/DTD/";

        public static final String BRAND = "<!DOCTYPE brands SYSTEM \"../DTD/brand.dtd\">";
        public static final String CATEGORY = "<!DOCTYPE categorys SYSTEM \"../DTD/category.dtd\">";
        public static final String CAMERA = "<!DOCTYPE cameras SYSTEM \"../DTD/camera.dtd\">";
        public static final String CARD = "<!DOCTYPE cards SYSTEM \"../DTD/card.dtd\">";
        public static final String ROLE = "<!DOCTYPE roles SYSTEM \"../DTD/role.dtd\">";
        public static final String ACCOUNT = "<!DOCTYPE accounts SYSTEM \"../DTD/account.dtd\">";
        public static final String CAPACITY = "<!DOCTYPE capacitys SYSTEM \"../DTD/capacity.dtd\">";
    }

    public static final class XSL implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/XSL/";

        public static final String BRAND = "/WEB-INF/XSL/brand.xsl";
        public static final String CATEGORY = "/WEB-INF/XSL/category.xsl";
        public static final String CAMERA = "/WEB-INF/XSL/camera.xsl";
        public static final String CARD = "/WEB-INF/XSL/card.xsl";
    }

    public static final class PDF implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/PDF/";

        public static final String CAMERA = "/WEB-INF/PDF/camera.pdf";
        public static final String CARD = "/WEB-INF/PDF/card.pdf";
        public static final String ROLE = "/WEB-INF/PDF/role.pdf";
        public static final String ACCOUNT = "/WEB-INF/PDF/account.pdf";
        public static final String CATEGORY = "/WEB-INF/PDF/category.pdf";
        public static final String BRAND = "/WEB-INF/PDF/brand.pdf";
        public static final String CAPACITY = "/WEB-INF/PDF/capacity.pdf";
    }

    public static final class SOURCE implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/SOURCE/";

        public static final String CAMERA = "/WEB-INF/SOURCE/camera.xsl";
        public static final String CARD = "/WEB-INF/SOURCE/card.xsl";
        public static final String ROLE = "/WEB-INF/SOURCE/role.xsl";
        public static final String ACCOUNT = "/WEB-INF/SOURCE/account.xsl";
        public static final String CATEGORY = "/WEB-INF/SOURCE/category.xsl";
        public static final String BRAND = "/WEB-INF/SOURCE/brand.xsl";
        public static final String CAPACITY = "/WEB-INF/SOURCE/capacity.xsl";
    }

    public static final class TRANSFORM implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/TRANSFORM/";

        public static final String CAMERA = "/WEB-INF/TRANSFORM/camera.xsl";
        public static final String CARD = "/WEB-INF/TRANSFORM/card.xsl";
        public static final String ROLE = "/WEB-INF/TRANSFORM/role.xsl";
        public static final String ACCOUNT = "/WEB-INF/TRANSFORM/account.xsl";
        public static final String CATEGORY = "/WEB-INF/TRANSFORM/category.xsl";
        public static final String BRAND = "/WEB-INF/TRANSFORM/brand.xsl";
        public static final String CAPACITY = "/WEB-INF/TRANSFORM/capacity.xsl";
    }

    public static final class XSD implements Serializable {

        public static final String DIRECTORY = "/WEB-INF/XSD/";

        public static final String BRAND = "/WEB-INF/XSD/brand.xsd";
        public static final String CATEGORY = "/WEB-INF/XSD/category.xsd";
        public static final String CAMERA = "/WEB-INF/XSD/camera.xsd";
        public static final String CARD = "/WEB-INF/XSD/card.xsd";
    }
}
