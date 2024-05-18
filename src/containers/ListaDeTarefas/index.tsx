import Tarefa from "../../componentes/tarefas"
import { Container } from "./styles"
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar Ts',
    descricao: 'Ts Ts Ts',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE

  },
  {
    titulo: 'Pagar conta',
    descricao: 'pagar pagar pagar',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA

  },
  {
    titulo: 'Academia',
    descricao: 'malhar malhar malhar',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE

  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key = {t.titulo}>
          <Tarefa
            titulo = {t.titulo}
            descricao = {t.descricao}
            prioridade = {t.prioridade}
            status = {t.status}/>
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
