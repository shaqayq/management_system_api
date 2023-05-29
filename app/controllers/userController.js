const { result } = require('lodash');
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

const deleteById = (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id || id === '') {
      console.log(id);
      return res.status(404).send({
        success: false,
        message: "User Not Found"
      });
    }

    db.connection.query(`SELECT * FROM users WHERE id = ?`, [id], (error, results) => {
      if (error) {
        return res.status(500).send({
          success: false,
          message: "Error querying the database"
        });
      }

      if (results.length === 0) {
        return res.status(404).send({
          success: false,
          message: "User Not Found"
        });
      }

      db.connection.query(`DELETE FROM users WHERE id = ?`, [id], (deleteError, deleteResult) => {
        if (deleteError) {
          return res.status(500).send({
            success: false,
            message: "Error deleting the user"
          });
        }

        res.status(200).send({
          success: true,
          message: "User Successfully Deleted"
        });
      });
    });
  } catch (error) {
    next(error);
  }
};

const updateUser =(req , res ,next) => {
try {
  
  const {id} =req.params;
  if(!id || id === ''){
   return res.status(404).send({
      error:true ,
      message: "ID NOT EXISTS!!"
    })
  }

   db.connection.query('SELECT * FROM users WHERE id = ?' , id , (err , result)=> {
    if(err) {
      return res.status(500).send({
        success:false,
        message: " User Couldnot Update!"
      })
    }

    if(result.length == 0 ) {
     return res.status(400).send({
        success:false,
        message: "USER NOT FOUND!"
      })
    }

    db.connection.query('UPDATE users SET ? WHERE id = ?' , [req.body , id] , (updateError , updateResult)=> {
      if(updateError) {
      return  res.status(500).send({
          success:false ,
          message: "USER COULDNOT UPDATE!"
        })
      }

      res.status(200).send({
        success:true ,
        message: "USER UPDATED SUCCESSFULLY!"
      })
    })

  })

} catch (error) {
  next(error)
}

}

module.exports = {
    userList, 
    userAdd ,
    FilterColumn,
    findById,
    deleteById,
    updateUser
}