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
    private final String name; //this name needs to match the JsonPropey("name")
    private final List<UUID> projectIds;


    public User(@JsonProperty("uid") String uid, @JsonProperty("name") String name,@JsonProperty("projectIds") List<UUID> projectIds) {
        this.uid = uid;
        this.name = name;
        this.projectIds = projectIds;
    }

    public String getUid() {
        return uid;
    }

    public List<UUID> getProjectIds() {
        return projectIds;
    }

    public String getName() {
        return name;
    }


}
