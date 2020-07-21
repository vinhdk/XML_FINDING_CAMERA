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
import vinhdk.clients.CapacityClient;
import vinhdk.clients.CardClient;
import vinhdk.datas.CardData;
import vinhdk.extras.constains.SOURCE;
import vinhdk.extras.helpers.ReaderHelper;
import vinhdk.extras.parsers.ReaderParser;
import vinhdk.extras.threads.BaseThread;
import vinhdk.models.Capacity;
import vinhdk.models.Card;
import vinhdk.resolvers.CardResolver;

/**
 *
 * @author Vinh Dang
 */
public class CardCrawler implements Serializable {

    public static final CardData crawl(ServletContext context) throws Exception {
        List<Card> cards = new ArrayList<>();
        CardClient client = new CardClient();
        int pageCount = CardResolver.getPageCount();
        List<HashMap<String, String>> mapCapacity = ReaderHelper.getMapItems(ReaderParser.parse(new CapacityClient().getAll()), SOURCE.CAPACITY.NAME);
        for (int i = 1; i <= pageCount; i++) {
            try {
                String main_url = SOURCE.CARD.MAIN_URL + SOURCE.CARD.PAGINATION.KEY_PAGE + i;
                XMLStreamReader reader = CardResolver.getReader(main_url, context);
                List<HashMap<String, String>> list = ReaderHelper.getMapItems(reader, SOURCE.CARD.NAME);
                BaseThread thread = new BaseThread();
                for (HashMap<String, String> map : list) {
                    thread.add(() -> {
                        String id = map.get(SOURCE.CARD.VARIABLE.ID);
                        String name = map.get(SOURCE.CARD.VARIABLE.NAME).replace("&", "and");
                        String image = map.get(SOURCE.CARD.VARIABLE.IMAGE);
                        String detail_url = SOURCE.CARD.ORIGINAL_URL + map.get(SOURCE.CARD.VARIABLE.URL);
                        Float price = Float.parseFloat(map.get(SOURCE.CARD.VARIABLE.PRICE));
                        int count = 0;
                        while (count < mapCapacity.size()) {
                            HashMap<String, String> ca = mapCapacity.get(count);
                            String temp = name.contains(SOURCE.CAPACITY.VARIABLE.GB) ? name.split(SOURCE.CAPACITY.VARIABLE.GB)[0].trim() + SOURCE.CAPACITY.VARIABLE.GB : name.split(SOURCE.CAPACITY.VARIABLE.TB)[0].trim() + SOURCE.CAPACITY.VARIABLE.TB;
                            if (ca.get(SOURCE.CAPACITY.VARIABLE.NAME).equalsIgnoreCase(temp.split(" ")[temp.split(" ").length - 1])) {
                                Capacity capacity = new Capacity(ca.get(SOURCE.CAPACITY.VARIABLE.ID), ca.get(SOURCE.CAPACITY.VARIABLE.NAME));
                                Card card = new Card(id, name, detail_url, price, image, capacity);
                                int status = client.insert(card).getStatus();
                                if (status < 300) {
                                    System.out.println("<card id='" + id + "' name='" + name + "' url='" + detail_url + "' price='" + price + "' image='" + image + "' capacityId='" + capacity.getId() + "' />");
                                    cards.add(card);
                                }
                                break;
                            }
                            count++;
                        }
                        return null;
                    });

                }
                thread.join();
            } catch (Exception e) {
                e.printStackTrace();
                continue;
            }

        }
        return new CardData(cards);
    }
}
