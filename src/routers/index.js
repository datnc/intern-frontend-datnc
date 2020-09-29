import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsTitle from '../components/Main/NewsTitle';
import LayoutAdmin from '../pages/layout/Main/LayoutAdmin';
import Home from '../pages/views/Main/Home';
import News from '../pages/views/Main/News';

const Routers = props => {
    return (
        <Router>
            <Switch>
                <Route>
                    <LayoutAdmin>
                        <Switch>
                            <Route path="/administrator" exact>
                                <Home />
                            </Route>
                            <Route path="/news">
                                <NewsTitle />
                                <News />
                            </Route>
                            {/* <Route path="/shop">
                                <Shop />
                            </Route> */}
                            {/* <Route path='/product/:id'
                            render={(props) =>
                                <ProductDetail {...props} />
                            }
                        >
                        </Route> */}
                        </Switch>
                    </LayoutAdmin>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
