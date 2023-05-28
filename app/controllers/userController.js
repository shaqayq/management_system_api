const db = require('../boot/mysql');
const createUserTable = require('../models/UserModel')


const userList =(req , res , next)=>{   
  const userData=db.connection.query(`SELECT * FROM users` , (error,result ) => {
    if(error) throw error;
    res.send({  
     usersList: result
       })
  });
   
}

const userAdd = (req, res, next) => {
  createUserTable();
  const {first_name , last_name , email , mobile} = req.body

  const UserData = {
    first_name,
    last_name,
    email,
    mobile
    
  };

  db.connection.query('INSERT INTO users SET ?', UserData, (err, result) => {
    if (err) {
     console.log(err);
      res.status(500).send({
        success: false,
        message: 'Failed to add user'
      });
    } else {
      // console.log("User added successfully!");
      res.status(201).send({
        success: true,
        message: 'User added successfully!'
      });
    }
  });
};

const FilterColumn = (req, res) => {
  let projection = {};

  if (req.query.hasOwnProperty('field')) {
    projection = req.query.field.split(',').reduce((total, current) => {
      return { [current]: 1, ...total };
    }, {});
  }

 const query = `SELECT ${Object.keys(projection).join(',')} FROM users`;
  db.connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve users',
      });
    } else {
      res.status(200).json({
        success: true,
        data: {
          users: results,
        },
      });
    }
  });
};

const findById =(req , res , next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Invalid ID",
      });
    }
  
    db.connection.query(`SELECT * FROM users WHERE id = ?`, [id], (error, results) => {
      if (error) {
        console.error('Error retrieving user:', error);
        return res.status(500).json({
          success: false,
          message: 'Failed to retrieve user',
        });
      }
  
      if (results.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      const user = results[0];
      res.status(200).json({
        success: true,
        data: {
          user,
        },
      });
    });
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve user',
    });
  }
  
}

module.exports = {
    userList, 
    userAdd ,
    FilterColumn,
    findById
}