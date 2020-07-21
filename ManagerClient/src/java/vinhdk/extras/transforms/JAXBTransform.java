/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.transforms;

import com.sun.codemodel.JCodeModel;
import com.sun.tools.xjc.api.ErrorListener;
import com.sun.tools.xjc.api.S2JJAXBModel;
import com.sun.tools.xjc.api.SchemaCompiler;
import com.sun.tools.xjc.api.XJC;
import java.io.ByteArrayInputStream;
import org.xml.sax.InputSource;
import java.io.File;
import java.io.InputStream;
import java.io.Serializable;
import java.nio.charset.StandardCharsets;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import vinhdk.extras.constains.PATH;

/**
 *
 * @author Vinh Dang
 */
public class JAXBTransform implements Serializable {

    public static final Object transformObject(Object data, Class<?> model) throws Exception {
        InputStream is = null;
        if (data instanceof String) {
            is = new ByteArrayInputStream(((String) data).getBytes(StandardCharsets.UTF_8));
        } else {
            is = (InputStream) data;
        }
        JAXBContext jc = JAXBContext.newInstance(model);
        Unmarshaller un = jc.createUnmarshaller();
        return un.unmarshal(is);
    }

    public static final <T> void transformFileFormObject(String filePath, T model) throws Exception {
        JAXBContext jc = JAXBContext.newInstance(model.getClass());
        Marshaller ma = jc.createMarshaller();
        ma.setProperty(Marshaller.JAXB_ENCODING, "UTF-8");
        ma.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
        File file = new File(filePath);
        ma.marshal(model, file);
    }

    public static final void transformJAXBModelFormXSD(String schemaFilePath, String directory) throws Exception {
        SchemaCompiler sc = XJC.createSchemaCompiler();
        sc.setErrorListener(new ErrorListener() {
            @Override
            public void error(org.xml.sax.SAXParseException e) {
                System.out.println(e.getMessage());
            }

            @Override
            public void fatalError(org.xml.sax.SAXParseException e) {
                System.out.println(e.getMessage());

            }

            @Override
            public void warning(org.xml.sax.SAXParseException e) {
                System.out.println(e.getMessage());

            }

            @Override
            public void info(org.xml.sax.SAXParseException e) {

            }
        });
        sc.forcePackageName("vinhdk.jaxbs." + directory);
        File schema = new File(schemaFilePath);
        InputSource is = new InputSource(schema.toURI().toString());
        sc.parseSchema(is);
        S2JJAXBModel model = sc.bind();
        JCodeModel code = model.generateCode(null, null);
        code.build(new File("src/java"));
    }

    public static void main(String[] args) throws Exception {
        JAXBTransform.transformJAXBModelFormXSD(PATH.JAXB.ACCOUNT, PATH.JAXB.ACCOUNT.replace(PATH.JAXB.DIRECTORY, "").replace(".xsd", ""));
        JAXBTransform.transformJAXBModelFormXSD(PATH.JAXB.BRAND, PATH.JAXB.BRAND.replace(PATH.JAXB.DIRECTORY, "").replace(".xsd", ""));
        JAXBTransform.transformJAXBModelFormXSD(PATH.JAXB.CAMERA, PATH.JAXB.CAMERA.replace(PATH.JAXB.DIRECTORY, "").replace(".xsd", ""));
        JAXBTransform.transformJAXBModelFormXSD(PATH.JAXB.CAPACITY, PATH.JAXB.CAPACITY.replace(PATH.JAXB.DIRECTORY, "").replace(".xsd", ""));
        JAXBTransform.transformJAXBModelFormXSD(PATH.JAXB.CARD, PATH.JAXB.CARD.replace(PATH.JAXB.DIRECTORY, "").replace(".xsd", ""));
        JAXBTransform.transformJAXBModelFormXSD(PATH.JAXB.CATEGORY, PATH.JAXB.CATEGORY.replace(PATH.JAXB.DIRECTORY, "").replace(".xsd", ""));
        JAXBTransform.transformJAXBModelFormXSD(PATH.JAXB.ROLE, PATH.JAXB.ROLE.replace(PATH.JAXB.DIRECTORY, "").replace(".xsd", ""));
    }
}
