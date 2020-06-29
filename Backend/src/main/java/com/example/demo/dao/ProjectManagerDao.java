package com.example.demo.dao;

import com.example.demo.model.ProjectManager;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ProjectManagerDao extends MongoRepository<ProjectManager, String> {
}
