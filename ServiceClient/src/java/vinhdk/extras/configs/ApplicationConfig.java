/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vinhdk.extras.configs;

import java.io.Serializable;
import java.util.Set;
import javax.ws.rs.core.Application;
import javax.ws.rs.ApplicationPath;

/**
 *
 * @author Vinh Dang
 */
@ApplicationPath("api")
public class ApplicationConfig extends Application implements Serializable{

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(vinhdk.extras.configs.CORSConfig.class);
        resources.add(vinhdk.services.AccountService.class);
        resources.add(vinhdk.services.AuthService.class);
        resources.add(vinhdk.services.BrandService.class);
        resources.add(vinhdk.services.CameraService.class);
        resources.add(vinhdk.services.CapacityService.class);
        resources.add(vinhdk.services.CardService.class);
        resources.add(vinhdk.services.CategoryService.class);
        resources.add(vinhdk.services.RoleService.class);
    }
    
}
