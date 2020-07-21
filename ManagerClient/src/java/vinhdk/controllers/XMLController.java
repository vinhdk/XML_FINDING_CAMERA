/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.controllers;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import vinhdk.clients.AccountClient;
import vinhdk.clients.BrandClient;
import vinhdk.clients.CameraClient;
import vinhdk.clients.CapacityClient;
import vinhdk.clients.CardClient;
import vinhdk.clients.CategoryClient;
import vinhdk.clients.RoleClient;
import vinhdk.extras.constains.PATH;
import vinhdk.extras.helpers.FileHelper;

/**
 *
 * @author Vinh Dang
 */
public class XMLController extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String url = request.getParameter("URL");
            switch (url) {
                case "CAMERA":
                    this.download(response, new CameraClient().getAll(), getServletContext().getRealPath(PATH.TRANSFORM.CAMERA).replace("build\\", ""), getServletContext().getRealPath(PATH.XML.CAMERA).replace("build\\", ""), PATH.DTD.CAMERA + "\n");
                case "CARD":
                    this.download(response, new CardClient().getAll(), getServletContext().getRealPath(PATH.TRANSFORM.CARD).replace("build\\", ""), getServletContext().getRealPath(PATH.XML.CARD).replace("build\\", ""), PATH.DTD.CARD + "\n");
                case "BRAND":
                    this.download(response, new BrandClient().getAll(), getServletContext().getRealPath(PATH.TRANSFORM.BRAND).replace("build\\", ""), getServletContext().getRealPath(PATH.XML.BRAND).replace("build\\", ""), PATH.DTD.BRAND + "\n");
                case "ACCOUNT":
                    this.download(response, new AccountClient().getAll(), getServletContext().getRealPath(PATH.TRANSFORM.ACCOUNT).replace("build\\", ""), getServletContext().getRealPath(PATH.XML.ACCOUNT).replace("build\\", ""), PATH.DTD.ACCOUNT + "\n");
                case "ROLE":
                    this.download(response, new RoleClient().getAll(), getServletContext().getRealPath(PATH.TRANSFORM.ROLE).replace("build\\", ""), getServletContext().getRealPath(PATH.XML.ROLE).replace("build\\", ""), PATH.DTD.ROLE + "\n");
                case "CATEGORY":
                    this.download(response, new CategoryClient().getAll(), getServletContext().getRealPath(PATH.TRANSFORM.CATEGORY).replace("build\\", ""), getServletContext().getRealPath(PATH.XML.CATEGORY).replace("build\\", ""), PATH.DTD.CATEGORY + "\n");
                case "CAPACITY":
                    this.download(response, new CapacityClient().getAll(), getServletContext().getRealPath(PATH.TRANSFORM.CAPACITY).replace("build\\", ""), getServletContext().getRealPath(PATH.XML.CAPACITY).replace("build\\", ""), PATH.DTD.CAPACITY + "\n");
            }

        } catch (Exception e) {
        }
    }

    private void download(HttpServletResponse response, String xml, String path, String xmlPath, String dtdData) throws Exception {
        StreamSource source = new StreamSource(
                new ByteArrayInputStream(xml.getBytes(StandardCharsets.UTF_8))
        );

        TransformerFactory factory = TransformerFactory.newInstance();

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        StreamResult res = new StreamResult(out);
        Transformer transformer = factory.newTransformer(new StreamSource(path));
        transformer.transform(source, res);

        FileHelper.save(dtdData + xml, xmlPath);

        response.setContentType("application/xml;charset=UTF-8");
        response.setContentLength(out.size());

        response.getOutputStream().write(out.toByteArray());
        response.getOutputStream().flush();
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
