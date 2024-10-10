import dynamic from "next/dynamic";

const Login = dynamic(() => import("@/modules/login/pages/login"));

const Page = () => {
  return <Login />;
};

export default Page;
