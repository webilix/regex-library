# regex-library

Regular expression library

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage-typescript)
-   [Regular Expressions](#regular-expressions)
-   [Tests](#tests)

## Installation

```bash
npm install --save regex-library
```

## Usage

```typescript
import * as rx from 'regex-library';
rx.DATE.verify('2000-01-01');
```

## Regular Expressions

-   DATE
-   DOMAIN
-   EMAIL
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
