export default {
  PIN_COORDS: {
    JUNIOR: 0,
    MIDDLE: 48,
    SENIOR: 97,
    current: 0,
    TO_START: 25,
    TO_FINISH: 75
  },
  GRADES: {
    JUNIOR: [
      {tag: `HTML`, size: `big`},
      {tag: `Adaptive`, size: `medium`},
      {tag: `ESLint`, size: `medium`},
      {tag: `CSS`, size: `medium`},
      {tag: `Base-JS`, size: `big`},
      {tag: `Gulp`, size: `big`},
      {tag: `SQL`, size: `small`},
      {tag: `Webpack`, size: `big`},
      {tag: `Git`, size: `small`},
      {tag: `Pug`, size: `medium`},
      {tag: `SASS`, size: `small`}
    ],
    MIDDLE: [
      {tag: `TDD`, size: `medium`},
      {tag: `JS`, size: `small`},
      {tag: `Canvas`, size: `big`},
      {tag: `SVG`, size: `medium`},
      {tag: `Bash`, size: `big`},
      {tag: `CI/CD`, size: `small`},
      {tag: `React`, size: `medium`},
      {tag: `D3.js`, size: `small`},
      {tag: `Vue`, size: `medium`},
      {tag: `SPA`, size: `medium`},
      {tag: `ES6`, size: `big`}
    ],
    SENIOR: [
      {tag: `ThreeJs`, size: `small`},
      {tag: `WebGL`, size: `small`},
      {tag: `Chrome Extensions`, size: `medium`},
      {tag: `Node`, size: `big`},
      {tag: `Express`, size: `small`},
      {tag: `Architecture`, size: `medium`}
    ]
  },
  FACES_FOR_BODIES: {
    BLUE: [
      `laugh`, `scare`, `simple`
    ],
    GREEN: [
      `angry`, `scare`, `simple`
    ],
    PINK: [
      `laugh`, `scare`, `simple`
    ]
  },
  CURRENT_CHARACTER: {
    body: `blue`,
    face: `laugh`
  }
};
