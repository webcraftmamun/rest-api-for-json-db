import { readFileSync, writeFileSync } from "fs";


/**
 * @desc get all user data
 * @name GET /api/v1/teacher
 * @access public
 */

export const getTeachers = (req, res) => {
    
    // get user data form json db
    const teachers = JSON.parse(readFileSync('db/teachers.json').toString());

    //send data
    res.status(200).json(teachers)
};


/**
 * @desc create new teacher
 * @name POST /api/v1/teacher
 * @access public
 */

export const createTeacher = (req, res) => {
    
    // get user data form json db
    const teachers = JSON.parse(readFileSync('db/teachers.json').toString());

    // get data form req body
    const {name, age, cell} = req.body;

    // filds validation
    if(!name || !age || !cell){
        return res.status(400).json({msg: 'Please fill in all fields'})
    }else{

        // add new user to array
        teachers.push({
            id: Date.now() + "_" + Math.floor(Math.random() * 100000).toString(),
            name,
            age,
            cell
        });

        // save updated data back to the file
        writeFileSync('./db/teachers.json', JSON.stringify(teachers));
            //send data
        res.status(201).json({
            user: req.body,
            msg: 'New Teacher Created Successfully!',
        })

    }
};
