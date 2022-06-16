import { useState } from "react";
import { Typography, Container, TextField, Box, Button } from "@mui/material";

type objectType = {
  totalAmount: string;
  payUntilDate: string;
};

const Totals = () => {
  const [totalAmount, setTotalAmount] = useState<string | null>(null);
  const [payUntilDate, setPayUntilDate] = useState<string | null>(null);

  const [totalAndPayDate, setTotalAndPayDate] = useState<objectType | {}>({});

  const sumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (totalAmount && payUntilDate != null) {
      setTotalAndPayDate({
        totalAmount: totalAmount,
        payUntilDate: payUntilDate,
      });
    }
  };

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
      <form
        onSubmit={sumbitHandler}
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Box sx={{ display: "flex", paddingRight: "3rem" }}>
          <Typography variant="h6" align="center">
            Viso suma žodžiais :
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            label="Suma žodžiais"
            sx={{ marginLeft: "2rem" }}
            type="text"
            onChange={(e) => setTotalAmount(e.target.value)}
          ></TextField>
        </Box>
        <Box style={{ display: "flex", paddingRight: "3rem" }}>
          <Typography variant="h6" align="center">
            Apmokėti iki :
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            type="date"
            sx={{ marginLeft: "2rem" }}
            onChange={(e) => setPayUntilDate(e.target.value)}
          ></TextField>
        </Box>
        <Button variant="text" type="submit">
          Įvesti
        </Button>
      </form>
    </Container>
  );
};

export default Totals;
