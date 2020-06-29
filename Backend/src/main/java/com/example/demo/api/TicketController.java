package com.example.demo.api;


import com.example.demo.model.Ticket;
import com.example.demo.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;


@CrossOrigin
@RequestMapping("/api/Ticket")
@RestController
public class TicketController {

    private TicketService ticketService;


    @Autowired
    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @PostMapping
    public void addTicket(@RequestBody Ticket ticket){
        ticketService.AddTicket(ticket);
    }

    @GetMapping
    public List<Ticket> getAllTickets(){
        return ticketService.getAllTickets();
    }

    @GetMapping(path = "/{id}")
    public Ticket getTicketById(@PathVariable("id") UUID tid){
        return ticketService.getTicketById(tid)
                .orElse(null);
    }
    @DeleteMapping(path = "/{id}")
    public void deleteTicketById(@PathVariable("id") UUID tid){
        ticketService.deleteTicketById(tid);
    }

    @GetMapping(path= "/projects/{id}")
    public Stream<Ticket> getAllTicketsInProject(@PathVariable("id") UUID pid){
        return ticketService.getAllTicketsInProject(pid);

    }
}
