"use client"

import { FC } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { useSidebarStore } from "@/store/sidebar-store";
import { useRouter } from "next/navigation";

interface EventCardProps {
  id: string
  description: string
  imageUrl: string
}



const EventCard: FC<EventCardProps> = ({ id, description, imageUrl }) => {
  const setOpen = useSidebarStore((state) => state.setOpen)
  const router = useRouter()

  return (
    <Card className="col-span-6 p-2 h-56 bg-white" onClick={() => router.push(`/events/${id}`)}>
      <div className="flex items-center text-xs">
        <Image
          src={
            "https://probo.gumlet.io/image/upload/probo_product_images/Bar_Chart.png"
          }
          alt="adfa"
          height={20}
          width={20}
        />
        29880 traders
      </div>

      <div className="grid grid-cols-12">
        <Image
          src={imageUrl}
          alt="adfa"
          height={200}
          width={100}
          className="rounded-lg col-span-3"
        />
        <p className="col-span-9 font-medium text-lg">
          {/* India to win the 3rd Test vs New Zealand? */}
          {description}
        </p>
      </div>
      <p className="text-xs mt-2">IND trail by 149 runs</p>

      <div className="flex space-x-1 mt-3">
        <Link
          href={""}
          className={cn(
            buttonVariants({ variant: "yes" }),
            "w-full font-semibold"
          )}
          onClick={() => setOpen(true)}
        >
          Yes ₹0
        </Link>
        <Link
          href={""}
          className={cn(
            buttonVariants({ variant: "no" }),
            "w-full font-semibold"
          )}
          onClick={() => setOpen(true)}
        >
          No ₹0
        </Link>
      </div>
    </Card>
  );
};

export default EventCard;
