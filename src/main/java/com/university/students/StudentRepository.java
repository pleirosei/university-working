package com.university.students;

/**
 * Created by seanlivingston on 11/22/14.
 */

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface StudentRepository extends CrudRepository<Student, Long> {

    @Override
    List<Student> findAll();
//    List<Student> findById(@Param("id") Integer id);
//    List<Student> findByLastName(@Param("lastname") String lastName);
}
