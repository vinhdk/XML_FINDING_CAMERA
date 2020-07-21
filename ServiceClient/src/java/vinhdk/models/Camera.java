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
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Vinh Dang
 */
@Entity
@Table(name = "Camera")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Camera.findAll", query = "SELECT c FROM Camera c")
    , @NamedQuery(name = "Camera.deleteAll", query = "DELETE FROM Camera")
    , @NamedQuery(name = "Camera.findById", query = "SELECT c FROM Camera c WHERE c.id = :id")
    , @NamedQuery(name = "Camera.findByName", query = "SELECT c FROM Camera c WHERE c.name = :name")
    , @NamedQuery(name = "Camera.findByUrl", query = "SELECT c FROM Camera c WHERE c.url = :url")
    , @NamedQuery(name = "Camera.findByPrice", query = "SELECT c FROM Camera c WHERE c.price = :price")
    , @NamedQuery(name = "Camera.findByMegapixel", query = "SELECT c FROM Camera c WHERE c.megapixel = :megapixel")
    , @NamedQuery(name = "Camera.findByImage", query = "SELECT c FROM Camera c WHERE c.image = :image")})
public class Camera implements Serializable {

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
    @Column(name = "Megapixel")
    private double megapixel;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 500)
    @Column(name = "Image")
    private String image;
    @JoinColumn(name = "BrandId", referencedColumnName = "Id")
    @ManyToOne(optional = false)
    private Brand brand;
    @JoinColumn(name = "CategoryId", referencedColumnName = "Id")
    @ManyToOne(optional = false)
    private Category category;

    public Camera() {
    }

    public Camera(String id) {
        this.id = id;
    }

    public Camera(String id, String name, double price, double megapixel, String image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.megapixel = megapixel;
        this.image = image;
    }

    public Camera(String id, String name, String url, double price, double megapixel, String image, Brand brand, Category category) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.price = price;
        this.megapixel = megapixel;
        this.image = image;
        this.brand = brand;
        this.category = category;
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

    public double getMegapixel() {
        return megapixel;
    }

    public void setMegapixel(double megapixel) {
        this.megapixel = megapixel;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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
        if (!(object instanceof Camera)) {
            return false;
        }
        Camera other = (Camera) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "<camera id=\"" + id + "\" name=\"" + name + "\" url=\"" + url + "\" image=\"" + image + "\" price=\"" + price + "\" megapixel=\"" + megapixel + "\" categoryId=\"" + category.getId() + "\" brandId=\"" + brand.getId() + "\" />";
    }

}
