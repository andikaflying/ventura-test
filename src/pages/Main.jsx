import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { PropertiesBox, CurrentPage, PageBox } from "./styles";

const SIZE = {
  small: "SMALL",
  medium: "MEDIUM",
  large: "LARGE",
};

const Main = () => {
  const [avatarSize, setAvatarSize] = useState(SIZE.small);
  const [listLength, setListLength] = useState(6);

  return (
    <PropertiesBox>
      <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
        Properties
      </Typography>
      <PageBox>
        <CurrentPage variant="body1" gutterBottom>
          Current Page : 0
        </CurrentPage>
        <Button
          variant="outlined"
          color="success"
          style={{ marginRight: "20px" }}
        >
          Prev
        </Button>
        <Button variant="outlined" color="success">
          Next
        </Button>
      </PageBox>
      <FormControl className="form">
        <InputLabel id="demo-simple-select-label">Avatar Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={avatarSize}
          label="Avatar Size"
          onChange={(e) => setAvatarSize(e.target.value)}
        >
          <MenuItem value={SIZE.small}>Small</MenuItem>
          <MenuItem value={SIZE.medium}>Medium</MenuItem>
          <MenuItem value={SIZE.large}>Large</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-number"
        label="Avatar List Length"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={listLength}
        className="form"
        onChange={(e) => setListLength(e.target.value)}
      />
    </PropertiesBox>
  );
};

export default Main;
