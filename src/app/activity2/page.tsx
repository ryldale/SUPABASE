import dynamic from "next/dynamic";

const Activity2 = dynamic(() => import("@/modules/activity2"));

const Page = () => {
  return <Activity2 />;
};

export default Page;
