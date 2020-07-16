<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view :showGitInformation="showGitInformation" :noColor="noColor"/>
    <!--
    <Links title="Links"/>
    -->
    <Footer :showGitInformation="showGitInformation"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Footer from '@/components/Footer.vue';
import Links from '@/components/Links.vue';
import * as configcat from 'configcat-js';
import { IConfigCatClient } from 'configcat-common/lib/ConfigCatClient';
import { LogLevel } from 'configcat-common';
import { User } from 'configcat-common/lib/RolloutEvaluator';


@Component({
  components: {
    Footer, Links,
  },
})
export default class App extends Vue {

  public configCatClient!: IConfigCatClient;

  // features flags
  public showGitInformation: boolean = false;
  public noColor: boolean = false;

  constructor() {
    super();
    this.initializeConfigCat();
  }

  private initializeConfigCat() {
    const logger = configcat.createConsoleLogger(LogLevel.Info);
    this.configCatClient = configcat.createClientWithAutoPoll(
      process.env.VUE_APP_CONFIG_CAT_SDK_KEY,
      {
        pollIntervalSeconds: process.env.VUE_APP_CONFIG_CAT_POLL_INTERVAL_SECONDS,
        logger,
        configChanged: this.configCatConfigurationChanged,
      },
    );
    this.readFlags();
  }

  private readFlags() {
    this.readFlag('show_git_infos').then( (value) => {
        this.showGitInformation = value;
    });
    this.readFlag('no_color').then( (value) => {
        this.noColor = value;
    });
  }

  private readFlag(flag: string): Promise<boolean> {
    const user: User = new User((localStorage.id) as string);
    user.custom = { group: (localStorage.group) as string};
    return this.configCatClient.getValueAsync(flag, false, user);
  }

  @Emit('configcat-configuration-changed')
  private configCatConfigurationChanged() {
    this.readFlags();
    return this.configCatClient;
  }

}
</script>

<style>
#app {
  font-family: Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  text-align: center;
  color: #363636;
  margin-top: 120px;
}

#app a, a:visited, a:link {
  color: #363636;
  text-decoration: none;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #363636;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



</style>
