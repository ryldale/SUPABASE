import dynamic from "next/dynamic";

const Activity4 = dynamic(() => import("@/modules/activity4"));

const Page = () => {
  return <Activity4 />;
};

export default Page;
