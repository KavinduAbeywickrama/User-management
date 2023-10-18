package com.usermanagement.fullstackbackend.repository;

import com.usermanagement.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
