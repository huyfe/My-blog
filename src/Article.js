// Import React Router
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStarOfDavid, faComment, faCoffee } from "@fortawesome/free-solid-svg-icons";
// Import css 
import './Article.css';
function Article() {
    // Create post array
    let posts = [
        {
            username: 'Tran Van A',
            title: 'Một số kiểu đường viền được tạo bởi SVG',
            views: 10,
            category: ['svg', 'html', 'gsap', 'css', 'javascript'],
            time: '5 phút trước',
            comment: 2,
            starPoint: 15
        },
        {
            username: 'Tran Van B',
            title: 'Web Worker - Anh công nhân thầm lặng trong ứng dụng của bạn',
            views: 10,
            category: ['svg', 'html', 'gsap', 'css', 'javascript'],
            time: '5 phút trước',
            comment: 2,
            starPoint: 15
        },
        {
            username: 'Tran Van B',
            title: 'Web Worker - Anh công nhân thầm lặng trong ứng dụng của bạn',
            views: 10,
            category: ['svg', 'html', 'gsap', 'css', 'javascript'],
            time: '5 phút trước',
            comment: 2,
            starPoint: 15
        },
        {
            username: 'Tran Van B',
            title: 'Web Worker - Anh công nhân thầm lặng trong ứng dụng của bạn',
            views: 10,
            starPoint: 15,
            time: '5 phút trước',
            comment: 2,
            category: ['svg', 'html', 'gsap', 'css', 'javascript']
        },
        {
            username: 'Tran Van B',
            title: 'Web Worker - Anh công nhân thầm lặng trong ứng dụng của bạn',
            views: 10,
            category: ['svg', 'html', 'gsap', 'css', 'javascript'],
            time: '5 phút trước',
            comment: 2,
            starPoint: 15
        }
    ];

    // Return every post
    let item = posts.map((post, i) => {
        return (
        <div key={i} className="post-item">
            <div className="post-item__infor"> 
                <Router>
                    <Link to={post.username}><span>{post.username}</span></Link>
                </Router>
                <span>{post.time}</span>

                <span><FontAwesomeIcon icon={faEye} /> {post.views}</span>
                <span><FontAwesomeIcon icon={faStarOfDavid} /> {post.starPoint}</span>
                <span><FontAwesomeIcon icon={faComment} /> {post.comment}</span>

            </div>
            <div className="post-item__content"> 
                <Router>
                    <Link to={post.title}><h3>{post.title}</h3></Link>
                </Router>
                <div className="post-item__content--cate">
                    <Router>
                        {post.category.map(category => {
                            return (
                                <Link to={category}>{category}</Link>
                            );
                        })}
                    </Router>
                </div>
            </div>
        </div>
        );
    });

    // Return all post after returned through item varible
    return (
        <div className="wrap-article">
            {item}
        </div>
    );
}

// Export component
export default Article;