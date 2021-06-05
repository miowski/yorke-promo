var Accueil = Vue.component('Accueil', {
    template: `
<main>
    <div class="intro" id="intro-accueil">
        <div class="intro-items">
            <div id="intro-logo">
                <img src="assets/svg/logo-large.svg" alt="Logo large">
            </div>
            <div id="intro-portrait">
                 <img src="assets/img/thom-yorke-vector.png" alt="Thom Yorke en vectoriel">
            </div>
        </div>
        <router-link to="/Biographie" tag="button">Biographie ></router-link>
    </div>
    <div class="intro-albums">
        <p id="intro-albums-wordart">
            The Eraser — The Eraser Rmxs — Tomorrow’s Modern Boxes — The UK Gold — Suspiria — Anima — I’ve Seen It All — Spitting Feathers — Analyse — Black Swan — Harrowdown Hill — Feelingulledapartbyhorses — All For The Best — Ciao My Shining Star — Shipwreck — Ego / Mirror — This — Youwouldn’tlikemewheni’mangry — Suspirium — Not The News — Not The News Rmx — Anima Preview — Her Revolution / His Rope — Boiler Room — A Brain In A Bottle
        </p>
        <router-link to="/Albums" tag="button">Albums ></router-link>
    </div>
</main>
    `,
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
})