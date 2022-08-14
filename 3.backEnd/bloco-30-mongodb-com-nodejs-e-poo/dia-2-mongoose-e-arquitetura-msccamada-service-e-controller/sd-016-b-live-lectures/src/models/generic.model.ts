import { Model, isValidObjectId } from 'mongoose';
import IGenericModel from './interfaces/generic.model';

export default abstract class GenericModel<T> implements IGenericModel<T> {
    protected _modelMongoose: Model<T>;

    constructor(modelMongoose: Model<T>) {
        this._modelMongoose = modelMongoose;
    }

    async create(entity: T): Promise<T> {
        return await this._modelMongoose.create(entity);
    }

    async update(id: string, entity: T): Promise<T | null> {
        if(!isValidObjectId(id)) return null;
        return await this._modelMongoose
        .findOneAndUpdate({ _id: id }, entity, { returnOriginal: false });
    }

    async findAll(): Promise<T[]> {
        return await this._modelMongoose.find();
    }

    async findById(id: string): Promise<T | null> {
        if(!isValidObjectId(id)) return null;
        return await this._modelMongoose.findById(id);
    }
    
    async deleteById(id: string): Promise<void> {
        if(!isValidObjectId(id)) return;
        await this._modelMongoose.deleteOne({ _id: id });
    }

}