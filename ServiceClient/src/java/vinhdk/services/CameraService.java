/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.services;

import vinhdk.extras.services.BaseService;
import java.io.Serializable;
import java.util.HashMap;
import java.util.UUID;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.xml.stream.XMLStreamReader;
import vinhdk.extras.helpers.ReaderHelper;
import vinhdk.extras.parsers.ReaderParser;
import vinhdk.extras.transforms.JAXBTransform;
import vinhdk.jaxbs.camera.CameraJAXB;
import vinhdk.models.Brand;
import vinhdk.models.Camera;
import vinhdk.models.Category;

/**
 *
 * @author Vinh Dang
 */
@Stateless
@Path("Camera")
public class CameraService extends BaseService<Camera> implements Serializable {

    public CameraService() {
        super(Camera.class);
    }

    @POST
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void insertXML(String xml) throws Exception {
        XMLStreamReader reader = ReaderParser.parse(xml);
        HashMap<String, String> map = ReaderHelper.getMapItems(reader, "camera").get(0);
        String id = UUID.randomUUID().toString();
        String name = map.get("name");
        String image = map.get("image");
        String url = map.get("url");
        float price = Float.parseFloat(map.get("price"));
        float megapixel = Float.parseFloat(map.get("megapixel"));
        Brand brand = this.getBrand(map.get("brandId"));
        Category category = this.getCategory(map.get("categoryId"));
        Camera camera = new Camera(id, name, url, price, megapixel, image, brand, category);
        getEntityManager().persist(camera);
    }

    @PUT
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void updateXML(String xml) throws Exception {
        CameraJAXB cameraJAXB = (CameraJAXB) JAXBTransform.transformObject(xml, CameraJAXB.class);
        Brand brand = this.getBrand(cameraJAXB.getBrandId());
        Category category = this.getCategory(cameraJAXB.getCategoryId());
        Camera camera = new Camera(cameraJAXB.getId(), cameraJAXB.getName(), cameraJAXB.getUrl(), cameraJAXB.getPrice(), cameraJAXB.getMegapixel(), cameraJAXB.getImage(), brand, category);
        getEntityManager().merge(camera);
    }

    private Brand getBrand(String id) {
        return getEntityManager().find(Brand.class, id);
    }

    private Category getCategory(String id) {
        return getEntityManager().find(Category.class, id);
    }

}
