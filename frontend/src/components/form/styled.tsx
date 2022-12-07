import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90vw;
  max-width: 400px;
  background-color: rgba(28, 29, 29, 0.862);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 3vh;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    width: 100%;
    align-items: center;
  }
`;
