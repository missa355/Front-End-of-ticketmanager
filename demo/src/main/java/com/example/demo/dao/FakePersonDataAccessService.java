//package com.example.demo.dao;
//
//import com.example.demo.model.Person;
//import org.springframework.stereotype.Repository;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//import java.util.UUID;
//
////This is where spring framework comes in
//@Repository("fakeDao") //makes it os that this class act as repsirtory
//
////-----------
//
//public class FakePersonDataAccessService implements PersonDao{
//    private static List<Person> DB = new ArrayList<>();
//
//    @Override
//    public int insertPerson(UUID id, Person person) {
//        System.out.println(person.getName());
//        System.out.println(person.getId());
//        DB.add(new Person(id, person.getName()));
//        return 1;
//    }
//
//    @Override
//    public Optional<Person> SelectPersonById(UUID id) {
//        return  DB.stream()
//                .filter(person -> person.getId().equals(id))
//                .findFirst();
//    }
//
//    @Override
//    public int DeletePersonById(UUID Id) {
//        Optional<Person> maybePerons = SelectPersonById(Id);
//        if(maybePerons.isEmpty()){
//            return 0;
//        }
//        DB.remove(maybePerons.get());
//        return 1;
//
//    }
//
//    @Override
//    public int UpdatePersonById(UUID id, Person person) {
//        return SelectPersonById(id)
//                .map(person1 -> {
//                    int indexofpersontoupdate = DB.indexOf(person1);
//                    if(indexofpersontoupdate >= 0){
//                        DB.set(indexofpersontoupdate, new Person(id, person.getName()));
//                        return 1;
//                    }
//                    return 0;
//                }).orElse(null);
//
//    }
//
//    @Override
//    public List<Person> selectAllPeople() {
//        return DB;
//    }
//
//}
