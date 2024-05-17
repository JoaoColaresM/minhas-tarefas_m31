import Tarefa from "../../componentes/tarefas"
import { Container } from "./styles"

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <Tarefa></Tarefa>
      </li>
      <li>
        <Tarefa></Tarefa>
      </li>
      <li>
        <Tarefa></Tarefa>
      </li>
      <li>
        <Tarefa></Tarefa>
      </li>
      <li>
        <Tarefa></Tarefa>
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
