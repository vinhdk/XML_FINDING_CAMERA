/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.services;

import vinhdk.extras.services.BaseService;
import java.io.Serializable;
import java.util.HashMap;
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
import vinhdk.jaxbs.account.AccountJAXB;
import vinhdk.models.Account;
import vinhdk.models.Role;

/**
 *
 * @author Vinh Dang
 */
@Stateless
@Path("Account")
public class AccountService extends BaseService<Account> implements Serializable {

    public AccountService() {
        super(Account.class);
    }

    @POST
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void insertXML(String xml) throws Exception {
        XMLStreamReader reader = ReaderParser.parse(xml);
        HashMap<String, String> map = ReaderHelper.getMapItems(reader, "account").get(0);
        String username = map.get("username");
        String fullname = map.get("fullname");
        String phone = map.get("phone");
        String email = map.get("email");
        String password = map.get("password");
        String address = map.get("address");
        Role role = this.getRole(map.get("roleId"));
        
        Account account = new Account(username, fullname, password, phone, email, address, role);
        getEntityManager().persist(account);
    }

    @PUT
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void updateXML(String xml) throws Exception {
        AccountJAXB accountJAXB = (AccountJAXB) JAXBTransform.transformObject(xml, AccountJAXB.class);
        String password = getEntityManager().find(Account.class, accountJAXB.getUsername()).getPassword();
        accountJAXB.setPassword(password);
        Role role = this.getRole(accountJAXB.getRoleId());
        Account account = new Account(accountJAXB.getUsername(), accountJAXB.getFullname(),accountJAXB.getPassword(), accountJAXB.getPhone(), accountJAXB.getEmail(), accountJAXB.getAddress(), role);
        getEntityManager().merge(account);
    }

    private Role getRole(String id) {
        return getEntityManager().find(Role.class, id);
    }

}
