import { useDispatch } from "react-redux";
import type { WeeklyHolidaySetup } from "./holidayData";
import type { AppDispatch } from "../../features/store";
import { useState } from "react";
import { updateHoliday } from "../weeklyHolidaySlice/weeklyHolidaySlice";

interface Props {
  holidayUpdate: WeeklyHolidaySetup;
  onClose: () => void;
}
const HolidayUpdateFrom: React.FC<Props> = ({ holidayUpdate, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    holidayEnglish: holidayUpdate.holidayEnglish,
    hoidayBangla: holidayUpdate.hoidayBangla,
    hotlineNoEnglish: holidayUpdate.hotlineNoEnglish,
    hotlineNoBangla: holidayUpdate.hotlineNoBangla,
    phoneEnglish: holidayUpdate.phoneEnglish,
    phoneBangla: holidayUpdate.phoneBangla,
    timeBetweenEnglish: holidayUpdate.timeBetweenEnglish,
    timeBetweenBangla: holidayUpdate.timeBetweenBangla,
    specialNoteEnglish: holidayUpdate.specialNoteEnglish,
    specialNoteBangla: holidayUpdate.specialNoteBangla,
    currentYN: holidayUpdate.currentYN,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
if (!holidayUpdate.id || typeof holidayUpdate.id !== "number") {
      alert("Invalid holiday ID");
      return;
    }

    dispatch(updateHoliday({ id: holidayUpdate.id, data: formData }))
      .unwrap()
      .then(() => {
        console.log("Update successful:", formData);
        onClose();
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
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
          <div className="flex w-full">
            {/* Holiday English */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">Holiday (English):</label>
              <input
                type="text"
                value={formData.holidayEnglish}
                onChange={(e) =>
                  setFormData({ ...formData, holidayEnglish: e.target.value })
                }
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>

            {/* Bangla Holiday - Inline */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">Holiday (Bangla):</label>
              <input
                type="text"
                value={formData.hoidayBangla}
                onChange={(e) =>
                  setFormData({ ...formData, hoidayBangla: e.target.value })
                }
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="flex w-full">
            {/* Hotline No English */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">Hotline (English):</label>
              <input
                type="text"
                value={formData.hotlineNoEnglish}
                onChange={(e) =>
                  setFormData({ ...formData, hotlineNoEnglish: e.target.value })
                }
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>

            {/* Hoteline No Bangla - Inline */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">Hotline (Bangla):</label>
              <input
                type="text"
                value={formData.hotlineNoBangla}
                onChange={(e) =>
                  setFormData({ ...formData, hotlineNoBangla: e.target.value })
                }
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="flex w-full">
            {/* Phone English */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">
                Mobile Number (English):
              </label>
              <input
                type="text"
                value={formData.phoneEnglish}
                onChange={(e) =>
                  setFormData({ ...formData, phoneEnglish: e.target.value })
                }
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>

            {/* Phone Bangla - Inline */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">
                Mobile Number (Bangla):
              </label>
              <input
                type="text"
                value={formData.phoneBangla}
                onChange={(e) =>
                  setFormData({ ...formData, phoneBangla: e.target.value })
                }
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="flex w-full">
            {/* Time English */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">Time (English):</label>
              <input
                type="text"
                value={formData.timeBetweenEnglish}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeBetweenEnglish: e.target.value,
                  })
                }
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>

            {/* Time Bangla - Inline */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">Time (Bangla):</label>
              <input
                type="text"
                value={formData.timeBetweenBangla}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeBetweenBangla: e.target.value,
                  })
                }
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="flex w-full">
            {/* Special Note English */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">
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
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>

            {/* Special Note Bangla - Inline */}
            <div className="w-full flex items-center mb-4">
              <label className="w-1/2 font-semibold">
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
                className="w-2/3 border px-3 py-2 rounded"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-35"
          >
            Save Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default HolidayUpdateFrom;
