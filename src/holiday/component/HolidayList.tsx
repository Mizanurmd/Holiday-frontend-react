import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import type { AppDispatch, RootState } from "../../features/store";
import { fetchHolidays } from "../weeklyHolidaySlice/weeklyHolidaySlice";

const HolidayList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { holidays, loading, error } = useSelector(
    (state: RootState) => state.weeklyHolidaySlice
  );

  //  Language toggle: "en" or "bn"
  const [language, setLanguage] = useState<"en" | "bn">("en");

  //=========== show update modal ==================//
  const[showModal, setShowModal] = useState(false);


  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  //  Get the first holiday where currentYN is true
  const currentHoliday = useMemo(() => {
    return holidays.find((h) => h.currentYN === true);
  }, [holidays]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!currentHoliday) return <p>No active holiday found.</p>;

  return (
    <div className="text-center">
      <h2 className="text-3xl text-amber-500 mt-5 mb-5">
        Weekly Holiday Detail
      </h2>
      {/*  Language Switch Buttons */}
      <div className="mb-4">
        <button
          onClick={() => setLanguage("en")}
          className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          English
        </button>
        <button
          onClick={() => setLanguage("bn")}
          className="mx-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          বাংলা
        </button>
      </div>
      {/*Conditional Rendering Based on Language */}
      {language === "en" ? (
        <>
          <p>Hotline No: {currentHoliday.hotlineNoEnglish}</p>
          <p>Mobile No: {currentHoliday.phoneEnglish}</p>
          <p>
            Working Day: {currentHoliday.holidayEnglish}({" "}
            {currentHoliday.timeBetweenEnglish} )
          </p>
          <p className="text-amber-700">
            Special Note: {currentHoliday.specialNoteEnglish}
          </p>
        </>
      ) : (
        <>
          <p>হটলাইন নম্বর: {currentHoliday.hotlineNoBangla}</p>
          <p>মোবাইল নম্বর: {currentHoliday.phoneBangla}</p>
          <p>
            কর্মদিবস: {currentHoliday.holidayBangla}({" "}
            {currentHoliday.timeBetweenBangla} )
          </p>
          <p className="text-amber-700">
            বিশেষ মন্তব্য: {currentHoliday.specialNoteBangla}
          </p>
        </>
      )}

      <hr />
      <button  onClick={() => setShowModal(true)}
      className="mt-2 mx-2 px-4  py-2 bg-green-500 text-white rounded-2xl">Holiday Setting</button>
      
    </div>

  );
};

export default HolidayList;
