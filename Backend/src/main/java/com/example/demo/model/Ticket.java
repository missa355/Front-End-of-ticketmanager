package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection = "Tickets")
public class Ticket {
    @Id
    private final UUID tid; // this is the ID of the ticket
    private final UUID pid; //this is the ID of the project the ticket belongs to
    private final String uid;//this is the ID of the person who created the ticket
    private final String Ticketname;
    private final String dateCreated;
//    private final String CreatorName;
    private final String desc;
    private final List<String> comments;
    private final String status;
    private final String priority;
    private final String category;
    private final List<String> logs;


    public Ticket(@JsonProperty("tid") UUID tid,
                  @JsonProperty("pid") UUID pid,
                  @JsonProperty("uid") String uid,
                  @JsonProperty("Ticketname") String Ticketname,
                  @JsonProperty("dateCreated") String dateCreated,
//                @JsonProperty("CreatorName") String CreatorName,
                  @JsonProperty("desc") String desc,
                  @JsonProperty("comments") List<String> comments,
                  @JsonProperty("status") String status,
                  @JsonProperty("priority") String priority,
                  @JsonProperty("category") String category,
                  @JsonProperty("logs") List<String> logs) {

        this.tid = tid;
        this.pid = pid;
        this.uid = uid;
        this.Ticketname = Ticketname;
        this.dateCreated = dateCreated;
//        this.CreatorName = CreatorName;
        this.desc = desc;
        this.comments = comments;
        this.status = status;
        this.priority = priority;
        this.category = category;
        this.logs = logs;
    }

    public UUID getTid() {
        return tid;
    }

    public UUID getPid() {
        return pid;
    }

    public String getUid() {
        return uid;
    }

    public String getTicketname() {
        return Ticketname;
    }

    public String getDateCreated() {
        return dateCreated;
    }

//    public String getCreatorName() {
//        return CreatorName;
//    }

    public String getDesc() {
        return desc;
    }

    public String getStatus() {
        return status;
    }

    public String getPriority() {
        return priority;
    }

    public String getCategory() {
        return category;
    }

    public List<String> getLogs() {
        return logs;
    }

    public List<String> getComments() {
        return comments;
    }
}
