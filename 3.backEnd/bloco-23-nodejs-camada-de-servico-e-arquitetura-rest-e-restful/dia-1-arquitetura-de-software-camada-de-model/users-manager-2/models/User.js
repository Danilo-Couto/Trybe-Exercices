const connection = require('./connection');

/* 
// Faremos a função `formatUser`
function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
    return {
        id,
        firstName,
        lastName,
        email,
    };
};
*/

const getAll = async() => {
    const query = 'SELECT * FROM users_crud.users;'
    const [users] = await connection.execute(query);
    return users;
};

const getById = async(req) => {
    const {id} = req.params;
    const query = 'SELECT * FROM users_crud.users WHERE id =?;'
    const [user] = await connection.execute(query, [id]);
    return user;
};

const creatUser = async(req) => {
    const { firstName, lastName, email, password } = req.body;
    const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';

    const [{insertId}] = await connection.execute(query, [firstName, lastName, email, password]);

    return {
        id: insertId,
        firstName, lastName, email, password
    }
};

const editUser = async(req) => {
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;
    const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;
    
    await connection.execute(query, [firstName, lastName, email, password, id]);

    return getById(req);
};

const deleteUser = async(req) => {
    const { id } = req.params;
    return await connection.execute('DELETE FROM users WHERE id = ?', [id]);
};

module.exports = {
    getAll,
    getById,
    creatUser,
    editUser,
    deleteUser,
    // create,
}