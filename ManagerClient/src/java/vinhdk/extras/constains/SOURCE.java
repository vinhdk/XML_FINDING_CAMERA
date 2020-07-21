/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.constains;

import java.io.Serializable;
import vinhdk.extras.models.Translates;

/**
 *
 * @author Vinh Dang
 */
public class SOURCE implements Serializable {

    public static final class CAPACITY implements Serializable {

        public static final String NAME = "capacity";

        public static final class VARIABLE implements Serializable {

            public static final String ID = "id";
            public static final String NAME = "name";
            public static final String GB = "GB";
            public static final String TB = "TB";

        }
    }

    public static final class BRAND implements Serializable {

        public static final String NAME = "brand";

        public static final String ORIGINAL_URL = "https://www.photospecialist.com";
        public static final String MAIN_URL = ORIGINAL_URL + "/photo-camera";
        public static final String START_ROW = "<ol class=\"categories-list\">";
        public static final String END_ROW = "</ol>";
        public static final Translates TRANS_LATE_BEFORE = new Translates(new String[]{});
        public static final Translates TRANS_LATE_AFTER = new Translates(new String[]{});

        public static final class VARIABLE implements Serializable {

            public static final String ID = "id";
            public static final String NAME = "name";

        }

    }

    public static final class CATEGORY implements Serializable {

        public static final String NAME = "category";

        public static final String ORIGINAL_URL = "https://www.photospecialist.com";
        public static final String MAIN_URL = ORIGINAL_URL + "/photo-camera";
        public static final String START_ROW = "<dd>";
        public static final String END_ROW = "</dd>";
        public static final Translates TRANS_LATE_BEFORE = new Translates(new String[]{});
        public static final Translates TRANS_LATE_AFTER = new Translates(new String[]{});

        public static final class VARIABLE implements Serializable {

            public static final String ID = "id";
            public static final String NAME = "name";
            public static final String URL = "url";

        }
    }

    public static final class CAMERA implements Serializable {

        public static final String NAME = "camera";

        public static final String START_ROW = "<ul class=\"products-grid products-grid--max-3-col\">";
        public static final String END_ROW = "</ul>";
        public static final Translates TRANS_LATE_BEFORE = new Translates(new String[]{});
        public static final Translates TRANS_LATE_AFTER = new Translates(new String[]{"itemscope", "", "<meta.*?(>)", "", "€", ""});

        public static final class PAGINATION implements Serializable {

            public static final String START_ROW = "<p class=\"amount amount--has-pages\">";
            public static final String END_ROW = "</div>";
            public static final Translates TRANS_LATE_BEFORE = new Translates(new String[]{});
            public static final Translates TRANS_LATE_AFTER = new Translates(new String[]{"</div>", "", "<p class=\"amount amount--has-pages\">", "", "</p>", ""});

            public static final String KEY_PAGE = "/?p=";
            public static final int SIZE = 18;
        }

        public static final class MEGAPIXEL implements Serializable {

            public static final String START_ROW = "<th class=\"label\">Megapixel</th>";
            public static final String END_ROW = "</tr>";
            public static final Translates TRANS_LATE_BEFORE = new Translates(new String[]{});
            public static final Translates TRANS_LATE_AFTER = new Translates(new String[]{"<th class=\"label\">Megapixel</th>", "", "</tr>", "", "<td class=\"data last\">", "", "<td class=\"data\">", "", "MP</td>", "", ",", "."});
        }

        public static final class VARIABLE implements Serializable {

            public static final String ID = "id";
            public static final String NAME = "name";
            public static final String IMAGE = "image";
            public static final String URL = "url";
            public static final String PRICE = "price";

        }
    }

    public static final class CARD implements Serializable {

        public static final String NAME = "card";

        public static final String ORIGINAL_URL = "https://www.bhphotovideo.com";
        public static final String MAIN_URL = ORIGINAL_URL + "/c/buy/Memory-Cards/ci/1097";

        public static final String START_ROW = "<div data-selenium=\"listingProductDetailSection\" class=\"content_2oYqMf3DoIIjvHtq_r76S8 list_1XoEza2gYIWWs8IA3SwyVs\">";
        public static final String END_ROW = "<div data-selenium=\"seeItemsMessage\" class=\"scroll_1Pk1MEGGK3JzBr5k2f8gz2\">";
        public static final Translates TRANS_LATE_BEFORE = new Translates(new String[]{"<(.*?)>", "\n<$1>\n", "<br>", "<br/>"});
        public static final Translates TRANS_LATE_AFTER = new Translates(new String[]{"<div data-selenium=\"seeItemsMessage\" class=\"scroll_1Pk1MEGGK3JzBr5k2f8gz2\">", "", "&", "and"});

        public static final class PAGINATION implements Serializable {

            public static final String START_ROW = "<div data-selenium=\"titleNumbering\" class=\"top_3gCqPQsoz9J04-SppNrCRP\">";
            public static final String END_ROW = "<div data-selenium=\"pageOptions\" class=\"pageOptions_29d0b8MG6z8KovwcPzRklQ\">";
            public static final Translates TRANS_LATE_BEFORE = new Translates(new String[]{"<(.*?)>", "\n<$1>\n"});
            public static final Translates TRANS_LATE_AFTER = new Translates(new String[]{"<[^>]*>", ""});

            public static final String KEY_PAGE = "/pn/";
            public static final int SIZE = 30;
        }

        public static final class VARIABLE implements Serializable {

            public static final String ID = "id";
            public static final String NAME = "name";
            public static final String URL = "url";
            public static final String IMAGE = "image";
            public static final String PRICE = "price";

        }
    }
}
