import { readFileSync, writeFileSync } from "fs";


/**
 * @desc get all user data
 * @name GET /api/v1/user
 * @access public
 */

export const getAllUser = (req, res) => {
    
    // get user data form json db
    const users = JSON.parse(readFileSync('db/users.json').toString());

    //send data
    res.status(200).json(users)
}


/**
 * @desc create new users
 * @name POST /api/v1/user
 * @access public
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
            user: req.body,
            msg: 'New User Created Successfully!',
        })

    }

}


/**
 * @desc get single user
 * @name GET /api/v1/user
 * @access public
 */

export const singleUser = (req, res) => {

    // find user by params id
    const { id } = req.params;

    // get user data form json db
    const users = JSON.parse(readFileSync('db/users.json').toString());

    //find single user id
    const singleUser = users.find(data => data.id === id );

    if(singleUser){
        res.status(200).json(singleUser);
    }else{
        res.status(404).json({msg: "No such user found!"});
    }

}


/**
 * @desc Delete user
 * @name DELETE /api/v1/user
 * @access public
 */

export const deleteUser = (req, res) => {

    // find user by params id
    const { id } = req.params;

    // get user data form json db
    const users = JSON.parse(readFileSync('db/users.json').toString());

    // isParams id Exist check
    if(users.some(data => data.id == id)){
        //find single user id
        const updatedData = users.filter(data => data.id != id );

        // save updated user data
        writeFileSync('./db/users.json', JSON.stringify(updatedData));

        res.status(200).json({
            msg: `Deleted User with ID ${id}`
        })
    }else{
        res.status(404).json({
            msg: 'No such user to be deleted!'
        })
    }

}

/**
 * @desc update user
 * @name PUT/PATCH /api/v1/user
 * @access public
 */

export const updateUser = (req, res) => {

    // find user by params id
    const { id } = req.params;

    // get user data form json db
    const users = JSON.parse(readFileSync('db/users.json').toString());

    // isParams id Exist check
    if(users.some(data => data.id == id)){
        // find user index
        users[users.findIndex(data => data.id == id)] = {
            ...users[users.findIndex(data => data.id == id)],
            ...req.body
        }
        
        // save updated user data
        writeFileSync('./db/users.json', JSON.stringify(users));

        res.status(200).json({
            msg: `user data updaed ${id}`
        })
    }else{
        res.status(404).json({
            msg: 'No such user to be update!'
        })
    }

}