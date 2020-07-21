/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.services;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import vinhdk.extras.parsers.DocumentParser;

/**
 *
 * @author Vinh Dang
 */
public abstract class BaseService<T> implements Serializable {

    @PersistenceContext(unitName = "ServiceClientPU")
    private EntityManager em;

    private Class<T> model;

    public BaseService(Class<T> model) {
        this.model = model;
    }

    protected EntityManager getEntityManager() {
        return em;
    }

    @POST
    @Consumes({MediaType.APPLICATION_XML})
    public T insert(T entity) {
        getEntityManager().persist(entity);
        return entity;
    }

    @PUT
    @Consumes({MediaType.APPLICATION_XML})
    public T update(T entity) {
        getEntityManager().merge(entity);
        return entity;
    }

    @DELETE
    @Path("{id}")
    public void delete(@PathParam("id") String id) {
        getEntityManager().remove(getEntityManager().find(model, id));
    }

    @PUT
    @Path("DeleteMany")
    @Consumes({MediaType.TEXT_PLAIN})
    public void deleteMany(String xml) throws Exception {
        Document document = DocumentParser.parse(xml);
        NodeList ids = document.getElementsByTagName("id");
        for (int i = 0; i < ids.getLength(); i++) {
            getEntityManager().remove(getEntityManager().find(model, ids.item(i).getTextContent()));
        }
    }

    @DELETE
    @Path("All")
    public void deleteAll() {
        getEntityManager().createNamedQuery(model.getSimpleName() + ".deleteAll").executeUpdate();
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML})
    public String getById(@PathParam("id") String id) {
        return getEntityManager().find(model, id).toString();
    }

    @GET
    @Produces({MediaType.APPLICATION_XML})
    public String getAll() {
        javax.persistence.criteria.CriteriaQuery cq = getEntityManager().getCriteriaBuilder().createQuery();
        cq.select(cq.from(model));
        List<T> list = getEntityManager().createQuery(cq).getResultList();
        if (list.size() > 0) {
            String xml = "<" + model.getSimpleName().toLowerCase() + "s>";
            for (int i = 0; i < list.size(); i++) {
                xml += list.get(i).toString();
            }
            return xml + "</" + model.getSimpleName().toLowerCase() + "s>";
        } else {
            return "<" + model.getSimpleName().toLowerCase() + "s/>";
        }

    }

}
