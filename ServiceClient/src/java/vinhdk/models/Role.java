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
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Vinh Dang
 */
@Entity
@Table(name = "Role")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Role.findAll", query = "SELECT r FROM Role r")
    , @NamedQuery(name = "Role.deleteAll", query = "DELETE FROM Role")
    , @NamedQuery(name = "Role.findById", query = "SELECT r FROM Role r WHERE r.id = :id")
    , @NamedQuery(name = "Role.findByName", query = "SELECT r FROM Role r WHERE r.name = :name")})
public class Role implements Serializable {

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
    @Basic(optional = false)
    @NotNull
    @Column(name = "CanActiveAccount")
    private boolean canActiveAccount;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CanActiveRole")
    private boolean canActiveRole;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CanActiveBrand")
    private boolean canActiveBrand;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CanActiveCategory")
    private boolean canActiveCategory;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CanActiveCapacity")
    private boolean canActiveCapacity;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CanActiveCamera")
    private boolean canActiveCamera;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CanActiveCard")
    private boolean canActiveCard;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CanActiveCrawler")
    private boolean canActiveCrawler;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "role")
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

    public Role(String id, String name, boolean canActiveAccount, boolean canActiveRole, boolean canActiveBrand, boolean canActiveCategory, boolean canActiveCapacity, boolean canActiveCamera, boolean canActiveCard, boolean canActiveCrawler) {
        this.id = id;
        this.name = name;
        this.canActiveAccount = canActiveAccount;
        this.canActiveRole = canActiveRole;
        this.canActiveBrand = canActiveBrand;
        this.canActiveCategory = canActiveCategory;
        this.canActiveCapacity = canActiveCapacity;
        this.canActiveCamera = canActiveCamera;
        this.canActiveCard = canActiveCard;
        this.canActiveCrawler = canActiveCrawler;
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
