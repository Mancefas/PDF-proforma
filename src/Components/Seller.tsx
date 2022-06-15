import { Typography, Box, TextField, Container } from "@mui/material";

const Seller = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Pardavėjas</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField variant="outlined" label="UAB Įmonė"></TextField>
        <TextField variant="outlined" label="Įmonės adresas"></TextField>
        <TextField variant="outlined" label="Įmonės kodas"></TextField>
        <TextField variant="outlined" label="Banko sąskaita"></TextField>
        <TextField variant="outlined" label="Banko kodas"></TextField>
        <TextField variant="outlined" label="Bankas"></TextField>
      </Box>
    </Container>
  );
};

export default Seller;
