package com.example.demo.service;

import com.example.demo.dao.PersonDao;
import com.example.demo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class PersonService {

    //this is a field injection(this works but the constrcutor below is considerd better)
    @Autowired
    private PersonDao personDao;

//    @Autowired //this injects into the contructor
//    public PersonService(PersonDao personDao) { // if you DB is mongo, then switch fakeDao to mongo
//        this.personDao = personDao;
//    }

//    public PersonService(@Qualifier("MongoDB") PersonDao personDao) { // if you DB is mongo, then switch fakeDao to mongo
//        this.personDao = personDao;
//    }


    public String addPerson(Person person){
        personDao.save(person);
        return "Added Person with id " + person.getId() + "and name "  + person.getName();
    }

    public List<Person> getAllPeople(){
        return personDao.findAll();//using mongoDB respoitory methods
    }
    public Optional<Person> SelectPersonById(UUID id){
        return personDao.findById(id);
    }

    public void DeletPersonById(UUID id){
        personDao.deleteById(id);
    }

//    public void UpdatePersonById(UUID id, Person person){return personDao. ;}
}
