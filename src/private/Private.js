import { Switch, Route } from "react-router";
import { useSelector } from "react-redux";

import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import Friends from "./friends/Friends";
import Profile from "./profile/Profile";


function Private() {
    const user = useSelector(state => state.user)

    return (
        <>
            <Sidebar />
            <main id='user-main'>
                <Switch>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/profile">
                        <Profile 
                        username={user.username}
                        name={user.name}
                        bio={user.profile.bio}
                        location={user.profile.location}
                        />
                    </Route>
                    <Route path="/friends">
                        <Friends />
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