# Setup ESLint

```
npm init @eslint/config
```

Va poser des questions :
* type de lint
* utilise TS

## Run ESLint

```
npx eslint
```

## Setup tests

On a vérifié que Jest n'était pas installé avec `npm explain jest`.

Puis on a installé Jest et les types TS associés :

```
yarn add --dev jest @types/jest
```

Puis on a lancé `npx jest`... et ça a marché. Pas de config à faire.

Si vous avez des erreurs TS en lançant Jest, voir [ts-jest](https://www.npmjs.com/package/ts-jest).