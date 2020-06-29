package com.example.demo.service;

import com.example.demo.dao.AdminDao;
import com.example.demo.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AdminService {
    private AdminDao adminDao;

    @Autowired
    public AdminService(AdminDao adminDao) {
        this.adminDao = adminDao;
    }

    public String AddAdmin(Admin admin){
        adminDao.save(admin);
        return "Added Person with id " + admin.getAid() + "and name "  + admin.getName();

    }
    public List<Admin> getAllAdmins(){
        return adminDao.findAll();//super class method
    }

    public Optional<Admin> getAdminById(UUID aid){
        return adminDao.findById(aid);//super class method
    }

    public void deleteAdminById(UUID aid){
        adminDao.deleteById(aid); //super class method
    }
}
