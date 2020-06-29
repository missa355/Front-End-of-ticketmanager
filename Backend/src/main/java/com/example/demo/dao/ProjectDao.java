package com.example.demo.dao;

import com.example.demo.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ProjectDao extends MongoRepository<Project, UUID> {
}
