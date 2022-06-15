import { Container, Typography, Box, TextField } from "@mui/material";

const GoodsSold = () => {
  return (
    <Container
      sx={{ display: "flex", marginTop: "2rem", justifyContent: "center" }}
    >
      <Box>
        <Typography variant="h6">Prekės pavadinimas</Typography>
        <TextField variant="outlined" label="Prekės pavadinimas"></TextField>
      </Box>
      <Box>
        <Typography variant="h6">Mato vnt.</Typography>
        <TextField variant="outlined" label="Mato vnt."></TextField>
      </Box>
      <Box>
        <Typography variant="h6">Kiekis</Typography>
        <TextField variant="outlined" label="Kiekis"></TextField>
      </Box>
      <Box>
        <Typography variant="h6">Kaina</Typography>
        <TextField variant="outlined" label="Kaina"></TextField>
      </Box>
      <Box>
        <Typography variant="h6">Suma EUR</Typography>
        <TextField variant="outlined" label="Suma EUR"></TextField>
      </Box>
    </Container>
  );
};

export default GoodsSold;
