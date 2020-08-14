import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = "http://localhost:3000";
const endpoint = `${BASE_URL}/messages`;

export default new Vuex.Store({
  state: {
    messages: [],
    sortkey: undefined,
  },
 
  mutations: {
    loadMessages(state, messages) {
      state.messages = messages;
      console.log("Store Messages", state.messages);
    },
    addNewMessage(state, message) {
      state.messages.push(message);
    },
    removeNewMessage(state, messageId) {
      console.log("Removing Message", messageId);
      state.messages = state.messages.filter((x) => x.id !== messageId);
    },
    updateNewMessage(state, message) {
      const messages = state.messages.filter((x) => x.id === message.id);
      if (messages.length > 0) {
        // eslint-disable-next-line no-unused-vars
        let oldMessage = messages[0];
        oldMessage.status = message.status;
        oldMessage.important = message.important;
      }
    },
  },
  actions: {
    async fetchAllNotifications(context) {
      console.log("fetchNotification Store");
      await axios
        .get(endpoint)
        .then((response) => context.commit("loadMessages", response.data))
        .catch((e) => console.log("Errors:", e));
      //
    },
    async addMessage(context, payload) {
      await axios
        .post(endpoint, payload)
        .then((response) => {
          console.log("addMessage", response);
          context.commit("addNewMessage", response.data);
        })
        .catch((e) => console.log("Errors:", e));
    },
    async updateMessage(context, message) {
      await axios.put(endpoint + "/" + message.id, message).then((response) => {
        console.log("updateMessage", response);
        context.commit("updateNewMessage", response.data);
      });
    },
    async removeMessage(context, message) {
      await axios
        .delete(endpoint + "/" + message.id)
        .then(() => {
          context.commit("removeNewMessage", message.id);
        })
        .catch((e) => console.log("Errors:", e));
    }
  },
  modules: {},
  getters: {
    countReadMessages: (state) => {
      return state.messages.filter((x) => x.status === "unread").length;
    }
  }
});
