import dynamic from "next/dynamic";

const Activity5 = dynamic(() => import("@/modules/activity5"));

const Page = () => {
  return <Activity5 />;
};

export default Page;
