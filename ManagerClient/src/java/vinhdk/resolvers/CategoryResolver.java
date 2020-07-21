/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.resolvers;

import java.io.Serializable;
import javax.servlet.ServletContext;
import org.w3c.dom.Document;
import vinhdk.extras.constains.PATH;
import vinhdk.extras.constains.SOURCE;
import vinhdk.extras.helpers.CrawlHelper;
import vinhdk.extras.helpers.FileHelper;
import vinhdk.extras.parsers.DocumentParser;
import vinhdk.extras.transforms.XSTLTransform;
import vinhdk.extras.validators.XSDValidator;

/**
 *
 * @author Vinh Dang
 */
public class CategoryResolver implements Serializable {

    public static final Document getDocument(ServletContext context) throws Exception {
        String data = CrawlHelper.crawlData(SOURCE.CATEGORY.MAIN_URL, SOURCE.CATEGORY.START_ROW, SOURCE.CATEGORY.END_ROW, SOURCE.CATEGORY.TRANS_LATE_BEFORE, SOURCE.CATEGORY.TRANS_LATE_AFTER);
        String xml = XSTLTransform.transform(data, context.getRealPath(PATH.XSL.CATEGORY));

        boolean valid = XSDValidator.validate(xml, context.getRealPath(PATH.XSD.CATEGORY));
        if (valid) {
            return DocumentParser.parse(xml);
        } else {
            return null;
        }
    }
}
