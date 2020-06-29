package com.example.demo.api;


import com.example.demo.model.Project;
import com.example.demo.model.ProjectManager;
import com.example.demo.service.ProjectManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("/api/ProjectManager")
@RestController
@CrossOrigin
public class ProjectManagerController {
    private ProjectManagerService projectManagerService;

    @Autowired
    public ProjectManagerController(ProjectManagerService projectManagerService) {
        this.projectManagerService = projectManagerService;
    }

    @PostMapping
    public void addProjectManager(@RequestBody ProjectManager projectManager){
        projectManagerService.AddProjectManager(projectManager);
    }

    @GetMapping
    public List<ProjectManager> getAllProjectManager(){
        return projectManagerService.getAllProjectManager();
    }
    @GetMapping(path = "/{id}")
    public ProjectManager getProjectManagerById(@PathVariable("id") String pmid){
        return projectManagerService.getProjectManagerbyId(pmid)
                .orElse(null);
    }
    @DeleteMapping(path = "/{id}")
    public void deleteProjectManagerById(@PathVariable("id") String pmid){
        projectManagerService.deleteProjectManagerById(pmid);
    }





}
