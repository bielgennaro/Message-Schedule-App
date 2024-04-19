<template>
  <div class="flex h-screen">
    <aside class="bg-white dark:bg-gray-900 text-gray-300 w-64 flex-shrink-0">
      <div class="py-4 px-6">
        <h2 class="text-lg font-semibold mb-4">Menu Inicial</h2>
        <nav>
          <ul>
            <li>
              <a href="#" class="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                >Cadastrar Novo Agendamento</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                >Verificar Mensagens Agendadas</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 px-4 rounded transition duration-200 hover:bg-gray-700"
                >Usuários</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <main class="flex-1 p-8 dark:bg-gray-700 text-white">
      <div>
        <h1 class="text-2xl font-semibold mb-4">Como funciona um agendador de mensagens?</h1>
        <p class="leading-relaxed">
          Um agendador de mensagens é uma ferramenta que permite aos usuários programar o envio de
          mensagens em uma data e hora específicas no futuro. Geralmente, os agendadores de
          mensagens são utilizados em aplicações de comunicação, como redes sociais, e-mail e
          mensagens de texto.
        </p>
        <p class="leading-relaxed mt-4">
          O funcionamento básico de um agendador de mensagens envolve os seguintes passos:
        </p>
        <ol class="list-decimal ml-6 mt-4">
          <li>Autenticação: O usuário faz login na plataforma de agendamento de mensagens.</li>
          <li>Criação de Mensagem: O usuário redige a mensagem que deseja agendar.</li>
          <li>
            Seleção de Data e Hora: O usuário escolhe a data e hora em que deseja que a mensagem
            seja enviada.
          </li>
          <li>
            Agendamento: A mensagem é armazenada no sistema e agendada para ser enviada na data e
            hora especificadas.
          </li>
          <li>
            Envio Automático: Quando a data e hora agendadas são alcançadas, o sistema envia
            automaticamente a mensagem para os destinatários designados.
          </li>
        </ol>
      </div>
    </main>
  </div>
</template>
