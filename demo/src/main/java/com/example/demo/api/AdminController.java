package com.example.demo.api;


import com.example.demo.model.Admin;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin
@RequestMapping("/api/Admin")
@RestController
public class AdminController {
    private final AdminService adminService;

    @Autowired//inject the service
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping
    public String addAdmin(@RequestBody Admin admin){
        return adminService.AddAdmin(admin);
    }

    @GetMapping
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmins();
    }

    @GetMapping(path = "/{id}")
    public Admin getAdminById(@PathVariable("id") UUID aid){
        return adminService.getAdminById(aid)
                .orElse(null);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteAdminById(@PathVariable("id") UUID aid){
        adminService.deleteAdminById(aid);
    }


}
