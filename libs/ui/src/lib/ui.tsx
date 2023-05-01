import styled from 'styled-components';

export interface UiProps {
  name: string;
}

const StyledUi = styled.div`
  color: pink;
`;

export function Ui({ name, ...props }: UiProps) {
  return (
    <StyledUi>
      <h1>Welcome to Ui!</h1>
      <p>{JSON.stringify(props)}</p>
      <p>{name}</p>
    </StyledUi>
  );
}

export default Ui;
