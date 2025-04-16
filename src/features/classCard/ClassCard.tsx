import Button from "@/components/ui/Button";
import { Separator } from "@/components/ui/separator";
import HostName from "./HostName";
import ClassDetails from "./ClassDetails";

export default function ClassCard() {
  return (
    <>
      <div className="flex space-x-5">
        <div>
          <div className="h-[500px] w-[400px] bg-[#D9D9D9]"></div>
        </div>
        <div>
          <div className="space-x-3 text-sm">
            <Button text="S1137"></Button>
            <Button text="Sub-Theme"></Button>
            <Button text="Tag Here"></Button>
          </div>
          <h1 className="text-4xl font-bold my-4 w-[80vh]">
            R&Deploy Your Own Bot Workshop
          </h1>
          <div className="flex items-center">
            <p className="font-medium mr-3">Hosted By</p>
            <div className="space-x-2.5 flex">
              <HostName></HostName>
              <HostName></HostName>
            </div>
          </div>
          <Separator className="bg-black drop-shadow-md my-4"></Separator>
          <div className="flex space-x-4">
            <ClassDetails details="Wednesday, June 26, 2025"></ClassDetails>
            <ClassDetails details="1:00 PM - 3:30 PM"></ClassDetails>
            <ClassDetails details="Online (Zoom)"></ClassDetails>
          </div>
        </div>
      </div>
    </>
  );
}
