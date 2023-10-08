package Server.Server.Controllers;

import Server.Server.Models.CurbMount;
import Server.Server.Repositories.CurbMountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@Controller
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping(path = "/skylight")
public class CurbMountController {
    @Autowired
    private CurbMountRepository curbMountRepository;

    //get all curbmount skylights
    @GetMapping(path="/curbmount")
    public @ResponseBody Iterable<CurbMount> getAllCurbMounts() {
        return curbMountRepository.findAll();
    }

    @GetMapping("/curbmount/{id_curbmount}")
    public ResponseEntity<CurbMount> getCurbMountById(@PathVariable("id_curbmount") int id_curbmount) {
        Optional<CurbMount> curbmountData = curbMountRepository.findById(id_curbmount);

        if (curbmountData.isPresent()) {
            return new ResponseEntity<>(curbmountData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
