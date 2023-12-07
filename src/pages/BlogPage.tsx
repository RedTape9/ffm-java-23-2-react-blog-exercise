import BlogComponents from "../components/BlogComponents.tsx";

const blogEntries = [
    { title: "First Post", content: "This is the first post.", author: "Alice", image: "https://picsum.photos/200/300/?random=1", weblink: "https://www.google.com" },
    { title: "Second Post", content: "This is the second post.", author: "Bob", image: "https://picsum.photos/200/300/?random=2", weblink: "https://www.google.com" },
    { title: "Third Post", content: "This is the third post.", author: "Charlie", image: "https://picsum.photos/200/300/?random=3", weblink: "https://www.google.com"},
    // Add more entries as needed
];

const BlogPage = () => {
    return (
        <BlogComponents entries={blogEntries} />
    );
};

export default BlogPage;