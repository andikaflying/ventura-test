import React, { useEffect, useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { PropertiesBox, CurrentPage, PageBox } from "./styles";
import useUserList from "../hooks/getUsers";
import useUser from "../stores/users";
import Avatar from "../components/Avatar";

export const SIZE = {
  small: "SMALL",
  medium: "MEDIUM",
  large: "LARGE",
};

const Main = () => {
  const [avatarSize, setAvatarSize] = useState(SIZE.small);
  const [listLength, setListLength] = useState(6);

  const query = { page: 1, per_page: listLength || 1 };
  const { loading, error } = useUserList(query);
  const { userList, total } = useUser((state) => state);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {!loading &&
          userList.length > 0 &&
          userList.map((item) => {
            return (
              <Avatar
                id={item.id}
                imageUrl={item.avatar}
                name={item.full_name}
                sizeType={avatarSize}
              />
            );
          })}
        {!loading && userList.length > 0 && listLength < total && (
          <Avatar
            isOther={true}
            numbers={total - listLength}
            sizeType={avatarSize}
          />
        )}
      </div>
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
    </>
  );
};

export default Main;
