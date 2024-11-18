"use client";
import { Button } from "./ui/button";

export default function CreateNewCanvasButton() {
  // TODO - Server Action for onclick which creates a new canvas and redirects user to it
  return <Button variant="outline" className="rounded-full h-10 w-10 border-gray-400 border-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  </Button>
}
