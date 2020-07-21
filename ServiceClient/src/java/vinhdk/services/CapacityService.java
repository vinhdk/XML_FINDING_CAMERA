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
import vinhdk.jaxbs.capacity.CapacityJAXB;
import vinhdk.models.Capacity;

/**
 *
 * @author Vinh Dang
 */
@Stateless
@Path("Capacity")
public class CapacityService extends BaseService<Capacity> implements Serializable {

    public CapacityService() {
        super(Capacity.class);
    }

    @GET
    @Path("{id}/Card")
    @Produces({MediaType.APPLICATION_XML})
    public String getCards(@PathParam("id") String id) {
        Capacity capacity = getEntityManager().find(Capacity.class, id);
        if (capacity.getCards().size() > 0) {
            return capacity.toStringCollection();
        } else {
            return capacity.toString();
        }
    }

    @POST
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void insertXML(String xml) throws Exception {
        XMLStreamReader reader = ReaderParser.parse(xml);
        HashMap<String, String> map = ReaderHelper.getMapItems(reader, "capacity").get(0);
        String id = UUID.randomUUID().toString();
        String name = map.get("name");
        Capacity capacity = new Capacity(id, name);
        getEntityManager().persist(capacity);
    }

    @PUT
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void updateXML(String xml) throws Exception {
        CapacityJAXB capacityJAXB = (CapacityJAXB) JAXBTransform.transformObject(xml, CapacityJAXB.class);
        Capacity capacity = new Capacity(capacityJAXB.getId(), capacityJAXB.getName());
        getEntityManager().merge(capacity);
    }
}
