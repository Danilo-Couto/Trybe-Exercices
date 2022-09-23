import md5 from 'md5';
import { getAll as _getAll, getById as _getById, create as _create, update as _update, remove as _remove } from '../models/userJSON';
import { userNotFound } from '../utils/errMessages';

const err = (code, message) => ({ code, message });

const getAll = async () => {
  const data = await _getAll();
  return data;
};

const getById = async ({ id }) => {
  const data = await _getById(id);
  if (!data) throw err('notFound', userNotFound);
  return data;
};

const create = async ({ name, email, password }, role = 'user') => {
  const data = await _create({ name, email, password: md5(password), role });
  return data;
};

const update = async ({ id }, { name, email, password }) => {
  const data = await _update(id, { name, email, password: md5(password) });
  if (!data) throw err('notFound', userNotFound);
  return data;
};

const remove = async ({ id }) => {
  const data = await _remove(id);
  return data;
};

export default { getAll, getById, create, update, remove }
