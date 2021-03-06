import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  margin: 20px 0;
  border: 3px solid var(--orange);
  border-radius: 10px;
  background: var(--white);
  color: var(--black);
  box-shadow: 8px 8px 0 -1px var(--black);

  > header {
    padding: 15px;
    background-color: var(--black);
    color: var(--orange);
    text-align: center;
    border-radius: 6px 6px 0 0;
    > h1 {
      font-size: 1.2rem;
      font-family: var(--serif);
      font-weight: normal;
    }
  }

  > .category {
    margin: 10px;
    margin-left: 20px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > h2 {
      font-size: 1.1rem;
      font-family: var(--serif);
      font-weight: normal;
    }

    > svg {
      width: 30px;
      height: 30px;
      background: ${(card) =>
        card.achieved === true
          ? "rgba(0,255,0,0.1);"
          : "rgb(224, 145, 104, 0.3);"};
      border-radius: 50%;
    }
  }

  > p {
    margin-left: 20px;
    border-left: 3px solid var(--orange);
    padding-left: 5px;
    font-family: var(--sansSerif);
    &:nth-child(4) {
      margin: 10px 0;
      margin-left: 20px;
    }
  }
  .buttons {
    margin: 10px auto;
    width: 150px;
    display: flex;
    justify-content: space-evenly;

    > button {
      width: 40px;
      height: 40px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      > svg {
        font-size: 2rem;
      }
    }
  }
`;
