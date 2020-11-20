import React from 'react'
import Player from 'react-player'

import GlobalStyles from '../../styles/global'

import breno from '../../assets/profiles/breno.jpg'
import diego from '../../assets/profiles/diego.jpg'
import biro from '../../assets/profiles/biro.jpg'
import maykao from '../../assets/profiles/maykao.jpg'
import luiza from '../../assets/profiles/luiza.jpeg'
import daniele from '../../assets/profiles/daniele.jpg'

import learning from '../../assets/aprendizado.svg'
import networking from '../../assets/networking.svg'
import idea from '../../assets/idea.svg'
import dev from '../../assets/dev.svg'
import time from '../../assets/time.svg'
import communication from '../../assets/communication.svg'

import {
  Header, 
  Content, 
  Container, 
  Benefits, 
  Card, 
  Tip, 
  Message, 
  Wrapper, 
  Community, 
  CommunityContent, 
  Messages,
  Footer,
  Videos
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>BLABLAMAÇÃO</h1>
      </Header>

      <Wrapper>
        <Content>
          <div>
            <h1>Nem só de condigo vive um dev...</h1>
            <p>...bem, pelo menos não deveria. A Blablamação vem pra explicar um pouco sobre o importância da comunicação para dev. SIM! Você não deveria escolher ser dev "porque não preciso falar com ninguém, sou só o computador e eu", e o PO? e os coleguinhas? e o cliente?</p> 
            <p> E veja, no fim das contas você vai está se comunicando com alguém, quer dizer, algo: o computador, que vpode reclamar tando quanto uma pessoa das coias que você fala pra ele. ¯\_(ヅ)_/¯</p>
          </div>
          <img src={dev} alt="Coding"/>
        </Content>

        <Benefits>
          <h1>Por que é tão importante desenvolver sua comunicação como dev?</h1>
          <div>
            <Card>
              <strong>Aprendizado</strong>
            </Card>
            <Card>
              <strong>Resolução de problemas</strong>
            </Card>
            <Card>
              <strong>Economia de tempo</strong>
            </Card>
            <Card>
              <strong>Networking</strong>
            </Card>
          </div>
        </Benefits>

        <Tip>
          <div>
            <h1>Aprendizado</h1>

            <p>Qual a principal forma de aprender algo? Ensinando e questionando! E não há como ensinar ou questionar algo sem que haja uma comunicação. Ou seja, a partir da comunicação vamos:</p>
            
            <strong>Aprender</strong>
            <p>
              Se você passa bastante tempo quebrando a cabeça com um bug e não pede ajuda, ou a entrega vai atrasar ou você vai ficar frustrado. 
              Aí que entra a nossa amiga comunicação: peça ajuda ao coleguinha ou algum outro dev. Se comunique, provavelmente vocês vão encontrar a solução. 
              Você vai aprender algo, mesmo que seja algo besta. É um aprendizado. E também pode acontecer de você mesmo encontrar a solução do problema enquanto o descreve para o coleguinha.
            </p>

            <strong>Gerar conhecimento</strong>
            <p>
              E tem a situação em que o coleguinha vem pedir sua ajuda e quem aparece? A senhorita comunicação, não tem como você responder/ensinar algo sem se comunicar, certo?
              Então, quando você vai ajudar o coleguinha, você vai gerar um conhecimento pra ele desde que se comunique bem, de forma assertiva e empática. Isso não só vai gerar o conhecimento dele, mas também o seu, já que como comentamos anteriormente, umas das melhores formas de se aprender é ensinar.
            </p>
          </div>

          <img src={learning} alt="code"/>
        </Tip>

        <Tip>
          <img src={idea} alt="code"/>

          <div>
            <h1>Resolução de problemas</h1>

            <p>
              Uma importante parte do trabalho de um dev gira em torno da resolução de problemas. 
              E para resolver problemas você precisa se comunicar, seja com um colega dev, um cliente, o computador e até você mesmo. 
              Quantas vezes você se pega conversando com você mesmo pensando na resolução de um problema?
            </p>
            <p>
              Uma comunicação eficiente faz você pensar melhor e como consequência facilita o desenvolvimento de resoluções de problemas.
            </p>
          </div>
        </Tip>

        <Tip>
          <div>
            <h1>Economia de tempo</h1>

            <p>Quantas vezes você dev ficou por horas e horas quebrando a cabeça com um bug? Com receio de pedir ajuda por medo de te acharem incapaz?</p>
            <p>
              Veja a nossa amiga comunicação chegando para salvar o dia de novo. 
              No momento que você decide se comunicar com alguém para pedir ajuda e resolver algum problemas você vai economizar <strong>Tempo</strong>.
            </p>
            
            <p>Você vai ganhar tempo na resolução de um problema quando decide conversar com alguém para pedir ajuda ao invés de passar horas quebrando a cabeça sem sair do lugar.</p>
            <p>Você poderá encontrar diferentes pontos de vista do qual você estava usando para tentar resolver a situação e acaba entrando nambém na situação do <strong>Aprendizado</strong> que falamos antes</p>

            <p>Como diria o Thiago Pederzolli: É melhor se comunicar com o gerente avisando que a entrega vai atrasar ou se comunicar com um colega pedindo ajuda para antecipar a resolução do problema?</p>
          </div>

          <img src={time} alt="time"/>
        </Tip>

        <Tip>
          <img src={networking} alt="networking"/>

          <div>
            <h1>Networking</h1>

            <p>
              Um dos principais ativos na carreira de um dev é o networking. Construir relações com outras pessoas é algo que pode mudar sua carreira,
              isso pode te possibilitar novas oportunidades de emprego, negócios e conhecimentos. E como fazer networking? Se comunicando! Não dá prar conhecer outras pessoas só sentado na cadeira olhando para o tempo.
            </p>

            <p>Eventos como meetups, hackathons, conferências são ótimos lugares para fazer netowrking, além de eventos existem também as comunidade, onde um grupo de pessoas com interesse em determinado assunto se juntam para interagir, mais a frente tem uma dica de um comudidade bem legal para você fazer netowrking e treinar sua comunicação.</p>
          </div>
        </Tip>

        <Tip>
          <div>
            <h1>Dicas para melhorar a comunicação</h1>

            <strong>Escute</strong>
            <p>
              Antes de ser um bom comunicador procure ser um bom ouvinte. Seja antento ao que as outras pessoas estão falando, não as interrompa e busque entender o seu ponto de vista. 
              Ter um bom entendimento do que está sendo dito por outra pessoa vai te ajudar a formular os pensamentos para quando for sua vez de se expressar.
            </p>

            <strong>Seja objetivo</strong>
            <p>
              Vá direto ao ponto, use palavras certas, tente estuturar seus pensanentos antes de falar para ser conciso e objetivo.
            </p>

            <strong>Tenha empatia</strong>
            <p>
              Você nem sempre vai concordar com a opinião/argumentação das outras pessoas, o que não significa que deve ignorá-las.
              Pelo contrário, tente se colocar no ponto de vista da outra pessoas para entender seus argumentos e, assim, tem uma comunicação tranquila e eficaz.
            </p>

            <strong>Não seja o “dono da verdade”</strong>
            <p>Esteja aberto para receber críticas e opiniões contrárias a sua</p>

            <strong>Pratique</strong>
            <p>Seja no trabalho, em casa, em eventos ou comunidades, busque situações em que você precisará se comunicar ativa e eficentemente, com a prática você vai melhorarndo essa habilidade.</p>
          </div>

          <img src={communication} alt="code"/>
        </Tip>

        <Community>
          <Messages>
            <CommunityContent>
              <h1>Que tal treinar sua comunicação em uma comunidade?</h1>
              <p>A comunidade da rocketseat milhares  de devs em busca do mesmo objetivo: chegar ao próximo nível</p>
              <a href="https://discord.com/channels/590261328686481419/590606527778258954" target="_blank">Entrar</a>
            </CommunityContent>

            <Message className="message-1">
              <div>
                <p>Faaala, dev!</p>
              </div>
              <img src={diego} alt="profile"/>
            </Message>
            
            <Message className="message-2">
              <div>
                <p>Conteúno novo na área pessoal!</p>
              </div>
              <img src={daniele} alt="profile"/>
            </Message>

            <Message className="message-3">
              <div>
                <p>Opa! Já viu esse tópico? ...</p>
              </div>
              <img src={biro} alt="profile"/>
            </Message>

            <Message className="message-6">
              <div>
                <p>Salve, pessoal! Alguém consegue me ajudar com uma dúvida?</p>
              </div>
              <img src={breno} alt="profile"/>
            </Message>

            <Message className="message-4">
              <div>
                <p>Mayk Brito na área! XD</p>
              </div>
              <img src={maykao} alt="profile"/>
            </Message>

            <Message className="message-5">
              <div>
                <p>Olá, filhotes! Mãezona chegou!</p>
              </div>
              <img src={luiza} alt="profile"/>
            </Message>
          </Messages>
        </Community>

        <Videos>
          <h1>Veja mais sobre Comunicação e outras soft skills:</h1>

          <div>
            <Player url="https://www.youtube.com/watch?v=JvRg6N5ZD2s" />
            <Player url="https://www.youtube.com/watch?v=qrB94YucxFw&t=643s"/>
          </div>

          <div className="links">
            <strong>Links úteis:</strong>

            <a href="https://www.zup.com.br/blog/dev-importancia-de-boa-comunicacao">Nem só de código vive um dev</a>
            <a href="https://kenzie.com.br/blog/comunicacao-clara-e-objetiva/">Como a comunicação clara e objetiva faz diferença para um dev?</a>
            <a href="https://medium.com/better-programming/communication-skills-a-core-part-of-software-engineering-c7d379cebd66">Communication Skills: A Core Part of Software Engineering</a>
          </div>
        </Videos>

        <Footer>
          <strong>Blablamação</strong>

          <div>
            <p>Breno Castelo Branco |</p>

            <a href="https://www.linkedin.com/in/brenocastelo/">LinkedIn |</a>
            <a href="https://github.com/brenocastelo">Github |</a>
            <a href="https://twitter.com/brenocastelobs">Twitter</a>
          </div>
        </Footer>
      </Wrapper>

      <GlobalStyles />
    </Container>
  )
}

export default Home;