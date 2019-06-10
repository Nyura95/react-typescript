# react-redux-typescript

Typescript 3.4.5
Redux v7.1.0-alpha.5 (alpha)

## @type/react-redux
Add the types manually
```ts
// node_modules/@types/react-redux/index.d.ts
type FuncSelector<S> = (reducers: S) => S[keyof S];
export function useSelector<S, R = S[keyof S]>(func: FuncSelector<S>): R;

export function useDispatch<D = Dispatch>(): D;
```

## Overview

Here is my vision of a framework react (typescript v3) with redux. 

## Installation

> `git clone https://github.com/Nyura95/react-typescript.git`

> `cd ./react-typescript`

> `npm install`

## Development mode

> `npm run dev` 

## Development mode with hmr and cache

> `npm run start` 

## build

> `npm run build`

## run a server in production

> `npm run serve`

## lint your code

> `npm run tslint`

Enjoy !
