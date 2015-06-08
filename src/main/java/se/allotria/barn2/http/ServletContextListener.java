package se.allotria.barn2.http;


import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Singleton;
import com.google.inject.servlet.GuiceServletContextListener;
import com.sun.jersey.guice.JerseyServletModule;
import com.sun.jersey.guice.spi.container.servlet.GuiceContainer;
import com.sun.jersey.spi.container.servlet.ServletContainer;
import se.allotria.barn2.service.InfoService;
import se.allotria.barn2.service.LoginService;
import se.allotria.barn2.user.TokenService;
import se.allotria.barn2.user.impl.TokenServiceImpl;

import java.util.HashMap;
import java.util.Map;

public class ServletContextListener extends GuiceServletContextListener {

    private static final String JERSEY_API_JSON_POJO_MAPPING_FEATURE = "com.sun.jersey.api.json.POJOMappingFeature";

    @Override
    protected Injector getInjector() {

        return Guice.createInjector(new JerseyServletModule() {
            @Override
            protected void configureServlets() {

                // binding the servlet container
                bind(ServletContainer.class).in(Singleton.class);

                // binding our own services
                bind(LoginService.class);
                bind(InfoService.class);

//                // binding our resource interfaces to an actual implementation
                bind(TokenService.class).to(TokenServiceImpl.class);

                // serving all paths through Jerseys Guice integration
                filter("/*").through(GuiceContainer.class, filterParams());
            }
        });
    }

    private Map<String, String> filterParams() {
        Map<String, String> params = new HashMap<>();
        params.put("com.sun.jersey.config.property.WebPageContentRegex",
                "/doc/.*");

        params.put(JERSEY_API_JSON_POJO_MAPPING_FEATURE, "true");
        return params;
    }
}