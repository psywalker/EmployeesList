import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 1rem;

  .container {
  }
  table {
    border-spacing: 0;
    border: 1px solid black;
    font-family: "Roboto";
    width: 500px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    .row-selected {
      background: rgba(24, 168, 204, 0.12);
    }
    .sorted-container {
      display: flex !important;
      align-items: center !important;
      height: 30px;
      text-align: left;
    }
    .data-empty * {
      pointer-events: none;
      opacity: 0.3;
    }

    .td-noData {
      transition: all 0.3s;
      height: 100%;
      .td-noData__container {
        transition: all 0.3s;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .td-noData__title {
        }
      }
    }
    .cell-with-checkbox {
      display: flex !important;
      justify-content: center !important;

      & .sorted-container {
        display: inline-block !important;
        text-align: center;
      }
    }
    thead {
      position: sticky;
      top: 0;

      tr {
      }
    }
    tbody {
      height: 300px;
      overflow-y: auto;
      display: grid;
      tr {
        transition: all 0.3s;
      }
      tr:hover {
        background: rgba(24, 168, 204, 0.12);
      }
    }
    tfoot td {
      border-top: 1px solid #000;
      box-shadow: 0px -9px 6px -1px rgba(34, 60, 80, 0.23);
      justify-content: left;
      align-items: start;
      display: flex;
      gap: 5px;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      text-align: left;

      :last-child {
      }
      .resizer {
        overflow: hidden;
        opacity: 0.4;
        cursor: ew-resize;
        width: 20px;
        height: 32px;
        position: absolute;
        right: 0;
        z-index: 1;
        top: 16px;
        transform: translate(0, -50%);
        touch-action: none;
        transition: all 0.1s;
        content: "\EA9E";
        & svg {
          font-size: 40px;
        }
        &.isResizing,
        &:hover {
          opacity: 1;
        }
      }
    }
    th {
      display: flex;
      box-shadow: 0px 10px 6px -1px rgba(34, 60, 80, 0.23);
      font-size: 22px;
      height: 48px;
    }
    td {
      display: flex !important;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
