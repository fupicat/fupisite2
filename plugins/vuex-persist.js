import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: "fupi",
    }).plugin(store);
  });
};