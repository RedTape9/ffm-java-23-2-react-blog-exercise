import BlogEntry from "../BlogEntry.tsx";

const BlogComponents = ({ entries }) => {
    return(
        <>
            {entries.map(entry => <BlogEntry key={entry.title} {...entry} />)}
        </>
    )
}
export default BlogComponents;