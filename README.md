# @webilix/regex-library

<div style="color: rgb(255, 100, 100); font-weight 600; font-size: 16px; border: 1px solid rgb(255, 100, 100); padding: 1rem">
This package has been deprecated, please use <a href="https://github.com/webilix/helper-library">@webilix/helper-library</a> instead.
</div>
<br><br>

Regular expression library

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage-typescript)
-   [Regular Expressions](#regular-expressions)
-   [Tests](#tests)

## Installation

```bash
npm install --save @webilix/regex-library
```

## Usage

```typescript
import { RegX } from '@webilix/regex-library';
RegX.DATE.verify('2000-01-01');
```

## Regular Expressions

-   DATE
-   DOMAIN
-   EMAIL
-   HEX_COLOR
-   IP4
-   JSON_DATE
-   MOBILE
-   NUMERIC
-   PASSWORD
-   TIME
-   URL
-   USERNAME

## Tests

```bash
git clone https://github.com/webilix/regex-library.git
npm install
npm test
```
