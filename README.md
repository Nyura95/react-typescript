# react-redux-typescript

Typescript 3.4.5
Redux v7.1.0

## @type/react-redux

Add the types manually

```ts
// node_modules/@types/react-redux/index.d.ts
export function useDispatch<TDispatch = Dispatch<any>>(): TDispatch;
export function useDispatch<A extends Action = AnyAction>(): Dispatch<A>;

export function useSelector<TState, TSelected>(
  selector: (state: TState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected;
```
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
