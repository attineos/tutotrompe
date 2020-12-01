package com.attineos.tutotrompe.service;

import com.attineos.tutotrompe.entity.Bar;
import com.attineos.tutotrompe.repository.BarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class BarService {

    @Autowired
    private BarRepository barRepository;

    public Bar findBarById(int id) {
        return barRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Bar not found for id " + id));
    }

    public Bar findByName(String name) {
        return barRepository.findByName(name)
                .orElseThrow(() -> new EntityNotFoundException("Bar not found with name: " + name));
    }

    public void deleteBar(int id) {
        Bar bar = findBarById(id);

        barRepository.delete(bar);
    }

}
