import { Schema, model } from 'mongoose';

export interface IMovie {
    title: string,
    year: number,
    classification: number,
    starring: string[],
    director?: string,
    genres?: string[],
    length: number,
}

const movieSchema = new Schema<IMovie>({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'o filme precisa ser lançado depois de 1900'],
        max: 2022
    },
    classification: {
        type: Number,
        required: true
    },
    starring: {
        type: [String],
        required: true
    },
    director: {
        type: String,
        required: false
    },
    genres: {
        type: [String],
        required: false
    },
    length: {
        type: Number,
        required: true
    },
});

export const movieMongooseModel = model<IMovie>('movie', movieSchema);
