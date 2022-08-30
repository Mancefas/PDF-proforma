import { TextField, Container, Box, Typography } from "@mui/material";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
    <Container maxWidth="xs">
      <Box sx={{ display: "flex", gap: "1rem", justifyContent: "start" }}>
        <FormatListNumberedRtlIcon fontSize="large" color="info" />
        <AccessTimeIcon fontSize="large" color="info" />
        <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
          Numeris ir data
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <TextField
          variant="outlined"
          size="small"
          label="Proformos nr."
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
      </Box>
    </Container>
  );
};

export default NumberAndDate;
