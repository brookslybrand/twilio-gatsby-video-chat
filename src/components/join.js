import React, { useState, useEffect } from 'react';
import useTwilioVideo from '../hooks/use-twilio-video';
import { navigate } from 'gatsby';

export default function Join({ location }) {
  const defaultRoom =
    (location && location.state && location.state.roomName) || '';

  const { state, getRoomToken } = useTwilioVideo();
  const [identity, setIdentity] = useState('');
  const [roomName, setRoomName] = useState(defaultRoom);

  useEffect(() => {
    if (state.token && state.roomName) {
      navigate(`/room/${state.roomName}`);
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    getRoomToken({ identity, roomName });
  };

  return (
    <>
      <h1>Start or Join a Video Call</h1>
      <form className="start-form" onSubmit={handleSubmit}>
        <label htmlFor="identity">
          Display name:
          <input
            type="text"
            id="identity"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
          />
        </label>
        <label htmlFor="roomName">
          Which room do you want to join?
          <input
            type="text"
            id="roomName"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </label>
        <button type="submit">Join Video Chat</button>
      </form>
    </>
  );
}
