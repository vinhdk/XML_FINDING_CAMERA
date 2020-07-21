/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.models;

import java.io.Serializable;
import java.util.Collection;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Vinh Dang
 */
@XmlRootElement
public class Role implements Serializable {

    private String id;
    private String name;
    private Collection<Account> accounts;

    public Role() {
    }

    public Role(String id) {
        this.id = id;
    }

    public Role(String id, String name) {
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

    public Collection<Account> getAccounts() {
        return accounts;
    }

    public void setAccount(Collection<Account> accounts) {
        this.accounts = accounts;
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
        if (!(object instanceof Role)) {
            return false;
        }
        Role other = (Role) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "<role id='" + id + "' name='" + name + "' />";
    }

    public String toStringCollection() {
        String xml = "<accounts>";
        for (int i = 0; i < accounts.size(); i++) {
            xml += accounts.stream().toArray()[i].toString();
        }
        return xml + "</accounts>";
    }
}
