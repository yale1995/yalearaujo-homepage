/* eslint-disable no-unused-vars */
export default function Publications(request, response) {
  const publications = [
    {
      id: 1,
      title: 'Entendendo a tecnologia mais amada do momento: o ReactJS',
      description:
        'Afinal, para que serve? O que difere de usar JavaScript puro? É um framework ou uma biblioteca? Calma que eu te conto agora...',
      content: {
        paragraph: [
          'Eu tenho certeza que se você é da área de tecnologia já ouviu falar neste nome: ReactJS. Afinal, para que serve? O que difere de usar JavaScript puro? É um framework ou biblioteca? Calma que eu te conto agora…',
          'Há alguns anos atrás, 2011 para ser mais exato, à medida que o Facebook (hoje Meta) aumentava suas funcionalidades, se tornava cada vez mais difícil escalar sua aplicação. Foi ai que o time de desenvolvedores do Facebook criava o tão falado ReactJS.',
          'De lá pra cá o ReactJS já passou por inúmeras atualizações e melhorias. Hoje ele funciona como uma tecnologia com a única e exclusiva finalidade de CRIAR INTERFACES e por isso é considerado uma BIBLIOTECA.',
          'Diferentemente do JavaScript puro que sempre renderiza a página por inteiro. O ReactJS trabalha com funções JavaScript que retornam componentes HTML, este esquema de renderização é chamado de Single Page Application (SPA), o que permite que seja renderizado em tela apenas o necessário.',
          'É por tudo isso e por outros motivos que essa biblioteca é tão amada ❤️',
        ],
      },
    },

    {
      id: 2,
      title: 'Porque utilizar TypeScript?',
      description:
        'Você sabe por que utilizar TypeScript? Para entender isso tudo, precisamos saber que o JavaScript é uma linguagem com TIPAGEM DINÂMIC...',
      content: {
        paragraph: [
          'Para entender isso tudo, precisamos saber que o JavaScript é uma linguagem com TIPAGEM DINÂMICA. E o que isso signifca, dev? Linguagens com tipagem dinâmica permitem que seus dados (variáveis, funções…) assumam diferentes tipos ao longo do tempo de execução.',
          'Então imagina um código complexo onde os dados podem assumir diferentes tipos (string, number, promise, void…). E para descobrir no meio deste código qual variável está com seu type incorreto? Uma loucura, concorda?',
          'É aí então que o TypeScript nos ajuda. O TypeScript é anunciado como um conjunto de funcionalidades adicionadas ao JavaScript. A principal vantagem é que agora podemos desenvolver códigos com TIPAGEM ESTÁTICA.',
          'Assim é gerado um ambiente mais seguro para desenvolvimento, já que o TypeScript aponta os erros enquanto o código é digitado pelo usuário. Gostou dessa? Não perca tempo depurando códigos e use TypeScript.',
        ],
      },
    },
  ]

  const publication = publications.filter(publication => {
    if (publication.id == request.query.id) {
      return publication
    } 
  })

  return response.status(200).json({ publication })
}
