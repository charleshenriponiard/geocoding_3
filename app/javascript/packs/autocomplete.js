
import { initAutocomplete } from "../plugins/init_autocomplete";

document.addEventListener('turbolinks:load', () => {
  initAutocomplete();
});
