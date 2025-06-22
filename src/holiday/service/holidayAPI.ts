import axios from "axios";
import type { WeeklyHolidaySetup } from "../component/holidayData";


const BASE_URL = "http://localhost:9090/api/v1/holidays";

const holidayAPI = {

    getAll: async (): Promise<WeeklyHolidaySetup[]> => {
        const res = await axios.get(`${BASE_URL}/all`);
        return res.data.data;
    },

   getSingleData: async (id: number): Promise<WeeklyHolidaySetup> => {
    const res = await axios.get<{ data: WeeklyHolidaySetup }>(`${BASE_URL}/${id}`);
    return res.data.data;
  },
  
    create: async (weeklyHolidayData: WeeklyHolidaySetup): Promise<WeeklyHolidaySetup> => {
        const res = await axios.post(`${BASE_URL}/save`, weeklyHolidayData);
        return res.data.data;
    },

    update: async (id: number, weeklyHolidayData: WeeklyHolidaySetup): Promise<WeeklyHolidaySetup> => {
        const res = await axios.put(`${BASE_URL}/update/${id}`, weeklyHolidayData);
        return res.data.data;
    },

    remove: async (id: number): Promise<void> => {
        await axios.delete(`${BASE_URL}/${id}`);
    },
};

export default holidayAPI;
