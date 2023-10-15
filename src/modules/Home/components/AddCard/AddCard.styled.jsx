import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 512px;
  .box-card {
    border-radius: 8px 8px 0px 0px;
    padding: 32px 0px;
  }
  .add-card-form {
    border-radius: 0px 0px 8px 8px;
    padding: 16px 0px;
    background: #ffffff;
    .expiry-cvc-box {
      display: flex;
      flex-direction: row;
      .expiry {
        flex: 6;
      }
      .cvc {
        flex: 4;
      }
    }
    .box-buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Spacer = styled.div`
  width: 16px;
  height: 16px;
`;
