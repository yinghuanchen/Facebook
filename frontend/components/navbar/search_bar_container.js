import { connect } from 'react-redux';
import SearchBar from './search_bar';
import {withRouter} from 'react-router-dom'; 
import {searchUsers} from './../../actions/user_action';

const mSTP = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const searchResults = state.ui.searchResults ? Object.values(state.ui.searchResults) : null; 
    const path = ownProps.location.pathname;
    return {
        currentUser, 
        searchResults,
        path
    }
};

const mDTP = (dispatch) => ({
    searchUsers: (query) => dispatch(searchUsers(query)),
});


export default withRouter(connect(mSTP, mDTP)(SearchBar));