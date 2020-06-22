<template>
  <main class="quests-container flex column align-center space-between">
    <div class="flex column align-center">
      <h1>Questions for {{quests.relation}}</h1>
      <h3 v-if="quests.subHeader">{{quests.subHeader}}</h3>
      <ul>
        <li v-for="(question, idx) in quests.questions" :key="idx">{{question}}</li>
      </ul>
    </div>
    <div>
      <router-link to="/">
        <button>Back to main page</button>
      </router-link>
    </div>
  </main>
</template>

<script>
import questService from "../services/quest.service.js";

export default {
  name: "quests",
  data() {
    return {
      relation: "dsa",
      quests: null
    };
  },
  created() {
    const relation = this.$route.params.relation;
    const quests = questService.getQuests(relation);
    this.quests = quests;
  }
};
</script>