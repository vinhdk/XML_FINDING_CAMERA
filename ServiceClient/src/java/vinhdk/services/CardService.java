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
import vinhdk.jaxbs.card.CardJAXB;
import vinhdk.models.Capacity;
import vinhdk.models.Card;

/**
 *
 * @author Vinh Dang
 */
@Stateless
@Path("Card")
public class CardService extends BaseService<Card> implements Serializable {

    public CardService() {
        super(Card.class);
    }

    @POST
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void insertXML(String xml) throws Exception {
        XMLStreamReader reader = ReaderParser.parse(xml);
        HashMap<String, String> map = ReaderHelper.getMapItems(reader, "card").get(0);
        String id = UUID.randomUUID().toString();
        String name = map.get("name");
        String image = map.get("image");
        String url = map.get("url");
        float price = Float.parseFloat(map.get("price"));
        Capacity capacity = this.getCapacity(map.get("capacityId"));
        Card card = new Card(id, name, url, price, image, capacity);
        getEntityManager().persist(card);
    }

    @PUT
    @Path("XML")
    @Consumes({MediaType.TEXT_PLAIN})
    public void updateXML(String xml) throws Exception {
        CardJAXB cardJAXB = (CardJAXB) JAXBTransform.transformObject(xml, CardJAXB.class);
        Capacity capacity = this.getCapacity(cardJAXB.getCapacityId());
        Card card = new Card(cardJAXB.getId(), cardJAXB.getName(), cardJAXB.getUrl(), cardJAXB.getPrice(), cardJAXB.getImage(), capacity);
        getEntityManager().merge(card);
    }

    private Capacity getCapacity(String id) {
        return getEntityManager().find(Capacity.class, id);
    }
}
