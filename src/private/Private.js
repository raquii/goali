import { Switch, Route } from "react-router";
import Button from "../components/button/Button";
import Sidebar from "./sidebar/Sidebar";
import UserHome from "./userhome/UserHome";

function Private({ onLogout, currentUser = {username: 'raquii', name: "Raquel Roman-Rodriguez", email: "raquel@raquel.com", } }) {


    return (
        <>
            <Sidebar />
            <main>
                <Switch>
                    <Route exact path="/home">
                        <UserHome currentUser={currentUser}/>
                    </Route>
                </Switch>
            </main>
        </>
    )

}

export default Private;