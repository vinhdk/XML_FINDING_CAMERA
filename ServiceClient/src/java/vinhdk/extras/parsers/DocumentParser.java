/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.parsers;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.Serializable;
import java.nio.charset.StandardCharsets;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;

/**
 *
 * @author Vinh Dang
 */
public class DocumentParser implements Serializable {

    public static final Document parse(Object data) throws Exception {
        InputStream is = null;
        if (data instanceof String) {
            is = new ByteArrayInputStream(((String) data).getBytes(StandardCharsets.UTF_8));
        } else {
            is = (InputStream) data;
        }
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document document = builder.parse(is);
        document.getDocumentElement().normalize();
        return document;
    }
}
