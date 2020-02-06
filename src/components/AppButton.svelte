
<script>
import { backgroundColor,appButton } from '../apps/style/AppButton.js';

let count = 0;

function handleClick() {
  count += 1;
}

export let primary = false;
export let secondary = false;
export let backgroundColor = false;

 $: props = {
    ...omit($$props, 'primary', 'secondary', 'backgroundColor')
  }

</script>

<button
  {...props}
  type='button'
  class={appButton}
  class:c-btn--primary={primary}
  class:c-btn--secondary={secondary}
  on:click={handleClick}
  inputColor="rebeccapurple"
  backgroundColor= {primary}
>
  Clicked {count} {count === 1 ? 'time' :'times'}
</button>
