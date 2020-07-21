/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.clients;

import java.io.Serializable;
import vinhdk.extras.clients.BaseClient;
import vinhdk.models.Card;

/**
 * Jersey REST client generated for REST resource:CardService [Card]<br>
 * USAGE:
 * <pre>
 *        CardClient client = new CardClient();
 *        Object response = client.XXX(...);
 *        // do whatever with response
 *        client.close();
 * </pre>
 *
 * @author Vinh Dang
 */
public class CardClient extends BaseClient<Card> implements Serializable {
    
    public CardClient() {
        super(Card.class);
    }
}
