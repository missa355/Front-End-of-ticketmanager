package com.example.demo.api;

import com.example.demo.model.Person;
import com.example.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin
@RequestMapping("/api/v1/person")
@RestController //makes it so that we can use RESTAPI methods
public class PersonController {
    private final PersonService personService;

    @Autowired //this injects the service into the contructir
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping //makes this fuction a post request
    public String addPerson(@RequestBody Person person)
    {
        return personService.addPerson(person);
    }

    @GetMapping
    public List<Person> getAllPeople()
    {
        return personService.getAllPeople();
    }

    @GetMapping(path = "/{id}")
    public Person SelectPersonById(@PathVariable("id") UUID id){
        return personService.SelectPersonById(id)
                .orElse(null);
    }
    @DeleteMapping(path = "/{id}")
    public void DeletePersonById(@PathVariable("id") UUID id){
        personService.DeletPersonById(id);
    }

//    @PutMapping(path = "/{id}")
//    public void UpdatePersonById(@PathVariable("id") UUID id, @RequestBody Person person){personService.UpdatePersonById(id, person);}

}
