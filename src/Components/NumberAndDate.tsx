import { useRef, useEffect } from "react";
import { Grid, TextField } from "@mui/material";

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

  const dateNow = new Date(); // Creating a new date object with the current date and time
  const year = dateNow.getFullYear(); // Getting current year from the created Date object
  const monthWithOffset = dateNow.getUTCMonth() + 1; // Months counted from 0 in JS
  const month = // Setting current Month number from current Date object
    monthWithOffset.toString().length < 2 // If months is <10 add a 0 at the start
      ? `0${monthWithOffset}`
      : monthWithOffset;
  const date =
    dateNow.getUTCDate().toString().length < 2 // If date is <10 add a 0 at the start
      ? `0${dateNow.getUTCDate()}`
      : dateNow.getUTCDate();

  const materialDateInput = `${year}-${month}-${date}`; // combining to format for defaultValue or value attribute of material <TextField>

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
    // eslint-disable-next-line
  }, [trigger]);

  return (
    <Grid
      container
      columns={{ sm: 12 }}
      rowSpacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{
        marginY: "2rem",
      }}
    >
      <Grid item>
        <TextField
          variant="outlined"
          size="small"
          label="Proformos nr."
          sx={{ marginLeft: "2rem" }}
          type="text"
          inputRef={proformaNumber}
          defaultValue="0001"
        />
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          size="small"
          sx={{ marginLeft: "2rem" }}
          type="date"
          inputRef={proformaDate}
          defaultValue={materialDateInput}
        />
      </Grid>
    </Grid>
  );
};

export default NumberAndDate;
