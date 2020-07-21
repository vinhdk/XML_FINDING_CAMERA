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
import javax.ws.rs.core.Response;
import org.w3c.dom.Document;
import vinhdk.clients.CategoryClient;
import vinhdk.datas.CategoryData;
import vinhdk.extras.constains.SOURCE;
import vinhdk.extras.helpers.DocumentHelper;
import vinhdk.extras.threads.BaseThread;
import vinhdk.models.Category;
import vinhdk.resolvers.CategoryResolver;

/**
 *
 * @author Vinh Dang
 */
public class CategoryCrawler implements Serializable {

    public static final CategoryData crawl(ServletContext context) throws Exception {
        List<Category> categorys = new ArrayList<>();
        List<String> urls = new ArrayList<>();
        CategoryClient client = new CategoryClient();

        Document document = CategoryResolver.getDocument(context);
        List<HashMap<String, String>> list = DocumentHelper.getMapItems(document, SOURCE.CATEGORY.NAME);
        BaseThread thread = new BaseThread();
        for (HashMap<String, String> map : list) {
            thread.add(() -> {
                String id = map.get(SOURCE.CAMERA.VARIABLE.ID);
                String name = map.get(SOURCE.CAMERA.VARIABLE.NAME).split(" ")[0];
                String url = map.get(SOURCE.CAMERA.VARIABLE.URL);
                Category category = new Category(id, name);
                Response res = client.insert(category);
                if (res.getStatus() < 300) {
                    System.out.println("<category id='" + id + "' name='" + name + "' />");
                    categorys.add(category);
                    urls.add(url);
                }
                return null;
            });
        }
        thread.join();
        return new CategoryData(categorys, urls);
    }
}
