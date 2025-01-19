import { useState } from "react";
import LineChart from "../components/linechart";
import BarChart from "../components/barchart";
import { format, subDays, addDays } from "date-fns";
import {
    IconScaleOutline,
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
} from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";

export default function Datascreen() {
    const startDate = new Date(2024, 12, 1);

    const values = [
        226, 225, 224, 224, 223, 222, 221, 221, 221, 220, 219, 219, 217, 216,
        215, 214, 212, 211, 210, 208, 207, 207, 206, 205, 205, 204, 203, 202,
        201, 200,
    ];
    const extraDays = 3; // Add 3 days past the last data point
    const extendedLabels = Array.from(
        { length: values.length + extraDays },
        (_, i) => format(addDays(startDate, i), "MMM d"),
    );

    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    type DateValue = Date | string | null;

    const handleDateChange = (value: DateValue) => {
        if (typeof value === "string") {
            setCurrentDate(new Date(value));
        } else if (value instanceof Date) {
            setCurrentDate(value);
        }
    };

    return (
        <div className="rounded-t-3xl h-[90%]">
            <div className="overflow-y-auto h-full pt-10 px-7">
                <div className="text-3xl pb-4">Weight Loss</div>
                <div className="bg-[#ccd5ae] w-1/2 m-auto p-4 rounded-xl flex items-center justify-center">
                    <IconScaleOutline size={40} />
                    <div className="px-5">
                        <div className="text-sm">Current Weight</div>
                        <div className="flex items-center justify-between">
                            <div className="text-4xl whitespace-nowrap">
                                205 lbs.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start w-1/3 m-auto mt-2 justify-center">
                    <IconChevronDown size={20} />
                    <div className="text-sm font-semibold">10% in January!</div>
                </div>
                <div className="w-full bg-slate-50 rounded-xl p-4 mt-7">
                    <LineChart
                        labels={extendedLabels}
                        dataPoints={[...values, ...Array(extraDays).fill(null)]}
                    />
                    <div className="text-xs mt-3 pt-1 text-slate-400 border-t">
                        Last Scale Sync 12/12/2024 10:21:08 PM
                    </div>
                </div>
                <div className="flex justify-between mt-7">
                    <div className="text-3xl pb-4 ">Steps</div>
                    <div className="flex items-center">
                        <IconChevronLeft
                            className="cursor-pointer"
                            onClick={() =>
                                setCurrentDate((prevDate) =>
                                    subDays(prevDate, 1),
                                )
                            }
                        />
                        <DatePickerInput
                            value={currentDate}
                            onChange={handleDateChange}
                        />
                        <IconChevronRight
                            className="cursor-pointer"
                            onClick={() =>
                                setCurrentDate((prevDate) =>
                                    addDays(prevDate, 1),
                                )
                            }
                        />
                    </div>
                </div>
                <div className="w-full bg-slate-50 rounded-xl p-4 mb-7">
                    <BarChart
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                    />
                    <div className="text-xs mt-3 pt-1 text-slate-400 border-t">
                        Last Fitbit Sync 12/12/2024 10:21:08 PM
                    </div>
                </div>
            </div>
        </div>
    );
}
