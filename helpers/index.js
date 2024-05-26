import * as utilities from "./utilities/index.js";
import * as eventHandlers from "./eventHandlers/index.js";
import * as tableInteractions from "./tableInteractions/index.js";

export default {
  ...utilities,
  ...eventHandlers,
  ...tableInteractions,
};
