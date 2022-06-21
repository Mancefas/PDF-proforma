import { useRef, useEffect } from "react";
import { Typography, Container, TextField, Box } from "@mui/material";

const Totals = ({ setTotalAndPayDate = () => {}, trigger = () => {} }: any) => {
  const totalAmount = useRef<HTMLInputElement>(null);
  const payUntilDate = useRef<HTMLInputElement>(null);

  const sumbitHandler = () => {
    if (totalAmount && payUntilDate != null) {
      setTotalAndPayDate({
        totalAmount: totalAmount.current?.value,
        payUntilDate: payUntilDate.current?.value,
      });
    }
  };

  useEffect(() => {
    if (trigger === true) {
      sumbitHandler();
    }
  }, [trigger]);

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
      <Container
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
      </Container>
    </Container>
  );
};

export default Totals;
