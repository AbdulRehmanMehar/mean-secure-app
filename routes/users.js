const rp = require('request-promise');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User'); // User Model For Storing Users into Database


router.get('/', (req, res) => {
    User.find({}) // returns all user
        .then(users => {
            res.status(200).json({
                success: true,
                message: 'Users Array',
                data: users
            });
        }).catch(error => {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                data: error
            });
        });
}); // Returns an array of all users

router.post(
  "/add",
  [
    // Express-Validator Middleware
    check("name")
      .isLength({ min: 3 })
      .trim()
      .escape()
      .withMessage("Name must minimum 3 characters long"),
    check("email")
      .isEmail()
      .normalizeEmail() // escapes invalid characters if available
      .withMessage("Please enter a valid email"), // For custom message
    check("email").custom(value => {
      // value is the email
      return User.findOne({ email: value })
        .then(user => {
          if (user) return Promise.reject("User already registered");
        })
        .catch(error => Promise.reject(error)); // Send the Error If Occurs
    }),
    check("about")
      .isLength({ min: 40 }) // validates the length
        .trim().escape() // escapes invalid characters
      .withMessage("Please describe yourself => min length is 40 characters"), // custom error message
    check(["gplusURL", "twitterURL"])
      .optional() // If the values of 'fbURL', 'gplusURL', 'twitterURL' aren't empty then validates
      .custom(value => {
        return rp(value) // request-promise => a web scraping library
          .then(_ => value) // Doesn't effect our program
          .catch(_ => Promise.reject("Bad URL"));
      })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: "Validation Error Occured",
        data: errors.array()
      }); // Sends the 422 response if validation error occurs
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      about: req.body.about,
      socialLinks: {
        facebook: req.body.fbURL ? req.body.fbURL : null,
        gplus: req.body.gplusURL ? req.body.gplusURL : null,
        twitter: req.body.twitterURL ? req.body.twitterURL : null
      }
    });
    user
      .save()
      .then(result => {
        // result is the user we created
        res.status(201).json({
          success: true,
          message: "User Created",
          data: result
        });
      })
      .catch(error => {
        res.status(500).json({
          success: false,
          message: "Something went wrong",
          data: error
        });
      });
  }
);

router.get('/:uid', (req, res) => {
    const id = req.params.uid;
    User.findById(id)
        .then(user => {
            if(user){
                res.status(200).json({
                    success: true,
                    message: 'User found',
                    data: user
                });
            }else{
                res.status(400).json({
                    success: false,
                    message: 'User not found',
                    data: null
                });
            }
        }).catch(error => {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                data: error
            });
        });
}); // returns a user with id=:uid

router.patch(
  "/:uid",
  [
    // Express-Validator Middleware
    check("name")
    .optional()
        .trim().escape()
      .isLength({ min: 3 })
      .withMessage("Name must minimum 3 characters long"),
    check("email")
    .optional()
      .isEmail()
      .normalizeEmail() // escapes invalid characters if available
      .withMessage("Please enter a valid email"), // For custom message
    check("about")
    .optional()
      .trim()
      .escape()
      .isLength({ min: 40 }) // validates the length
      .withMessage("Please describe yourself => min length is 40 characters"), // custom error message
    check(["gplusURL", "twitterURL"])
      .optional() // If the values of 'fbURL', 'gplusURL', 'twitterURL' aren't empty then validates
      .custom(value => {
        if(value !== ''){
          console.log(1 ,value);
          return rp(value) // request-promise => a web scraping library
            .then(result => value) // Doesn't effect our program
            .catch(_ => Promise.reject("Bad URL"));
        }else{
          return true;
        }
        
      })
  ],
  (req, res) => {
    const id = req.params.uid; // Our dynmaically passed id
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: "Validation Error Occured",
        data: errors.array()
      });
    }
    User.findById(id)
      .then(user => {
        if (user) {
          const newUser = user;
          if (req.body.name) {
            newUser.name =
              req.body.name == user.name ? user.name : req.body.name;
          }
            newUser.email =
              req.body.email == user.email ? user.email : req.body.email;
          // }
          if (req.body.about) {
            newUser.about =
              req.body.about == user.about ? user.about : req.body.about;
          }
            newUser.socialLinks.google =
              req.body.gplusURL == user.socialLinks.google
                ? user.socialLinks.google
                : req.body.gplusURL;
            newUser.socialLinks.twitter =
              req.body.twitterURL == user.socialLinks.twitter
                ? user.socialLinks.twitter
                : req.body.twitterURL;
          User.findByIdAndUpdate(id, { $set: newUser }, { new: true })
            .then(result => {
              // Updated user
              res.status(200).json({
                success: true,
                message: "User got updated",
                data: result
              });
            })
            .catch(error => {
              res.status(500).json({
                success: false,
                message: "Something went wrong",
                data: error
              });
            });
        } else {
          res.status(400).json({
            success: false,
            message: "User not found",
            data: null
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          success: false,
          message: "Something went wrong",
          data: error
        });
      });
  }
); // Updates a user where id=:uid

router.delete('/:uid', (req, res) => {
    const id = req.params.uid;
    User.findById(id)
        .then(user => {
            if(user){
                User.findByIdAndDelete(id)
                    .then(_ => {
                        res.status(200).json({
                            success: true,
                            message: 'User got deleted',
                            data: null
                        });
                    }).catch(error => {
                        res.status(500).json({
                            success: false,
                            message: 'Something went wrong',
                            data: error
                        });
                    });
            }else{
                res.status(500).json({
                    success: false,
                    message: 'User not Exists',
                    data: null
                });    
            }
        }).catch(error => {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                data: error
            });
        });
}); // Deletes a user if id==:uid

module.exports = router; // Exported router so it may be used in as url handler
