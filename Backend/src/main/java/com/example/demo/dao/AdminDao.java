package com.example.demo.dao;

import com.example.demo.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface AdminDao extends MongoRepository<Admin, UUID> {
}
