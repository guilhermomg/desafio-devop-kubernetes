#!/bin/bash

# Verificar se o kubectl está instalado
if ! command -v kubectl &> /dev/null
then
    echo "kubectl não encontrado. Por favor, instale o kubectl."
    exit 1
fi

# Verificar se o Docker está instalado
if ! command -v docker &> /dev/null
then
    echo "Docker não encontrado. Por favor, instale o Docker."
    exit 1
fi

# Criar a imagem Docker da API
docker build -t desafio-api .

# Aplicar os manifestos do Kubernetes
kubectl apply -f ../kubernetes/

echo "Configuração completa!"
