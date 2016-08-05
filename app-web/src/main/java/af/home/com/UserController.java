package af.home.com;

import af.home.com.dao.entity.User;
import af.home.com.dao.rep.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Exslims
 * 04.08.2016
 */
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;

    @RequestMapping(value = "/authentication", method = RequestMethod.POST)
    public User login(@RequestParam(value = "nickname") String nickname){
        User user = repository.findByNickname(nickname);
        if(user == null){
            user = new User(nickname,0);
            repository.save(user);
        }
        return user;
    }
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public void updateUser(@RequestBody User user){
        User loggedUser = repository.findByNickname(user.getNickname());
        loggedUser.setBalance(user.getBalance());
        repository.save(loggedUser);
    }
}
