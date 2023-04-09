<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/me">Resume</router-link>
    </div>
    <router-view :showGitInformation="showGitInformation" />
    <AppFooter :showGitInformation="showGitInformation" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
// import * as configcat from "configcat-js";
// import { IConfigCatClient } from "configcat-common/lib/ConfigCatClient";
// import { LogLevel } from "configcat-common";
// import { User } from "configcat-common/lib/RolloutEvaluator";

export default defineComponent({
  name: 'App',

  components: {
    AppFooter
  },

  data () {
    return {
      // configCatClient: null as unknown as IConfigCatClient,
      // features flags
      showGitInformation: false
    }
  },

  methods: {
    /*
    initializeConfigCat() {
      const logger = configcat.createConsoleLogger(LogLevel.Info);
      this.configCatClient = configcat.createClientWithAutoPoll(
        process.env.VUE_APP_CONFIG_CAT_SDK_KEY as string,
        {
          pollIntervalSeconds:
            +(process.env.VUE_APP_CONFIG_CAT_POLL_INTERVAL_SECONDS as string) as number,
          logger,
          configChanged: this.configCatConfigurationChanged,
        }
      );
      this.readFlags();
    },
    readFlags() {

      this.readFlag("show_git_infos").then((value) => {
        this.showGitInformation = value;
      })
    },
    readFlag(flag: string): Promise<boolean> {

      const user: User = new User(localStorage.id as string);
      user.custom = { group: localStorage.group as string };
      return this.configCatClient.getValueAsync(flag, false, user);

    },
    configCatConfigurationChanged() {
      this.readFlags();
      return this.configCatClient;
    },
    */
  },

  mounted () {
    // DISABLED
    // this.initializeConfigCat();
  }
})
</script>

<style>
#app {
  font-family: Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue,
    sans-serif;
  text-align: center;
  color: #66757f;
  background-color: #E1E8ED;
}

#app a,
a:visited,
a:link {
  text-decoration: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #66757f;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
