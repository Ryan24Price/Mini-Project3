import React, { useState } from 'react';
import { Button, Card, Form, Container } from 'react-bootstrap';

const ForumGroup = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { text: newComment, likes: 0 }]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleLikeComment = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  };

  return (
    <Container>
      <h1>Forum Group</h1>
      <Form.Group controlId="commentForm">
        <Form.Control
          as="textarea"
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Type your comment here..."
        />
      </Form.Group>
      <Button onClick={handleAddComment}>Add Comment</Button>
      <div>
        {comments.map((comment, index) => (
          <Card key={index} style={{ marginTop: '10px' }}>
            <Card.Body>
              <Card.Text>{comment.text}</Card.Text>
              <Card.Text>Likes: {comment.likes}</Card.Text>
              <Button variant="primary" onClick={() => handleLikeComment(index)}>Like</Button>
              <Button variant="danger" onClick={() => handleDeleteComment(index)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ForumGroup;
