package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection = "User")
public class User {
    @Id
    private final String uid;
//    private final String Email;
    private final String Password;
    private final String Firstname; //this name needs to match the JsonPropey("name")
    private final String Lastname; //this name needs to match the JsonPropey("name")
    private final List<UUID> projectIds;


    public User(@JsonProperty("uid") String uid,
//                @JsonProperty("Email") String email,
                @JsonProperty("Password") String Password,
                @JsonProperty("Firstname") String Firstname,
                @JsonProperty("Lastname") String Lastname,
                @JsonProperty("projectIds") List<UUID> projectIds) {

        this.uid = uid;
//        Email = email;
        this.Password = Password;
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.projectIds = projectIds;
    }

    public String getUid() {
        return uid;
    }

    public List<UUID> getProjectIds() {
        return projectIds;
    }

//    public String getName() {
//        return name;
//    }

//    public String getEmail() {
//        return Email;
//    }


    public String getFirstname() {
        return Firstname;
    }

    public String getLastname() {
        return Lastname;
    }

    public String getPassword() {
        return Password;
    }
}
