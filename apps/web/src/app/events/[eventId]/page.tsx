'use client'

import { useState, useMemo } from 'react'
import { ChevronRight, Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import Image from 'next/image'

export default function EventDetails() {
  const [price, setPrice] = useState(7.0)
  const [quantity, setQuantity] = useState(10)
  
  const orderBookData = [
    { price: 7, qtyYes: 500570, priceNo: 3.5, qtyNo: 366517 },
    { price: 7.5, qtyYes: 271265, priceNo: 4, qtyNo: 426862 },
    { price: 8, qtyYes: 136994, priceNo: 4.5, qtyNo: 228827 },
    { price: 8.5, qtyYes: 151020, priceNo: 5, qtyNo: 118684 },
    { price: 9, qtyYes: 164136, priceNo: 5.5, qtyNo: 89461 },
  ]

  const maxQtyYes = useMemo(() => Math.max(...orderBookData.map(row => row.qtyYes)), [orderBookData])
  const maxQtyNo = useMemo(() => Math.max(...orderBookData.map(row => row.qtyNo)), [orderBookData])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="p-4 text-gray-600">
        <span className="hover:text-gray-900 cursor-pointer">Home</span>
        <ChevronRight className="inline mx-2 h-4 w-4" />
        <span>Event Details</span>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Event Header */}
          <div className="flex items-center gap-4 mb-6">
            <Image 
              src="/placeholder.svg?height=80&width=80" 
              alt="Australia Jersey" 
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <h1 className="text-2xl font-bold">Australia to win the 2nd T20I vs Pakistan?</h1>
          </div>

          {/* Match Info Card */}
          <Card className="mb-6 bg-gray-900 text-white p-4">
            <div className="flex justify-between items-center">
              <span>Starts on 16 Nov, 01:30 PM</span>
              <div className="flex gap-4">
                <span>AUS</span>
                <span>PAK</span>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="orderbook" className="mb-6">
            <TabsList>
              <TabsTrigger value="orderbook">Orderbook</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Order Book Table */}
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PRICE</TableHead>
                  <TableHead className="text-right">QTY AT YES</TableHead>
                  <TableHead>PRICE</TableHead>
                  <TableHead className="text-right">QTY AT NO</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderBookData.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.price}</TableCell>
                    <TableCell className="text-right relative">
                      <div 
                        className="absolute inset-y-0 right-0 bg-blue-100" 
                        style={{ width: `${(row.qtyYes / maxQtyYes) * 100}%` }}
                      />
                      <span className="relative z-10">{row.qtyYes.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>{row.priceNo}</TableCell>
                    <TableCell className="text-right relative">
                      <div 
                        className="absolute inset-y-0 right-0 bg-red-100" 
                        style={{ width: `${(row.qtyNo / maxQtyNo) * 100}%` }}
                      />
                      <span className="relative z-10">{row.qtyNo.toLocaleString()}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Right Side Panel */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <div className="flex gap-2 mb-6">
              <Button className="flex-1 bg-blue-500 hover:bg-blue-600">Yes ₹6.5</Button>
              <Button variant="outline" className="flex-1">No ₹3.5</Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Set price</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">Price</label>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        // size="icon"
                        onClick={() => setPrice(Math.max(0, price - 0.5))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="text-center"
                      />
                      <Button 
                        variant="outline" 
                        // size="icon"
                        onClick={() => setPrice(price + 0.5)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">500630 qty available</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-600">Quantity</label>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        // size="icon"
                        onClick={() => setQuantity(Math.max(0, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="text-center"
                      />
                      <Button 
                        variant="outline" 
                        // size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <div>
                      <p className="text-lg font-bold">₹{(price * quantity).toFixed(1)}</p>
                      <p className="text-sm text-gray-500">You put</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">₹{(price * quantity * 1.43).toFixed(1)}</p>
                      <p className="text-sm text-gray-500">You get</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600">Place order</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}