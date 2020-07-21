/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.helpers;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

/**
 *
 * @author Vinh Dang
 */
public class DocumentHelper implements Serializable {

    public static final List<HashMap<String, String>> getMapItems(Document document, String name) throws Exception {
        List<HashMap<String, String>> list = new ArrayList<>();
        NodeList nodes = document.getElementsByTagName(name);
        for (int i = 0; i < nodes.getLength(); i++) {
            Node node = nodes.item(i);

            HashMap<String, String> map = new HashMap<String, String>();

            NamedNodeMap attributes = node.getAttributes();
            for (int j = 0; j < attributes.getLength(); j++) {
                String key = attributes.item(j).getNodeName();
                String value = attributes.item(j).getNodeValue();
                map.put(key, value);
            }

            list.add(map);
        }
        return list;
    }
}
