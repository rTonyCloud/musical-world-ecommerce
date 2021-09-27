const { User } = require('../models');

const userData = [
    {     
        id: 101,
        name: "Mike Tyson",
        email_id: "mike_ty",
        telephone_no: "9546676543",
        email: "mike_ty@gmail.com",
        password: "password"

    },
    {
        id: 102,
        name: "Rojar Miller",
        email_id: "roger",
        telephone_no: "7546546789",
        email: "roger@aol.com",
        password: "password",
    },
    {
        id: 103,
        name: "John Doe",
        email_id: "john",
        telephone_no: "7865673456",
        email: "john@yahoo.com",
        password: "password",
    },
    {     
        id: 104,
        name: "Robert Gayle",
        email_id: "robert",
        telephone_no: "3063458765",
        email: "robert@gmail.com",
        password: "password"

    },
    {
        id: 105,
        name: "Evens Alexandre",
        email_id: "evens",
        telephone_no: "7865543456",
        email: "evens@aol.com",
        password: "password",
    },
    {
        id: 106,
        name: "Nami Khan",
        email_id: "naim@yahoo.com",
        telephone_no: "5614457698",
        email: "naim@yahoo.com",
        password: "password",
    },
    
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = userData;