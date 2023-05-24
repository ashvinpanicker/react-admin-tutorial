import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="posts"
      icon={PostIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="users"
      icon={UserIcon}
      list={UserList}
      recordRepresentation="name"
    />
  </Admin>
);
