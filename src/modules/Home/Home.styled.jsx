import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  .body {
    max-width: 1440px;
    margin: 0 auto;
    padding: 16px;
    .box-label {
      width: 100%;
      justify-content: space-between;
      align-items: center;
      display: flex;
      flex-direction: row;
      padding: 16px 0;
      .box-left {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        p {
          margin-right: 8px;
          font-weight: 600;
          font-size: 24px;
        }
        .more-icon {
          font-size: 24px;
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    min-height: calc(100vh - 120px);
  }
`;
