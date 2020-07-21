
package vinhdk.jaxbs.role;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;attribute name="id" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="name" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="canActiveAccount" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="canActiveRole" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="canActiveBrand" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="canActiveCategory" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="canActiveCapacity" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="canActiveCamera" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="canActiveCard" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="canActiveCrawler" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "")
@XmlRootElement(name = "roleJAXB")
public class RoleJAXB {

    @XmlAttribute(name = "id")
    protected String id;
    @XmlAttribute(name = "name")
    protected String name;
    @XmlAttribute(name = "canActiveAccount")
    protected Boolean canActiveAccount;
    @XmlAttribute(name = "canActiveRole")
    protected Boolean canActiveRole;
    @XmlAttribute(name = "canActiveBrand")
    protected Boolean canActiveBrand;
    @XmlAttribute(name = "canActiveCategory")
    protected Boolean canActiveCategory;
    @XmlAttribute(name = "canActiveCapacity")
    protected Boolean canActiveCapacity;
    @XmlAttribute(name = "canActiveCamera")
    protected Boolean canActiveCamera;
    @XmlAttribute(name = "canActiveCard")
    protected Boolean canActiveCard;
    @XmlAttribute(name = "canActiveCrawler")
    protected Boolean canActiveCrawler;

    /**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setId(String value) {
        this.id = value;
    }

    /**
     * Gets the value of the name property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setName(String value) {
        this.name = value;
    }

    /**
     * Gets the value of the canActiveAccount property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCanActiveAccount() {
        return canActiveAccount;
    }

    /**
     * Sets the value of the canActiveAccount property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCanActiveAccount(Boolean value) {
        this.canActiveAccount = value;
    }

    /**
     * Gets the value of the canActiveRole property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCanActiveRole() {
        return canActiveRole;
    }

    /**
     * Sets the value of the canActiveRole property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCanActiveRole(Boolean value) {
        this.canActiveRole = value;
    }

    /**
     * Gets the value of the canActiveBrand property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCanActiveBrand() {
        return canActiveBrand;
    }

    /**
     * Sets the value of the canActiveBrand property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCanActiveBrand(Boolean value) {
        this.canActiveBrand = value;
    }

    /**
     * Gets the value of the canActiveCategory property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCanActiveCategory() {
        return canActiveCategory;
    }

    /**
     * Sets the value of the canActiveCategory property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCanActiveCategory(Boolean value) {
        this.canActiveCategory = value;
    }

    /**
     * Gets the value of the canActiveCapacity property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCanActiveCapacity() {
        return canActiveCapacity;
    }

    /**
     * Sets the value of the canActiveCapacity property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCanActiveCapacity(Boolean value) {
        this.canActiveCapacity = value;
    }

    /**
     * Gets the value of the canActiveCamera property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCanActiveCamera() {
        return canActiveCamera;
    }

    /**
     * Sets the value of the canActiveCamera property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCanActiveCamera(Boolean value) {
        this.canActiveCamera = value;
    }

    /**
     * Gets the value of the canActiveCard property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCanActiveCard() {
        return canActiveCard;
    }

    /**
     * Sets the value of the canActiveCard property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCanActiveCard(Boolean value) {
        this.canActiveCard = value;
    }

    /**
     * Gets the value of the canActiveCrawler property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isCanActiveCrawler() {
        return canActiveCrawler;
    }

    /**
     * Sets the value of the canActiveCrawler property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setCanActiveCrawler(Boolean value) {
        this.canActiveCrawler = value;
    }

}
