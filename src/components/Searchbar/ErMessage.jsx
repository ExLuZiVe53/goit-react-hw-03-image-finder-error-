

import styled from 'styled-components';

export const Text = styled.div`
  font-size: 40px;
  color: red;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  align-items: baseline;
`;

export const ErMessage = ({ children }) => {
  return <Text>{children}</Text>;
};