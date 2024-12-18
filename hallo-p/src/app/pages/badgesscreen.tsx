import { useState } from "react";
import {
    IconSun,
    IconSunrise,
    IconSunset,
    IconWalk,
    IconScaleOutline,
} from "@tabler/icons-react";
import { Paper } from "@mantine/core";

export default function Badgesscreen() {
    return (
        <div className="rounded-t-3xl h-[90%]">
            <div className="h-full pt-10 mx-7">
                <div className="text-3xl pb-4">Badges & Streaks</div>
                <div className="overflow-y-auto h-[90%]">
                    <div>
                        <div className="text-xl mb-4 border-b border-b-slate-100">
                            Daily Achievements
                        </div>

                        {/*Row*/}
                        <div className="px-4 flex flex-wrap justify-between">
                            <div className="w-fit mb-3 p-4 pb-2">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconSunrise color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center">Morning</div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconSun color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center">Midday</div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconSunset color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center">
                                    Nighttime
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="text-xl mb-2 border-b border-b-slate-100">
                            Streaks
                        </div>

                        {/*Row*/}
                        <div className="px-4 flex flex-wrap justify-between">
                            <div className="w-fit mb-3 p-4 pb-2">
                                <div className="w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <div className="text-white font-bold text-3xl">
                                        x 25
                                    </div>
                                </div>
                                <div className="pt-2 text-center">Morning</div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <div className="text-white font-bold text-3xl">
                                        x 23
                                    </div>
                                </div>
                                <div className="pt-2 text-center">Midday</div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <div className="text-white font-bold text-3xl">
                                        x 27
                                    </div>
                                </div>
                                <div className="pt-2 text-center">
                                    Nighttime
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="text-xl mb-2 border-b border-b-slate-100">
                            Long Term Achievements
                        </div>

                        {/*Row*/}
                        <div className="px-4 flex flex-wrap justify-between">
                            <div className="w-fit mb-3 p-4 pb-2 flex flex-col items-center">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconWalk color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center w-24">
                                    Daily Activity Goal 25 days
                                </div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2 flex flex-col items-center">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconWalk color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center w-24">
                                    Daily Activity Goal 50 days
                                </div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2 flex flex-col items-center">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconWalk color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center w-[6.4rem]">
                                    Daily Activity Goal 100 days
                                </div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2 flex flex-col items-center">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconScaleOutline color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center w-24">
                                    Weight loss <br /> 5 lbs
                                </div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2 flex flex-col items-center">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconScaleOutline color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center w-24">
                                    Weight loss 10 lbs
                                </div>
                            </div>
                            <div className="w-fit mb-3 p-4 pb-2 flex flex-col items-center">
                                <div className=" w-24 h-24 rounded-full bg-[#ccd5ae] flex items-center justify-center">
                                    <IconScaleOutline color="white" size={34} />
                                </div>
                                <div className="pt-2 text-center w-24">
                                    Weight loss 30 lbs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
