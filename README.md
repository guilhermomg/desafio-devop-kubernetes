# Desafio Kubernetes

## Passos para Configuração

1. **Configuração do Cluster Kubernetes:**
   - Utilize o Kind ou Minikube para criar o cluster.
   - Crie os namespaces `desafio-api` e `desafio-db`.

2. **Implantação da API e Banco de Dados:**
   - Aplique os manifestos `api-deployment.yaml` e `db-deployment.yaml` para os deployments.
   - Configure os services `api-service.yaml` e `db-service.yaml`.

3. **Persistência de Dados:**
   - Crie o PV e PVC para garantir que os dados do banco de dados sejam persistidos.

4. **Configuração de HPA:**
   - Aplique `api-hpa.yaml` para escalar a API automaticamente.

## Comandos para Verificar o Status

- Para verificar os logs da API: `kubectl logs <pod-name> -n desafio-api`
- Para visualizar as métricas de CPU e memória: `kubectl top pod -n desafio-api`

## Testes

- **GET /status**: Verifica a conectividade com o banco de dados.
- **POST /dados**: Insere dados no banco.
