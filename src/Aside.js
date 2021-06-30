import './Aside.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStarOfDavid, faComment, faCoffee } from "@fortawesome/free-solid-svg-icons";

function Aside() {
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
            </div>
        </div>
        );
    });

    return (
        <div className="wrap-aside">
            <h3 className="title">Bài viết hot <span className="line"></span></h3>
            <div className="hot-posts">
                {item}
            </div>
        </div>
    );
}

export default Aside;