import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Button, Paper, Typography, Box } from "@mui/material/";

export default function HowToUseIt() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(!open);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Paper sx={{ padding: "1rem" }}>
          <Typography textAlign="center">
            Suvedus duomenis į langelius paspaudžiam
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            <Button variant="contained" size="small">
              Toliau
            </Button>
          </Box>
          <Typography textAlign="center">
            Suvedus reikalingus laukelius galėsite atsisiųst Sąskaitą-proformą
            PDF formatu
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            <Button variant="contained" type="button">
              Atsisiųsti proformą
            </Button>
          </Box>
          <Typography textAlign="center">
            Jį paspaudus atsisiųsite savo proformą
          </Typography>
        </Paper>
      </Backdrop>
    </div>
  );
}
