import { FC } from "react";
import EventCard from "@/components/EventCard";
import db from "@repo/db/prismaClient";
import EventNav from "@/components/EventNav";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  // const allEvents = await db.orderBook.findMany({})

  // if(!allEvents || allEvents.length === 0) {
  //   return (
  //     <div>
  //       No active events at this moment
  //     </div>
  //   )
  // }

  return (
    <div>
      <EventNav />
      <div className="container mx-auto max-w-[1370px] space-y-6">
        <h1 className="text-xl font-semibold">All Events Predict and Win</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-8 grid grid-cols-12 gap-6">
            {/* {allEvents.map((event) => (
                <EventCard description={event.description} />
          ))} */}
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_4a24f956-01f5-48e0-ae58-e807f4aef5a1.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_3a2a35f2-171d-46a1-a989-5c254eae97c4.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_48f19f75-a304-490f-8a21-764b4ce566a9.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_e75356f6-0648-4b8d-810b-a950e5feb23d.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_bc58aab9-2733-450c-84cb-10c2e49e6c72.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_b7ff0084-5001-44d5-bf45-8738c68ecab7.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_d14db80a-5b5a-4be2-bf16-c15b153e0d10.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_0016adcf-3deb-4d97-bb28-426fee2978e0.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_5b8def5e-113c-45e9-8c87-3d28346930f7.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_5d807734-8e38-4545-9e09-2e40446ad612.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_102e1dec-1cec-458f-a17f-3718bb1d4eed.png" />
            <EventCard id="asfas" description="India to win the 3rd Test vs New Zealand?" imageUrl="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_2cb84243-ade9-4046-b039-c8b2c40b48c2.png" />
          </div>
          <div className="col-span-4 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
