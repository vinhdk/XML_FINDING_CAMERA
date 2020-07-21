/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.models;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Vinh Dang
 */
@Entity
@Table(name = "Card")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Card.findAll", query = "SELECT c FROM Card c")
    , @NamedQuery(name = "Card.deleteAll", query = "DELETE FROM Card")
    , @NamedQuery(name = "Card.findById", query = "SELECT c FROM Card c WHERE c.id = :id")
    , @NamedQuery(name = "Card.findByName", query = "SELECT c FROM Card c WHERE c.name = :name")
    , @NamedQuery(name = "Card.findByUrl", query = "SELECT c FROM Card c WHERE c.url = :url")
    , @NamedQuery(name = "Card.findByPrice", query = "SELECT c FROM Card c WHERE c.price = :price")
    , @NamedQuery(name = "Card.findByImage", query = "SELECT c FROM Card c WHERE c.image = :image")})
public class Card implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 36)
    @Column(name = "Id")
    private String id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "Name")
    private String name;
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "Url")
    private String url;
    @Basic(optional = false)
    @NotNull
    @Column(name = "Price")
    private double price;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "Image")
    private String image;
    @JoinColumn(name = "CapacityId", referencedColumnName = "Id")
    @ManyToOne(optional = false)
    private Capacity capacity;

    public Card() {
    }

    public Card(String id) {
        this.id = id;
    }

    public Card(String id, String name, String url, double price, String image, Capacity capacity) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.price = price;
        this.image = image;
        this.capacity = capacity;
    }

    public Card(String id, String name, double price, String image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    @XmlAttribute
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Capacity getCapacity() {
        return capacity;
    }

    public void setCapacity(Capacity capacity) {
        this.capacity = capacity;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Card)) {
            return false;
        }
        Card other = (Card) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "<card id=\"" + id + "\" name=\"" + name + "\" url=\"" + url + "\" image=\"" + image + "\" price=\"" + price + "\" capacityId=\"" + capacity.getId() + "\" />";
    }

}
