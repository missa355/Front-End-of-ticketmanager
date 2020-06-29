package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection = "ProjectManagers")
public class ProjectManager {
    @Id
    private final String pmid;
    private final String name;
    private List<UUID> projectIds;


    public ProjectManager(@JsonProperty("pmid") String pmid,
                          @JsonProperty("name") String name,
                          @JsonProperty("projectIds") List<UUID> projectIds) {
        this.pmid = pmid;
        this.name = name;
        this.projectIds = projectIds;
    }


    public String getPmid() {
        return pmid;
    }

    public String getName() {
        return name;
    }

    public List<UUID> getProjectIds() {
        return projectIds;
    }
}
