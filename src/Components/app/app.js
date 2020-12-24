import React from 'react';
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import PostStatusFilter from "../postStatusFilter";
import PostList from "../postList";
import PostAddForm from "../postAddForm";
import './app.css';
const App = () => {
    const data = [
        {label: 'Going to learn React', important: true, id:1},
        {label: 'Going to  React', important: false, id:2},
        {label: 'React is the best!', important: false, id: 3},
    ];

    return(
        <div className={"app"}>
        <AppHeader/>
        <div className={"search-panel d-flex"}>
        <SearchPanel/>
        <PostStatusFilter/>
        </div>
<PostList posts={data} />
<PostAddForm/>
        </div>
    )
}

export default App;
