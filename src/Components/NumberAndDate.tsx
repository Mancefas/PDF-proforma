import { useRef, useEffect } from "react";
import { Container, TextField } from "@mui/material";

type NumberAndDateProps = {
  trigger: boolean;
  setNumberAndDate: (id: {
    proformaNumber: string;
    proformaDate: string;
  }) => void;
};

const NumberAndDate = ({ trigger, setNumberAndDate }: NumberAndDateProps) => {
  const proformaNumber = useRef<HTMLInputElement>(null);
  const proformaDate = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      trigger === true &&
      proformaNumber.current?.value &&
      proformaDate.current?.value
    ) {
      setNumberAndDate({
        proformaNumber: proformaNumber.current?.value,
        proformaDate: proformaDate.current?.value,
      });
    }
  }, [trigger]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginY: "2rem",
      }}
    >
      <TextField
        variant="outlined"
        size="small"
        label="Proformos nr."
        sx={{ marginLeft: "2rem" }}
        type="text"
        inputRef={proformaNumber}
        defaultValue="0001"
      />
      <TextField
        variant="outlined"
        size="small"
        sx={{ marginLeft: "2rem" }}
        type="date"
        inputRef={proformaDate}
      />
    </Container>
  );
};

export default NumberAndDate;
