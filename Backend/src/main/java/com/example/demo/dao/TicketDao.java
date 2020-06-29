package com.example.demo.dao;

import com.example.demo.model.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface TicketDao extends MongoRepository<Ticket, UUID> {
    public Ticket findByPid(UUID pid);
}
