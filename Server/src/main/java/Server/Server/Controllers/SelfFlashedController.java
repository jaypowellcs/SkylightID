package Server.Server.Controllers;


import Server.Server.Models.SelfFlashed;
import Server.Server.Repositories.SelfFlashedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping(path = "/skylight")
public class SelfFlashedController {

    @Autowired
    private SelfFlashedRepository selfFlashedRepository;

    //get all self flashed skylights
    @GetMapping(path="/selfflashed")
    public @ResponseBody Iterable<SelfFlashed> getAllSelfFlashed() {
        return selfFlashedRepository.findAll();
    }

    @GetMapping("/selfflashed/{id_selfflashed}")
    public ResponseEntity<SelfFlashed> getSelfFlashedById(@PathVariable("id_selfflashed") int id_selfflashed) {
        Optional<SelfFlashed> selfflashedData = selfFlashedRepository.findById(id_selfflashed);

        if (selfflashedData.isPresent()) {
            return new ResponseEntity<>(selfflashedData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
