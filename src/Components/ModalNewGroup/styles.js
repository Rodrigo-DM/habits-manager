import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 30%;
  background: var(--white);

  header {
    display: flex;
    justify-content: space-between;
    background: var(--black);
    color: var(--white);
    padding: 20px;

    button {
      background: var(--black);
      color: var(--white);
      border: 0;
    }
  }

  form {
    padding: 40px;
    display: flex;
    flex-direction: column;

    input,
    select {
      padding: 10px;
      width: 100%;
      border: 2px solid var(--orange);
      margin: 20px;
      border-radius: 10px;
    }

    button {
      width: 200px;
      align-self: flex-end;
      margin: 15px 0;
      height: 40px;
      font-size: 1rem;
    }
  }
`;
