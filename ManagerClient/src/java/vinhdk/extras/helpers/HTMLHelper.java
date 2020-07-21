/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.helpers;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import vinhdk.extras.models.Translates;

/**
 *
 * @author Vinh Dang
 */
public class HTMLHelper {

    public static final String trimHTML(Object data, String start_row, String end_row, Translates translate_before, Translates translate_after) throws Exception {
        InputStream is = null;
        BufferedReader br = null;
        try {
            is = data instanceof InputStream ? (InputStream) data : new ByteArrayInputStream(((String) data).getBytes(StandardCharsets.UTF_8));
            is = new ByteArrayInputStream(HTMLHelper.getFullHTML(is, translate_before).getBytes(StandardCharsets.UTF_8));
            br = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            boolean start = false;
            String result = "";
            String line = null;
            while ((line = br.readLine()) != null) {
                line = line.trim();
                if (start) {
                    result += line + "\n";
                    if (line.equalsIgnoreCase(end_row)) {
                        break;
                    }
                } else {
                    if (line.equalsIgnoreCase(start_row)) {
                        result += line + "\n";
                        start = true;
                    }
                }
            }
            return HTMLHelper.solveHTML(result, translate_after).trim();
        } finally {
            if (br != null) {
                br.close();
            }
            if (is != null) {
                is.close();
            }

        }
    }

    public static final String getFullHTML(InputStream is, Translates translates) throws Exception {
        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            String result = "";
            String line = null;
            while ((line = br.readLine()) != null) {
                line = line.trim();
                result += line + "\n";
            }
            return HTMLHelper.solveHTML(result, translates).trim();
        } finally {
            if (br != null) {
                br.close();
            }
            if (is != null) {
                is.close();
            }
        }
    }

    public static final String solveHTML(String data, Translates translates) throws Exception {
        for (Translates.Translate translate : translates.getTranslates()) {
            data = data.replaceAll(translate.getRegexForm(), translate.getRegexTo());
        }
        return data;
    }
}
