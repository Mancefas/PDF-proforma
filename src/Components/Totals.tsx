import { useRef } from "react";
import { Typography, Container, TextField, Box, Button } from "@mui/material";

const Totals = ({ setTotalAndPayDate = () => {} }: any) => {
  const totalAmount = useRef<HTMLInputElement>(null);
  const payUntilDate = useRef<HTMLInputElement>(null);

  const sumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (totalAmount && payUntilDate != null) {
      setTotalAndPayDate({
        totalAmount: totalAmount.current?.value,
        payUntilDate: payUntilDate.current?.value,
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
            inputRef={totalAmount}
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
            inputRef={payUntilDate}
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
