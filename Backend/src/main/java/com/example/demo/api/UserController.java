package com.example.demo.api;


import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.rmi.server.UID;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/User")

public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping(path = "/{id}")
    public User getUserById(@PathVariable("id") String uid){
        return userService.getUserById(uid)
                .orElse(null);
    }
    @DeleteMapping(path = "/{id}")
    public void deleteUserById(@PathVariable("id") String uid){
        userService.deleteUserById(uid);
    }

    //this does nothing, i use post with the same id so it just replaces it
//    @PutMapping(path = "/{id}")
//    public void updateUserById(@PathVariable("id") String uid, @RequestBody User newUser){
//        userService.updateUserById(newUser, uid);
//
//    }
}
