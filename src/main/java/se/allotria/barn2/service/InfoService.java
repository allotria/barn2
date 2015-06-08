package se.allotria.barn2.service;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import se.allotria.barn2.dto.*;
import se.allotria.barn2.dto.Error;
import se.allotria.barn2.user.Token;
import se.allotria.barn2.user.TokenService;

import javax.imageio.ImageIO;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@Singleton
@Path("info")
public class InfoService {

    @Inject
    private TokenService tokenService;


    public InfoService() throws IOException {
        properties = new Properties();
        InputStream propertiesStream = this.getClass().getResourceAsStream("/baby.properties");
        properties.load(propertiesStream);
    }

    private Properties properties;


    @GET
    @Produces("application/json")
    @Path("firstname")
    public Response getFirstname(@QueryParam("userToken") String userToken) {

        if (!checkToken(userToken)) {
            return Response.status(Response.Status.FORBIDDEN).entity(new Error("bad token")).build();
        }

        String name = properties.getProperty("firstname");
        return Response.ok(new Info(name)).build();
    }

    private boolean checkToken(String userToken) {
        Token token = tokenService.checkToken(userToken);
        return token != null;
    }

    @GET
    @Produces("application/json")
    @Path("middlename")
    public Response getMiddlename(@QueryParam("userToken") String userToken) {

        if (!checkToken(userToken)) {
            return Response.status(Response.Status.FORBIDDEN).entity(new Error("bad token")).build();
        }

        String name = properties.getProperty("middlename");
        return Response.ok(new Info(name)).build();
    }

    @GET
    @Produces("application/json")
    @Path("lastname")
    public Response getLastname(@QueryParam("userToken") String userToken) {

        if (!checkToken(userToken)) {
            return Response.status(Response.Status.FORBIDDEN).entity(new Error("bad token")).build();
        }

        String name = properties.getProperty("lastname");
        return Response.ok(new Info(name)).build();
    }


    @GET
    @Produces("application/json")
    @Path("weight")
    public Response getWeight(@QueryParam("userToken") String userToken) {

        if (!checkToken(userToken)) {
            return Response.status(Response.Status.FORBIDDEN).entity(new Error("bad token")).build();
        }

        String value = properties.getProperty("weight");
        return Response.ok(new Info(value)).build();
    }

    @GET
    @Produces("application/json")
    @Path("length")
    public Response getLength(@QueryParam("userToken") String userToken) {

        if (!checkToken(userToken)) {
            return Response.status(Response.Status.FORBIDDEN).entity(new Error("bad token")).build();
        }

        String value = properties.getProperty("length");
        return Response.ok(new Info(value)).build();
    }

    @GET
    @Produces("application/json")
    @Path("dateOfBirth")
    public Response getDateOfBirth(@QueryParam("userToken") String userToken) {

        if (!checkToken(userToken)) {
            return Response.status(Response.Status.FORBIDDEN).entity(new Error("bad token")).build();
        }

        String value = properties.getProperty("dateOfBirth");
        return Response.ok(new Info(value)).build();
    }

    @GET
    @Produces("image/jpeg")
    @Path("picture")
    public Response getPicture(@QueryParam("userToken") String userToken) {

        if (!checkToken(userToken)) {
            return Response.status(Response.Status.FORBIDDEN).entity(new Error("bad token")).build();
        }

        InputStream pictureInputStream = this.getClass().getResourceAsStream("/baby.jpg");

        try {
            BufferedImage image = ImageIO.read(pictureInputStream);

            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(image, "jpg", baos);
            byte[] imageData = baos.toByteArray();

            // uncomment line below to send non-streamed
            return Response.ok(imageData).build();

            // uncomment line below to send streamed
            // return Response.ok(new ByteArrayInputStream(imageData)).build();

        } catch (IOException e) {
            return Response.serverError().build();
        }
    }


}
