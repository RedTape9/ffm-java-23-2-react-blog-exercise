const BlogEntry = ({ title, content, author, image, weblink }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Written by: {author}</p>
            <img src={image} alt="blog" />
            <a href={weblink} className="blog-link">Read More</a>
        </div>
    );
};

export default BlogEntry;