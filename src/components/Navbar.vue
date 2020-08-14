<template>
  <b-navbar toggleable="sm" type="dark" variant="primary">
    <b-navbar-brand to="/"> 
      <b-avatar variant="success" text="NS" class="align-baseline"></b-avatar>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/" class="nav-link">Home</router-link>
        </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/notification-launch" class="nav-link">
            <em>
              <span class="text-center">
                <b-button variant="primary" >
                  Notifications
                  <b-badge variant="light">
                    <span>{{ counter }}</span>
                  </b-badge>
                  <vue-fontawesome icon="bell" size="1" color="lightgray"></vue-fontawesome>
                </b-button>
              </span>
            </em>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
   computed: {
    counter() {
      var count = this.$store.getters.countReadMessages;
      return count;
    }
  },
  
  async created() {
    await this.$store.dispatch("fetchAllNotifications");
    }
}
</script>
