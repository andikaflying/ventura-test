import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const CurrentPage = styled(Typography)`
  && {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 40px;
  }
`;

export const PageBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PropertiesBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  .form {
    width: 300px;
    margin-top: 16px;
  }
`;
