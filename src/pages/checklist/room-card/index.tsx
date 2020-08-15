import { ConvertedRoom } from 'entity/rooms';
import React, { ReactElement } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import * as S from './styled';

interface RoomCardProps {
  className?: string;
  room: ConvertedRoom;
}

export default function RoomCard({ className, room }: RoomCardProps): ReactElement {
  const params: { id: string } = useParams();
  const history = useHistory();
  const handleClick = () => {
    if (room.uid !== params.id) history.push(`/rooms/${room.uid}`);
  };
  return (
    <S.Container className={className} onClick={handleClick}>
      <S.Thumbnail>
        <img src={room.imageUrl} />
        <S.ThumnailOverlay active={room.uid === params.id} />
      </S.Thumbnail>
      {room.uid === params.id && <S.ActiveBar />}
    </S.Container>
  );
}