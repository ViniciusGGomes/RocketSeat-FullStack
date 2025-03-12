export async function jsonBodyHandler(request, response) {
  // Adiciona cada chunk
  const buffers = [];

  // Coleta os chunks de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk);
  }
  try {
    // Concatena os chunk e converte para String. Em seguida, converte a string para JSON.
    // Middler consegue mudar a requisição!
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  // Middler consegue modificar a resposta!
  response.setHeader("Content-type", "application/json");
  // Padrão para disser que o tipo do conteúdo é uma application/json, o corpo da requisição
}
