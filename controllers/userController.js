import { readFileSync, writeFileSync } from "fs";


/**
 * @Desc get all user data
 * @Name GET /api/v1/user
 * @Access Public
 */

export const getAllUser = (req, res) => {
    
    // get user data form json db
    const users = JSON.parse(readFileSync('db/users.json').toString());

    //send data
    res.status(200).json(users)
}


/**
 * @Desc create new users
 * @Name POST /api/v1/user
 * @Access Public
 */

export const createUser = (req, res) => {
    // get user data form json db
    const users = JSON.parse(readFileSync('db/users.json').toString());

    // get data form req body
    const {name, skill} = req.body;

    // filds validation
    if(!name || !skill){
        return res.status(400).json({msg: 'Please fill in all fields'})
    }else{

        // add new user to array
        users.push({
            id: Date.now() + "_" + Math.floor(Math.random() * 100000).toString(),
            name,
            skill
        });

        // save updated data back to the file
        writeFileSync('./db/users.json', JSON.stringify(users));
            //send data
        res.status(201).json({
            msg: 'New User Created Successfully!',
        })

    }

}