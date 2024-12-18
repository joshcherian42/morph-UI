"use client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Outfit } from "next/font/google";
import {
  MantineProvider,
  Progress,
  RingProgress,
  Center,
  rem,
  ActionIcon,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";

import Homescreen from "./pages/homescreen";
// import Datascreen from "./pages/datascreen";
import Surveyscreen from "./pages/surveyscreen";
import Badgesscreen from "./pages/badgesscreen";
import Messagesscreen from "./pages/messagesscreen";
import dynamic from "next/dynamic";

import NavBar from "./components/navbar";
import {
  IconSun,
  IconSunrise,
  IconSunset,
  IconShoe,
  IconChevronLeft,
  IconChevronRight,
  IconUser,
} from "@tabler/icons-react";
const raleway = Outfit({ subsets: ["latin"] });
const Datascreen = dynamic(() => import("./pages/datascreen"), { ssr: false });

export default function Home() {
  const [page, setPage] = useState<string>("home");
  const [dataDate, setDataDate] = useState<Date | null>(new Date());

  return (
    <MantineProvider>
      <div className={raleway.className}>
        <div className="h-screen w-screen flex">
          <div className="border-black border-2 h-[800px] w-[600px] m-auto flex rounded-3xl flex-col text-[#1B1B1B]">
            {page == "home" && <Homescreen />}
            {page == "data" && <Datascreen />}
            {page == "surveys" && <Surveyscreen />}
            {page == "badges" && <Badgesscreen />}
            {page == "messages" && <Messagesscreen />}
            {/*Footer*/}
            <NavBar page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
