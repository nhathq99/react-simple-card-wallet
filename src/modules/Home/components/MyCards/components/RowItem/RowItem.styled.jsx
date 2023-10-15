import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left-side {
      display: flex;
      flex-direction: row;
      p::first-letter {
        text-transform: capitalize;
      }
      .card-icon {
        font-size: 24px;
        margin-right: 16px;
      }
    }
    .more-icon {
      font-size: 24px;
    }
  }
  .info-row {
    display: flex;
    flex-direction: row;
    .title {
      font-weight: 600;
      font-size: 14px;
      margin-right: 8px;
    }
    .content-box {
      flex: 1;
      .name {
        font-weight: 600;
        color: #1890ff;
      }
    }
  }
  .expiry-status {
    display: flex;
    flex-direction: row;
    align-items: center;
    .expiry {
      flex: 5;
      display: flex;
      flex-direction: row;
      .title {
        font-weight: 600;
        font-size: 14px;
        margin-right: 8px;
      }
    }
    .status {
      flex: 5;
      display: flex;
      flex-direction: row;
      align-items: center;
      .title {
        font-weight: 600;
        font-size: 14px;
        margin-right: 8px;
      }
      .frame {
        width: fit-content;
        padding: 4px 8px;
        border-radius: 4px;
      }
      .enabled {
        background-color: rgba(100, 163, 56, 0.2);
      }
      .disabled {
        background-color: rgba(224, 59, 36, 0.2);
      }
    }
  }
`;

export const SmallSpacer = styled.div`
  width: 8px;
  height: 8px;
`;
