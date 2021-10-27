

export const directionMapper = (direction) => {
  if (direction === 'outbound') {
    return 'O';
  } else if (direction === 'inbound') {
    return 'I';
  }
}

export const receivedMapper = (type) => {
  if (type === 'missed') {
    return 'M';
  } else if (type === 'answered') {
    return 'A';
  } else if (type === 'voicemail') {
    return 'M';
  }
}

export const getCallType = (detailObj) => {
  const direction = directionMapper(detailObj.direction);
  const type = receivedMapper(detailObj.call_type);

  return { direction, type };
}