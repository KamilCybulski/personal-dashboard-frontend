import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import todos from './todos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, todos },
});
