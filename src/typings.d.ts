// for import json from typescript
declare module '*.json';

// for import scss from typescript
declare module '*.scss';

// for import png from typescript
declare module '*.png';

// fetchtival does not have a module typescript
declare module 'fetchival';

// fetchtival does not have a module typescript
declare module 'react-notifications-component';

declare type IHook<P = {}> = React.FunctionComponent<P>;