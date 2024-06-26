# MyFirstProjectLatest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Commands ng

| Command | Description |
| --- | --- |
| `ng add <collection>` | Adiciona suporte para uma biblioteca externa ao seu projeto. |
| `ng analytics` | Configura a coleta de métricas de uso do Angular CLI. |
| `ng build [project]` | Compila um aplicativo ou biblioteca Angular em um diretório de saída chamado dist/ no caminho de saída fornecido. |
| `ng cache` | Configura o cache de disco persistente e recupera estatísticas de cache. |
| `ng completion` | Configura o auto completar do Angular CLI para o seu terminal. |
| `ng config [json-path] [value]` | Recupera ou define valores de configuração do Angular no arquivo angular.json para o espaço de trabalho. |
| `ng deploy [project]` | Invoca o construtor de implantação para um projeto especificado ou para o projeto padrão no espaço de trabalho. |
| `ng doc <keyword>` | Abre a documentação oficial do Angular (angular.io) em um navegador e pesquisa por uma palavra-chave. |
| `ng e2e [project]` | Constrói e serve um aplicativo Angular, em seguida, executa testes de ponta a ponta. |
| `ng extract-i18n [project]` | Extrai mensagens i18n do código fonte. |
| `ng generate` | Gera e/ou modifica arquivos com base em um esquema. |
| `ng lint [project]` | Executa ferramentas de lint no código do aplicativo Angular em uma pasta de projeto específica. |
| `ng new [name]` | Cria um novo espaço de trabalho Angular. |
| `ng run <target>` | Executa um alvo do Architect com uma configuração de construtor personalizada opcional definida em seu projeto. |
| `ng serve [project]` | Constrói e serve seu aplicativo, reconstruindo em mudanças de arquivo. |
| `ng test [project]` | Executa testes unitários em um projeto. |
| `ng update [packages..]` | Atualiza seu espaço de trabalho e suas dependências. |
| `ng version` | Exibe a versão do Angular CLI. |


## Estilos css

**O arquivo de estilo css global não vai sobrepor o arquivo de estilo do componente.**

Ordem de sobreposição dos estilo: estilo do Decorator -> estilo do componente -> estilo global

## Seletores
- `:host` ele é um seletor especial que se refere ao componente em que esta sendo usado é usado 
para aplicar estilos diretamente ao componente em si, em vez de seus elementos filhos.
- `:host-context` ele é um seletor que permite aplicar estilos com base no contexto do componente pai. Isso é util quando voce deseja aplicar estilos com base em condições no componente pai. 
- `::ng-deep` ele é um mecanismo que permite que os estilos definidos em um componente seja aplicados aos elementos. Em outras palavras, ele permite que voce contorne o encapsulamento de estilos em componentes. No entanto é importante notar que o uso excessivo de ::ng-deep pode tornar o código mais dificil de mante e pode não ser a melhor prática em muitos casos.

## Control Flow - controle de fluxo

No Angular, o controle de fluxo é a capacidade de controlar a ordem em que o código é executado.

Ele é usado para executar código condicionalmente, iterar sobre coleções e repetir código.

O controle de fluxo é uma ferramenta essencial para o desenvolvimento de aplicações Angular. Ele permite que você crie aplicativos mais complexos e interativos.


## Signals

Signals são uma nova funcionalidade introduzida no Angular 17 que permite que os componentes se comuniquem entre si de forma assíncrona. Isso pode ser usado para melhorar a performance e a escalabilidade das aplicações.

### Exemplos

Aqui estão alguns exemplos de como usar Signals para melhorar o desempenho e a escalabilidade das aplicações:

- Comunicação entre componentes: Você pode usar Signals para permitir que componentes se comuniquem entre si de forma assíncrona. Isso pode ajudar a melhorar o desempenho das aplicações, pois os componentes não precisam esperar que a resposta seja recebida antes de continuar.

- Notificações: Você pode usar Signals para enviar notificações para outros componentes. Isso pode ser útil para notificar os componentes de eventos que ocorrem em outros lugares da aplicação.

- Atualizações de dados: Você pode usar Signals para atualizar dados em vários componentes de forma assíncrona. Isso pode ajudar a melhorar a escalabilidade das aplicações, pois os componentes não precisam esperar que os dados sejam atualizados antes de renderizar.

### Considerações

Ao usar Signals, é importante considerar os seguintes fatores:

- Eficiência: Os Signals podem melhorar o desempenho e a escalabilidade das aplicações, mas eles também podem adicionar complexidade.

- Manutenção: Os Signals podem tornar as aplicações mais difíceis de manter. É importante documentar cuidadosamente como os Signals são usados na aplicação.
