package com.example.demo.dao;

import com.example.demo.model.Person;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.UUID;

public interface PersonDao extends MongoRepository<Person, UUID> {
//    int insertPerson(UUID id, Person person);
//
//    default int insertPerson(Person person){
//        System.out.println("interface");
//        UUID id = UUID.randomUUID();
//        return insertPerson(id, person);
//    }
//
//    Optional<Person> SelectPersonById(UUID id);
//
//    int DeletePersonById(UUID Id);
//
//    int UpdatePersonById(UUID id, Person person);
//
//    List<Person> selectAllPeople();
}
