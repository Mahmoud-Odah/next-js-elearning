"use client";
import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import Spinner from "@/app/components/spinner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    setError("");
    console.log("router.push :>> ", router);
    try {
      const response = await axios.post(
        "http://localhost:3005/api/users/login",
        {
          email: email,
          password: password,
        }
      );
      setLoading(false);
      // Handle the response data
      console.log("Response Data:", response);
      localStorage.setItem("user", JSON.stringify(response.data));
      // setUser(response.data);
      window.location.href = "/e-learning/profile";
    } catch (error) {
      // Handle errors
      setLoading(false);
      setError("Email and password are not valid");
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="auth-bg">
      <div className="box">
        <div className="box-image">
          <Image src={"/assets/img/logo-text.png"} width={140} height={200} />
        </div>
        <Container component="main" maxWidth="xs" style={{ padding: 0 }}>
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleEmailChange}
                error={error && !email}
                helperText={error && !email ? "Email is required" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                error={error && !password}
                helperText={error && !password ? "Password is required" : ""}
              />
              <Typography variant="body2" color="error">
                {error}
              </Typography>
              {loading ? (
                <Spinner />
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleLogin}
                  className="btn-login"
                >
                  Sign In
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default LoginForm;
