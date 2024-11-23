import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface PortfolioTradeProps {}

const PortfolioTrade: FC<PortfolioTradeProps> = ({}) => {
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="bg-[#ebebeb] rounded-2xl p-7">
        <h2 className="text-lg font-semibold text-gray-500 mb-2">Current Value</h2>
        <div className="text-4xl font-bold mb-4">₹60</div>
        <div className="grid grid-cols-3 gap-4 pt-8">
          <div >
            <div className="text-xl font-semibold">₹60</div>
            <div className="text-sm text-gray-500">Investment</div>
          </div>
          <div>
            <div className="text-xl font-semibold">₹0</div>
            <div className="text-sm text-gray-500">Live Gains</div>
          </div>
          <div>
            <div className="text-xl font-semibold">427298</div>
            <div className="text-sm text-gray-500">Rank</div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Investment</TableHead>
              <TableHead>Returns</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span>India to win the 3rd Test vs New Zealand?</span>
              </TableCell>
              <TableCell>₹35</TableCell>
              <TableCell className="text-green-500">₹95</TableCell>
              <TableCell>
                <Button variant="ghost" className="text-blue-500">
                  View <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PortfolioTrade;
