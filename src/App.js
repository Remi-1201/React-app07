import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  name: "Usapon",
  image: "https://source.unsplash.com/p2UbTX6Uoig",
  mail: "bbb@ddd.com",
  phone: "000-222-3333",
  company: {
    name: "Apple"
  },
  website: "www.apple.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>Test</PrimaryButton>
        <SecondaryButton>Search</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
