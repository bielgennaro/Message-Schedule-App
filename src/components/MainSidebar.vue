<template>
  <aside class="bg-white dark:bg-gray-900 text-gray-300 w-64 flex-shrink-0">
    <div class="py-4 px-6">
      <h2 class="text-lg font-semibold mb-4">Menu Inicial</h2>
      <nav>
        <ul>
          <li>
            <router-link to="/new-schedule">
              <a class="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                >Cadastrar Novo Agendamento</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/messages">
              <a class="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                >Verificar Mensagens Agendadas</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/users">
              <a class="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                >Usuários</a
              >
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {}
</script>
