import { BrowserRouter, Switch, Route } from "react-router-dom"
import Welcome from "./pages/welcome";
import Main from "./pages/main";
import Produtos from "./pages/produtos";

import React from "react"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Welcome mensagem="Bem vindo :)"/>}/>
            <Route path="/main" component={() => <Main />}/>
            <Route path="/produtos" component={() => <Produtos />}/>
            <Route component={() => <Welcome mensagem="Bem vindo :("/>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes