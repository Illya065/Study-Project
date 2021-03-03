import { connect } from "react-redux";
import Friends from "./Friends";


function mapStateToProps(state) {
   return {
      navBar: state.navBar
   }
}

function mapDispatchToProps(dispatch) {
  return {

  } 
}



const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer