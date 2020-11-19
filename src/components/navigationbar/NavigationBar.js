import React from 'react'
import Logotype from '../../shared/images/logotype.svg'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const NavigationBar = () => {
    const history = useHistory();
    return (
        <div className="navigationBarWrapper">
            <img
                // onClick={() => alert("you clicked on the image")}
                onClick={() => history.push(RoutingPath.HomeView)}
                className="logotype"
                src={Logotype}
                alt={"Error..."} />
            <span className="signIn" onClick={() => history.push(RoutingPath.SignInView)}>Sign In</span>
        </div>
    )
}