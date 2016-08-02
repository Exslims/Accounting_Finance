package af.home.com;

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
}
