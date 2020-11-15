# silver-class

> Changes the class names according to the specified breakpoints.

[![NPM](https://img.shields.io/npm/v/silver-class.svg)](https://www.npmjs.com/package/silver-class) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```txt
xs, extra-small: 0px  
sm, small: 600px 
md, medium: 960px 
lg, large: 1280px 
xl, extra-large: 1920px 
```

## Install

```bash
npm install --save silver-class
```

## Usage

```jsx
import React from 'react'
import { sCls } from 'silver-class'

export const Example = () => { 
    return (
      <div className={sCls({ xs: "text-red", sm: "text-yellow",})}>Hello !</div>
    )
}
```

## License

MIT © [oktaykose](https://github.com/oktaykose)
