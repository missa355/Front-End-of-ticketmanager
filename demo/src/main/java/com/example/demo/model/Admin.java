package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "Admins")
public class Admin {
    @Id
    private final String id;
    private final String name;

    public Admin(@JsonProperty("id") String id, @JsonProperty("name") String name) {
        this.id = id;
        this.name = name;
    }

    public String getAid() {
        return id;
    }

    public String getName() {
        return name;
    }
}
