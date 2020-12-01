package com.attineos.tutotrompe.web.api;

import com.attineos.tutotrompe.entity.Bar;
import com.attineos.tutotrompe.service.BarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/service/bar")
public class BarApi {

    @Autowired
    private BarService barService;

    @GetMapping("/{id}")
    public ResponseEntity<Bar> getBar(@PathVariable int id) {
        Bar bar = barService.findBarById(id);

        return ResponseEntity.ok(bar);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBar(@PathVariable int id) {
        barService.deleteBar(id);
    }
}
