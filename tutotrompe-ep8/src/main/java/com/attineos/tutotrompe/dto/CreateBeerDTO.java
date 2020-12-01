package com.attineos.tutotrompe.dto;

import javax.validation.constraints.NotNull;

public class CreateBeerDTO {

    @NotNull
    private String beerName;

    @NotNull
    private String barName;

    public String getBeerName() {
        return beerName;
    }

    public void setBeerName(String beerName) {
        this.beerName = beerName;
    }

    public String getBarName() {
        return barName;
    }

    public void setBarName(String barName) {
        this.barName = barName;
    }
}
