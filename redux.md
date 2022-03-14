# état global stocké dans le store Redux

Dans Redux :

* un store
* un état global "ramifié

Si on veut gérer l'état d'authentification, l'état du réseau, un compteur, notre état global aura 3 clés :

`auth`, `network`, `counter`

```
{
  counter: {
    value: 0
  },
  auth: {
    apiKeyIssuedAt: 987234234,
    apiKey: ''
  },
  network: {
    connected: true
  }
}
```

Au niveau architecture des dossiers/fichiers, vous aurez :

```
features/counter/counterSlice.ts
features/auth/authSlice.ts
features/network/networkSlice.ts
```

Pour prendre l'exemple du counter. "Ancien Redux" :

```javascript
const initialState = {
  value: 0
}
function counterReducer(state, action) {
  switch (action.type) {
    case 'counter/increment':
      return { value: state.value + 1 };
    
    case 'counter/decrement':
      return { value: state.value - 1 };

    case 'counter/incrementByAmount':
      // ici payload est juste un number, la plupart du temps c'est un objet
      return { value: state.value + action.payload }

    default:
      return state;
  }
}
```