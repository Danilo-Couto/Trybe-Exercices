const { ObjectID } = require('mongodb');
const connection = require('./connection');

const create = (user) => connection().then((db) =>
  db.collection('users').insertOne(user).then(({ ops }) => ops[0]));

const getAll = () => connection().then((db) =>
  db.collection('users').find().toArray());

const getById = (id) => connection().then((db) =>
  db.collection('users').findOne(ObjectID(id)));

const getByEmail = (email) => connection().then((db) =>
  db.collection('users').findOne({ email }));

const update = (id, user) => connection().then((db) =>
  db.collection('users').updateOne({ _id: ObjectID(id) }, { $set: user }));

const remove = (id) => connection().then((db) =>
  db.collection('users').deleteOne({ _id: ObjectID(id) }));

module.exports = { getAll, getById, getByEmail, create, update, remove };
