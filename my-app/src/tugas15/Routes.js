import React from "react";
import{Switch,Link,Route} from "react-router-dom";

import DaftarHargaBuah1 from "../tugas11/tugas11";
import Timer from "../tugas12/tugas12";
import DaftarHargaBuah2 from "../tugas13/tugas13";
import DaftarHargaBuah3 from "../tugas14/tugas14";
import DaftarHargaBuah4 from "../tugas15/Buah";

const Routes = () =>{
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/timer">Timer</Link>
                    </li>
                    <li>
                        <Link to="/daftar2">Lists dengan class</Link>
                    </li>
                    <li>
                        <Link to="/daftar3">Lists dengan Hooks</Link>
                    </li>
                    <li>
                        <Link to="/daftar4">List dengan Context</Link>
                    </li>
                </ul>
            </nav>
      <Switch>
        <Route path="/timer" component={Timer}/>
        <Route path="/daftar2">
          <DaftarHargaBuah2 />
        </Route>
        <Route path="/daftar3">
          <DaftarHargaBuah3 />
        </Route>
        <Route path="/daftar4">
          <DaftarHargaBuah4 />
        </Route>
        <Route path="/">
          <DaftarHargaBuah1 />
        </Route>
      </Switch>
    </>
    )
}
export default Routes;