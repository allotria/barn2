package se.allotria.barn2.user;

import org.joda.time.DateTime;

public class Token {
    private String user;
    private String token;
    private long expires;
    private boolean admin;

    public Token() {
        // for Gson
    }

    public Token(String user, String token, long expires, boolean isAdmin) {
        this.user = user;
        this.token = token;
        this.expires = expires;
        this.admin = isAdmin;
    }

    public String getUser() {
        return user;
    }

    public String getToken() {
        return token;
    }

    public long getExpires() {
        return expires;
    }

    public boolean isAdmin() {
        return admin;
    }
}
