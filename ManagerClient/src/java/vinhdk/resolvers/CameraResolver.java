/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.resolvers;

import java.io.Serializable;
import javax.servlet.ServletContext;
import javax.xml.stream.XMLStreamReader;
import vinhdk.extras.constains.PATH;
import vinhdk.extras.constains.SOURCE;
import vinhdk.extras.helpers.CrawlHelper;
import vinhdk.extras.parsers.ReaderParser;
import vinhdk.extras.transforms.XSTLTransform;
import vinhdk.extras.validators.XSDValidator;

/**
 *
 * @author Vinh Dang
 */
public class CameraResolver implements Serializable {

    public static final XMLStreamReader getReader(String URL, ServletContext context) throws Exception {
        String data = CrawlHelper.crawlData(URL, SOURCE.CAMERA.START_ROW, SOURCE.CAMERA.END_ROW, SOURCE.CAMERA.TRANS_LATE_BEFORE, SOURCE.CAMERA.TRANS_LATE_AFTER);
        String xml = XSTLTransform.transform(data, context.getRealPath(PATH.XSL.CAMERA));

        boolean valid = XSDValidator.validate(xml, context.getRealPath(PATH.XSD.CAMERA));
        if (valid) {
            return ReaderParser.parse(xml);
        } else {
            return null;
        }
    }

    public static final int getPageCount(String URL) {
        int total = 1;
        try {
            String data = CrawlHelper.crawlData(URL, SOURCE.CAMERA.PAGINATION.START_ROW, SOURCE.CAMERA.PAGINATION.END_ROW, SOURCE.CAMERA.PAGINATION.TRANS_LATE_BEFORE, SOURCE.CAMERA.PAGINATION.TRANS_LATE_AFTER);
            total = Integer.parseInt(data.split("of")[1].trim());
        } catch (Exception e) {
        }
        int size = SOURCE.CAMERA.PAGINATION.SIZE;

        return (total / size) + (total % size == 0 ? 0 : 1);
    }

    public static final float getMegapixel(String URL) throws Exception {
        String data = CrawlHelper.crawlData(URL, SOURCE.CAMERA.MEGAPIXEL.START_ROW, SOURCE.CAMERA.MEGAPIXEL.END_ROW, SOURCE.CAMERA.MEGAPIXEL.TRANS_LATE_BEFORE, SOURCE.CAMERA.MEGAPIXEL.TRANS_LATE_AFTER);
        return Float.parseFloat(data);

    }
}
