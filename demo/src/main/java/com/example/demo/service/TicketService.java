package com.example.demo.service;


import com.example.demo.dao.TicketDao;
import com.example.demo.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Stream;

@Service
public class TicketService {

    private TicketDao ticketDao;

    @Autowired
    public TicketService(TicketDao ticketDao) {
        this.ticketDao = ticketDao;
    }

    public void AddTicket(Ticket ticket){
        ticketDao.save(ticket);

    }
    public List<Ticket> getAllTickets(){

        return ticketDao.findAll();
    }

    public Optional<Ticket> getTicketById(UUID tid){
        return ticketDao.findById(tid);
    }
    public void deleteTicketById(UUID tid){
        ticketDao.deleteById(tid);
    }

    public Stream<Ticket> getAllTicketsInProject(UUID pid){
        List<Ticket> tickets =  ticketDao.findAll();
        return tickets.stream()
                .filter(ticket -> ticket.getPid().equals(pid));

    }
}
