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
import vinhdk.jaxbs.role.RoleJAXB;
import vinhdk.models.Role;

/**
 *
 * @author Vinh Dang
 */
@Stateless
@Path("Role")
public class RoleService extends BaseService<Role> implements Serializable {

    public RoleService() {
        super(Role.class);
    }

    @GET
    @Path("{id}/Account")
    @Produces({MediaType.APPLICATION_XML})
    public String getAccounts(@PathParam("id") String id) {
        Role role = getEntityManager().find(Role.class, id);
        if (role.getAccounts().size() > 0) {
            return role.toStringCollection();
        } else {
            return role.toString();
        }
    }

    @POST
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void insertXML(String xml) throws Exception {
        XMLStreamReader reader = ReaderParser.parse(xml);
        HashMap<String, String> map = ReaderHelper.getMapItems(reader, "role").get(0);
        String id = UUID.randomUUID().toString();
        String name = map.get("name");
        boolean canActiveAccount = Boolean.parseBoolean(map.get("canActiveAccount"));
        boolean canActiveRole = Boolean.parseBoolean(map.get("canActiveRole"));
        boolean canActiveBrand = Boolean.parseBoolean(map.get("canActiveBrand"));
        boolean canActiveCategory = Boolean.parseBoolean(map.get("canActiveCategory"));
        boolean canActiveCapacity = Boolean.parseBoolean(map.get("canActiveCapacity"));
        boolean canActiveCamera = Boolean.parseBoolean(map.get("canActiveCamera"));
        boolean canActiveCard = Boolean.parseBoolean(map.get("canActiveCard"));
        boolean canActiveCrawler = Boolean.parseBoolean(map.get("canActiveCrawler"));

        Role role = new Role(id, name, canActiveAccount, canActiveRole, canActiveBrand, canActiveCategory, canActiveCapacity, canActiveCamera, canActiveCard, canActiveCrawler);
        getEntityManager().persist(role);
    }

    @PUT
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void updateXML(String xml) throws Exception {
        RoleJAXB roleJAXB = (RoleJAXB) JAXBTransform.transformObject(xml, RoleJAXB.class);
        Role role = new Role(roleJAXB.getId(), roleJAXB.getName(), roleJAXB.isCanActiveAccount(), roleJAXB.isCanActiveRole(), roleJAXB.isCanActiveBrand(), roleJAXB.isCanActiveCategory(), roleJAXB.isCanActiveCapacity(), roleJAXB.isCanActiveCamera(), roleJAXB.isCanActiveCard(), roleJAXB.isCanActiveCrawler());
        getEntityManager().merge(role);
    }
}
