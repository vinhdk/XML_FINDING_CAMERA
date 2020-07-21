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
import vinhdk.clients.AccountClient;
import vinhdk.clients.BrandClient;
import vinhdk.clients.CameraClient;
import vinhdk.clients.CapacityClient;
import vinhdk.clients.CardClient;
import vinhdk.clients.CategoryClient;
import vinhdk.clients.RoleClient;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Result;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamSource;
import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactory;
import org.apache.fop.apps.MimeConstants;
import vinhdk.extras.constains.PATH;

/**
 *
 * @author Vinh Dang
 */
public class PDFController extends HttpServlet {

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
                    this.download(response, new CameraClient().getAll(), getServletContext().getRealPath(PATH.SOURCE.CAMERA).replace("build\\", ""), getServletContext().getRealPath(PATH.PDF.CAMERA).replace("build\\", ""));
                case "CARD":
                    this.download(response, new CardClient().getAll(), getServletContext().getRealPath(PATH.SOURCE.CARD).replace("build\\", ""), getServletContext().getRealPath(PATH.PDF.CARD).replace("build\\", ""));
                case "BRAND":
                    this.download(response, new BrandClient().getAll(), getServletContext().getRealPath(PATH.SOURCE.BRAND).replace("build\\", ""), getServletContext().getRealPath(PATH.PDF.BRAND).replace("build\\", ""));
                case "ACCOUNT":
                    this.download(response, new AccountClient().getAll(), getServletContext().getRealPath(PATH.SOURCE.ACCOUNT).replace("build\\", ""), getServletContext().getRealPath(PATH.PDF.ACCOUNT).replace("build\\", ""));
                case "ROLE":
                    this.download(response, new RoleClient().getAll(), getServletContext().getRealPath(PATH.SOURCE.ROLE).replace("build\\", ""), getServletContext().getRealPath(PATH.PDF.ROLE).replace("build\\", ""));
                case "CATEGORY":
                    this.download(response, new CategoryClient().getAll(), getServletContext().getRealPath(PATH.SOURCE.CATEGORY).replace("build\\", ""), getServletContext().getRealPath(PATH.PDF.CATEGORY).replace("build\\", ""));
                case "CAPACITY":
                    this.download(response, new CapacityClient().getAll(), getServletContext().getRealPath(PATH.SOURCE.CAPACITY).replace("build\\", ""), getServletContext().getRealPath(PATH.PDF.CAPACITY).replace("build\\", ""));
            }

        } catch (Exception e) {
        }

    }

    private void download(HttpServletResponse response, String xml, String path, String xmlPath) throws Exception {
        StreamSource source = new StreamSource(
                new ByteArrayInputStream(xml.getBytes(StandardCharsets.UTF_8))
        );

        FopFactory fopFactory = FopFactory.newInstance();
        TransformerFactory factory = TransformerFactory.newInstance();
        
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        Fop fop = fopFactory.newFop(MimeConstants.MIME_PDF, out);
        Result res = new SAXResult(fop.getDefaultHandler());
        Transformer transformer = factory.newTransformer(new StreamSource(path));
        transformer.transform(source, res);

        response.setContentType("application/pdf;charset=UTF-8");
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
