"use client";
// RegisterForm.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import Spinner from "@/app/components/spinner";
import axios from "axios";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSpecialistChange = (event) => {
    setSpecialist(event.target.value);
  };

  // const handlePhotoChange = (event) => {
  //   // Handle file upload here
  //   setPhoto(event.target.files[0]);
  // };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        // setBase64Image(base64String);
        setPhoto(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = async () => {
    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !specialist ||
      !photo ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Add your registration logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Specialist:", specialist);
    console.log("Photo:", photo);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("first", photo);
    setError("");
    setLoading(true)
    try {
      const response = await axios.post(
        "http://localhost:3005/api/users/register",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          personalPhoto: photo,
          specialist: specialist,
        }
      );
      setLoading(false);
      // Handle the response data
      console.log("Response Data:", response);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = "/e-learning/profile";
    } catch (error) {
      // Handle errors
      const errors = error?.response?.data?.error ? error?.response?.data?.error : "something wrong happened"
      setError(errors);
      setLoading(false);
    }
  };

  return (
    <div className="box2">
      <div className="box-image">
        <Image src={"/assets/img/logo-text.png"} width={140} height={200} />
      </div>
      <Container component="main" maxWidth="sm" style={{ padding: 0 }}>
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between", // Adjust as needed
                alignItems: "center", // Adjust as needed
                flexWrap: "wrap", // Allow wrapping to a new line if necessary
                marginTop: 3,
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                autoFocus
                value={firstName}
                onChange={handleFirstNameChange}
                style={{ width: "48%" }}
              />
              <TextField
                style={{ width: "48%" }}
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />

            <FormControl fullWidth margin="normal" required>
              <InputLabel id="specialist-label">Specialist</InputLabel>
              <Select
                labelId="specialist-label"
                id="specialist"
                value={specialist}
                label="Specialist"
                onChange={handleSpecialistChange}
              >
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Engineer">Engineer</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Support">Support</MenuItem>
                {/* Add other specialist options as needed */}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" required variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPasswordClick}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />

            <Typography
              component="h1"
              variant="h7"
              style={{ marginTop: "10px" }}
            >
              Personal Photo
            </Typography>
            <TextField
              style={{ marginTop: "0" }}
              margin="normal"
              required
              fullWidth
              type="file"
              id="photo"
              // label="Personal Photo"
              name="photo"
              inputProps={{ accept: "image/*" }}
              onChange={handlePhotoChange}
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
                onClick={handleRegister}
                className="btn-login"
              >
                Register
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterForm;
