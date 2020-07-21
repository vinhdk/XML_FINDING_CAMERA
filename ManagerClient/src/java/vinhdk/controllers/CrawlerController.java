/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import vinhdk.clients.CameraClient;
import vinhdk.clients.CardClient;
import vinhdk.crawlers.BrandCrawler;
import vinhdk.crawlers.CameraCrawler;
import vinhdk.crawlers.CardCrawler;
import vinhdk.crawlers.CategoryCrawler;
import vinhdk.datas.BrandData;
import vinhdk.datas.CategoryData;
import vinhdk.extras.constains.DATA;

/**
 *
 * @author Vinh Dang
 */
public class CrawlerController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.getRequestDispatcher(DATA.CRAWLER.CLIENT).forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            String method = request.getParameter("method");
            if (method.equals("CAMERA")) {
                System.out.println(System.currentTimeMillis());
                BrandData brandData = BrandCrawler.crawl(getServletContext());
                CategoryData categoryData = CategoryCrawler.crawl(getServletContext());
                CameraCrawler.crawl(categoryData, brandData, getServletContext());
                System.out.println(System.currentTimeMillis());
            } else {
                System.out.println(System.currentTimeMillis());
                CardCrawler.crawl(getServletContext());
                System.out.println(System.currentTimeMillis());
            }
            response.sendError(200);
        } catch (Exception e) {
            response.sendError(500);
        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
