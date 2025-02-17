# Service Order API

## Descrição
A **Service Order API** é uma API projetada para gerenciar ordens de serviço, permitindo controle de login, criação, inicialização e finalização de ordens de serviço.

## Funcionalidades

- **Autenticação**
  - Login de usuário ✔
- **Gerenciamento de Ordens de Serviço**
  - Visualizar ordens em aberto ✔
  - Visualizar uma unica ordens  ✔
  - Criar uma nova ordem de serviço ✔
  - Inicializar uma ordem de serviço ✔
  - Finalizar uma ordem de serviço ✔
  - Cancelar uma ordem de serviço
- **Visualização de Clientes**
  - Listagem de clientes ✔
  - Listagem das ordens de um cliente ✔

## Modelos de Dados

A API utiliza os seguintes modelos para estruturar os dados:

### **Client (Cliente)**
| Campo | Tipo  | Descrição |
|--------|------|-------------|
| `id`   | int  | Identificador único do cliente |
| `name` | string | Nome do cliente |

### **User (Usuário)**
| Campo | Tipo  | Descrição |
|--------|------|-------------|
| `id`   | int  | Identificador único do usuário |
| `username` | string | Nome de usuário |
| `password` | string | Senha criptografada |

### **Order (Ordem de Serviço)**
| Campo | Tipo  | Descrição |
|--------|------|-------------|
| `id`   | int  | Identificador único da ordem de serviço |
| `client_id` | int  | Referência ao cliente |
| `user_id` | int  | Referência ao usuário que criou |
| `title` | string | Título da ordem |
| `order_date` | datetime | Data de criação da ordem |
| `order_local` | string | Local onde será realizado o serviço |
| `status` | string | Status atual da ordem |
| `cancellation_desc` | string | Motivo do cancelamento caso aja |

### **Order Info (Informações da Ordem)**
| Campo | Tipo  | Descrição |
|--------|------|-------------|
| `id`   | int  | Identificador único das informações da ordem |
| `id_user` | int  | Referência ao usuário que finalizou |
| `start_time` | datetime | Horário de início da ordem |
| `end_time` | datetime | Horário de término da ordem |
| `description` | string | Descrição detalhada da ordem |


## Fluxograma da aplicação

![fluxograma](doc/Fluxograma.png)
