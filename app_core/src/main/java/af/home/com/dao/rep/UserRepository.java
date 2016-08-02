package af.home.com.dao.rep;

import af.home.com.dao.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Exslims
 * 03.08.2016
 */
@Repository
public interface UserRepository  extends MongoRepository<User, String>{
    User findByNickname(@Param("nickname") String nickname);
}
