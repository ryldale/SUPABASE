import dynamic from "next/dynamic";

const Activity1 = dynamic(() => import("@/modules/activity1"));

const Page = () => {
  return <Activity1 />;
};

export default Page;
