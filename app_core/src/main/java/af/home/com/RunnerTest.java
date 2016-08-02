package af.home.com;

import af.home.com.dao.entity.Operation;
import af.home.com.dao.entity.User;
import af.home.com.dao.rep.OperationsRepository;
import af.home.com.dao.rep.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Date;

/**
 * Exslims
 * 02.08.2016
 */
@Component("singleton")
public class RunnerTest {
    @Autowired
    private UserRepository repository;
    @Autowired
    OperationsRepository opRepository;

    @PostConstruct
    public void init(){
        repository.deleteAll();

        // save a couple of customers
        User exslims = new User("Exslims", 24000);
        User exslims2 = new User("Exslims2", 28000);

        repository.save(exslims);
        repository.save(exslims2);

        User owner = repository.findByNickname("Exslims");


        Operation operation = new Operation(owner,2000,new Date(),"TestTitle","Desc");
        opRepository.save(operation);

        // fetch all customers
//        System.out.println("Users found with findAll():");
//        System.out.println("-------------------------------");
//        for (User user : repository.findAll()) {
//            System.out.println(user);
//        }
//        System.out.println();

        System.out.println("User found with findByNickname('Exslims'):");
        System.out.println("--------------------------------");
        System.out.println(repository.findByNickname("Exslims"));

        System.out.println("Operation found with findByUser('User'):");
        System.out.println("--------------------------------");
        System.out.println(opRepository.findByOwner(owner));
    }
}
