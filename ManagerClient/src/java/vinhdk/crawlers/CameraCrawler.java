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
import javax.xml.stream.XMLStreamReader;
import vinhdk.clients.CameraClient;
import vinhdk.datas.BrandData;
import vinhdk.datas.CameraData;
import vinhdk.datas.CategoryData;
import vinhdk.extras.constains.SOURCE;
import vinhdk.extras.helpers.ReaderHelper;
import vinhdk.extras.threads.BaseThread;
import vinhdk.models.Brand;
import vinhdk.models.Camera;
import vinhdk.models.Category;
import vinhdk.resolvers.CameraResolver;

/**
 *
 * @author Vinh Dang
 */
public class CameraCrawler implements Serializable {

    public static final CameraData crawl(CategoryData categoryData, BrandData brandData, ServletContext context) throws Exception {
        List<Camera> cameras = new ArrayList<>();

        List<String> urls = categoryData.getUrls();
        List<Category> categorys = categoryData.getCategorys();
        List<Brand> brands = brandData.getBrands();
        CameraClient client = new CameraClient();
        BaseThread thread = new BaseThread();
        for (int i = 0; i < urls.size(); i++) {
            String url = urls.get(i);
            Category category = categorys.get(i);
            thread.add(() -> {
                int pageCount = CameraResolver.getPageCount(url);
                for (int j = 1; j <= pageCount; j++) {
                    try {
                        String main_url = url + SOURCE.CAMERA.PAGINATION.KEY_PAGE + j;

                        XMLStreamReader reader = CameraResolver.getReader(main_url, context);
                        List<HashMap<String, String>> list = ReaderHelper.getMapItems(reader, SOURCE.CAMERA.NAME);
                        for (HashMap<String, String> map : list) {
                            String id = map.get(SOURCE.CAMERA.VARIABLE.ID);
                            String name = map.get(SOURCE.CAMERA.VARIABLE.NAME).replace("&", "and");
                            String image = map.get(SOURCE.CAMERA.VARIABLE.IMAGE);
                            String detail_url = map.get(SOURCE.CAMERA.VARIABLE.URL);
                            Float price = Float.parseFloat(map.get(SOURCE.CAMERA.VARIABLE.PRICE));
                            Float megapixel = CameraResolver.getMegapixel(detail_url);
                            int l = 0;
                            while (l < brands.size()) {
                                String temp = name.split(" ")[0];
                                if (brands.get(l).getName().equalsIgnoreCase(temp)) {
                                    Brand brand = brands.get(l);
                                    Camera camera = new Camera(id, name, detail_url, price, megapixel, image, brand, category);
                                    int status = client.insert(camera).getStatus();
                                    if (status < 300) {
                                        System.out.println("<camera id='" + id + "' name='" + name + "' url='" + detail_url + "' price='" + price + "' megapixel='" + megapixel + "' image='" + image + "' brandId='" + brand.getId() + "' categoryId='" + category.getId() + "' />");
                                        cameras.add(camera);
                                    }
                                    break;
                                }
                                l++;
                            }

                        }

                    } catch (Exception e) {
                        continue;
                    }
                }
                return null;
            });
        }
        thread.join();
        return new CameraData(cameras);
    }

}
