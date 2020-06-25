package com.example.demo.service;


import com.example.demo.dao.ProjectDao;
import com.example.demo.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProjectService {

    private ProjectDao projectDao;


    @Autowired//inject Dao
    public ProjectService(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }

    public void AddProject(Project project){
        projectDao.save(project);
    }

    public List<Project> getAllProjects(){
        return projectDao.findAll();
    }

    public Optional<Project> getProjectById(UUID pid){
        return projectDao.findById(pid);
    }

    public void deleteProjectById(UUID pid){
        projectDao.deleteById(pid);
    }
}
