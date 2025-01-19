import { ActionIcon } from "@mantine/core";
import {
    IconHome,
    IconChartLine,
    IconClipboardText,
    IconRosette,
    IconMessage,
} from "@tabler/icons-react";

interface Props {
    page: string;
    setPage: (page: string) => void;
}

export default function NavBar({ page, setPage }: Props) {
    return (
        <div className="h-[10%] w-full self-end flex shadow-custom mt-auto rounded-b-3xl">
            <div className="border-r border-gray-300 self-stretch w-1/5 m-auto flex h-4/5 justify-center items-center">
                <ActionIcon
                    variant="subtle"
                    color="#ccd5ae"
                    aria-label="Home"
                    size="xl"
                    className="h-full"
                    onClick={() => {
                        setPage("home");
                    }}
                >
                    <IconHome
                        style={{ width: "100%", height: "80%" }}
                        stroke={1.5}
                        color={page === "home" ? "#899758" : "black"}
                    />
                </ActionIcon>
            </div>

            <div className="border-r border-gray-300 self-stretch w-1/5 m-auto flex h-4/5 justify-center items-center">
                <ActionIcon
                    variant="subtle"
                    color="#ccd5ae"
                    aria-label="Data"
                    size="xl"
                    className="h-full"
                    onClick={() => {
                        setPage("data");
                    }}
                >
                    <IconChartLine
                        style={{ width: "100%", height: "80%" }}
                        stroke={1.5}
                        color={page === "data" ? "#899758" : "black"}
                    />
                </ActionIcon>
            </div>

            <div className="border-r border-gray-300 self-stretch w-1/5 m-auto flex h-4/5 justify-center items-center">
                <ActionIcon
                    variant="subtle"
                    color="#ccd5ae"
                    aria-label="Surveys"
                    size="xl"
                    className="h-full"
                    onClick={() => {
                        setPage("surveys");
                    }}
                >
                    <IconClipboardText
                        style={{ width: "100%", height: "80%" }}
                        stroke={1.5}
                        color={page === "surveys" ? "#899758" : "black"}
                    />
                </ActionIcon>
            </div>

            <div className="border-r border-gray-300 self-stretch w-1/5  m-auto flex h-4/5 justify-center items-center">
                <ActionIcon
                    variant="subtle"
                    color="#ccd5ae"
                    aria-label="Badges"
                    size="xl"
                    className="h-full"
                    onClick={() => {
                        setPage("badges");
                    }}
                >
                    <IconRosette
                        style={{ width: "100%", height: "80%" }}
                        stroke={1.5}
                        color={page === "badges" ? "#899758" : "black"}
                    />
                </ActionIcon>
            </div>
            <div className="w-1/5 m-auto flex h-4/5 justify-center items-center">
                <ActionIcon
                    variant="subtle"
                    color="#ccd5ae"
                    aria-label="Messages"
                    size="xl"
                    className="h-full"
                    onClick={() => {
                        setPage("messages");
                    }}
                >
                    <IconMessage
                        style={{ width: "100%", height: "80%" }}
                        stroke={1.5}
                        color={page === "messages" ? "#899758" : "black"}
                    />
                </ActionIcon>
            </div>
        </div>
    );
}
