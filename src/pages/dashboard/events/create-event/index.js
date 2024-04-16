import { useState, useEffect } from "react";

import Events from "@/app/components/orgasms/events";
import Cards from "@/app/components/orgasms/events/cards";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
function TryHalla() {
  const router = useRouter();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const localMessage = useSelector((state) => state.localMessage);
  const error = useSelector((state) => state.error);
  const [active, setActive] = useState(1);

  const [eventData, setEventData] = useState(null);
  function CreateEvent(e) {
    dispatch({
      type: "CREATE_EVENT",
      payload: e,
    });
  }

  useEffect(() => {
    if (
      message === "Event Created Successfully!" &&
      localMessage === "Event Created" &&
      error === false
    ) {
      router.push("/dashboard/events/create-event/share");
    }
  }, [message, localMessage, error]);
  return (
    <div className="">
      {active === 1 ? (
        <Events
          setEventData={(e) => CreateEvent(e)}
          //   setActive={(e) => setActive(e)}
        />
      ) : (
        <Cards CreateEvent={() => CreateEvent()} />
      )}
    </div>
  );
}
export default TryHalla;
