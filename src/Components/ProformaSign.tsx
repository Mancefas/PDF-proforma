import { Typography, Box } from "@mui/material";

const ProformaSign = () => {
  return (
    <>
      <Typography variant="h3" align="center">
        Išankstinė sąskaita-faktūra
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Typography variant="h6" align="center">
          Numeris
        </Typography>
        <Typography variant="h6" align="center">
          Data
        </Typography>
      </Box>
    </>
  );
};

export default ProformaSign;
