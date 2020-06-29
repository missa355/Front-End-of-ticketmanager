package com.example.demo.service;


import com.example.demo.dao.ProjectManagerDao;
import com.example.demo.model.ProjectManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProjectManagerService {

    private ProjectManagerDao projectManagerDao;

    @Autowired //inject dao
    public ProjectManagerService(ProjectManagerDao projectManagerDao) {
        this.projectManagerDao = projectManagerDao;
    }

    public void AddProjectManager(ProjectManager projectManager){
        projectManagerDao.save(projectManager);
    }

    public List<ProjectManager> getAllProjectManager(){
        return projectManagerDao.findAll();
    }

    public Optional<ProjectManager> getProjectManagerbyId(String pmid){
        return projectManagerDao.findById(pmid);
    }

    public void deleteProjectManagerById(String pmid){
        projectManagerDao.deleteById(pmid);
    }

}
