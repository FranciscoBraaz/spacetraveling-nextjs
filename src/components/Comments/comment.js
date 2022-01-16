import React from 'react';

const Comment = React.forwardRef((props, commentBox) => {
  return <div ref={commentBox} className="comments" />;
});
Comment.displayName = 'Comment';

export default Comment;
