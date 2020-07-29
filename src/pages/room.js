import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import VideoDisplay from '../components/video-display';
import { navigate } from 'gatsby';

export default function Room() {
  return (
    <Layout>
      <Router>
        <VideoDisplay path="room/:roomID" />
        <BounceToHome default />
      </Router>
    </Layout>
  );
}

function BounceToHome() {
  useEffect(() => {
    navigate('/', { replace: true });
  }, []);

  return null;
}
