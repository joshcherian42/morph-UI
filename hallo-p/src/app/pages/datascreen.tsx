import { useState } from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import { format, addDays } from "date-fns";
import {
    IconScaleOutline,
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
} from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";

export default function Datascreen() {
    const startDate = new Date(2024, 12, 1); // January 1, 2024
    const labels = Array.from(
        { length: 30 },
        (_, i) => format(addDays(startDate, i), "MMM d"), // Format as "Jan 1", "Jan 2", etc.
    );
    const values = [
        226, 225, 224, 224, 223, 222, 221, 221, 221, 220, 219, 219, 217, 216,
        215, 214, 212, 211, 210, 208, 207, 207, 206, 205, 205, 204, 203, 202,
        201, 200,
    ]; // Your data values
    const extraDays = 3; // Add 3 days past the last data point
    const extendedLabels = Array.from(
        { length: values.length + extraDays },
        (_, i) => format(addDays(startDate, i), "MMM d"),
    );
    const [dataDate, setDataDate] = useState<Date | null>(new Date());
    return (
        <div className="rounded-t-3xl h-[90%]">
            {/*<div className="h-[10%]"></div>
            <div className="h-full">
                <div className="w-full h-fit relative">
                    <svg
                        viewBox="0 0 50 50"
                        preserveAspectRatio="none"
                        className=" top-0 left-0 w-full h-5"
                    >
                        <path
                            d="M 0,30 Q 25,-15 50,30"
                            fill="none"
                            stroke="black"
                            strokeWidth="3"
                        ></path>
                    </svg>
                </div>
                <div className="text-8xl font-light w-full text-center">
                    205lbs
                </div>
                <div className="w-full h-fit">
                    <div className="w-full h-fit relative">
                        <svg
                            viewBox="0 0 50 50"
                            preserveAspectRatio="none"
                            className="w-full h-5"
                        >
                            <path
                                d="M 0,30 Q 25,-15 50,30 L 50,50 L 0,50 Z"
                                fill="#e2e8f0"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="w-full h-[71%] bg-slate-200"></div>
            </div>*/}

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
                        Last Fitbit Sync 12/12/2024 10:21:08 PM
                    </div>
                </div>
                <div className="flex justify-between mt-7">
                    <div className="text-3xl pb-4 ">Steps</div>
                    <div className="flex items-center">
                        <IconChevronLeft className="cursor-pointer" />
                        <DatePickerInput
                            value={dataDate}
                            onChange={setDataDate}
                        />
                        <IconChevronRight className="cursor-pointer" />
                    </div>
                </div>
                <div className="w-full bg-slate-50 rounded-xl p-4 mb-7">
                    <BarChart />
                    <div className="text-xs mt-3 pt-1 text-slate-400 border-t">
                        Last Scale Sync 12/12/2024 10:21:08 PM
                    </div>
                </div>
            </div>
        </div>
    );
}
