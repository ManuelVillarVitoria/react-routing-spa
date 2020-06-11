import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/posts/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: "#fa293f",
                                        textDecoration: 'underline'
                                    }}
                                    >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Posts</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={ () => <h1>Home</h1> }/>
                <Route path="/" render={ () => <h1>Home2</h1> }/>*/}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts/" exact component={Posts} />
                </Switch>
            </div>    
        );
    }
}

export default Blog;