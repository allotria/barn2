package client;

import com.google.gson.Gson;
import org.apache.http.NameValuePair;
import org.apache.http.client.fluent.Request;
import org.apache.http.message.BasicNameValuePair;
import se.allotria.barn2.user.Token;

import java.io.IOException;

public class AddUser {

    public static void main(String[] args) throws Exception {

        String baseUrl = args[0];

        System.out.println(baseUrl);

        Token token = getAdminToken(baseUrl);

        addUserFoo(baseUrl, token);

        String userToken = printUserToken(baseUrl);


        String firstname = Request.Get(baseUrl + "/info/firstname?userToken=" + userToken).execute().returnContent().asString();
        System.out.println(firstname);

    }

    private static String printUserToken(String baseUrl) throws IOException {
        String userTokenJson = Request.Get(baseUrl + "/login/getToken/foo/foo").execute().returnContent().asString();
        Gson gson = new Gson();

        Token userToken = gson.fromJson(userTokenJson, Token.class);

        System.out.println(userTokenJson);
        System.out.println(userToken.getToken());
        return userToken.getToken();
    }

    private static void addUserFoo(String baseUrl, Token token) throws IOException {
        NameValuePair adminToken = new BasicNameValuePair("adminToken", token.getToken());
        NameValuePair user = new BasicNameValuePair("user", "foo");
        NameValuePair password = new BasicNameValuePair("password", "foo");

        String result = Request.Post(baseUrl + "/login/addUser")
                .bodyForm(adminToken, user, password).execute().returnContent().asString();

        System.out.println(result);
    }

    private static Token getAdminToken(String baseUrl) throws IOException {
        String adminTokenJson = Request.Get(baseUrl + "/login/getAdminToken/manuel/allotria").execute().returnContent().asString();

        System.out.println("admin: " + adminTokenJson);

        Gson gson = new Gson();
        return gson.fromJson(adminTokenJson, Token.class);
    }
}
