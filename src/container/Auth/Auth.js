import React from "react";
import Aux from "../HOC/Auxilary";
import Toolbar from "../../components/Toolbar/Toolbar";
import { Route } from "react-router-dom";
import AlbumDetail from "../../components/AlbumDetail/AlbumDetail";
import CategoryListContainer from "../../components/CategoryListContainer/CategoryListContainer";
import AccountOverview from "../../components/AccountOverview/AccountOverview";
import LoginPage from "../../components/LoginPage/LoginPage";
import CategoryAll from "../../components/CategoryListContainer/CategoryAll/CategoryAll";
function Auth(props) {
  console.log(props);
  return (
    <Aux>
      <Toolbar
        logedin={
          localStorage.getItem("spotify_access_token").length < 10
            ? false
            : true
        }
      />
      <Route path="/home" exact component={CategoryListContainer}></Route>
      <Route path="/detail/:id" exact component={AlbumDetail}></Route>
      <Route path="/category/:id" exact component={CategoryAll}></Route>
      <Route path="/profile" exact component={AccountOverview}></Route>
      <Route path="/" exact component={LoginPage}></Route>
    </Aux>
  );
}

export default Auth;
