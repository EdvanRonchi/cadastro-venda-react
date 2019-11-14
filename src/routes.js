import { BrowserRouter, Switch, Route } from "react-router-dom"
import Welcome from "./pages/welcome";
import Main from "./pages/main";
import React from "react"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Welcome mensagem="Bem vindo :)"/>}/>
            <Route path="/main" component={() => <Main />}/>
            <Route path="/produtos" component={() => <Main show="produtos"/>}/>
            <Route path="/clientes" component={() => <Main show="clientes"/>}/>
            <Route path="/cadastro-produtos" component={() => <Main show="cadastro-produtos"/>}/>
            <Route path="/cadastro-clientes" component={() => <Main show="cadastro-clientes"/>}/>
            <Route component={() => <Welcome mensagem="Bem vindo :("/>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes