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
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;

/**
 *
 * @author Vinh Dang
 */
public class ReaderParser implements Serializable {

    public static final XMLStreamReader parse(Object data) throws Exception {
        InputStream is = null;
        if (data instanceof String) {
            is = new ByteArrayInputStream(((String) data).getBytes(StandardCharsets.UTF_8));
        } else {
            is = (InputStream) data;
        }
        XMLInputFactory factory = XMLInputFactory.newInstance();
        XMLStreamReader reader = factory.createXMLStreamReader(is);
        return reader;
    }
}
