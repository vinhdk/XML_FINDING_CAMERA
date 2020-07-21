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
    private boolean canActiveAccount;
    private boolean canActiveRole;
    private boolean canActiveBrand;
    private boolean canActiveCategory;
    private boolean canActiveCapacity;
    private boolean canActiveCamera;
    private boolean canActiveCard;
    private boolean canActiveCrawler;
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

    public boolean isCanActiveAccount() {
        return canActiveAccount;
    }

    public void setCanActiveAccount(boolean canActiveAccount) {
        this.canActiveAccount = canActiveAccount;
    }

    public boolean isCanActiveRole() {
        return canActiveRole;
    }

    public void setCanActiveRole(boolean canActiveRole) {
        this.canActiveRole = canActiveRole;
    }

    public boolean isCanActiveBrand() {
        return canActiveBrand;
    }

    public void setCanActiveBrand(boolean canActiveBrand) {
        this.canActiveBrand = canActiveBrand;
    }

    public boolean isCanActiveCategory() {
        return canActiveCategory;
    }

    public void setCanActiveCategory(boolean canActiveCategory) {
        this.canActiveCategory = canActiveCategory;
    }

    public boolean isCanActiveCapacity() {
        return canActiveCapacity;
    }

    public void setCanActiveCapacity(boolean canActiveCapacity) {
        this.canActiveCapacity = canActiveCapacity;
    }

    public boolean isCanActiveCamera() {
        return canActiveCamera;
    }

    public void setCanActiveCamera(boolean canActiveCamera) {
        this.canActiveCamera = canActiveCamera;
    }

    public boolean isCanActiveCard() {
        return canActiveCard;
    }

    public void setCanActiveCard(boolean canActiveCard) {
        this.canActiveCard = canActiveCard;
    }

    public boolean isCanActiveCrawler() {
        return canActiveCrawler;
    }

    public void setCanActiveCrawler(boolean canActiveCrawler) {
        this.canActiveCrawler = canActiveCrawler;
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
        return "<role id=\"" + id + "\" name=\"" + name + "\" canActiveAccount=\"" + canActiveAccount + "\" canActiveRole=\"" + canActiveRole + "\" canActiveBrand=\"" + canActiveBrand + "\" canActiveCategory=\"" + canActiveCategory + "\" canActiveCapacity=\"" + canActiveCapacity + "\" canActiveCamera=\"" + canActiveCamera + "\" canActiveCard=\"" + canActiveCard + "\" canActiveCrawler=\"" + canActiveCrawler + "\" />";
    }

    public String toStringCollection() {
        String xml = "<accounts>";
        for (int i = 0; i < accounts.size(); i++) {
            xml += accounts.stream().toArray()[i].toString();
        }
        return xml + "</accounts>";
    }
}
