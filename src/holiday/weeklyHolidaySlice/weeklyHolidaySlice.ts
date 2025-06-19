import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WeeklyHolidaySetup } from "../component/holidayData";
import holidayAPI from "../service/holidayAPI";


interface WeeklyHolidayState {
    holidays: WeeklyHolidaySetup[];
    selectedHoliday: WeeklyHolidaySetup | null; // for single item
    loading: boolean;
    error: string | null;
}

const initialState: WeeklyHolidayState = {
    holidays: [],
    selectedHoliday: null,
    loading: false,
    error: null,
};

export const fetchHolidays = createAsyncThunk(
    "weeklyHolidaySlice/fetch",
    async (_, thunkAPI) => {
        try {
            return await holidayAPI.getAll();
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchHolidaySingleData = createAsyncThunk<
    WeeklyHolidaySetup,
    number,
    { rejectValue: string }
>(
    "weeklyHolidaySlice/fetchSingle",
    async (id, { rejectWithValue }) => {
        try {
            const res = await holidayAPI.getSingleData(id);
            return res; // res is of type WeeklyHolidaySetup
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const addHoliday = createAsyncThunk(
    "weeklyHolidaySlice/add",
    async (data: WeeklyHolidaySetup, thunkAPI) => {
        try {
            return await holidayAPI.create(data);
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateHoliday = createAsyncThunk(
    "weeklyHolidaySlice/update",
    async ({ id, data }: { id: number; data: WeeklyHolidaySetup }, thunkAPI) => {
        try {
            return await holidayAPI.update(id, data);
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteHoliday = createAsyncThunk(
    "weeklyHolidaySlice/delete",
    async (id: number, thunkAPI) => {
        try {
            await holidayAPI.remove(id);
            return id;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//=============================Create Slice =======================//
const weeklyHolidaySlice = createSlice({
    name: "weeklyHolidaySlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHolidays.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHolidays.fulfilled, (state, action: PayloadAction<WeeklyHolidaySetup[]>) => {
                state.holidays = action.payload;
                state.loading = false;
            })
            .addCase(fetchHolidaySingleData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHolidaySingleData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedHoliday = action.payload;
            })
            .addCase(fetchHolidaySingleData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch single holiday";
            })

            .addCase(addHoliday.fulfilled, (state, action: PayloadAction<WeeklyHolidaySetup>) => {
                state.holidays.push(action.payload);
            })
            .addCase(updateHoliday.fulfilled, (state, action: PayloadAction<WeeklyHolidaySetup>) => {
                state.holidays = state.holidays.map(h =>
                    h.id === action.payload.id ? action.payload : h
                );
            })
            .addCase(deleteHoliday.fulfilled, (state, action: PayloadAction<number>) => {
                state.holidays = state.holidays.filter(h => h.id !== action.payload);
            });
    },
});

export default weeklyHolidaySlice.reducer;
