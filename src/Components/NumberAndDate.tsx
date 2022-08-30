import { Grid, TextField } from "@mui/material";

type NumberAndDateProps = {
  numberAndDateInputs: { proformaNumber: string; proformaDate: string };
  setNumberAndDateInputs: React.Dispatch<React.SetStateAction<any>>;
};

const NumberAndDate = ({
  numberAndDateInputs,
  setNumberAndDateInputs,
}: NumberAndDateProps) => {
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
          defaultValue="0001"
          value={numberAndDateInputs.proformaNumber}
          onChange={(e) =>
            setNumberAndDateInputs({
              ...numberAndDateInputs,
              proformaNumber: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          size="small"
          sx={{ marginLeft: "2rem" }}
          type="date"
          value={numberAndDateInputs.proformaDate}
          // value={
          //   numberAndDateInputs.proformaDate === ""
          //     ? materialDateInput
          //     : numberAndDateInputs.proformaDate
          // }
          onChange={(e) => {
            setNumberAndDateInputs({
              ...numberAndDateInputs,
              proformaDate: e.target.value,
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default NumberAndDate;
