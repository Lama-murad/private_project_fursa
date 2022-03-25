import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import internal from 'stream';
import { RootState, AppThunk } from '../app/store';
import axios from "axios";

interface Trainer {
    // id: number;
    name: String,
    level:Number,
    age:Number,
    description:String,
    image:String,
}

export interface Trainers {
    arrTrainers: Array<Trainer>,
    status: 'idle' | 'loading' | 'failed';

}

const initialState: Trainers = {
    arrTrainers: [],
    status: 'idle',
};

export const fetchTrainerByLevel = createAsyncThunk(
    'trainer/trainerByLevel',
    async (levell:any) => {
        try {
            const {level}=levell;
            console.log("faaaaaaaaat")
            const response = await axios.post('http://localhost:3000/trainer/trainerByLevel', { "level": level })
            const data = response.data
            console.log(data)
            return data;

        } catch (error:any) {
            console.log(error.message)

        }

    }
);

export const TrainersReducer = createSlice({
    name: 'trainers',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTrainerByLevel.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchTrainerByLevel.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrTrainers = action.payload.trainers;
            })
            .addCase(fetchTrainerByLevel.rejected, (state, action) => {
                state.status = 'failed';
               // state.arrProducrs = action.payload;
            })
    }

});

export const selectrainers=(state:RootState)=>state.trainers
// export const getAccidentID = (state: RootState) => state.accident.accidentId;
export const getTrainers = (state: RootState) => state.trainers.arrTrainers;
export const getStatus = (state: RootState) => state.trainers.status;


export default TrainersReducer.reducer