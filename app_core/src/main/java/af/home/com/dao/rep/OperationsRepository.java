package af.home.com.dao.rep;

import af.home.com.dao.entity.Operation;
import af.home.com.dao.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Exslims
 * 03.08.2016
 */
@Repository
public interface OperationsRepository extends MongoRepository<Operation,String> {
    Operation findByTitle(@Param("title") String title);
    Operation findByOwner(@Param("owner")User owner);
}
