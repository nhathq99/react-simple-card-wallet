import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  .body {
    max-width: 1440px;
    margin: 0 auto;
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .text {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        .heart-icon {
            margin-left: 8px;
            width: 36px;
            height: 36px;
        }
    }
  }
  @media screen and (max-width: 720px) {
    height: 60px;
  }
`;
