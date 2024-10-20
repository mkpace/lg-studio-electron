'use client';

import Message from '../components/molecules/message';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { MdOutlineBugReport } from 'react-icons/md';
import IconButton from '../components/atoms/IconButton';

const options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <main className="flex min-h-screen">
      {/* Left Panel */}
      <div className="w-1/2 flex flex-col border-r bg-gray-50">
        {/* Header */}
        <header className="p-4 border-b">
          <div className="flex justify-between items-center">
            <Select
              onValueChange={(value) =>
                setSelectedOption(options.find((opt) => opt.id.toString() === value) || options[0])
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.id} value={option.id.toString()}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <IconButton className="h-9 px-4">
              <MdOutlineBugReport size={24} />
              <span className="mx-1">Interrupts</span>
            </IconButton>
          </div>
        </header>

        {/* Main Body */}
        <div className="flex-grow p-4">
          <div className="border p-4 h-full">
            {/* Placeholder for Mermaid flowchart */}
            <p>Mermaid Flowchart goes here</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t p-4">
          <div className="border rounded">
            <div className="flex justify-between items-center p-2 bg-gray-100">
              <h3>Input</h3>
              <Button variant="ghost" size="sm">
                ▼
              </Button>
            </div>
            <div className="p-2">
              <h4>Messages</h4>
              <Button variant="default" size="sm" className="mt-2">
                + Message
              </Button>
            </div>
          </div>
        </footer>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex flex-col">
        {/* Header */}
        <header className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-start">
              <span className="font-bold">Thread: </span>
              <p className="mx-2">5a65d9df-4b0a-451b-8942-6db449a00cf8</p>
            </div>
            <Select defaultValue="8 seconds ago">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8 seconds ago">8 seconds ago</SelectItem>
                {/* Add more time options as needed */}
              </SelectContent>
            </Select>
            <div>
              <Button variant="secondary" className="rounded-r-none">
                Pretty
              </Button>
              <Button variant="secondary" className="rounded-l-none">
                JSON
              </Button>
            </div>
            <Button variant="default">+</Button>
          </div>
        </header>

        {/* Main Body */}
        <div className="flex-grow p-4">
          <Message type="P">multiply 2 and 3</Message>
          <Message type="A">
            <table className="border-collapse border">
              <tbody>
                <tr>
                  <td className="border p-2">T</td>
                  <td className="border p-2">multiply</td>
                </tr>
              </tbody>
            </table>
          </Message>
          <Message type="A">The result of multiplying 2 and 3 is 6</Message>
        </div>

        {/* Footer */}
        <footer className="border-t p-4">
          <div className="border rounded">
            <div className="flex justify-between items-center p-2 bg-gray-100">
              <h3>OUTPUT</h3>
              <Button variant="ghost" size="sm">
                ▼
              </Button>
            </div>
            {/* Content for OUTPUT accordion */}
          </div>
        </footer>
      </div>
    </main>
  );
}
