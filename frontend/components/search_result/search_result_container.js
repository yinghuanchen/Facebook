import { connect } from 'react-redux';
import SearchResult from './search_result';
import {withRouter} from 'react-router-dom'; 
import { searchUsers } from './../../actions/user_action';
import queryString from 'query-string'; 

const mSTP = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const searchResults = state.ui.searchResults ? Object.values(state.ui.searchResults) : null;
    const nameQuery= queryString.parse(ownProps.location.search).username
    return {
        currentUser,
        searchResults,
        nameQuery,
    }
};

const mDTP = (dispatch) => ({
    searchUsers: (query) => dispatch(searchUsers(query)),
});


export default withRouter(connect(mSTP, mDTP)(SearchResult));