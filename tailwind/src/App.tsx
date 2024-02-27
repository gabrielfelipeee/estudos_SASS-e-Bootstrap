import { useState } from "react";

import { IUser } from './shares/interfaces/IUser';

import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";


const App = () => {
  const [user, setUser] = useState<IUser | null>(null); // Objeto IUser ou nulo
  const hasUser: boolean = Boolean(user);

  return (
    <>
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser} />}
    </>
  )
}
export default App;
