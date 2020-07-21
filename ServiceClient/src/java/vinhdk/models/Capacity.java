/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.models;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Vinh Dang
 */
@Entity
@Table(name = "Capacity")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Capacity.findAll", query = "SELECT c FROM Capacity c")
    , @NamedQuery(name = "Capacity.deleteAll", query = "DELETE FROM Capacity")
    , @NamedQuery(name = "Capacity.findById", query = "SELECT c FROM Capacity c WHERE c.id = :id")
    , @NamedQuery(name = "Capacity.findByName", query = "SELECT c FROM Capacity c WHERE c.name = :name")})
public class Capacity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 36)
    @Column(name = "Id")
    private String id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "Name")
    private String name;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "capacity")
    private Collection<Card> cards;

    public Capacity() {
    }

    public Capacity(String id) {
        this.id = id;
    }

    public Capacity(String id, String name) {
        this.id = id;
        this.name = name;
    }

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

    @XmlElement
    public Collection<Card> getCards() {
        return cards;
    }

    public void setCards(Collection<Card> cards) {
        this.cards = cards;
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
        if (!(object instanceof Capacity)) {
            return false;
        }
        Capacity other = (Capacity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "<capacity id=\"" + id + "\" name=\"" + name + "\" />";
    }

    public String toStringCollection() {
        String xml = "<cards>";
        for (int i = 0; i < cards.size(); i++) {
            xml += cards.stream().toArray()[i].toString();
        }
        return xml + "</cards>";
    }
}
