import styled from "styled-components";

export const Wrapper = styled.div`
  .table {
    display: block;
  }
  .list {
    display: none;
    .list-item {
      background: #ffffff;
    }
  }
  @media screen and (max-width: 720px) {
    .table {
      display: none;
    }
    .list {
      display: block;
    }
  }
`;

export const CardType = styled.div`
  p::first-letter {
    text-transform: capitalize;
  }
`;

export const CardInfo = styled.div`
  .name {
    font-weight: 600;
    color: #1890ff;
  }
`;

export const CardStatus = styled.div(
  (props) => `
    width: fit-content;
    background-color: ${
      props.enable ? `rgba(100, 163, 56, 0.2)` : `rgba(224, 59, 36, 0.2)`
    };
    padding: 4px 8px;
    border-radius: 4px;
`
);

export const CardAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  .icons {
    font-size: 24px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Spacer = styled.div`
  width: 16px;
  height: 16px;
`;