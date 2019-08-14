import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ListPosts from "./components/postcomponents/ListPosts";
import CreatePost from "./components/postcomponents/CreatePost";
import EditPost from "./components/postcomponents/EditPost";
import DeletePost from "./components/postcomponents/DeletePost";
import DeleteConfirmed from "./components/postcomponents/DeleteConfirmed";
import EditConfirmed from "./components/postcomponents/EditConfirmed";
import UserLogin from "./components/usercomponents/UserLogin";
import UserLogoff from "./components/usercomponents/UserLogoff";
import NewUser from "./components/usercomponents/NewUser";
import LoginFailed from "./components/usercomponents/LoginFailed";
import NewUserSuccess from "./components/usercomponents/NewUserSuccess";
import SinglePost from "./components/postcomponents/SinglePost";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Route path="/newuser" component={NewUser} />
      <Route path="/login" component={UserLogin} />
      <Route path="/logoff" component={UserLogoff} />
      <Route path="/" exact component={ListPosts} />
      <Route path="/single/:id" component={SinglePost} />
      <Route path="/useraddedok" component={NewUserSuccess} />
      <Route path="/loginfailed" component={LoginFailed} />
      <ProtectedRoute path="/create" component={CreatePost} />
      <ProtectedRoute path="/edit/:id" component={EditPost} />
      <ProtectedRoute path="/delete/:id" component={DeletePost} />
      <ProtectedRoute path="/delconfirmed" component={DeleteConfirmed} />
      <ProtectedRoute path="/editconfirmed" component={EditConfirmed} />
    </Router>
  );

  // render() {
  //   return (
  //     <Router>
  //       <div className="container">
  //         <div className="card">
  //           <div className="button-group btn-group-lg">
  //             <Link to="/" className="btn btn-primary">
  //               Posts App Home
  //             </Link>
  //             <Link to="/create" className="btn btn-warning">
  //               Create New Post
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </Router>
  //   );
  // }
}

export default App;
