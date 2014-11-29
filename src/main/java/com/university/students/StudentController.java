package com.university.students;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by seanlivingston on 11/22/14.
 */
@Controller
@RequestMapping("/all-students")
public class StudentController {
    @RequestMapping(method = RequestMethod.GET)
    public String list(Model model) {
        return "index";
    }
}

