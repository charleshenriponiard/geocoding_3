require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import { initAutocomplete } from "../plugins/init_autocomplete";
import { initMapbox } from "../plugins/init_mapbox";

document.addEventListener('turbolinks:load', () => {
  initAutocomplete();
  initMapbox();
});
