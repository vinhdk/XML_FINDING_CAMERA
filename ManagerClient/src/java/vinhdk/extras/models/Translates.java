/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Vinh Dang
 */
public class Translates implements Serializable {

    protected List<Translate> translates;

    public Translates() {
        this.translates = new ArrayList<>();
    }

    public Translates(String[] regexs) {
        this.translates = new ArrayList<>();
        for (int i = 0; i < regexs.length; i += 2) {
            this.translates.add(new Translate(regexs[i], regexs[i + 1]));
        }
    }

    public List<Translate> getTranslates() {
        return translates;
    }

    public void setTranslates(String[] regexs) {
        for (int i = 0; i < regexs.length; i += 2) {
            this.translates.add(new Translate(regexs[i], regexs[i + 1]));
        }
    }

    public static class Translate implements Serializable {

        private String regexForm, regexTo;

        public Translate() {
        }

        public Translate(String regexForm, String regexTo) {
            this.regexForm = regexForm;
            this.regexTo = regexTo;
        }

        public String getRegexForm() {
            return regexForm;
        }

        public void setRegexForm(String regexForm) {
            this.regexForm = regexForm;
        }

        public String getRegexTo() {
            return regexTo;
        }

        public void setRegexTo(String regexTo) {
            this.regexTo = regexTo;
        }

    }
}
