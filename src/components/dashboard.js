import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import PhotoshootGrid from './photoshootGrid';
import BottomAppBar from './bottomAppBar';
import AppDescription from './AppDescription';
import SingleShoot from './singleShoot';
import { Error } from './error';

import './dashboard.css';

export const Dashboard = () => {
    return (
            <div>
                <BottomAppBar />
                <Switch>
                    <Route exact path="/dashboard" component={PhotoshootGrid} />
                    <Route path="/dashboard/about" component={AppDescription} />
                    <Route path="/dashboard/shoot/:shootId" component={SingleShoot} />
                    <Route component={Error} />
                </Switch>
            </div>
    );
}


        // return(
            // <div>
            //     <h1>Welcome, {this.props.userName}</h1>
            //     <SearchBar />
            //     <PhotoshootGrid />
            //     <BottomAppBar />
            // </div>
        // )

        // return(
		// 	<Router>
		// 		<div className="App">
		// 			<Route exact path="/dashboard" render={()=> (
		// 				this.props.isLoggedIn ? (
        //                     <div>
        //                         <h1>Welcome, {this.props.userName}</h1>
        //                         <SearchBar />
        //                         <PhotoshootGrid />
        //                         <BottomAppBar />
        //                     </div>
		// 				) : (
        //                 	<Redirect to="/" />
		// 				)
		// 			)}/>
        //             <Route exact path="/" component={Landing} />
		// 		</div>
		// 	</Router>
        // );

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        userName: state.userName,
        photoshoots: state.photoshoots
    }
}

export default connect(mapStateToProps)(Dashboard);


// export default function Email() {
//   return (
//       <Router>
//           <div className="email">
//               <BottomAppBar />
//               <div>
//                   <Switch>
//                       <Redirect exact from="/" to="/dashboard" />
//                       <Route exact path="/:shootId" component={singleShoot} />
//                       <Route exact path="/about" component={AppDescription}
//                       />
//                   </Switch>
//               </div>
//           </div>
//       </Router>
//   );
// }