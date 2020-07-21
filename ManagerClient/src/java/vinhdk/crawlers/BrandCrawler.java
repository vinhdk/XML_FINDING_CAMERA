/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.crawlers;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.servlet.ServletContext;
import org.w3c.dom.Document;
import vinhdk.clients.BrandClient;
import vinhdk.datas.BrandData;
import vinhdk.extras.constains.SOURCE;
import vinhdk.extras.helpers.DocumentHelper;
import vinhdk.extras.threads.BaseThread;
import vinhdk.models.Brand;
import vinhdk.resolvers.BrandResolver;

/**
 *
 * @author Vinh Dang
 */
public class BrandCrawler implements Serializable {

    public static final BrandData crawl(ServletContext context) throws Exception {
        List<Brand> brands = new ArrayList<>();
        BrandClient client = new BrandClient();

        Document document = BrandResolver.getDocument(context);
        List<HashMap<String, String>> list = DocumentHelper.getMapItems(document, SOURCE.BRAND.NAME);
        BaseThread thread = new BaseThread();
        for (HashMap<String, String> map : list) {
            try {
                thread.add(() -> {
                    String id = map.get(SOURCE.BRAND.VARIABLE.ID);
                    String name = map.get(SOURCE.BRAND.VARIABLE.NAME).split(" ")[0];
                    Brand brand = new Brand(id, name);
                    int status = client.insert(brand).getStatus();
                    if (status < 300) {
                        System.out.println("<brand id='" + id + "' name='" + name + "' />");
                        brands.add(brand);
                    }
                    return null;
                });
            } catch (Exception e) {
                e.printStackTrace();
                continue;
            }
        }
        thread.join();

        return new BrandData(brands);
    }

}
