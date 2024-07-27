# reactive

Tiny javascript reactivity inspired by solid-js

## Example

```html
<button type="button" id="button">Count: 0</button>
```

```typescript
import { effect, state } from 'stef'

const [count, setCount] = state(0)
const increment = () => setCount(count() + 1)

const button = document.getElementById('button') as HTMLButtonElement
button.addEventListener('click', increment)

effect(() => {
  button.textContent = `Count: ${count()}`
})
```
