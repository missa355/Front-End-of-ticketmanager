package com.example.demo.api;


import com.example.demo.model.Admin;
import com.example.demo.model.Project;
import com.example.demo.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RequestMapping("/api/Project")
@RestController
public class ProjectController {
    private ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping
    public void addProject(@RequestBody Project project){
        projectService.AddProject(project);
    }

    @GetMapping
    public List<Project> gettAllProjects(){
        return projectService.getAllProjects();
    }

    @GetMapping(path = "/{id}")
    public Project getProjectById(@PathVariable("id") UUID pid){
        return projectService.getProjectById(pid)
                .orElse(null);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteProjectById(@PathVariable("id") UUID pid){
        projectService.deleteProjectById(pid);
    }
}
