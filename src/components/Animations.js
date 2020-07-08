import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Container = styled.div`
  .card1,
  .card2,
  .card3,
  .card4 {
    position: absolute;
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
  }

  .card1 {
    min-width: 60ch;
    min-height: 60ch;
    width: 45vw;
    height: 45vw;
    max-width: 100ch;
    max-height: 100ch;
    background-image: url(https://image.flaticon.com/icons/svg/119/119596.svg);
  }

  .card2 {
    width: 25ch;
    height: 25ch;
    background-image: url(https://image.flaticon.com/icons/svg/789/789395.svg);
  }

  .card3 {
    opacity: 0.9;
    width: 25ch;
    height: 25ch;
    background-image: url(https://image.flaticon.com/icons/svg/414/414927.svg);
  }

  .card4 {
    width: 25ch;
    height: 25ch;
    background-image: url(https://image.flaticon.com/icons/svg/789/789392.svg);
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

function Animations() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <Container
      className="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
    </Container>
  );
}
export default Animations;
