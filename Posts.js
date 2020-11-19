import React, { Component } from 'react'
import { fetchPosts } from '../api/posts'

export default class Posts extends Component {
    state = { loading: true, error: null, posts: [] };

     async componentDidMount() {
        try {
            this.setState({ loading: true });
            const posts = await fetchPosts();
            this.setState({ loading: false, posts });
          } catch (error) {
            this.setState({ loading: false, error });
          }
    }
    render() {
        if (this.state.loading) return "Loading...";
        if (this.state.error) return "Something went wrong :-(";

        return (
            <>
                <h1>Posts</h1>
                <ul>
                    {
                        this.state.posts.map((post) => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}
