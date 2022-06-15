import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

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
  {
    id: "5",
    text: "Suma EUR",
    type: "number",
    name: "totalPrice",
  },
];

type goodsType = {
  goodsName: string;
  unit: string;
  quantity: number | null;
  price: number | null;
  totalPrice: number | null;
};

const GoodsSold = () => {
  const [goodsName, setGoodsName] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [quantity, setQuantity] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const [goods, setGoods] = useState<goodsType | undefined>(undefined);

  const goodsHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "goodsName") {
      setGoodsName(value);
    } else if (name === "unit") {
      setUnit(value);
    } else if (name === "quantity") {
      setQuantity(+value);
    } else if (name === "price") {
      setPrice(+value);
    } else if (name === "totalPrice") {
      setTotalPrice(+value);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGoods({
      goodsName: goodsName,
      unit: unit,
      quantity: quantity,
      price: price,
      totalPrice: totalPrice,
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        display: "flex",
        marginTop: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {dataFields.map((element) => (
        <Box key={element.id}>
          <Typography variant="h6">{element.text}</Typography>
          <TextField
            variant="outlined"
            name={element.name}
            label={element.text}
            onChange={goodsHandler}
            type={element.type}
          ></TextField>
        </Box>
      ))}

      <Button variant="text" type="submit">
        Įvesti
      </Button>
    </form>
  );
};

export default GoodsSold;
