import * as React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Toolbar, AppBar, Container, Paper } from "@material-ui/core";

const Navigation: React.FC = ({ children }) => {
    return (
        <AppBar>
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>
    );
};

interface LayoutProps {
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <div>
            <Navigation>
                <img src="/asio.png" />
                {title && <h1>{title}</h1>}
            </Navigation>
            <Container>
                <Paper>
                    {children}
                </Paper>
            </Container>
        </div>
    );
};

const Index = () => {
    return (
        <Layout title="index">
            <h1>Alex Sanchez.io</h1>
            <h1>Alex Sanchez.io</h1>
            <h1>Alex Sanchez.io</h1>
            <h1>Alex Sanchez.io</h1>
            <h1>Alex Sanchez.io</h1>
            <h1>Alex Sanchez.io</h1>
            <h1>Alex Sanchez.io</h1>
        </Layout>
    );
};

const About = () => {
    return (
        <Layout title="About">
            <h1>Eh, I'm pretty boring.</h1>
        </Layout>
    );
};

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Index} />
        </Switch>
    );
}

const App = () => {
    const history = createBrowserHistory();

    return (
        <Router>
            <Routes />
        </Router>
    );
}

export { App };