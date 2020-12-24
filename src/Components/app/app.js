import React from 'react';
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import PostStatusFilter from "../postStatusFilter";
import PostList from "../postList";
import PostAddForm from "../postAddForm";
import './app.css';
const App = () => {
    return(
        <div className={"app"}>
        <AppHeader/>
        <div className={"search-panel d-flex"}>
        <SearchPanel/>
        <PostStatusFilter/>
        </div>
<PostList/>
<PostAddForm/>
        </div>
    )
}

export default App;
