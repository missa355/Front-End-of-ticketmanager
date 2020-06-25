package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection = "Projects")
public class Project {
    @Id
    private final UUID pid;
    private final String projectName;
    private final String dateCreated;
    private final List<String> members;
    private final List<String> projectManagers;




    public Project(@JsonProperty("pid") UUID pid,
                   @JsonProperty("projectName") String projectName,
                   @JsonProperty("dateCreated") String dateCreated,
                   @JsonProperty("members") List<String> members,
                   @JsonProperty("projectManagers") List<String> projectManagers)
                   {
        this.pid = pid;
        this.projectName = projectName;
        this.dateCreated = dateCreated;
                       this.members = members;
                       this.projectManagers = projectManagers;
                   }

    public UUID getPid() {
        return pid;
    }

    public String getProjectName() {
        return projectName;
    }

    public String getDateCreated() {
        return dateCreated;
    }
    public List<String> getMembers() {
        return members;
    }

    public List<String> getProjectManagers() {
        return projectManagers;
    }
}
