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
    .left-side {
      display: flex;
      flex-direction: row;
      align-items: center;
      .logo {
        width: 40px;
        height: 40px;
      }
      .app-name {
        font-size: 28px;
        font-weight: 600;
        color: #1677ff;
        margin-left: 8px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 720px) {
    height: 60px;
    .body {
      justify-content: center;
      .left-side {
        .logo {
          width: 30px;
          height: 30px;
        }
        .app-name {
          font-size: 24px;
        }
      }
    }
  }
`;
