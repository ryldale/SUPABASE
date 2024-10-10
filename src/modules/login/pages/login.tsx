"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { supabase } from "@/core/api";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
    } else {
      router.push('/activity2');
    }
  };

  return (
    <>
      <Box sx={{ background: "#FAFAFA" }} width={"300px"} height={"300px"}>
        <FormControl variant="standard">
          <InputLabel> Email:</InputLabel>
          <Input name="email" type={"text"} fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="password"> Password:</InputLabel>
          <Input
            name="password"
            type={isVisible ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ width: "1.2rem", height: "1.2rem" }}
                  onClick={() => setVisible(!isVisible)}
                >
                  {isVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </FormControl>
        <Button onClick={handleLogin}> Login </Button>
      </Box>
    </>
  );
};

export default Login;
