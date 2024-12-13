"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { userStore } from "@/store/user-store";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FC, useState } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [despositAmount, setDepositAmount] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const setAvailableBalance = userStore((state) => state.setAvailableBalance)

  if(!session?.user) {
    redirect("/sign-in")
  }

  const onRecharge = async () => {
    try {
      setIsLoading(true);
      console.log(despositAmount)
      if(despositAmount === undefined || despositAmount === 0) {
        console.log(despositAmount)
        toast({
          title: "Enter deposit amount",
          description: "Enter an amount to update your balance."
        })
        return;
      }
      const { data } = await axios.post("http://localhost:3005/onramp/inr", {
        userId: session?.user.id,
        amount: despositAmount * 100,
      });

      if (data.msg === "success") {
        toast({
          title: `${despositAmount} successfully deposited`,
        });

        setAvailableBalance(despositAmount)
      } else {
        toast({
          title: "Something went wrong",
          description: `Could able to deposit ${despositAmount} amount at this moment! Please try again later.`,
        });
      }
    } catch (error) {
      console.log("Deposit Section", error);
      toast({
        title: "Someting went wrong",
        description: "Its not your fault",
      });
    } finally {
      setIsLoading(false);
    }
  };
  console.log(despositAmount)
  return (
    <div className="container mx-auto max-w-[950px] m-12">
      <h1 className="text-4xl font-semibold mb-5">Deposit</h1>
      <Card className="max-w-[550px] p-4 bg-white space-y-7">
        <div>
          <h3 className="text-base font-semibold">Deposit Amount</h3>
          <Input
            className="mt-2 font font-semibold"
            type="number"
            placeholder="0"
            value={despositAmount}
            onChange={(e) => setDepositAmount(parseInt(e.target.value))}
          />
        </div>
        <div className="space-x-2">
          <Button variant={"outline"} onClick={() => setDepositAmount(250)}>
            +250
          </Button>
          <Button variant={"outline"} onClick={() => setDepositAmount(500)}>
            +500
          </Button>
          <Button variant={"outline"} onClick={() => setDepositAmount(1000)}>
            +1000
          </Button>
        </div>
        <Button
          className="w-full rounded-xl"
          onClick={onRecharge}
          disabled={isLoading || despositAmount === 0 || despositAmount === undefined}
          isLoading={isLoading}
        >
          Recharge
        </Button>
      </Card>
    </div>
  );
};

export default page;
