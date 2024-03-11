import { Template1 } from "@/app/components/layouts";
import { EventCards } from "@/app/components/sections";

export default function EventsPage() {
  return (
    <Template1>
      <div className="px-4 md:px-20">
        <EventCards />
      </div>
    </Template1>
  );
}
