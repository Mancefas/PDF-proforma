import { Typography, Container, TextField, Box } from "@mui/material";

const Totals = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <Box style={{ display: "flex", paddingRight: "3rem" }}>
        <Typography variant="h6" align="center">
          Viso suma žodžiais :
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          label="Suma žodžiais"
          sx={{ marginLeft: "2rem" }}
        ></TextField>
      </Box>
      <Box style={{ display: "flex", paddingRight: "3rem" }}>
        <Typography variant="h6" align="center">
          Apmokėti iki :
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          label="Apmokėti iki"
          sx={{ marginLeft: "2rem" }}
        ></TextField>
      </Box>
    </Container>
  );
};

export default Totals;
