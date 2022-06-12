import { Flex, Text } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'

const poemStyle: ThemeUIStyleObject = {
  padding: '1rem',
  paddingLeft: ['2rem', '2rem', '2rem', '3rem'],
  flexDirection: 'column',
  width: 'fit-content',
}

// TODO: Make it generic, so it can be used for any poem.
const Poem = () => (
  <Flex sx={poemStyle}>
    <Text variant="poemTitle">Pincéis</Text>
    <Text variant="poemAuthor">Robson Junior</Text>
    <Text>
      Nasci pintado ingenuidade,
      <br />
      minha vontade era contra.
      <br />
      Já pensava invertido,
      <br />
      acreditava no surreal das coisas.
      <br />
      <br />
      Enquanto covarde,
      <br />
      questionava o de cima
      <br />e a falta de coragem
      <br />
      tornou-se minha sina.
      <br />
      <br />
      Cresci pintado honestidade,
      <br />
      meias verdades totalitárias.
      <br />
      Ciente de que, ao nascer,
      <br />
      entalaram-me de palavras.
      <br />
      <br />
      Tornei-me devaneios do dia
      <br />e praguejos não verbalizados.
      <br />
      Virei o poeta que, quando fala,
      <br />
      grita dos mais altos telhados.
      <br />
      <br />
      Hoje pintado quero-quero(-tudo),
      <br />
      prometi não agir conforme idade,
      <br />
      superei o medo de ser mudo,
      <br />
      alcei voo à minha inconformidade.
    </Text>
  </Flex>
)

export default Poem
