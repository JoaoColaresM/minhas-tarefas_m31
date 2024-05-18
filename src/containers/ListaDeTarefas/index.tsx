import Tarefa from "../../componentes/tarefas"
import { Container } from "./styles"

const tarefas = [
  {
    titulo: 'Estudar Ts',
    descricao: 'Ts Ts Ts',
    prioridade: 'importante',
    status: 'pendente'

  },
  {
    titulo: 'Pagar conta',
    descricao: 'pagar pagar pagar',
    prioridade: 'urgente',
    status: 'concluido'

  },
  {
    titulo: 'Academia',
    descricao: 'malhar malhar malhar',
    prioridade: 'importante',
    status: 'pendente'

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
