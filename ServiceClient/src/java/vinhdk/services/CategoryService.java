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
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.stream.XMLStreamReader;
import vinhdk.extras.helpers.ReaderHelper;
import vinhdk.extras.parsers.ReaderParser;
import vinhdk.extras.transforms.JAXBTransform;
import vinhdk.jaxbs.category.CategoryJAXB;
import vinhdk.models.Category;

/**
 *
 * @author Vinh Dang
 */
@Stateless
@Path("Category")
public class CategoryService extends BaseService<Category> implements Serializable {

    public CategoryService() {
        super(Category.class);
    }

    @GET
    @Path("{id}/Camera")
    @Produces({MediaType.APPLICATION_XML})
    public String getCameras(@PathParam("id") String id) {
        Category category = getEntityManager().find(Category.class, id);
        if (category.getCameras().size() > 0) {
            return category.toStringCollection();
        } else {
            return category.toString();
        }
    }

    @POST
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void insertXML(String xml) throws Exception {
        XMLStreamReader reader = ReaderParser.parse(xml);
        HashMap<String, String> map = ReaderHelper.getMapItems(reader, "category").get(0);
        String id = UUID.randomUUID().toString();
        String name = map.get("name");
        Category category = new Category(id, name);
        getEntityManager().persist(category);
    }

    @PUT
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void updateXML(String xml) throws Exception {
        CategoryJAXB categoryJAXB = (CategoryJAXB) JAXBTransform.transformObject(xml, CategoryJAXB.class);
        Category category = new Category(categoryJAXB.getId(), categoryJAXB.getName());
        getEntityManager().merge(category);
    }
}
