var Albums = Vue.component('Albums', {
    template: `
      <main class="albums">
      <h1>Albums</h1>
      <div class="album-items">
        <div v-for="album in albumList" :key="album.id" class="album" :style='{ backgroundImage: "url(assets/img/covers/" + album.image + ")",
         backgroundSize: "cover",
         color: "#E8F2D0"
        }'>
          <p>{{ album.name }}</p>
          <p style="font-size: smaller">{{ album.released }}
            <br>
            {{ album.genre }}</p>
        </div>
        <div class="album" id="album-add">
          <p>Ajouter un album</p>
        </div>
      </div>
      </main>
    `,
    data() {
        return {
            albumList: []
        }
    },
    mounted() {
        axios.get('json/albums.json')
            .then(response => {
                this.albumList = response.data;
                console.log("Album list", this.albumList);
            })
    },
    methods: {}
})