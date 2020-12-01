package com.attineos.tutotrompe.web.api;

import com.attineos.tutotrompe.dto.CreateBeerDTO;
import com.attineos.tutotrompe.dto.UpdateBeerDTO;
import com.attineos.tutotrompe.entity.Beer;
import com.attineos.tutotrompe.service.BeerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/service/beer")
public class BeerApi {

    @Autowired
    private BeerService beerService;

    @PostMapping
    public ResponseEntity<Beer> createBeer(@Valid @RequestBody CreateBeerDTO createBeerDTO) {
        Beer beer = beerService.createBeer(createBeerDTO);

        return ResponseEntity.ok(beer);
    }

    @GetMapping
    public ResponseEntity<List<Beer>> getBeersByBar(@RequestParam String barName) {
        List<Beer> beersByBar = beerService.getBeersByBar(barName);

        return ResponseEntity.ok(beersByBar);
    }

    @PostMapping("/quantity")
    public ResponseEntity<Beer> updateBeerQuantityForBar(@Valid @RequestBody UpdateBeerDTO updateBeerDTO) {
        Beer beer = beerService.updateBeerQuantity(updateBeerDTO);

        return ResponseEntity.ok(beer);
    }

}
