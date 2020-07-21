/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.helpers;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.Serializable;

/**
 *
 * @author Vinh Dang
 */
public class FileHelper implements Serializable {

    public static final void save(String data, String path) throws Exception {
        try (FileWriter fw = new FileWriter(path)) {
            fw.write(data);
        }
    }
}
