import { useState } from "react";
import {
    IconChevronRight,
    IconChevronLeft,
    IconUsersGroup,
    IconLetterC,
    IconBell,
} from "@tabler/icons-react";
import { Button, Slider, ActionIcon } from "@mantine/core";

export default function Messagesscreen() {
    const [showMessage, setShowMessage] = useState<string>("");

    return (
        <div className="rounded-t-3xl h-[90%]">
            <div className="overflow-y-auto h-full pt-10 mx-7">
                {/* Conditional Rendering */}
                {showMessage != "" ? (
                    <div className="relative h-[90%]">
                        {/* Flexbox for Centered Survey 2 */}
                        <div className="flex justify-center items-center relative">
                            {/* Chevron Left Positioned Absolutely */}
                            <IconChevronLeft
                                className="absolute left-0 cursor-pointer"
                                onClick={() => setShowMessage("")}
                            />
                            <div className="text-3xl font-light">
                                {showMessage}
                            </div>
                        </div>
                        {showMessage == "System Notifications" ? (
                            <div className="h-[95%] flex flex-col mt-10">
                                <div className="text-xs pl-2 text-slate-400">
                                    12/15/24 6:14 AM
                                </div>
                                <div className="w-fit max-w-[90%] bg-slate-100 p-3 flex flex-col justify-self-end">
                                    It looks like your steps were below your
                                    target yesterday. Keep finding enjoyable
                                    ways to move throughout the day and check in
                                    with your step goals often!
                                </div>
                            </div>
                        ) : (
                            <div className="h-[95%] flex flex-col justify-between mt-10">
                                <div>
                                    <div className="w-fit max-w-[90%] bg-[#EFF4DD] rounded-l-[25px] rounded-tr-[20px] p-3 mt-3 flex flex-col justify-self-end">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nam scelerisque
                                    </div>
                                    <div className="mt-3">
                                        {showMessage == "Group" && (
                                            <div className="text-xs pl-2 text-slate-400">
                                                User 1
                                            </div>
                                        )}
                                        <div className="w-fit max-w-[90%] bg-slate-100 rounded-r-[25px] rounded-tl-[20px] p-3 flex flex-col justify-around">
                                            Lorem ipsum
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        {showMessage == "Group" && (
                                            <div className="text-xs pl-2 text-slate-400">
                                                User 2
                                            </div>
                                        )}
                                        <div className="w-fit max-w-[90%] bg-slate-100 rounded-r-[25px] rounded-tl-[20px] p-3 flex flex-col justify-around">
                                            {" "}
                                            Lorem ipsum dolor sit amet?
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        {showMessage == "Group" && (
                                            <div className="text-xs pl-2 text-slate-400">
                                                User 1
                                            </div>
                                        )}
                                        <div className="w-fit max-w-[90%] bg-slate-100 rounded-r-[35px] rounded-tl-[30px] p-3 flex flex-col justify-around">
                                            {" "}
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Aliquam
                                            varius tortor vel cursus
                                        </div>
                                    </div>
                                </div>
                                <div className="border-2 border-slate-300 p-2 pl-4 rounded-full w-full text-slate-300 cursor-text">
                                    Send Message
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="text-3xl pb-4">Messages</div>
                        {/* Group Message */}
                        <div
                            className="w-full p-4 mt-7  border-b-2 flex justify-between items-center cursor-pointer"
                            onClick={() => setShowMessage("Group")}
                        >
                            <ActionIcon
                                variant="filled"
                                radius="xl"
                                size="xl"
                                aria-label="Group"
                                color="#CCD5AE"
                            >
                                <IconUsersGroup
                                    style={{ width: "70%", height: "70%" }}
                                    stroke={1.5}
                                />
                            </ActionIcon>
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-light">
                                        Group
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        9:34 AM
                                    </div>
                                </div>
                                <div className="italic text-xs pt-1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam scelerisque tel ...
                                </div>
                            </div>
                            <IconChevronRight />
                        </div>

                        {/* Notification Message */}
                        <div
                            className="w-full p-4 border-b-2 flex justify-between items-center cursor-pointer"
                            onClick={() =>
                                setShowMessage("System Notifications")
                            }
                        >
                            <ActionIcon
                                variant="filled"
                                radius="xl"
                                size="xl"
                                aria-label="Group"
                                color="#CCD5AE"
                            >
                                <IconBell
                                    style={{ width: "70%", height: "70%" }}
                                    stroke={1.5}
                                />
                            </ActionIcon>
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-light">
                                        System Notifications
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        6:14 AM
                                    </div>
                                </div>
                                <div className="italic text-xs pt-1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam scelerisque tel ...
                                </div>
                            </div>
                            <IconChevronRight />
                        </div>

                        {/* Coach Message */}
                        <div
                            className="w-full p-4 border-b-2 flex justify-between items-center cursor-pointer"
                            onClick={() => setShowMessage("Coach")}
                        >
                            <ActionIcon
                                variant="filled"
                                radius="xl"
                                size="xl"
                                aria-label="Group"
                                color="#CCD5AE"
                            >
                                <IconLetterC
                                    style={{ width: "70%", height: "70%" }}
                                    stroke={1.5}
                                />
                            </ActionIcon>
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-light">
                                        Coach
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        12/17/24
                                    </div>
                                </div>
                                <div className="italic text-xs pt-1">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam scelerisque tel ...
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
