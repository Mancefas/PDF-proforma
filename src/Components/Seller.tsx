import { useRef, useEffect } from "react";
import { Typography, TextField, Container } from "@mui/material";

const dataFields = [
  { id: "1", label: "UAB Įmonė", name: "sellerCompany", type: "text" },
  {
    id: "2",
    label: "Įmonės adresas",
    name: "sellerCompanyAddress",
    type: "text",
  },
  { id: "3", label: "Įmonės kodas", name: "sellerCompanyCode", type: "number" },
  { id: "4", label: "Banko sąskaita", name: "sellerBankAcc", type: "text" },
  { id: "5", label: "Bankas", name: "sellerBankName", type: "text" },
];

type SellerProps = {
  setSeller: (item: {
    company: string;
    address: string;
    companyCode: number;
    bankAccNr: string;
    bankName: string;
  }) => void;

  trigger: boolean;
};

const Seller = ({ setSeller, trigger }: SellerProps) => {
  const sellerCompany = useRef<HTMLInputElement>(null);
  const sellerAddress = useRef<HTMLInputElement>(null);
  const sellerCompanyCode = useRef<HTMLInputElement>(null);
  const sellerBankAccNr = useRef<HTMLInputElement>(null);
  const sellerBankName = useRef<HTMLInputElement>(null);

  const submitHandler = () => {
    if (
      sellerCompany.current?.value &&
      sellerAddress.current?.value &&
      sellerCompanyCode.current?.value &&
      sellerBankAccNr.current?.value &&
      sellerBankName.current?.value
    ) {
      setSeller({
        company: sellerCompany.current?.value,
        address: sellerAddress.current?.value,
        companyCode: +sellerCompanyCode.current?.value,
        bankAccNr: sellerBankAccNr.current?.value,
        bankName: sellerBankName.current?.value,
      });
    }
  };

  useEffect(() => {
    if (trigger === true) {
      submitHandler();
    }
    // eslint-disable-next-line
  }, [trigger]);

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
        Pardavėjas
      </Typography>

      <Container style={{ display: "flex", flexDirection: "column" }}>
        {dataFields.map((element) => (
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            key={element.id}
            variant="outlined"
            label={element.label}
            name={element.name}
            type={element.type}
            inputRef={
              element.name === "sellerCompany"
                ? sellerCompany
                : element.name === "sellerCompanyAddress"
                ? sellerAddress
                : element.name === "sellerCompanyCode"
                ? sellerCompanyCode
                : element.name === "sellerBankAcc"
                ? sellerBankAccNr
                : element.name === "sellerBankName"
                ? sellerBankName
                : null
            }
          ></TextField>
        ))}
      </Container>
    </Container>
  );
};

export default Seller;
