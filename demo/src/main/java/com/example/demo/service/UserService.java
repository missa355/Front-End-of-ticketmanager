package com.example.demo.service;


import com.example.demo.dao.UserDao;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private UserDao userDao;


    @Autowired
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public void addUser(User user){
        userDao.save(user);
    }

    public List<User> getAllUsers(){
        return userDao.findAll();
    }

    public Optional<User> getUserById(String uid){
        return userDao.findById(uid);
    }

    public void deleteUserById(String uid){
        userDao.deleteById(uid);
    }

    public void updateUserById(User user, String uid){
        userDao.deleteById(uid); //delete old one
        userDao.save(user); //save new modifies one
    }
}
