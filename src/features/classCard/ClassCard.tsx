import Button from "@/components/ui/Button";
import HostName from "./HostName";

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
            <p className="font-bold mx-3">Hosted By</p>

            <div className="space-x-2.5 flex">
              <HostName></HostName>
              <HostName></HostName>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
