package com.attineos.tutotrompe.repository;

import com.attineos.tutotrompe.entity.Bar;
import com.attineos.tutotrompe.entity.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BeerRepository extends JpaRepository<Beer, Integer> {

    List<Beer> findByName(String name);

    List<Beer> findByBar(Bar bar);

    Optional<Beer> findOneByNameAndBar(String name, Bar bar);
}
