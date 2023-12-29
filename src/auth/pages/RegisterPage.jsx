 import { Link as routerLink } from "react-router-dom";

import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import AuthLayout from "../layout/AuthLayout";
export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
         <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="email"
                placeholder="Jhon Doe"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contrasena"
                type="password"
                placeholder="contrasena"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }} mt={2}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>

              
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
              <Link component={routerLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
     
  );
};
