/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.datas;

import java.io.Serializable;
import java.util.List;
import vinhdk.models.Category;

/**
 *
 * @author Vinh Dang
 */
public class CategoryData implements Serializable {

    private List<Category> categorys;
    private List<String> urls;

    public CategoryData(List<Category> categorys, List<String> urls) {
        this.categorys = categorys;
        this.urls = urls;
    }

    public List<Category> getCategorys() {
        return categorys;
    }

    public void setCategorys(List<Category> categorys) {
        this.categorys = categorys;
    }

    public List<String> getUrls() {
        return urls;
    }

    public void setUrls(List<String> urls) {
        this.urls = urls;
    }

}
