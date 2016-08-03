package af.home.com;

import af.home.com.dao.entity.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Exslims
 * 04.08.2016
 */
@RestController
public class UserController {
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public User getTestUser(){
        return new User("Exslims",123000);
    }
    @RequestMapping(value = "/testPost", method = RequestMethod.POST)
    public User login(@RequestParam(value = "nickname") String nickname){
        return new User(nickname,213);
    }
}
