# Service Order API

## Descrição
A **Service Order API** é uma API projetada para gerenciar ordens de serviço, permitindo controle de login, criação, inicialização e finalização de ordens de serviço.

## Funcionalidades

- **Autenticação**
  - Login de usuário
- **Gerenciamento de Ordens de Serviço**
  - Visualizar ordens em aberto
  - Criar uma nova ordem de serviço
  - Inicializar uma ordem de serviço
  - Finalizar uma ordem de serviço
  - Excluir uma ordem de serviço

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
| `title` | string | Título da ordem |
| `id_client` | int  | Referência ao cliente |
| `id_user` | int  | Referência ao usuário que criou |
| `status` | string | Status atual da ordem |
| `date` | datetime | Data de criação da ordem |
| `local` | string | Local onde será realizado o serviço |

### **Order Info (Informações da Ordem)**
| Campo | Tipo  | Descrição |
|--------|------|-------------|
| `id`   | int  | Identificador único das informações da ordem |
| `id_user` | int  | Referência ao usuário que finalizou |
| `start_time` | datetime | Horário de início da ordem |
| `end_time` | datetime | Horário de término da ordem |
| `description` | string | Descrição detalhada da ordem |

