import dynamic from "next/dynamic";

const Activity3 = dynamic(() => import("@/modules/activity3"));

const Page = () => {
  return <Activity3 />;
};

export default Page;
