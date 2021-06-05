var Biographie = Vue.component('Biographie', {
    template: `
      <main>
      <div class="intro" id="intro-biographie">
        <h1>Biographie</h1>
        <img src="assets/img/thom-yorke.png" alt="Thom Yorke">
      </div>
      <div class="bio-content">
        <div v-for="bioSection in sectionList" :key="bioSection.id" class="bio-section">
          <h3>{{ bioSection.name }}</h3>
          <p>{{ bioSection.textContent }}</p>
        </div>
      </div>
      <p id="bio-conclusion">Thom Yorke brille par sa polyvalence et par la créativité de ses oeuvres. Son esthétique musicale établit un
        univers large et étrange, qui fait se perdre l'auditeur dans sa pensée.</p>
      </main>
    `,
    data() {
        return {
            sectionList: []
        }
    },
    mounted() {
        axios.get('json/bio-sections.json')
            .then(response => {
                this.sectionList = response.data;
                console.log("Biography sections list", this.sectionList);
            })
    },
    methods: {}
})