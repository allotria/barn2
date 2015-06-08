package se.allotria.barn2.user.impl;

import com.google.inject.Singleton;
import org.joda.time.DateTime;
import se.allotria.barn2.user.Token;
import se.allotria.barn2.user.TokenService;

import java.util.HashMap;
import java.util.Map;

import static org.apache.commons.codec.digest.DigestUtils.sha1Hex;
import static org.apache.commons.lang3.StringUtils.isEmpty;

@Singleton
public class TokenServiceImpl implements TokenService {

    private static final int USER_TOKEN_TTL = 900;
    private static final int ADIM_TOKEN_TTL = 2;

    private Map<String, Token> issuedTokens = new HashMap<>();

    @Override
    public Token getToken(String user) {
        return createToken(user, false);
    }

    private Token createToken(String user, boolean isAdmin) {
        if (!isEmpty(user)) {
            DateTime expiresDT = DateTime.now().plusSeconds(isAdmin ? ADIM_TOKEN_TTL : USER_TOKEN_TTL);
            long expires = expiresDT.toDate().getTime();
            String sha1 = getSha1(user, expires, isAdmin);
            Token token = new Token(user, sha1, expires, isAdmin);

            issuedTokens.put(sha1, token);
            return token;
        }

        return null;
    }

    private String getSha1(String user, long expires, boolean isAdmin) {
        String tokenInput = String.format("%s|%d|%s", user, expires, Boolean.toString(isAdmin));
        return sha1Hex(tokenInput);
    }

    @Override
    public Token getAdminToken(String adminUser) {
        return createToken(adminUser, true);
    }

    @Override
    public Token checkToken(String tokenValue) {

        Token token = issuedTokens.get(tokenValue);
        if (token == null) {
            return null;
        }

        boolean expired = new DateTime(token.getExpires()).isBeforeNow();

        if (expired) {
            issuedTokens.remove(tokenValue);
            return null;
        }

        return token;
    }
}
