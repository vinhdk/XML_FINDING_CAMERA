/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.datas;

import java.io.Serializable;
import java.util.List;
import vinhdk.models.Brand;

/**
 *
 * @author Vinh Dang
 */
public class BrandData implements Serializable {

    private List<Brand> brands;

    public BrandData(List<Brand> brands) {
        this.brands = brands;
    }

    public List<Brand> getBrands() {
        return brands;
    }

    public void setBrands(List<Brand> brands) {
        this.brands = brands;
    }

}
