var Contact = Vue.component('Contact', {
    template: `
      <main class="contact">
      <h1>Contact</h1>
      <p>Vous aviez des remarques à propos du site ou de ses contenus ?<br>
        Vous pouvez nous adresser un message via le formulaire suivant :</p>
      <form>
        <label for="contact-name"></label>
        <input type="text" id="contact-name" placeholder="Nom">
        <label for="contact-email"></label>
        <input type="text" id="contact-email" placeholder="E-mail">
        <label for="contact-message"></label>
        <input type="text" id="contact-message" placeholder="Message">
      </form>
      </main>
    `,
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
})