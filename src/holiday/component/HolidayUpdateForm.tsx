import { useState } from "react";
import type { WeeklyHolidaySetup } from "./holidayData";
import { useDispatch } from "react-redux";
import { updateHoliday } from "../weeklyHolidaySlice/weeklyHolidaySlice";
import type { AppDispatch } from "../../features/store";

interface Props {
  holiday: WeeklyHolidaySetup;
  onClose: () => void;
}

const HolidayUpdateForm: React.FC<Props> = ({ holiday, onClose }) => {
    const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    holidayEnglish: holiday.holidayEnglish,
    hoidayBangla: holiday.hoidayBangla,
    timeBetweenEnglish: holiday.timeBetweenEnglish,
    timeBetweenBangla: holiday.timeBetweenBangla,
    hotlineNoEnglish: holiday.hotlineNoEnglish,
    hotlineNoBangla: holiday.hotlineNoBangla,
    phoneEnglish: holiday.phoneEnglish,
    phoneBangla: holiday.phoneBangla,
    specialNoteEnglish: holiday.specialNoteEnglish,
    specialNoteBangla: holiday.specialNoteBangla,
    currentYN: holiday.currentYN,
  });

  


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateHoliday({ id: holiday.id!, data: formData }))
      .unwrap()
      .then(() => {
        console.log("Update successful:", formData);
        onClose(); 
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 rounded-2xl">
      <div className="bg-white p-6 rounded shadow-md w-[90%] md:w-[900px] relative">
        <h2 className="text-xl font-bold text-center mb-4">Update Holiday</h2>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <form onSubmit={handleSubmit}>
          {/* hotline No field*/}
          <div className="w-full max-w-full min-w-fit flex flex-wrap -mx-2">
            {/* hotline No field English */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Hotline (English):
              </label>
              <input
                type="text"
                value={formData.hotlineNoEnglish}
                onChange={(e) =>
                  setFormData({ ...formData, hotlineNoEnglish: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* hotline No field Bangla */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Hotline (Bangla):
              </label>
              <input
                type="text"
                value={formData.hotlineNoBangla}
                onChange={(e) =>
                  setFormData({ ...formData, hotlineNoBangla: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* timeBetween field*/}
          <div className="w-full max-w-full min-w-fit flex flex-wrap -mx-2">
            {/* hotline No field English */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Phone Number (English):
              </label>
              <input
                type="text"
                value={formData.phoneEnglish}
                onChange={(e) =>
                  setFormData({ ...formData, phoneEnglish: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* hotline No field Bangla */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Phone Number (Bangla):
              </label>
              <input
                type="text"
                value={formData.phoneBangla}
                onChange={(e) =>
                  setFormData({ ...formData, phoneBangla: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* hotline No field*/}
          <div className="w-full max-w-full min-w-fit flex flex-wrap -mx-2">
            {/* hotline No field English */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Time (English):
              </label>
              <input
                type="text"
                value={formData.timeBetweenEnglish}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeBetweenEnglish: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* hotline No field Bangla */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">Time (Bangla):</label>
              <input
                type="text"
                value={formData.timeBetweenBangla}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeBetweenBangla: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* hotline No field*/}
          <div className="w-full max-w-full min-w-fit flex flex-wrap -mx-2">
            {/* hotline No field English */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Holiday (English):
              </label>
              <input
                type="text"
                value={formData.holidayEnglish}
                onChange={(e) =>
                  setFormData({ ...formData, holidayEnglish: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* hotline No field Bangla */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Holiday (Bangla):
              </label>
              <input
                type="text"
                value={formData.hoidayBangla}
                onChange={(e) =>
                  setFormData({ ...formData, hoidayBangla: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* hotline No field*/}
          <div className="w-full max-w-full min-w-fit flex flex-wrap -mx-2">
            {/* hotline No field English */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Special Note (English):
              </label>
              <input
                type="text"
                value={formData.specialNoteEnglish}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    specialNoteEnglish: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* hotline No field Bangla */}
            <div className="w-1/2 flex items-center mb-4">
              <label className="w-1/2 font-semibold mb-1">
                Special Note (Bangla):
              </label>
              <input
                type="text"
                value={formData.specialNoteBangla}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    specialNoteBangla: e.target.value,
                  })
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* Repeat other fields similarly... */}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Save Update
          </button>
        </form>
      </div>
    </div>
  );
};
export default HolidayUpdateForm;
