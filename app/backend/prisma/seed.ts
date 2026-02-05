import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed (População do Banco)...');

  //ordem correta (filhos -> pais) para evitar erro de chave estrangeira
  await prisma.userProgress.deleteMany();
  await prisma.chapter.deleteMany();
  await prisma.book.deleteMany();
  await prisma.concept.deleteMany();
  
  console.log('Limpeza do banco finalizada!');

  //MATEMÁTICA
  await prisma.concept.create({
    data: {
      id: 'math',
      title: 'Matemática',
      iconName: 'Calculator',
      description: 'Fundamentos matemáticos essenciais para Data Science',
      fullDescription: 'Área focada na fundamentação matemática para Ciência de Dados. Abrange Cálculo, Estatística, Probabilidade e Álgebra Linear aplicadas à modelagem, análise e interpretação de dados.',
      color: 'text-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      books: {
        create: [
          {
            id: 'pre-calculo',
            title: 'Pré Cálculo',
            author: 'Ron Larson',
            emoji: '🔢',
            chapters: {
              create: [
                { order: 1, titlePt: 'Funções e seus Gráficos', titleEn: 'Functions and Their Graphs', duration: '0:00', youtubeId: 'LCCiwPEdEpg' },
                { order: 2, titlePt: 'Funções Polinomiais e Racionais', titleEn: 'Polynomial and Rational Functions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Funções Exponenciais e Logarítmicas', titleEn: 'Exponential and Logarithmic Functions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Trigonometria', titleEn: 'Trigonometry', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Trigonometria Analítica', titleEn: 'Analytic Trigonometry', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Tópicos Adicionais em Trigonometria', titleEn: 'Additional Topics in Trigonometry', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Sistemas de Equações e Inequações', titleEn: 'Systems of Equations and Inequalities', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Matrizes e Determinantes', titleEn: 'Matrices and Determinants', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Sequências, Séries e Probabilidade', titleEn: 'Sequences, Series, and Probability', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Tópicos em Geometria Analítica', titleEn: 'Topics in Analytic Geometry', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'calculo',
            title: 'Cálculo',
            author: 'James Stewart',
            emoji: '𝞹',
            chapters: {
              create: [
                { order: 1, titlePt: 'Funções e Modelos', titleEn: 'Functions and Models', duration: '0:00', youtubeId: 'LCCiwPEdEpg' },
                { order: 2, titlePt: 'Limites e Derivadas', titleEn: 'Limits and Derivatives', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Derivadas', titleEn: 'Derivatives', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Aplicações das Derivadas', titleEn: 'Derivatives Applications', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Integrais', titleEn: 'Integrals', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Aplicações de Integrais', titleEn: 'Applications for Integrals', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Técnicas de Integração', titleEn: 'Integrals Tencniques', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Mais Aplicações de Integrais', titleEn: 'Further Applications of Integration', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'estatistica-pratica-para-cientistas-de-dados',
            title: 'Estatística Prática para Cientistas de Dados',
            author: 'Peter Bruce & Andrew Bruce',
            emoji: '🦀',
            chapters: {
              create: [
                { order: 1, titlePt: 'Análise exploratória de dados', titleEn: 'Exploratory Data Analysis', duration: '12:30', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Distribuições de dados e de amostragem', titleEn: 'Data and Sampling Distributions', duration: '15:45', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Experimentos estatísticos e testes de significância', titleEn: 'Statistical Experiments and Significance Testing', duration: '18:20', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Regressão e predição', titleEn: 'Regression and Prediction', duration: '20:15', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Classificação', titleEn: 'Classification', duration: '16:30', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Aprendizado de máquina estatístico', titleEn: 'Statistical Machine Learning', duration: '22:10', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Aprendizado não supervisionado', titleEn: 'Unsupervised Learning', duration: '19:45', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'matematica-para-machine-learning',
            title: 'Matemática para Machine Learning',
            author: 'Marc Peter Deisenroth',
            emoji: '🌳',
            chapters: {
              create: [
                { order: 1, titlePt: 'Introdução e Motivação', titleEn: 'Introduction and Motivation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Álgebra Linear', titleEn: 'Linear Algebra', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Geometria Analítica', titleEn: 'Analytic Geometry', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Decomposições de Matrizes', titleEn: 'Matrix Decompositions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Cálculo Vetorial', titleEn: 'Vector Calculus', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Probabilidade e Distribuições', titleEn: 'Probability and Distributions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Otimização Contínua', titleEn: 'Continuous Optimization', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Problemas Centrais de Machine Learning', titleEn: 'Central Machine Learning Problems', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Regressão Linear', titleEn: 'Linear Regression', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Redução de Dimensionalidade com PCA', titleEn: 'Dimensionality Reduction with Principal Component Analysis', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Estimação de Densidade com Modelos de Mistura Gaussiana', titleEn: 'Density Estimation with Gaussian Mixture Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Classificação com Máquinas de Vetores de Suporte', titleEn: 'Classification with Support Vector Machines', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'algebra-linear-com-python',
            title: 'Álgebra Linear com Python',
            author: 'Rafael FVC Santos',
            emoji: '⩩',
            chapters: {
              create: [
                { order: 1, titlePt: 'Introdução', titleEn: 'Introduction', duration: '8:45', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Linguagem de Programação Python', titleEn: 'Python Programming Language', duration: '32:15', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Conceitos Básicos da Álgebra Linear', titleEn: 'Basic Concepts of Linear Algebra', duration: '45:20', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Sistemas de Equações Lineares', titleEn: 'Systems of Linear Equations', duration: '28:30', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Determinantes de Matrizes', titleEn: 'Matrix Determinants', duration: '24:15', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Autovalores e Autovetores', titleEn: 'Eigenvalues and Eigenvectors', duration: '31:40', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Aplicações', titleEn: 'Applications', duration: '38:55', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          }
        ]
      }
    }
  });

  //PROGRAMAÇÃO
  await prisma.concept.create({
    data: {
      id: 'programming',
      title: 'Programação',
      iconName: 'Code',
      description: 'Linguagens e ferramentas para análise de dados',
      fullDescription: 'Área focada no estudo e desenvolvimento de soluções computacionais usando Python e Bancos de Dados. Abrange automação, análise de dados, scripts, APIs e aplicações.',
      color: 'text-green-600',
      bgGradient: 'from-green-50 to-green-100',
      books: {
        create: [
          {
            id: 'python-fluente',
            title: 'Python Fluente',
            author: 'Luciano Ramalho',
            emoji: '🦎',
            chapters: {
              create: [
                { order: 1, titlePt: 'O Modelo de Dados do Python', titleEn: 'The Python Data Model', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Um Conjunto de Sequências', titleEn: 'An Array of Sequences', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Dicionários e Conjuntos', titleEn: 'Dictionaries and Sets', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Texto Unicode versus Bytes', titleEn: 'Unicode Text Versus Bytes', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Construtores de Data Classes', titleEn: 'Data Class Builders', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Referências de Objetos, Mutabilidade e Reciclagem', titleEn: 'Object References, Mutability, and Recycling', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Funções como Objetos de Primeira Classe', titleEn: 'Functions as First-Class Objects', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Anotações de Tipo em Funções', titleEn: 'Type Hints in Functions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Decoradores e Closures', titleEn: 'Decorators and Closures', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Padrões de Projeto com Funções de Primeira Classe', titleEn: 'Design Patterns with First-Class Functions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Um Objeto Pythonico', titleEn: 'A Pythonic Object', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Métodos Especiais para Sequências', titleEn: 'Special Methods for Sequences', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Interfaces, Protocolos e ABCs', titleEn: 'Interfaces, Protocols, and ABCs', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'Herança: Para Melhor ou Para Pior', titleEn: 'Inheritance: For Better or for Worse', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 15, titlePt: 'Mais Sobre Anotações de Tipo', titleEn: 'More About Type Hints', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 16, titlePt: 'Sobrecarga de Operadores', titleEn: 'Operator Overloading', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 17, titlePt: 'Iteradores, Geradores e Corrotinas Clássicas', titleEn: 'Iterators, Generators, and Classic Coroutines', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 18, titlePt: 'Blocos with, match e else', titleEn: 'with, match, and else Blocks', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 19, titlePt: 'Modelos de Concorrência em Python', titleEn: 'Concurrency Models in Python', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 20, titlePt: 'Executores Concorrentes', titleEn: 'Concurrent Executors', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 21, titlePt: 'Programação Assíncrona', titleEn: 'Asynchronous Programming', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 22, titlePt: 'Atributos Dinâmicos e Propriedades', titleEn: 'Dynamic Attributes and Properties', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 23, titlePt: 'Descritores de Atributos', titleEn: 'Attribute Descriptors', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 24, titlePt: 'Metaprogramação de Classes', titleEn: 'Class Metaprogramming', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'problemas-classicos-de-ciencia-da-computacao-com-python',
            title: 'Problemas Clássicos de CC',
            author: 'David Kopec',
            emoji: '🦹',
            chapters: {
              create: [
                { order: 1, titlePt: 'Problemas pequenos', titleEn: 'Small Problems', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Problemas de busca', titleEn: 'Search Problems', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Problemas de satisfação de restrições', titleEn: 'Constraint Satisfaction Problems', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Problemas de grafos', titleEn: 'Graph Problems', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Algoritmos genéticos', titleEn: 'Genetic Algorithms', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Clustering k-means', titleEn: 'k-Means Clustering', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Redes neurais relativamente simples', titleEn: 'Relatively Simple Neural Networks', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Busca competitiva', titleEn: 'Competitive Search', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Problemas diversos', titleEn: 'Miscellaneous Problems', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'web-scrapping-com-python',
            title: 'Web Scrapping com Python',
            author: 'Ryan Mitchell',
            emoji: '🦔',
            chapters: {
              create: [
                { order: 1, titlePt: 'Seu primeiro web scraper', titleEn: 'Your First Web Scraper', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Análise avançada de HTML', titleEn: 'Advanced HTML Parsing', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Escrevendo web crawlers', titleEn: 'Writing Web Crawlers', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Modelos de web crawling', titleEn: 'Web Crawling Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Scrapy', titleEn: 'Scrapy', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Armazenando dados', titleEn: 'Storing Data', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Lendo documentos', titleEn: 'Reading Documents', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Limpando dados sujos', titleEn: 'Cleaning Your Dirty Data', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Leitura e escrita de linguagens naturais', titleEn: 'Reading and Writing Natural Languages', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Crawling através de formulários e logins', titleEn: 'Crawling Through Forms and Logins', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Scraping de JavaScript', titleEn: 'Scraping JavaScript', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Crawling através de APIs', titleEn: 'Crawling Through APIs', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Processamento de imagens e reconhecimento de texto', titleEn: 'Image Processing and Text Recognition', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'Evitando armadilhas de scraping', titleEn: 'Avoiding Scraping Traps', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 15, titlePt: 'Testando seu site com scrapers', titleEn: 'Testing Your Website with Scrapers', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 16, titlePt: 'Web crawling em paralelo', titleEn: 'Web Crawling in Parallel', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 17, titlePt: 'Scraping remoto', titleEn: 'Scraping Remotely', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 18, titlePt: 'Aspectos legais e éticos do web scraping', titleEn: 'The Legalities and Ethics of Web Scraping', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'automatize-tarefas-macantes-com-python',
            title: 'Automatize Tarefas Maçantes',
            author: 'Al Sweigart',
            emoji: '🤖',
            chapters: {
              create: [
                { order: 1, titlePt: 'Básico sobre o Python', titleEn: 'Python Basics', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Controle de Fluxo', titleEn: 'Flow Control', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Funções', titleEn: 'Functions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Listas', titleEn: 'Lists', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Dicionários e Estruturação de Dados', titleEn: 'Dictionaries and Data Structures', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Manipulação de Strings', titleEn: 'String Manipulation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Correspondência de Padrões com Expressões Regulares', titleEn: 'Pattern Matching with Regular Expressions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Lendo e Escrevendo em Arquivos', titleEn: 'Reading and Writing Files', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Organizando Arquivos', titleEn: 'Organizing Files', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Debugging', titleEn: 'Debugging', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Web Scraping', titleEn: 'Web Scraping', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Trabalhando com Planilhas Excel', titleEn: 'Working with Excel Spreadsheets', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Trabalhando com Documentos PDF e Word', titleEn: 'Working with PDF and Word Documents', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'Trabalhando com Arquivos CSV e Dados JSON', titleEn: 'Working with CSV Files and JSON Data', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 15, titlePt: 'Monitorando Tempo, Agendando Tarefas e Iniciando Programas', titleEn: 'Keeping Time, Scheduling Tasks, and Launching Programs', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 16, titlePt: 'Enviando Email e Mensagens de Texto', titleEn: 'Sending Email and Text Messages', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 17, titlePt: 'Manipulando Imagens', titleEn: 'Image Manipulation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 18, titlePt: 'Controlando o Teclado e o Mouse com Automação de GUI', titleEn: 'Controlling the Keyboard and Mouse with GUI Automation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'python-para-analise-de-dados',
            title: 'Python para Análise de Dados',
            author: 'Wes McKinney',
            emoji: '🦨',
            chapters: {
              create: [
                { order: 1, titlePt: 'Preliminares', titleEn: 'Preliminaries', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Fundamentos da Linguagem Python, IPython e Jupyter Notebooks', titleEn: 'Python Language Basics, IPython, and Jupyter Notebooks', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Estruturas de Dados Internas, Funções e Arquivos', titleEn: 'Built-in Data Structures, Functions, and Files', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Fundamentos do NumPy: Arrays e Computação Vetorizada', titleEn: 'NumPy Basics: Arrays and Vectorized Computation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Introdução ao pandas', titleEn: 'Getting Started with pandas', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Carregamento, Armazenamento e Formatos de Arquivos', titleEn: 'Data Loading, Storage, and File Formats', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Limpeza e Preparação de Dados', titleEn: 'Data Cleaning and Preparation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Manipulação de Dados: Junção, Combinação e Remodelagem', titleEn: 'Data Wrangling: Join, Combine, and Reshape', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Plotagem e Visualização', titleEn: 'Plotting and Visualization', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Agregação de Dados e Operações de Grupo', titleEn: 'Data Aggregation and Group Operations', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Séries Temporais', titleEn: 'Time Series', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'pandas Avançado', titleEn: 'Advanced pandas', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Introdução a Bibliotecas de Modelagem em Python', titleEn: 'Introduction to Modeling Libraries in Python', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'Exemplos de Análise de Dados', titleEn: 'Data Analysis Examples', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 15, titlePt: 'NumPy Avançado', titleEn: 'Advanced NumPy', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 16, titlePt: 'Mais sobre o Sistema IPython', titleEn: 'More on the IPython System', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'sql-para-analise-de-dados',
            title: 'SQL para Análise de Dados',
            author: 'Cathy Tanimura',
            emoji: '🦜',
            chapters: {
              create: [
                { order: 1, titlePt: 'Análise com SQL', titleEn: 'Data Analysis with SQL', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Preparando os Dados para Análise', titleEn: 'Preparing Data for Analysis', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Análise de Séries Temporais', titleEn: 'Time Series Analysis', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Análise de Coorte', titleEn: 'Cohort Analysis', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Análise de Texto', titleEn: 'Text Analysis', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Detecção de Anomalias', titleEn: 'Anomaly Detection', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Análise Experimental', titleEn: 'Experimental Analysis', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Criando Conjuntos de Dados Complexos para Análise', titleEn: 'Building Complex Datasets for Analysis', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Conclusão', titleEn: 'Conclusion', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          {
            id: 'fundamentos-da-engenharia-de-dados',
            title: 'Fundamentos da Engenharia de Dados',
            author: 'Joe Reis & Matt Housley',
            emoji: '🐦‍⬛',
            chapters: {
              create: [
                { order: 1, titlePt: 'Engenharia de Dados Descrita', titleEn: 'Data Engineering Described', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'O Ciclo de Vida da Engenharia de Dados', titleEn: 'The Data Engineering Lifecycle', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Projetando uma Boa Arquitetura de Dados', titleEn: 'Designing Good Data Architecture', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Escolhendo Tecnologias ao Longo do Ciclo de Vida', titleEn: 'Choosing Technologies Across the Data Engineering Lifecycle', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Geração de Dados em Sistemas Fonte', titleEn: 'Data Generation in Source Systems', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Armazenamento', titleEn: 'Storage', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Ingestão', titleEn: 'Ingestion', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Consultas, Modelagem e Transformação', titleEn: 'Queries, Modeling, and Transformation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Servindo Dados para Analytics, Machine Learning e Reverse ETL', titleEn: 'Serving Data for Analytics, Machine Learning, and Reverse ETL', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Segurança e Privacidade', titleEn: 'Security and Privacy', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'O Futuro da Engenharia de Dados', titleEn: 'The Future of Data Engineering', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Serialização e Compressão — Detalhes Técnicos', titleEn: 'Serialization and Compression Technical Details', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Redes em Nuvem', titleEn: 'Cloud Networking', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          }
        ]
      }
    }
  });

  //MACHINE LEARNING (ML)
  await prisma.concept.create({
    data: {
      id: 'ml',
      title: 'Machine Learning',
      iconName: 'Brain',
      description: 'Algoritmos e técnicas de aprendizado de máquina',
      fullDescription: 'Área que estuda como modelos aprendem padrões a partir de dados. Trabalha com classificação, regressão e inferência probabilística. Conceitos: aprendizado supervisionado e não supervisionado, otimização, regularização, modelos lineares, PCA e SVMs.',
      color: 'text-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      books: {
        create: [
          // LIVRO 1: Introdução a ML
          {
            id: 'introducao-a-machine-learning-com-python',
            title: 'Introdução a Machine Learning com Python',
            author: 'Andreas Müller',
            emoji: '🦎',
            chapters: {
              create: [
                { order: 1, titlePt: 'Introdução', titleEn: 'Introduction', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Aprendizado supervisionado', titleEn: 'Supervised Learning', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Aprendizado não supervisionado e pré-processamento', titleEn: 'Unsupervised Learning and Preprocessing', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Representação de dados e engenharia de features', titleEn: 'Representing Data and Engineering Features', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Avaliação e melhoria de modelos', titleEn: 'Model Evaluation and Improvement', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Cadeias de algoritmos e pipelines', titleEn: 'Algorithm Chains and Pipelines', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Trabalhando com dados de texto', titleEn: 'Working with Text Data', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Encerramento', titleEn: 'Wrapping Up', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          // LIVRO 2
          {
            id: 'maos-a-obra-aprendizado-de-maquina-com-scikit-learn-keras-tensorflow',
            title: 'Mãos à Obra: Aprendizado de Máquina',
            author: 'Aurélien Géron',
            emoji: '🐊',
            chapters: {
              create: [
                { order: 1, titlePt: 'O panorama do aprendizado de máquina', titleEn: 'The Machine Learning Landscape', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Projeto de aprendizado de máquina de ponta a ponta', titleEn: 'End-to-End Machine Learning Project', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Classificação', titleEn: 'Classification', duration: '0:00', youtubeId: 'AhFJeHdSjkE'},
                { order: 4, titlePt: 'Treinando modelos', titleEn: 'Training Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Máquinas de vetores de suporte', titleEn: 'Support Vector Machines', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Árvores de decisão', titleEn: 'Decision Trees', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Aprendizado em conjunto e florestas aleatórias', titleEn: 'Ensemble Learning and Random Forests', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Redução de dimensionalidade', titleEn: 'Dimensionality Reduction', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Técnicas de aprendizado não supervisionado', titleEn: 'Unsupervised Learning Techniques', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Introdução às redes neurais artificiais com Keras', titleEn: 'Introduction to Artificial Neural Networks with Keras', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Treinando redes neurais profundas', titleEn: 'Training Deep Neural Networks', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Modelos personalizados e treinamento com TensorFlow', titleEn: 'Custom Models and Training with TensorFlow', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Carregando e pré-processando dados com TensorFlow', titleEn: 'Loading and Preprocessing Data with TensorFlow', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'Visão computacional profunda com redes neurais convolucionais', titleEn: 'Deep Computer Vision Using Convolutional Neural Networks', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          }
        ]
      }
    }
  });

  //DEEP LEARNING (DL)
  await prisma.concept.create({
    data: {
      id: 'dl',
      title: 'Deep Learning',
      iconName: 'BrainCircuit',
      description: 'Redes neurais profundas e arquiteturas avançadas de IA',
      fullDescription: 'Domine a criação de inteligência artificial moderna. Aprenda a construir, treinar e otimizar redes neurais para visão computacional, processamento de linguagem natural (NLP) e modelos generativos utilizando frameworks como PyTorch e Keras.',
      color: 'text-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      books: {
        create: [
          // LIVRO 1
          {
            id: 'deep-learning-para-programadores-com-fastai-e-pytorch',
            title: 'Deep Learning para Programadores com fastai e PyTorch',
            author: 'Jeremy Howard & Sylvain Gugger',
            emoji: '🚀',
            chapters: {
              create: [
                { order: 1, titlePt: 'Sua jornada em Deep Learning', titleEn: 'Your Deep Learning Journey', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Do modelo à produção', titleEn: 'From Model to Production', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Ética de dados', titleEn: 'Data Ethics', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Por dentro: treinando um classificador de dígitos', titleEn: 'Under the Hood: Training a Digit Classifier', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Classificação de imagens', titleEn: 'Image Classification', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Outros problemas de visão computacional', titleEn: 'Other Computer Vision Problems', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Treinando um modelo de última geração', titleEn: 'Training a State-of-the-Art Model', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Mergulho em filtragem colaborativa', titleEn: 'Collaborative Filtering Deep Dive', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Mergulho em modelagem tabular', titleEn: 'Tabular Modeling Deep Dive', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Mergulho em NLP: RNNs', titleEn: 'NLP Deep Dive: RNNs', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Manipulação de dados com a API de nível médio do fastai', titleEn: 'Data Munging with fastai’s Mid-Level API', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Um modelo de linguagem do zero', titleEn: 'A Language Model from Scratch', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Redes neurais convolucionais', titleEn: 'Convolutional Neural Networks', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'ResNets', titleEn: 'ResNets', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 15, titlePt: 'Mergulho em arquiteturas de aplicações', titleEn: 'Application Architectures Deep Dive', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 16, titlePt: 'O processo de treinamento', titleEn: 'The Training Process', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 17, titlePt: 'Uma rede neural desde os fundamentos', titleEn: 'A Neural Net from the Foundations', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 18, titlePt: 'Interpretação de CNNs com CAM', titleEn: 'CNN Interpretation with CAM', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 19, titlePt: 'Um Learner do fastai do zero', titleEn: 'A fastai Learner from Scratch', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          // LIVRO 2
          {
            id: 'deep-learning-com-python',
            title: 'Deep Learning com Python',
            author: 'François Chollet',
            emoji: '🐍',
            chapters: {
              create: [
                { order: 1, titlePt: 'O que é deep learning?', titleEn: 'What Is Deep Learning?', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Os blocos matemáticos das redes neurais', titleEn: 'The Mathematical Building Blocks of Neural Networks', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Introdução ao Keras e ao TensorFlow', titleEn: 'Introduction to Keras and TensorFlow', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Primeiros passos com redes neurais: classificação e regressão', titleEn: 'Getting Started with Neural Networks: Classification and Regression', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Fundamentos do aprendizado de máquina', titleEn: 'Fundamentals of Machine Learning', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'O fluxo de trabalho universal do aprendizado de máquina', titleEn: 'The Universal Workflow of Machine Learning', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Trabalhando com Keras: um mergulho profundo', titleEn: 'Working with Keras: A Deep Dive', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Introdução ao deep learning para visão computacional', titleEn: 'Introduction to Deep Learning for Computer Vision', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Deep learning avançado para visão computacional', titleEn: 'Advanced Deep Learning for Computer Vision', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Deep learning para séries temporais', titleEn: 'Deep Learning for Timeseries', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Deep learning para texto', titleEn: 'Deep Learning for Text', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Deep learning generativo', titleEn: 'Generative Deep Learning', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Boas práticas para o mundo real', titleEn: 'Best Practices for the Real World', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'Conclusões', titleEn: 'Conclusions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          // LIVRO 3
          {
            id: 'aprendizado-profundo-generativo',
            title: 'Generative Deep Learning',
            author: 'David Foster',
            emoji: '🦜',
            chapters: {
              create: [
                { order: 1, titlePt: 'Modelagem Generativa', titleEn: 'Generative Modeling', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Deep Learning', titleEn: 'Deep Learning', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Autoencoders Variacionais', titleEn: 'Variational Autoencoders', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Redes Adversariais Generativas', titleEn: 'Generative Adversarial Networks', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Modelos Autorregressivos', titleEn: 'Autoregressive Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Fluxos Normalizantes', titleEn: 'Normalizing Flows', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Modelos Baseados em Energia', titleEn: 'Energy-Based Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Modelos de Difusão', titleEn: 'Diffusion Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Transformers', titleEn: 'Transformers', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'GANs Avançadas', titleEn: 'Advanced GANs', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Geração de Música', titleEn: 'Music Generation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Modelos de Mundo', titleEn: 'World Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Modelos Multimodais', titleEn: 'Multimodal Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'Conclusão', titleEn: 'Conclusion', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          }
        ]
      }
    }
  });

  //ESTRATÉGIA, ÉTICA E COMUNICAÇÃO
  await prisma.concept.create({
    data: {
      id: 'ethics',
      title: 'Estratégia, Ética e Comunicação',
      iconName: 'ShieldAlert',
      description: 'Visão estratégica, ética algorítmica e comunicação de dados',
      fullDescription: 'Uma abordagem holística sobre o impacto dos dados. Aprenda a comunicar insights visualmente (Storytelling), entenda os riscos éticos dos algoritmos, alinhe Data Science aos objetivos de negócio e domine a análise de séries temporais.',
      color: 'text-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      books: {
        create: [
          // LIVRO 1
          {
            id: 'storytelling-com-dados',
            title: 'Storytelling com Dados',
            author: 'Cole Nussbaumer Knaflic',
            emoji: '📊',
            chapters: {
              create: [
                { order: 1, titlePt: 'Introdução', titleEn: 'Introduction', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'A importância do contexto', titleEn: 'The Importance of Context', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'A escolha de um visual eficaz', titleEn: 'Choosing an Effective Visual', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'A saturação é sua inimiga!', titleEn: 'Saturation Is Your Enemy!', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Focalize a atenção de seu público', titleEn: 'Focus Your Audience’s Attention', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Pense como um designer', titleEn: 'Think Like a Designer', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Dissecagem de modelos visuais', titleEn: 'Dissecting Visual Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Lições sobre storytelling', titleEn: 'Lessons on Storytelling', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Tudo reunido', titleEn: 'Putting It All Together', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Estudos de caso', titleEn: 'Case Studies', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Considerações finais', titleEn: 'Final Considerations', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          // LIVRO 2
          {
            id: 'algoritmos-de-destruicao-em-massa',
            title: 'Algoritmos de Destruição em Massa',
            author: 'Cathy O\'Neil',
            emoji: '💣',
            chapters: {
              create: [
                { order: 1, titlePt: 'Introdução', titleEn: 'Introduction', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Que partes explodiram: o que é um modelo?', titleEn: 'Bomb Parts: What Is a Model?', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Atordoada: minha jornada de desilusão', titleEn: 'Shell Shocked: My Journey of Disillusionment', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Corrida armamentista: indo para a universidade', titleEn: 'Arms Race: Going to College', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Máquina de propaganda: publicidade online', titleEn: 'Propaganda Machine: Online Advertising', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Vítimas civis: justiça na era do big data', titleEn: 'Civilian Casualties: Justice in the Age of Big Data', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Inelegível para servir: conseguindo um emprego', titleEn: 'Ineligible to Serve: Getting a Job', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Suando balas: no trabalho', titleEn: 'Sweating Bullets: On the Job', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Danos colaterais: obtendo crédito', titleEn: 'Collateral Damage: Landing Credit', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Sem zona segura: obtendo seguro', titleEn: 'No Safe Zone: Getting Insurance', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'O cidadão alvo: vida cívica', titleEn: 'The Targeted Citizen: Civic Life', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Conclusão', titleEn: 'Conclusion', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          // LIVRO 3
          {
            id: 'data-science-para-negocios',
            title: 'Data Science para Negócios',
            author: 'Foster Provost & Tom Fawcett',
            emoji: '💼',
            chapters: {
              create: [
                { order: 1, titlePt: 'Introdução: Pensamento Analítico de Dados', titleEn: 'Introduction: Data-Analytic Thinking', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Problemas de Negócios e Soluções de Data Science', titleEn: 'Business Problems and Data Science Solutions', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Introdução à Modelagem Preditiva: Da Correlação à Segmentação Supervisionada', titleEn: 'Introduction to Predictive Modeling: From Correlation to Supervised Segmentation', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Ajustando um Modelo aos Dados', titleEn: 'Fitting a Model to Data', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Overfitting e como evitá-lo', titleEn: 'Overfitting and Its Avoidance', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Similaridade, Vizinhos e Clusters', titleEn: 'Similarity, Neighbors, and Clusters', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Raciocínio Analítico de Decisão I: O que é um Bom Modelo?', titleEn: 'Decision Analytic Thinking I: What Is a Good Model?', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Visualizando o Desempenho do Modelo', titleEn: 'Visualizing Model Performance', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Evidências e Probabilidades', titleEn: 'Evidence and Probabilities', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Representação e Mineração de Texto', titleEn: 'Representing and Mining Text', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Raciocínio Analítico de Decisão II: Rumo à Engenharia Analítica', titleEn: 'Decision Analytic Thinking II: Toward Analytical Engineering', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 12, titlePt: 'Outras Tarefas e Técnicas de Ciência de Dados', titleEn: 'Other Data Science Tasks and Techniques', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 13, titlePt: 'Ciência de Dados e Estratégia de Negócios', titleEn: 'Data Science and Business Strategy', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 14, titlePt: 'Conclusão', titleEn: 'Conclusion', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          // LIVRO 4
          {
            id: 'series-temporais-para-data-science',
            title: 'Séries Temporais para Data Science',
            author: 'Aileen Nielsen',
            emoji: '📈',
            chapters: {
              create: [
                { order: 1, titlePt: 'Trabalhando com dados coletados ao longo do tempo', titleEn: 'Working with Data Collected Over Time', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Explorando dados de séries temporais', titleEn: 'Exploring Time Series Data', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Fundamentos estatísticos para análise de séries temporais', titleEn: 'Statistical Basics for Time Series Analysis', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'O domínio da frequência', titleEn: 'The Frequency Domain', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Modelos ARMA', titleEn: 'ARMA Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Ajuste e previsão com ARMA', titleEn: 'ARMA Fitting and Forecasting', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'Modelos ARIMA e sazonais', titleEn: 'ARIMA and Seasonal Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 8, titlePt: 'Regressão em séries temporais', titleEn: 'Time Series Regression', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 9, titlePt: 'Avaliação de modelos', titleEn: 'Model Assessment', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 10, titlePt: 'Séries temporais multivariadas', titleEn: 'Multivariate Time Series', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 11, titlePt: 'Modelos de séries temporais baseados em redes neurais profundas', titleEn: 'Deep Neural Network-Based Time Series Models', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          }
        ]
      }
    }
  });

  //PROJETOS PRÁTICOS
  await prisma.concept.create({
    data: {
      id: 'projects',
      title: 'Projetos Práticos',
      iconName: 'Target',
      description: 'Aprendizado prático com projetos impactantes da plataforma Kaggle que abordam Skills fundamentais para o Mercado de Trabalho',
      fullDescription: '',
      color: 'text-red-600',
      bgGradient: 'from-red-50 to-red-100',
      books: {
        create: [
          // PROJETO 1
          {
            id: 'analise-exploratoria-de-dados',
            title: 'Análise Exploratória de Dados',
            author: '',
            emoji: '📊',
            chapters: {
              create: [
                { order: 1, titlePt: 'Intro to Exploratory Data Analysis (EDA) in Python', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Exploratory Data Analysis on the Titanic Dataset', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'EDA : Exploratory Data Analysis Notebook', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Analysis of EDA Notebooks', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Exploratory Data Analysis (EDA) using Gemma LLM', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 2
          {
            id: 'limpeza-e-engenharia-de-features',
            title: 'Limpeza e Engenharia de Features',
            author: '',
            emoji: '🧹',
            chapters: {
              create: [
                { order: 1, titlePt: 'Titanic: Cleaning, Feature Engineering, Modeling', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Beginner Guide — Feature Engineering & Data Cleaning', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Feature Engineering and Data Cleaning', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Feature engineering, EDA, data cleaning tutorial (Titanic)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Topic 6: Feature Engineering and Feature Selection', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 3
          {
            id: 'visualizacao-de-dados-e-dashboards',
            title: 'Visualização de Dados e Dashboards',
            author: '',
            emoji: '📈',
            chapters: {
              create: [
                { order: 1, titlePt: 'Dashboarding with Notebooks', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Interactive Dashboard using Bokeh and Pandas', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Interactive Favorita visualizations | Dashboards', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Data Visualization-Basic and not Basic', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'SEABORN💫 PART-1 of 5 — Best Practices Visualization Notebook', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 4
          {
            id: 'modelagem-supervisionada-regressao-e-classificacao',
            title: 'Modelagem Supervisionada — Regressão e Classificação',
            author: '',
            emoji: '🤖',
            chapters: {
              create: [
                { order: 1, titlePt: 'Titanic – Machine Learning from Disaster (Classificação)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'House Prices – Advanced Regression Techniques (Regressão)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Spaceship Titanic (Classificação Avançada)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 5
          {
            id: 'validacao-de-modelos-e-ciencia-de-avaliacao',
            title: 'Validação de Modelos e Ciência de Avaliação',
            author: '',
            emoji: '✅',
            chapters: {
              create: [
                { order: 1, titlePt: 'Cross-Validation Methods for Model Evaluation', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Machine Learning Model Evaluation Metrics', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Cross Validation and Its Types', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Evaluation Metrics | ML Course', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Model Evaluation (Regression)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: '[Model Evaluation] 1. Classification Metrics', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 7, titlePt: 'ML StudyTime 2: Cross Validation', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 6
          {
            id: 'series-temporais-e-previsao',
            title: 'Séries Temporais e Previsão',
            author: '',
            emoji: '⏱️',
            chapters: {
              create: [
                { order: 1, titlePt: 'M5 Forecasting – Accuracy', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Store Sales – Time Series Forecasting', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'M5 Forecasting – Uncertainty', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'M5 Forecasting – Starter Data Exploration', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 7
          {
            id: 'aprendizado-nao-supervisionado-clustering-e-dimensionality-reduction',
            title: 'Aprendizado Não Supervisionado — Clustering e Redução de Dimensionalidade',
            author: '',
            emoji: '📚',
            chapters: {
              create: [
                { order: 1, titlePt: 'Credit Card Fraud Detection (Anomalia/Clustering)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Customer Segmentation using K-Means', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Dimensionality Reduction with PCA & t-SNE', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 8
          {
            id: 'inteligencia-artificial-e-deep-learning-avancado',
            title: 'Inteligência Artificial e Deep Learning Avançado',
            author: '',
            emoji: '🧠',
            chapters: {
              create: [
                { order: 1, titlePt: 'Natural Language Processing with Disaster Tweets (NLP)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Dog Breed Identification (CNNs e Transfer Learning)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Audio Classification (Librosa e Deep Learning)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'Reinforcement Learning: OpenAI Gym Taxi-v3', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 9
          {
            id: 'ia-generativa-e-grandes-modelos-de-linguagem-llms',
            title: 'IA Generativa e Grandes Modelos de Linguagem (LLMs)',
            author: '',
            emoji: '🪄',
            chapters: {
              create: [
                { order: 1, titlePt: 'Intro to LLMs using Gemma', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'LLM Prompt Recovery', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'RAG (Retrieval-Augmented Generation) with LangChain and Kaggle Datasets', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },
          // PROJETO 10
          {
            id: 'sistemas-de-recomendacao',
            title: 'Sistemas de Recomendação',
            author: '',
            emoji: '🎬',
            chapters: {
              create: [
                { order: 1, titlePt: 'Movie Recommender System (Collaborative & Content-based)', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Netflix Visualizations, Recommendation, EDA', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Book Recommendation System', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 11
          {
            id: 'mlops-deploy-e-producao',
            title: 'MLOps, Deploy e Produção',
            author: '',
            emoji: '🚀',
            chapters: {
              create: [
                { order: 1, titlePt: 'End-to-End Machine Learning Pipeline', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'Model Deployment with Flask/Streamlit on Kaggle Datasets', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Feature Store Implementation for Real-time ML', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          },

          // PROJETO 12
          {
            id: 'cloud-computing-e-engenharia-de-dados',
            title: 'Cloud Computing e Engenharia de Dados',
            author: '',
            emoji: '☁️',
            chapters: {
              create: [
                { order: 1, titlePt: 'Google Cloud (GCP) Quest: Machine Learning on Google Cloud', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 2, titlePt: 'AWS SageMaker: Training and Deploying Models at Scale', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 3, titlePt: 'Azure Machine Learning: Building an End-to-End Pipeline', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 4, titlePt: 'BigQuery ML: Predicting Outcomes with SQL in the Cloud', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 5, titlePt: 'Serverless Machine Learning with AWS Lambda', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' },
                { order: 6, titlePt: 'Data Engineering Project: ETL with Apache Airflow and Cloud Storage', titleEn: '', duration: '0:00', youtubeId: 'AhFJeHdSjkE' }
              ]
            }
          }
        ]
      }
    }
  });
  
  console.log('Banco Populado! Todos os IDs estão sincronizados e Capítulos inseridos.');
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });