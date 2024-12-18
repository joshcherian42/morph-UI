import { useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { Button, Slider } from "@mantine/core";

export default function Surveyscreen() {
    const [showSurvey, setShowSurvey] = useState<boolean>(false);

    return (
        <div className="rounded-t-3xl h-[90%]">
            <div className="overflow-y-auto h-full pt-10 mx-7">
                {/* Conditional Rendering */}
                {showSurvey ? (
                    <div className="relative">
                        {/* Flexbox for Centered Survey 2 */}
                        <div className="flex justify-center items-center relative">
                            {/* Chevron Left Positioned Absolutely */}
                            <IconChevronLeft
                                className="absolute left-0 cursor-pointer"
                                onClick={() => setShowSurvey(false)}
                            />
                            <div className="text-3xl font-light">Survey 2</div>
                        </div>
                        <div className="w-full bg-slate-50 rounded-xl p-4 mt-3 flex flex-col justify-around">
                            <div className="text-slate-400">Question 1</div>
                            <div className="text-xl">
                                To what extent do you have a desire to eat right
                                now?
                            </div>
                            <Slider
                                className="w-5/6 self-center py-6"
                                color="#899758"
                                marks={[
                                    { value: 0, label: "No Desire" },
                                    { value: 25, label: "Very Little Desire" },
                                    { value: 50, label: "Neutral" },
                                    {
                                        value: 75,
                                        label: "Some Desire",
                                    },
                                    { value: 100, label: "Extreme Desire" },
                                ]}
                            />
                        </div>
                        <div className="w-full bg-slate-50 rounded-xl p-4 mt-3 flex flex-col justify-around">
                            <div className="text-slate-400">Question 2</div>
                            <div className="text-xl">
                                To what extent are you hungry right now?
                            </div>
                            <Slider
                                className="w-5/6 self-center py-6"
                                color="#899758"
                                marks={[
                                    { value: 0, label: "No Hunger" },
                                    { value: 25, label: "Very Little Hunger" },
                                    { value: 50, label: "Neutral" },
                                    {
                                        value: 75,
                                        label: "Some Hunger",
                                    },
                                    { value: 100, label: "Extreme Hunger" },
                                ]}
                            />
                        </div>
                        <div className="w-full bg-slate-50 rounded-xl p-4 mt-3 min-h-[100px] flex flex-col justify-around">
                            <div className="text-slate-400">Question 3</div>
                            <div className="text-xl">
                                How anxious do you feel right now?
                            </div>
                            <Slider
                                className="w-5/6 self-center py-6"
                                color="#899758"
                                marks={[
                                    { value: 0, label: "No Anxiety" },
                                    { value: 25, label: "Very Little Anxiety" },
                                    { value: 50, label: "Neutral" },
                                    {
                                        value: 75,
                                        label: "Some Anxiety",
                                    },
                                    { value: 100, label: "High Anxiety" },
                                ]}
                            />
                        </div>
                        <Button
                            color="#899758"
                            size="lg"
                            className="mt-10 float-right mr-5"
                        >
                            Submit
                        </Button>
                    </div>
                ) : (
                    <div>
                        <div className="text-3xl pb-4">Surveys</div>
                        {/* Survey 1 */}
                        <div className="w-full bg-slate-50 rounded-xl p-4 mt-7 min-h-[100px] border-l-8 border-l-[#ccd5ae] flex justify-between items-center opacity-60">
                            <div>
                                <div className="bg-[#EFF4DD] p-1 rounded-md w-fit text-xs font-semibold">
                                    COMPLETED
                                </div>
                                <div className="text-2xl font-light">
                                    Survey 1
                                </div>
                                <div className="italic text-xs pt-1">
                                    Due January 15th, 2025
                                </div>
                            </div>
                            <IconChevronRight />
                        </div>

                        {/* Survey 2 */}
                        <div
                            className="w-full bg-slate-50 rounded-xl p-4 mt-3 min-h-[100px] border-l-8 border-l-[#F5A08E] flex justify-between items-center cursor-pointer"
                            onClick={() => setShowSurvey(true)}
                        >
                            <div>
                                <div className="bg-[#F5A08E] p-1 rounded-md w-fit text-xs font-semibold">
                                    TO DO
                                </div>
                                <div className="text-2xl font-light">
                                    Survey 2
                                </div>
                                <div className="italic text-xs pt-1">
                                    Due February 5th, 2025
                                </div>
                            </div>
                            <IconChevronRight />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
