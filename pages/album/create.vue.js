var EditAlbum = Vue.component('EditAlbum', {
    template: `
      <main class="contribuer">
      <h1>éditer un album</h1>
      <form>
        <label name="album-name" for="edit-a-name"></label>
        <input type="text" id="edit-a-name" placeholder="Nom de l'album" v-model="album.name">
        <label name="album-release" for="edit-a-released"></label>
        <input type="text" id="edit-a-release" placeholder="Année de sortie" v-model="album.released">
        <br>
        <label name="genre" for="edit-a-genre"></label>
        <input type="text" id="edit-a-genre" placeholder="Ajouter des genres musicaux" v-model="album.genre"><br>
        <input
            type="file"
            class="custom-file-input"
            id="edit-a-cover"
            @change="previewImage"
            required
            v-model="album.image"
        >
      </form>
      <router-link to="/Albums" tag="button" id="form-confirm">Confirmer ></router-link>
      </main>
    `,
    data() {

        return {
            // Pour pour la previsualisation des images
            imageData: "https://cdn.discordapp.com/attachments/805753487321071636/846075540678377552/MMI.png",
            album: {    // Album à créer
                id: 0,
                name: null,
                released: 0,
                genre: null,
                image: null,
            },
        }
    },
    mounted() {

    },
    methods: {

        submit: function () {
            let params = new FormData();

            params.append("name", this.album.name);
            params.append("released", this.album.released);
            params.append("genre", this.album.genre);
            params.append("image", this.album.image);
        },

        axios:post("https://boss.jmfino.fr/create.php", params),

        // Preview picture
        previewImage: function (event) {
            // On new image loaded
            this.album.image = event.target.files[0];
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
            }
        }


    }
})