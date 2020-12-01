package com.attineos.tutotrompe.repository;

import com.attineos.tutotrompe.entity.Bar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BarRepository extends JpaRepository<Bar, Integer> {

    Optional<Bar> findByName(String name);
}
