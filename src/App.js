
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import WithLayoutsRoute from './routes/WithLayoutsRoute';
import {
  Dashboard,
  Categories, Products, Suppliers,
  Doctors, Pharmacies, Specialties, Plannings, Mouvement, Inventories, Users, Roles, Permissions
} from './pages'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <WithLayoutsRoute exact path={'/'} component={Dashboard}/>
          <WithLayoutsRoute  path={'/plannings'} component={Plannings}/>

          <WithLayoutsRoute  path={'/mouvements'} component={Mouvement}/>
          <WithLayoutsRoute  path={'/stocks'} component={Inventories}/>

          <WithLayoutsRoute  path={'/categories'} component={Categories}/>
          <WithLayoutsRoute  path={'/products'} component={Products}/>
          <WithLayoutsRoute  path={'/suppliers'} component={Suppliers}/>

          <WithLayoutsRoute  path={'/doctors'} component={Doctors}/>
          <WithLayoutsRoute  path={'/pharmacies'} component={Pharmacies}/>
          <WithLayoutsRoute  path={'/specialties'} component={Specialties}/>

          <WithLayoutsRoute  path={'/users'} component={Users}/>
          <WithLayoutsRoute  path={'/roles'} component={Roles}/>
          <WithLayoutsRoute  path={'/permissions'} component={Permissions}/>

        </Switch>  
      </BrowserRouter>
      {/* <Provider store={store}>
        <BrowserRouter>
        <ToastContainer />

      <Switch>
        <RouteApp exact path={'/'} component={Home} />
        <RouteApp path={'/users'} component={Users} />
        <RouteApp path={'/categories'} component={Categories} />
        <RouteApp path={'/orders'} component={Orders} />
        <RouteApp path={'/sellers'} component={Sellers} />
        <RouteApp path={'/products'} component={Products} />
        {/* <RouteApp path={'/transactions'} component={} /> /}
      </Switch>
    </BrowserRouter>
    </Provider> */}
    {/* <BrowserRouter basename="/admin">
      <LayoutAdmin />
    </BrowserRouter> */}
    </div>
  );
}

export default App;
