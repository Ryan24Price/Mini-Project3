import { useContext, useState } from "react";
import { useUserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// function LoginForm() {
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [submitResult, setSubmitResult] = useState("");

//   //destructure the context values passed via UserProvider
//   const { currentUser, handleUpdateUser } = useUserContext();

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (userPassword.length < 5) {
//       setSubmitResult("Password must be at least 5 chars long");
//     } else if (userPassword === userEmail) {
//       setSubmitResult("NO");
//     } else {
//       setSubmitResult("Successful login");
//       handleUpdateUser({ email: userEmail });
//       //here is where we redirect user to bitcoin rates
//       navigate("/bitcoin");
//     }
//   };

//   if (currentUser.email)
//     return (
//       <div>
//         <p>Welcome {currentUser.email}!</p>
//         <button onClick={() => handleUpdateUser({})}>Log Out</button>
//       </div>
//     );
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="formRow">
//           <label>
//             Email Address:
//             {/* Use a controlled form input - value AND onChange */}
//             <input
//               type="email"
//               value={userEmail}
//               name="userEmail"
//               onChange={(e) => setUserEmail(e.target.value)}
//             />
//           </label>
//         </div>
//         <div className="formRow">
//           <label>
//             Password:
//             <input
//               type="password"
//               value={userPassword}
//               name="userPassword"
//               onChange={(e) => setUserPassword(e.target.value)}
//             />
//           </label>
//         </div>

//         <button>Log In</button>
//         <p>{submitResult}</p>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;

// MUI login form
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">By Me</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const { currentUser, handleUpdateUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("NO");
    } else {
      setSubmitResult("Successful login");
      handleUpdateUser({ email: userEmail });
      //here is where we redirect user to bitcoin rates
      navigate("/bitcoin");
    }
  };

  if (currentUser.email)
    return (
      <div>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </div>
    );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              sx={{ background: 'white' }} // Apply white background directly
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
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              sx={{ background: 'white' }} // Apply white background directly
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography>{submitResult}</Typography>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}