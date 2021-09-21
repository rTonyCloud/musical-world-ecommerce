const { User } = require('../models');

const userData = [
    {     
        id: 101,
        name: "Mike Tyson",
        email_id: "mike_ty@gmail.com",
        telephone_no: "9546676543",
        email: "mike_ty@gmail.com",
        password: "password"

    },
    {
        id: 102,
        name: "Rojar Miller",
        email_id: "roger@aol.com",
        telephone_no: "7546546789",
        email: "roger@aol.com",
        password: "password",
    },
    {
        id: 103,
        name: "John Doe",
        email_id: "john@yahoo.com",
        telephone_no: "7865673456",
        email: "john@yahoo.com",
        password: "password",
    },
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;