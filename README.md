# hello-react-library

>

[![NPM](https://img.shields.io/npm/v/hello-react-library.svg)](https://www.npmjs.com/package/hello-react-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save hello-react-library
```

## Usage

```tsx
import * as React from "react";

import { CompA, CompB } from "hello-react-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <CompA />
        <CompB value="xyz" />
      </div>
    );
  }
}
```

## License

MIT © [bnayae](https://github.com/bnayae)
