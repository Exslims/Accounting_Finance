package af.home.com.dao.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Reference;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

/**
 * Exslims
 * 03.08.2016
 */
@Document(collection = "operation")
public class Operation {
    @Id
    private String id;

    @Reference
    private User owner;
    private double sum;
    private Date creationDate;
    private String title;
    private String description;

    public Operation() {
    }

    public Operation(User owner, double sum, Date creationDate, String title, String description) {
        this.owner = owner;
        this.sum = sum;
        this.creationDate = creationDate;
        this.title = title;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getSum() {
        return sum;
    }

    public void setSum(double sum) {
        this.sum = sum;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return "Operation{" +
                "id='" + id + '\'' +
                ", owner=" + owner +
                ", sum=" + sum +
                ", creationDate=" + creationDate +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
