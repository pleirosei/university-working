package com.university.students;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by seanlivingston on 11/24/14.
 */
@RestController
@RequestMapping("/students")
public class RestStudentController {
    private StudentRepository studentRepository;

    @Autowired
    public RestStudentController (StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Student create(@RequestBody @Valid Student student) {
        return this.studentRepository.save(student);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Student> list() {
        return this.studentRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Student get(@PathVariable("id") long id) {
        return this.studentRepository.findOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Student update(@PathVariable("id") long id, @RequestBody @Valid Student student) {
        return studentRepository.save(student);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> delete(@PathVariable("id") long id) {
        this.studentRepository.delete(id);
        return new ResponseEntity<Boolean>(Boolean.TRUE, HttpStatus.OK);
    }

}
