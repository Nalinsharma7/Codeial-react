import PropTypes from 'prop-types';

import { Comment } from '../components';
import styles from '../styles/home.module.css';

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={`post-${post._id}`}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                alt="user-pic"
              />
              <div>
                <span className={styles.postAuthor}>{post.user.name}</span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.conent}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img
                  src="https://as2.ftcdn.net/v2/jpg/02/07/32/41/1000_F_207324152_xAqBJ72VgYMYbkhqsw4UNzkPdch3OyfB.jpg"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <img
                  src="https://as2.ftcdn.net/v2/jpg/01/11/68/53/1000_F_111685357_H91Oe9oXUUs8mS8okrKIGbDG4cV8biui.jpg"
                  alt="comments-icon"
                />
                <span>{post.comments.length}</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              {post.comments.map((comment) => (
                <Comment comment={comment} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;
