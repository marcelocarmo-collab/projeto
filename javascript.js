<!DOCTYPE html>

<!-- Início do documento HTML -->
<html lang="pt-BR">

<head>

    <!-- Permite utilizar acentos e caracteres da língua portuguesa -->
    <meta charset="UTF-8">

    <!-- Faz o site se adaptar ao tamanho da tela -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título que aparece na aba do navegador -->
    <title>Matemática e Música</title>

    <!-- Conecta o HTML ao arquivo de CSS -->
    <link rel="stylesheet" href="estilo.css">

</head>

<body>

    <!-- Cabeçalho principal da página -->
    <header>

        <!-- Título principal -->
        <h1>Matemática e Música</h1>

        <!-- Pequena explicação sobre a página -->
        <p>
            Descubra alguns mitos e verdades sobre a relação
            entre Matemática, Música e aprendizagem.
        </p>

    </header>


    <!-- Conteúdo principal da página -->
    <main>

        <!-- Seção dos destaques -->
        <section class="destaques">

            <!-- Primeiro cartão -->
            <div class="card">

                <h2>Mito ou Verdade?</h2>

                <p>
                    A música não possui nenhuma relação com a Matemática.
                </p>

                <!-- Botão que executa uma função JavaScript -->
                <button onclick="mostrarResposta('resposta1')">
                    Ver resposta
                </button>

                <!-- A resposta começa escondida -->
                <p id="resposta1" class="resposta">
                    <strong>MITO!</strong><br>
                    A música possui muita Matemática.
                    Ritmo, tempo, divisão de compassos e duração das notas
                    podem ser relacionados com números e frações.
                </p>

            </div>


            <!-- Segundo cartão -->
            <div class="card">

                <h2>Mito ou Verdade?</h2>

                <p>
                    Podemos utilizar frações para compreender
                    alguns elementos musicais.
                </p>

                <button onclick="mostrarResposta('resposta2')">
                    Ver resposta
                </button>

                <p id="resposta2" class="resposta">
                    <strong>VERDADE!</strong><br>
                    Uma nota pode representar diferentes partes de um tempo.
                    Podemos relacionar essas divisões com
                    1/2, 1/4, 1/8, entre outras frações.
                </p>

            </div>


            <!-- Terceiro cartão -->
            <div class="card">

                <h2>Mito ou Verdade?</h2>

                <p>
                    Utilizar música nas aulas pode ajudar
                    na aprendizagem de Matemática.
                </p>

                <button onclick="mostrarResposta('resposta3')">
                    Ver resposta
                </button>

                <p id="resposta3" class="resposta">
                    <strong>VERDADE!</strong><br>
                    Ritmos, sequências e padrões musicais podem ajudar
                    os estudantes a perceber regularidades,
                    contagens e relações matemáticas.
                </p>

            </div>

        </section>

    </main>


    <!-- Rodapé da página -->
    <footer>

        <p>
            Projeto de Matemática, Música e Desenvolvimento Web
        </p>

    </footer>


    <!-- JavaScript responsável pela interação -->
    <script>

        // Criamos uma função chamada mostrarResposta
        function mostrarResposta(id) {

            // Procura no HTML o elemento que possui o ID recebido
            let resposta = document.getElementById(id);

            // Verifica se a resposta está aparecendo
            if (resposta.style.display === "block") {

                // Se estiver aparecendo, esconde
                resposta.style.display = "none";

            } else {

                // Se estiver escondida, mostra
                resposta.style.display = "block";

            }

        }

    </script>

</body>

</html>
