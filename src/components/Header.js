import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    padding-top: 35px;
    padding-bottom: 25px;
    width: 90%;
    max-width: 900px;
    margin: auto;
  }
  .grid {
    position: relative;
    width: 99%;
  }
  .item {
    position: absolute;
    display: block;
    padding: 0;
    margin: 10px;
    width: calc (33.3333% -20px);
  }
  .item-content {
    position: relative;
  }
  img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    .item {
      width: calc (50% - 20px);
    }
  }
`;

const Header = () => (
  <Wrapper>
    <div className="container">
      <div className="grid" id="grid">
        <div className="item">
          <div className="item-content">
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>

        <div className="item">
          <div className="item-content">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>

        <div className="item">
          <div className="item-content">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>

        <div className="item">
          <div className="item-content">
            <img
              src="https://images.unsplash.com/photo-1553322396-0c9cd410975e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>

        <div className="item">
          <div className="item-content">
            <img
              src="https://images.unsplash.com/photo-1525983360072-2ebda055ba40?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>

        <div className="item">
          <div className="item-content">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>

        <div className="item">
          <div className="item-content">
            <img
              src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Header;
