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
import vinhdk.jaxbs.brand.BrandJAXB;
import vinhdk.models.Brand;

/**
 *
 * @author Vinh Dang
 */
@Stateless
@Path("Brand")
public class BrandService extends BaseService<Brand> implements Serializable {

    public BrandService() {
        super(Brand.class);
    }

    @GET
    @Path("{id}/Camera")
    @Produces({MediaType.APPLICATION_XML})
    public String getCameras(@PathParam("id") String id) {
        Brand brand = getEntityManager().find(Brand.class, id);
        if (brand.getCameras().size() > 0) {
            return brand.toStringCollection();
        } else {
            return brand.toString();
        }
    }

    @POST
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void insertXML(String xml) throws Exception {
        XMLStreamReader reader = ReaderParser.parse(xml);
        HashMap<String, String> map = ReaderHelper.getMapItems(reader, "brand").get(0);
        String id = UUID.randomUUID().toString();
        String name = map.get("name");
        Brand brand = new Brand(id, name);
        getEntityManager().persist(brand);
    }

    @PUT
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void updateXML(String xml) throws Exception {
        BrandJAXB brandJAXB = (BrandJAXB) JAXBTransform.transformObject(xml, BrandJAXB.class);
        Brand brand = new Brand(brandJAXB.getId(), brandJAXB.getName());
        getEntityManager().merge(brand);
    }
}
