/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.services;

import java.io.Serializable;
import java.util.HashMap;
import java.util.UUID;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.stream.XMLStreamReader;
import vinhdk.extras.helpers.ReaderHelper;
import vinhdk.extras.parsers.ReaderParser;
import vinhdk.extras.services.BaseService;
import vinhdk.models.Account;
import vinhdk.models.Role;

/**
 *
 * @author Vinh Dang
 */
@Stateless
@Path("Auth")
public class AuthService extends BaseService<Account> implements Serializable {

    public AuthService() {
        super(Account.class);
    }

    @POST
    @Path("Login")
    @Consumes({MediaType.TEXT_PLAIN})
    public String login(String xml) throws Exception {
        XMLStreamReader reader = ReaderParser.parse(xml);
        HashMap<String, String> map = ReaderHelper.getMapItems(reader, "account").get(0);
        String username = map.get("username");
        String password = map.get("password");
        Account account = getEntityManager().find(Account.class, username);
        return account != null ? (account.getPassword().equals(password) ? username : null) : null;
    }

    @GET
    @Path("{username}/{url}")
    @Produces({MediaType.TEXT_PLAIN})
    public String authorize(@PathParam("username") String username, @PathParam("url") String url) {
        Account account = getEntityManager().find(Account.class, username);
        if (account != null) {
            Role role = getEntityManager().find(Role.class, account.getRole().getId());
            switch (url) {
                case "ACCOUNT":
                    return role.isCanActiveAccount() ? "can" : "can not";
                case "ROLE":
                    return role.isCanActiveRole() ? "can" : "can not";
                case "BRAND":
                    return role.isCanActiveBrand() ? "can" : "can not";
                case "CATEGORY":
                    return role.isCanActiveCategory() ? "can" : "can not";
                case "CAPACITY":
                    return role.isCanActiveCapacity() ? "can" : "can not";
                case "CAMERA":
                    return role.isCanActiveCamera() ? "can" : "can not";
                case "CARD":
                    return role.isCanActiveCard() ? "can" : "can not";
                case "CRAWLER":
                    return role.isCanActiveCrawler() ? "can" : "can not";
                default:
                    return "";
            }
        } else {
            return "";
        }
    }

    @GET
    @Path("Menu/{username}")
    @Produces({MediaType.TEXT_PLAIN})
    public String getMenu(@PathParam("username") String username) {
        Account account = getEntityManager().find(Account.class, username);
        if (account != null) {
            Role role = getEntityManager().find(Role.class, account.getRole().getId());
            return role.toString();
        } else {
            return "";
        }
    }

}
