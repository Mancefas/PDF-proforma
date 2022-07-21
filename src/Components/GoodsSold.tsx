import { Typography, Box, TextField, Grid } from "@mui/material";
import { useRef, useEffect } from "react";

const dataFields = [
  {
    id: "1",
    text: "Prekės pavadinimas",
    type: "text",
    name: "goodsName",
  },
  { id: "2", text: "Mato vnt.", type: "text", name: "unit" },
  { id: "3", text: "Kiekis", type: "number", name: "quantity" },
  { id: "4", text: "Kaina", type: "number", name: "price" },
];

type GoodsSoldProps = {
  setGoods: (id: {
    goodsName: string;
    unit: string;
    quantity: number;
    price: number;
  }) => void;
  trigger: boolean;
};

const GoodsSold = ({ setGoods = () => {}, trigger }: GoodsSoldProps) => {
  const soldGoodsName = useRef<HTMLInputElement>(null);
  const soldGoodsUnit = useRef<HTMLInputElement>(null);
  const soldGoodsQuantity = useRef<HTMLInputElement>(null);
  const soldGoodsPrice = useRef<HTMLInputElement>(null);

  const submitHandler = () => {
    // get value first and then setGoods
    if (
      soldGoodsName.current?.value &&
      soldGoodsUnit.current?.value &&
      soldGoodsQuantity.current?.value &&
      soldGoodsPrice.current?.value
    ) {
      setGoods({
        goodsName: soldGoodsName.current?.value!,
        unit: soldGoodsUnit.current?.value!,
        quantity: +soldGoodsQuantity.current?.value!,
        price: +soldGoodsPrice.current?.value!,
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
    <Grid
      container
      columns={{ sm: 6 }}
      style={{
        display: "flex",
        marginTop: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {dataFields.map((element) => (
        <Grid item key={element.id}>
          <Typography variant="h6">{element.text}</Typography>
          <TextField
            sx={{ marginLeft: "0.5rem" }}
            variant="outlined"
            name={element.name}
            label={element.text}
            inputRef={
              element.name === "goodsName"
                ? soldGoodsName
                : element.name === "unit"
                ? soldGoodsUnit
                : element.name === "quantity"
                ? soldGoodsQuantity
                : element.name === "price"
                ? soldGoodsPrice
                : null
            }
            type={element.type}
          ></TextField>
        </Grid>
      ))}
    </Grid>
  );
};

export default GoodsSold;
