/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.transforms;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.Serializable;
import java.nio.charset.StandardCharsets;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

/**
 *
 * @author Vinh Dang
 */
public class XSTLTransform implements Serializable {

    public static final String transform(String data, String XSLPath) throws Exception {

        StreamSource source = new StreamSource(
                new ByteArrayInputStream(data.getBytes(StandardCharsets.UTF_8))
        );
        StreamSource xslSource = new StreamSource(
                new FileInputStream(XSLPath)
        );
        ByteArrayOutputStream resultStream = new ByteArrayOutputStream();
        StreamResult result = new StreamResult(resultStream);

        TransformerFactory factory = TransformerFactory.newInstance();
        Transformer trans = factory.newTransformer(xslSource);
        trans.transform(source, result);

        return resultStream.toString();
    }
}
