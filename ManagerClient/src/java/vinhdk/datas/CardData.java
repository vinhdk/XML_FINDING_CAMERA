/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.datas;

import java.io.Serializable;
import java.util.List;
import vinhdk.models.Card;

/**
 *
 * @author Vinh Dang
 */
public class CardData implements Serializable {

    private List<Card> cards;

    public CardData(List<Card> cards) {
        this.cards = cards;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

}
