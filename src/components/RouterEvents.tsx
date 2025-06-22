import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RouterEventHandler = (...evts: any[]) => void;

const handleRouteChange: RouterEventHandler = (url, { shallow }) => {
  console.log(
    `App is changing to ${url} ${shallow ? "with" : "without"} shallow routing`
  );
};

export default function RouterEvents() {
  const router = useRouter();

  useEffect(() => {
    console.log("the router object has been changed.", router);
  }, [router]);

  useEffect(() => {
    console.log("the router.events has been changed.", router.events);
  }, [router.events]);

  useEffect(() => {
    console.log("the router.pathname has been changed.", router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    console.log("the router.query has been changed.", router.query);
  }, [router.query]);

  const handleOn = () => {
    router.events.on("routeChangeStart", handleRouteChange);
    console.log("on");
  };

  const handleOff = () => {
    router.events.off("routeChangeStart", handleRouteChange);
    console.log("off");
  };

  return (
    <div>
      <button onClick={handleOn}>on</button>
      <button onClick={handleOff}>off</button>
    </div>
  );
}
