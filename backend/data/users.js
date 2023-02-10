import bcrypt from 'bcryptjs'

const users = [ 
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'John Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users