package se.allotria.barn2.user;

public interface TokenService {


    Token getToken(String user);

    Token getAdminToken(String adminUser);

    Token checkToken(String tokenValueSha1);
}
