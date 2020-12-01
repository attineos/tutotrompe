package com.attineos.tutotrompe.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Bar {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String name;

    @JsonManagedReference
    @OneToMany(mappedBy = "bar", cascade = CascadeType.ALL)
    private List<Beer> beerList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Beer> getBeerList() {
        return beerList;
    }

    public void setBeerList(List<Beer> beerList) {
        this.beerList = beerList;
    }
}
