<template>
  <tr class="border-b">
    <td class="px-4 py-2">{{ message.msgId }}</td>
    <td class="px-4 py-2">{{ message.textMsg }}</td>
    <td class="px-4 py-2">{{ message.whatsappNumber }}</td>
    <td class="px-4 py-2">{{ message.status }}</td>
    <td class="px-4 py-2">{{ message.scheduleDate }}</td>
    <td class="px-4 py-2">{{ message.createDate }}</td>
    <td class="px-4 py-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
        Editar
      </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Excluir
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['message']
}
</script>
