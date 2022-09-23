# Exercício 5: Utilizando o comando telnet ou o Netcat (nc):
# Conecte no server do exercício anterior e envie informações, o server deverá imprimir as mensagens enviadas no console.
# Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.
nc -t 127.0.0.1 8085
# ou
telnet 127.0.0.1 8085

# Após estabelecer a conexão, digite a mensagem e tecle enter para enviá-las.

# Exercício 6: Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP).
# Perceba o que é exibido no console do server, já que não estamos utilizando o HTTP nele. Perceba também que o comando cURL não recebe uma resposta HTTP com sentido (um status code 200, por exemplo), de modo que ele não sabe que aquela requisição chegou ao fim.
curl localhost:8085
# Uma request mais legal:
curl --request POST \
    --data "{ \"foo\": \"bar\" }" \
    --header 'Content-Type: application/json' \
    --header 'Foo-Bar-Header: foo-bar' \
    localhost:8085/foo-bar