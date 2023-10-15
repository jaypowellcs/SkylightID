package Server.Server.Controllers;


import Server.Server.Models.CurbMount;
import Server.Server.Models.DeckMount;
import Server.Server.Repositories.CurbMountRepository;
import Server.Server.Repositories.DeckMountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping(path = "/skylight")
public class DeckMountController {
    @Autowired
    private DeckMountRepository deckMountRepository;

    //get all deckmount skylights
    @GetMapping(path="/deckmount")
    public @ResponseBody Iterable<DeckMount> getAllDeckMounts() {
        return deckMountRepository.findAll();
    }

    @GetMapping("/deckmount/{id_deckmount}")
    public ResponseEntity<DeckMount> getDeckMountById(@PathVariable("id_deckmount") int id_deckmount) {
        Optional<DeckMount> deckmountData = deckMountRepository.findById(id_deckmount);

        if (deckmountData.isPresent()) {
            return new ResponseEntity<>(deckmountData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
