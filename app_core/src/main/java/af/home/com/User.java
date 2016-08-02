package af.home.com;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Exslims
 * 03.08.2016
 */
@Document(collection = "user")
public class User {
    @Id
    private String id;
    private String nickname;
    private double balance;

    public User() {
    }

    public User(String nickname, double balance) {
        this.nickname = nickname;
        this.balance = balance;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", nickname='" + nickname + '\'' +
                ", balance=" + balance +
                '}';
    }
}
