import {
  Datagrid,
  EmailField,
  List,
  TextField,
  SimpleList,
  UrlField,
} from "react-admin";
import { useMediaQuery } from "@mui/material";
import MyUrlField from "./MyUrlField";

export const UserList = () => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          {/* <TextField source="username" /> */}
          <EmailField source="email" />
          {/* <TextField source="address.street" /> */}
          <TextField source="phone" />
          <MyUrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};
