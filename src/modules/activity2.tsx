"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/core/api";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

const Activity1 = () => {
  const [count, setCount] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        router.push("/login");
      }
    };
    checkSession();
  }, [router]);
  const increment = () => setCount(count * 2);
  const decrement = () => setCount(count / 2);
  const reset = () => setCount(1);

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Activity1;
