import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { ImCross } from "react-icons/im";
import Button from "../Button";
import { useHabits } from "../../Providers/Habits";

const ModalHabits = ({ close }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Preenchimento obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
    frequency: yup.string().required("Campo obrigatório!"),
    difficulty: yup.string().required("Campo obrigatório!"),
    achieved: yup.boolean().required("Campo obrigatório!"),
    how_much_achieved: yup.number().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { submitHabits } = useHabits();

  const onSubmitFunction = (data) => {
    submitHabits(data);
    close();
  };

  return (
    <Container>
      <header>
        <h1>Cadastre um novo hábito</h1>
        <ImCross onClick={() => close()} />
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Título</h3>
        <input
          placeholder={
            errors.title ? errors.title?.message : "Preencher título"
          }
          {...register("title")}
        />

        <div>
          <h3>Categoria</h3>
          <select {...register("category")}>
            <option value="Saúde">Saúde</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Sono">Sono</option>
            <option value="Atividade física">Atividade física</option>
          </select>
        </div>

        <div>
          <h3>Frequencia</h3>
          <select {...register("frequency")}>
            <option value="Diária">Diária</option>
            <option value="Semanal">Semanal</option>
            <option value="Quinzenal">Quinzenal</option>
            <option value="Mensal">Mensal</option>
          </select>
        </div>
        <div>
          <h3>Dificuldade</h3>
          <select {...register("difficulty")}>
            <option value="Fácil">Fácil</option>
            <option value="Médio">Médio</option>
            <option value="Difícil">Difícil</option>
            <option value="Muito difícil">Muito difícil</option>
          </select>
        </div>
        <div>
          <h3>Alcançado</h3>
          <select {...register("achieved")}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <div>
          <h3>Porcentagem alcançada</h3>
          <select {...register("how_much_achieved")}>
            <option value="0">0%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
            <option value="60">60%</option>
            <option value="70">70%</option>
            <option value="80">80%</option>
            <option value="90">90%</option>
            <option value="100">100%</option>
          </select>
        </div>
        <Button type="submit">Cadastrar novo habito!</Button>
      </form>
    </Container>
  );
};

export default ModalHabits;
