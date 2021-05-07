<template>
  <div class="home">
    <div v-if="loading">
      <page-loading/>
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
          <router-link tag="button" class="btn-cursos" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprenda Web Design">
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';
import PageLoading from '../components/PageLoading.vue';

export default {
  components: { PageLoading },
  name: 'home',
  mixins: [fetchData],
  created() {
      this.fetchData("/home");
  }
}
</script>

<style>
.btn-cursos {
  border: none;
  background: #4b8;
  padding: 15px 20px;
  margin: 10px 0 40px 0;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>