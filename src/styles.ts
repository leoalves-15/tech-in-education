import styled from "styled-components";

export const Contain = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 80%;
    margin: 20px 0;
    border-radius: 15px;
  }
  .error-btn {
    background-color: red;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
