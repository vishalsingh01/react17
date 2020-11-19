import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { fetchPosts } from '../api/posts'
import Posts from "./Posts";

jest.mock("../api/posts");

test("Display list of posts", async () => {
  const posts = [{ id: 1, title: "My post" }];
  fetchPosts.mockResolvedValueOnce(posts);
  render(<Posts />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  expect(fetchPosts).toHaveBeenCalledTimes(1);
  expect(fetchPosts).toHaveBeenCalledWith();
  await waitFor(() => expect(screen.getByText("Posts")).toBeInTheDocument());
  posts.forEach((post) =>
    expect(screen.getByText(post.title)).toBeInTheDocument()
  );
});

test("We show an error message on failures", async () => {
    fetchPosts.mockRejectedValueOnce("Error!");
    render(<Posts />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(fetchPosts).toHaveBeenCalledTimes(1);
    expect(fetchPosts).toHaveBeenCalledWith();
    await waitFor(() =>  expect(screen.getByText(/Something went wrong/ig)).toBeInTheDocument());
  });