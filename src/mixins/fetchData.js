export default {
    data() {
        return {
          api: null,
          loading: true
        }
    },
    methods: {
        fetchData(url) {
            this.api = null;
            this.loading = true;

            fetch(`https://my-json-server.typicode.com/KlaytonJr/techno-cursos-api${url}`)
                .then(r => r.json())
                .then(r => {
                    this.api = r;
                    this.loading = false;
                });
        }
    }
}