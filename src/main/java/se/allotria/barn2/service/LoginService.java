package se.allotria.barn2.service;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.apache.commons.lang3.StringUtils;
import se.allotria.barn2.dto.*;
import se.allotria.barn2.dto.Error;
import se.allotria.barn2.user.Token;
import se.allotria.barn2.user.TokenService;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;


/**
 * The LoginService handles system users and token creation and validation.
 *
 * @title User management and login tokens.
 */
@Singleton
@Path("login")
public class LoginService {

    @Inject
    private TokenService tokenService;

    private Map<String, String> users = new HashMap<>();


    @GET
    @Produces("application/json")
    @Path("listUsers")
    public Response listUsers() {
        Set<String> keys = users.keySet();
        String[] userList = keys.toArray(new String[keys.size()]);
        return Response.ok(userList).build();
    }

    @GET
    @Produces("application/json")
    @Path("getToken/{user}/{password}")
    public Response getLoginToken(@PathParam("user") String user,
                                  @PathParam("password") String password) {

        String storedPwd = users.get(user);
        if (StringUtils.isNotEmpty(storedPwd) && StringUtils.equals(storedPwd, password)) {
            Token userToken = tokenService.getToken(user);
            return Response.ok(userToken).build();
        }

        return Response.status(Response.Status.FORBIDDEN).entity(new Error("Unknown user or password.")).build();
    }


    @GET
    @Produces("application/json")
    @Path("getAdminToken/{user}/{password}")
    public Response getAdminToken(@PathParam("user") String user,
                                  @PathParam("password") String password) {

        if ((StringUtils.equals(user, "tom") && StringUtils.equals(password, "crypt0m"))
                || (StringUtils.equals(user, "timm") && StringUtils.equals(password, "antares"))
                || (StringUtils.equals(user, "manuel") && StringUtils.equals(password, "allotria"))) {

            return Response.ok(tokenService.getAdminToken(user)).build();
        }

        return Response.status(Response.Status.FORBIDDEN).entity(new Error("Try again young padawan.")).build();
    }


    @POST
    @Produces("application/json")
    @Path("addUser")
    public Response addUser(@FormParam("adminToken") String adminToken,
            @FormParam("user") String user,
            @FormParam("password") String password) {


        Token token = tokenService.checkToken(adminToken);
        if (token == null || !token.isAdmin()) {
            return Response.status(Response.Status.FORBIDDEN).entity(new Error("Invalid token value or token expired.")).build();
        }

        users.put(user, password);

        return Response.ok(new Info("User " + user + " added.")).build();
    }

}
