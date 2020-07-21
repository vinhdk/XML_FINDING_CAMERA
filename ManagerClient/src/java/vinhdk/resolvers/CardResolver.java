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
import vinhdk.extras.helpers.FileHelper;
import vinhdk.extras.parsers.ReaderParser;
import vinhdk.extras.transforms.XSTLTransform;
import vinhdk.extras.validators.XSDValidator;

/**
 *
 * @author Vinh Dang
 */
public class CardResolver implements Serializable {

    public static final XMLStreamReader getReader(String URL, ServletContext context) throws Exception {
        String data = CrawlHelper.crawlData(URL, SOURCE.CARD.START_ROW, SOURCE.CARD.END_ROW, SOURCE.CARD.TRANS_LATE_BEFORE, SOURCE.CARD.TRANS_LATE_AFTER);
        String xml = XSTLTransform.transform(data, context.getRealPath(PATH.XSL.CARD));

        boolean valid = XSDValidator.validate(xml, context.getRealPath(PATH.XSD.CARD));
        if (valid) {
            return ReaderParser.parse(xml);
        } else {
            return null;
        }
    }

    public static final int getPageCount() throws Exception {
        String data = CrawlHelper.crawlData(SOURCE.CARD.MAIN_URL, SOURCE.CARD.PAGINATION.START_ROW, SOURCE.CARD.PAGINATION.END_ROW, SOURCE.CARD.PAGINATION.TRANS_LATE_BEFORE, SOURCE.CARD.PAGINATION.TRANS_LATE_AFTER);
        int total = Integer.parseInt(data.split("of")[1].trim());
        int size = SOURCE.CARD.PAGINATION.SIZE;

        return (total / size) + (total % size == 0 ? 0 : 1);
    }

}
