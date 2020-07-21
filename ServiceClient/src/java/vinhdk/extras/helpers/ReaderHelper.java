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
import javax.xml.stream.XMLStreamConstants;
import javax.xml.stream.XMLStreamReader;

/**
 *
 * @author Vinh Dang
 */
public class ReaderHelper implements Serializable {

    public static final List<HashMap<String, String>> getMapItems(XMLStreamReader reader, String name) throws Exception {
        List<HashMap<String, String>> list = new ArrayList<>();
        while (reader.hasNext()) {
            HashMap<String, String> map = new HashMap<String, String>();
            int event = reader.next();

            switch (event) {
                case XMLStreamConstants.START_ELEMENT:
                    if (name.equals(reader.getLocalName())) {
                        for (int i = 0; i < reader.getAttributeCount(); i++) {
                            String key = reader.getAttributeName(i).toString();
                            String value = reader.getAttributeValue(i).toString();
                            map.put(key, value);
                        }
                        list.add(map);
                    }
                    break;
            }
        }
        return list;
    }
}
