import { Switch, Route } from "react-router";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";

function Private() {

    return (
        <>
            <Sidebar />
            <main id='user-main'>
                <Switch>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/profile">
                        <h1>Here is your profile</h1>
                    </Route>
                    <Route path="/friends">
                        <h1>Here are your friends</h1>
                    </Route>
                    <Route path="/messages">
                        <h1>Here are your messages</h1>
                    </Route>
                    <Route path="/settings">
                        <h1>Here are your settings</h1>
                    </Route>
                </Switch>
            </main>
        </>
    )

}

export default Private;