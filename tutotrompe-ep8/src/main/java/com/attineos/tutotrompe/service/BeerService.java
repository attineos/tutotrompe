package com.attineos.tutotrompe.service;

import com.attineos.tutotrompe.dto.CreateBeerDTO;
import com.attineos.tutotrompe.dto.UpdateBeerDTO;
import com.attineos.tutotrompe.entity.Bar;
import com.attineos.tutotrompe.entity.Beer;
import com.attineos.tutotrompe.repository.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class BeerService {

    @Autowired
    private BarService barService;

    @Autowired
    private BeerRepository beerRepository;

    public Beer createBeer(CreateBeerDTO createBeerDTO) {
        Bar bar = barService.findByName(createBeerDTO.getBarName());

        Beer beer = new Beer();
        beer.setName(createBeerDTO.getBeerName());
        beer.setBar(bar);
        beer.setQuantity(0D);

        return beerRepository.save(beer);
    }

    public List<Beer> getBeersByBar(String barName) {
        Bar bar = barService.findByName(barName);

        return beerRepository.findByBar(bar);
    }

    public Beer updateBeerQuantity(UpdateBeerDTO updateBeerDTO) {
        Bar bar = barService.findByName(updateBeerDTO.getBarName());

        Beer beer = beerRepository.findOneByNameAndBar(updateBeerDTO.getBeerName(), bar)
                .orElseThrow(() -> new EntityNotFoundException("Beer not found with name: " + updateBeerDTO.getBeerName() + " in bar: " + updateBeerDTO.getBarName()));


        beer.setQuantity(beer.getQuantity() + updateBeerDTO.getQuantity());

        return beerRepository.save(beer);
    }

}
