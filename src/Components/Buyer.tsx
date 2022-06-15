import { Typography, Box, TextField, Container } from "@mui/material";

const Buyer = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Pirkėjas</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField variant="outlined" label="UAB Įmonė"></TextField>
        <TextField variant="outlined" label="Įmonės adresas"></TextField>
        <TextField variant="outlined" label="Įmonės kodas"></TextField>
      </Box>
    </Container>
  );
};

export default Buyer;
