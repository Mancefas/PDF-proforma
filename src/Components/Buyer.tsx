import { useRef, useEffect } from "react";
import { Typography, Box, TextField, Container } from "@mui/material";

// if needed to map fields later
// const dataFields = [
//   { id: 1, label: "UAB Įmonė", ref: "buyerCompanyName", type: "text" },
//   { id: 2, label: "Įmonės adresas", ref: "buyerCompanyAddress", type: "text" },
//   { id: 3, label: "Įmonės kodas", ref: "buyerCode", type: "number" },
// ];

type BuyerProps = {
  setBuyer: (id: { company: string; address: string; code: number }) => void;
  trigger: boolean;
};

const Buyer = ({ setBuyer, trigger }: BuyerProps) => {
  const buyerCompanyName = useRef<HTMLInputElement>(null);
  const buyerCompanyAddress = useRef<HTMLInputElement>(null);
  const buyerCode = useRef<HTMLInputElement>(null);

  const formSubmitHandler = () => {
    if (
      buyerCompanyName.current?.value &&
      buyerCompanyAddress.current?.value &&
      buyerCode.current?.value
    ) {
      setBuyer({
        company: buyerCompanyName.current?.value,
        address: buyerCompanyAddress.current?.value,
        code: +buyerCode.current?.value,
      });
    }
  };

  useEffect(() => {
    if (trigger === true) {
      formSubmitHandler();
    }
    // eslint-disable-next-line
  }, [trigger]);

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
        Pirkėjas
      </Typography>
      <Box>
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            variant="outlined"
            label="UAB Įmonė"
            inputRef={buyerCompanyName}
          ></TextField>
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            variant="outlined"
            label="Įmonės adresas"
            inputRef={buyerCompanyAddress}
          ></TextField>
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            variant="outlined"
            label="Įmonės kodas"
            type="number"
            inputRef={buyerCode}
          ></TextField>
        </Container>
      </Box>
    </Container>
  );
};

export default Buyer;
