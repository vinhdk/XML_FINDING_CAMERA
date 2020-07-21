/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.helpers;

import java.io.InputStream;
import java.io.Serializable;
import java.net.HttpURLConnection;
import java.net.URL;
import vinhdk.extras.constains.HEADER;
import vinhdk.extras.models.Translates;

/**
 *
 * @author Vinh Dang
 */
public class CrawlHelper implements Serializable {

    public static final String crawlData(String link, String start_row, String end_row, Translates translate_before, Translates translate_after) throws Exception {
        URL url = new URL(link);
        HttpURLConnection http = (HttpURLConnection) url.openConnection();
        InputStream is = null;
        try {
            http.addRequestProperty(HEADER.AGENT.KEY, HEADER.AGENT.VALUE);
            is = http.getInputStream();
            return HTMLHelper.trimHTML(is, start_row, end_row, translate_before, translate_after);
        } finally {
            if (is != null) {
                is.close();
            }
            http.disconnect();
        }
    }
}
