import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus } from "lucide-react";

interface OrderTabProps {}

const OrderTab: FC<OrderTabProps> = ({}) => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 rounded-2xl">
        <TabsTrigger
          value="account"
          className="rounded-full bg-[#197bff] text-[#f1f5ff]"
        >
          Yes ₹6.0
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="rounded-full bg-[#e05852] text-[#fef6f5]"
        >
          No ₹4.0
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Set price</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="price">Price</Label>
              <div className="flex items-center mt-1">
                <Button
                  variant="outline"
                  // size="icon"
                  // onClick={() => handlePriceChange(price - 0.1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  id="price"
                  type="number"
                  // value={price.toFixed(1)}
                  // onChange={(e) => handlePriceChange(parseFloat(e.target.value))}
                  className="mx-2 text-center"
                />
                <Button
                  variant="outline"
                  // size="icon"
                  // onClick={() => handlePriceChange(price + 0.1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Label htmlFor="quantity">Quantity</Label>
            <div className="flex items-center mt-1">
              <Button
                variant="outline"
                // size="icon"
                // onClick={() => handleQuantityChange(quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                id="quantity"
                type="number"
                // value={quantity}
                // onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                className="mx-2 text-center"
              />
              <Button
                variant="outline"
                // size="icon"
                // onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-between mt-6 p-4">
              <div>
                <p className="text-2xl font-bold">₹23</p>
                <p className="text-sm text-muted-foreground">You put</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">₹100</p>
                <p className="text-sm text-muted-foreground">You get</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Set price</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="price">Price</Label>
              <div className="flex items-center mt-1">
                <Button
                  variant="outline"
                  // size="icon"
                  // onClick={() => handlePriceChange(price - 0.1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  id="price"
                  type="number"
                  // value={price.toFixed(1)}
                  // onChange={(e) => handlePriceChange(parseFloat(e.target.value))}
                  className="mx-2 text-center"
                />
                <Button
                  variant="outline"
                  // size="icon"
                  // onClick={() => handlePriceChange(price + 0.1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Label htmlFor="quantity">Quantity</Label>
            <div className="flex items-center mt-1">
              <Button
                variant="outline"
                // size="icon"
                // onClick={() => handleQuantityChange(quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                id="quantity"
                type="number"
                // value={quantity}
                // onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                className="mx-2 text-center"
              />
              <Button
                variant="outline"
                // size="icon"
                // onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-between mt-6 p-4">
              <div>
                <p className="text-2xl font-bold">₹23</p>
                <p className="text-sm text-muted-foreground">You put</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">₹100</p>
                <p className="text-sm text-muted-foreground">You get</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default OrderTab;
