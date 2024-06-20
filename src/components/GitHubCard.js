import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import smallPic from "../Screenshot 2024-06-19 220641.png"

function GitHubCard() {
    const [gitHubName, setGitHubName] = useState('');
  const [gitHubLink, setGitHubLink] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/tjsiv')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name);
        setGitHubLink(data.html_url); // Changed from `data.url` to `data.html_url` for the proper GitHub profile link
      });
  }, []);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{position: "relative", right: "130px"}} variant="top" src={smallPic} />
      <Card.Body>
        <Card.Title>{gitHubName}</Card.Title>
        <Card.Text>
          JSRF enthusiast, vinyl collecter, and owner of impeccable taste. What more could you need to know?
        </Card.Text>
        <Button variant="primary">
        <Card.Link href={gitHubLink}>My Profile</Card.Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;
