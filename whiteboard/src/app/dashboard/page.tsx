import { auth } from "@/auth"
import Image from "next/image";
// import { canvases } from "@/dummyData/cavasX50";
import CreateNewCanvasButton from "@/components/CreateNewCanvasButton";

export default async function Page() {
  const session = await auth();
  const canvases: Canvas[] = [];
  return (
    <div className="h-screen w-full flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-white border-opacity-30 shadow-[0_1px_20px_rgba(255,255,255,0.2)] h-20">
        <div>Hello</div>
        <div>Search bar should be here</div>
        <Image src={session?.user?.image ?? ""} alt={" "} width={45} height={45} className="rounded-full"/>
      </div>

      {/* Second Bar */}
      <div className="flex items-center justify-between p-4 h-32">
        <div className="flex gap-4 items-center">
          <div className="text-2xl font-bold">Recent Canvases</div>
          {/* TODO - Create new canvas button */}
          <CreateNewCanvasButton />
        </div>
        <div className="flex gap-2"></div>
        <div className="flex gap-2"></div>
      </div>

      {/* Main Screen */}
      <div className="flex-1 flex flex-col items-center w-full overflow-y-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {canvases.map((canvas, idx) => (
            <div
              key={idx}
              className="p-4 bg-white shadow-md rounded-md border border-gray-200 text-gray-900 w-80"
            >
              <h3 className="text-md font-semibold ">{canvas.canvasName}</h3>
              <div className="h-40 bg-gray-300 mb-2 rounded-md">
                {/* Placeholder for canvas thumbnail */}
                Hello
              </div>
            </div>
          ))}
        </div>       
      </div>
    </div>
  )
}

interface Canvas {
  canvasID: String
  canvasName: String
  thumbnailUrl: String
}
