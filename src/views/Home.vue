<template>
  <main class="main-container">
    <section class="header">
      <div class="hero">
        <h1>Eddie's 60<span>th</span> Birthday video</h1>
        <div class="img-container">
          <img src="../assets/imgs/hero.jpg" alt />
        </div>
      </div>
    </section>
    <section class="desc flex column align-center">
      <h3>Welcome family and friends!</h3>
      <ul>
        <li>I'm making a video for Eddie's birthday and I would like YOU to take a part in it</li>
        <li>All you have to do is to send me a video of yourselves answering a few questions written in the designated page</li>
        <li>
          Please also visit the
          <router-link class="link" to="instructions">"Technical Instructions"</router-link> page in order to produce the best quality out of your video
        </li>
        <li>After reading the technical instructions, look at the bottom of this page and click the button to view your questions</li>
        <li>You can answer some of the questions if you don't fill like answering them all. You can say whatever you want!</li>
        <li>It's all written in English for the english speakers, otherwise, feel free to answer in Hebrew</li>
        <li>Give me a full answer, e.g, Eddie is..., What I like about Eddie is... etc</li>
        <li>Try and send your video by this sunday, June 28th</li>
        <li>
          When you're done, please send your video to my mail:
          <span
            class="mail"
          >daniel720p@gmail.com</span>.
          Don't send it via WhatsApp cause it loses quality
        </li>
        <li>Thank you!</li>
      </ul>
      <router-link class="link" to="instructions">
        <button>Technical Instructions</button>
      </router-link>
    </section>
    <section class="hero2 flex column align-center justify-center">
      <div class="hero">
        <div class="img-container">
          <img src="../assets/imgs/hero2.jpg" alt />
        </div>
      </div>
      <div class="questions-links flex column align-center space-even">
        <div class="relation flex align-center justify-end">
          <router-link to="/quests/parents"><button>Parents</button></router-link>
          <p>(Gil and Jone)</p>
        </div>
        <div class="relation flex align-center justify-end">
           <router-link to="/quests/siblings"><button>Siblings</button></router-link>
          <p>(Micha and Bizi)</p>
        </div>
        <div class="relation flex align-center justify-end">
           <router-link to="/quests/newphewsnieces"><button>Nephews & Nieces</button></router-link>
          <p>(Ben, Aviya, Asaf, Adam and Leiah)</p>
        </div>
        <div class="relation flex align-center justify-end">
           <router-link to="/quests/friends"><button>Friends</button></router-link>
          <p>(Galit and Ofir, Giddy and Hilla, Avital, Phill, Joe and Sue)</p>
        </div>
        <div class="relation flex align-center justify-end">
           <router-link to="/quests/noafamily"><button>Noa's Family</button></router-link>
          <p>(Zviya, Galia and Uri, Yael and Dror, Avi and Racheli)</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
