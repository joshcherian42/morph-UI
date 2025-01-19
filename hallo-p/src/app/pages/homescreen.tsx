import {
  Progress,
  RingProgress,
  Center,
  rem,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import {
  IconSun,
  IconSunrise,
  IconSunset,
  IconUser,
} from "@tabler/icons-react";

export default function Homescreen() {
  return (
    <div className="overflow-y-hidden">
      {/*Top bit*/}
      <div className="h-full">
        {/*Welcome back*/}

        <div className="flex flex-col h-full">
          <div className="pt-16 flex flex-col rounded-t-3xl bg-cover bg-bottom bg-[url('https://media.istockphoto.com/id/909092492/photo/young-bearded-sportsmen-running-up-stairs-outdoors.jpg?s=2048x2048&w=is&k=20&c=xiXEinff5fj4stOmlwpFVTonfwqIL6VLo9FRvKkY2dA=')]">
            {/*Progress/Date*/}
            <div className="mx-7">
              <div className="flex gap-x-2 justify items-center">
                <ActionIcon
                  color="#ccd5ae"
                  variant="filled"
                  radius="xl"
                  size="xl"
                >
                  <IconUser style={{ width: rem(30), height: rem(30) }} />
                </ActionIcon>
                <div>
                  <div className="text-xl text-[#3b3b3b]">
                    Welcome back{" "}
                    <span className="text-[#899758] font-bold">Josh</span>!
                  </div>
                </div>
              </div>
              <div className="py-6">
                <div className="text-xl font-light">Today{`'`}s Progress</div>
                <div className="flex items-end gap-x-2">
                  <div className="text-8xl font-light">6,823</div>
                  <div className="text-2xl">steps</div>
                </div>
                <div className="shadow-custom rounded-full bg-[#ccd5ae] w-fit p-2 mt-3 font-semibold">
                  2,177 steps to go today!
                </div>
              </div>
            </div>
          </div>

          <div className="mx-7 mt-7">
            <div>
              <div className="text-3xl pb-4">Day Breakdown</div>
              <div className="flex w-full justify-between text-[#4a4e69]">
                <div className="bg-slate-50 px-2 py-3 rounded-md flex flex-col items-center">
                  <RingProgress
                    sections={[{ value: 89, color: "#899758" }]}
                    size={160}
                    label={
                      <Center>
                        <div className="font-bold text-center">
                          2670/3000 <br /> steps
                        </div>
                      </Center>
                    }
                  />
                  <IconSunrise style={{ width: rem(22), height: rem(22) }} />
                  <div className="text-center italic">Morning</div>
                </div>
                <div className="bg-slate-50  px-2 py-3 rounded-md flex flex-col items-center">
                  <RingProgress
                    sections={[{ value: 100, color: "#899758" }]}
                    size={160}
                    label={
                      <Center>
                        <div className="font-bold text-center">
                          <span className="text-[#899758]">3521</span>
                          /3000 <br /> steps
                        </div>
                      </Center>
                    }
                  />
                  <IconSun style={{ width: rem(22), height: rem(22) }} />
                  <div className="text-center italic">Afternoon</div>
                </div>
                <div className="bg-slate-50  px-2 py-3 rounded-md flex flex-col items-center">
                  <RingProgress
                    sections={[{ value: 21, color: "#899758" }]}
                    size={160}
                    label={
                      <Center>
                        <div className="font-bold text-center">
                          632/3000 <br /> steps
                        </div>
                      </Center>
                    }
                  />
                  <IconSunset style={{ width: rem(22), height: rem(22) }} />
                  <div className="text-center italic">Evening</div>
                </div>
              </div>
            </div>

            {/*Daily progress*/}
            <div className="mt-4">
              <Progress.Root size={30} radius="xl">
                <Tooltip label="7:00 AM">
                  <Progress.Section
                    value={2}
                    color="#ccd5ae"
                  ></Progress.Section>
                </Tooltip>
                <Tooltip label="7:30 AM">
                  <Progress.Section
                    value={4}
                    color="#E9ECEF"
                  ></Progress.Section>
                </Tooltip>
                <Tooltip label="8:00 AM">
                  <Progress.Section
                    value={1}
                    color="#ccd5ae"
                  ></Progress.Section>
                </Tooltip>
                <Progress.Section value={1} color="#E9ECEF"></Progress.Section>
                <Progress.Section value={10} color="#ccd5ae"></Progress.Section>
                <Progress.Section value={14} color="#E9ECEF"></Progress.Section>
                <Progress.Section value={5} color="#ccd5ae"></Progress.Section>
                <Progress.Section value={13} color="#E9ECEF"></Progress.Section>
                <Progress.Section value={2} color="#ccd5ae"></Progress.Section>
                <Progress.Section value={2} color="#E9ECEF"></Progress.Section>
                <Progress.Section value={1} color="#ccd5ae"></Progress.Section>
                <Progress.Section value={1} color="#E9ECEF"></Progress.Section>
                <Progress.Section value={1} color="#ccd5ae"></Progress.Section>
                <Progress.Section value={2} color="#E9ECEF"></Progress.Section>
                <Progress.Section value={1} color="#ccd5ae"></Progress.Section>
                <Progress.Section value={1} color="#E9ECEF"></Progress.Section>
                <Progress.Section value={7} color="#ccd5ae"></Progress.Section>
                <Progress.Section value={1} color="#E9ECEF"></Progress.Section>
                <Progress.Section value={3} color="#ccd5ae"></Progress.Section>
                <Progress.Section value={1} color="#E9ECEF"></Progress.Section>
              </Progress.Root>
              <div className="flex w-full justify-between">
                <div className="text-xs">7:00 AM</div>
                <div className="text-xs">9:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
