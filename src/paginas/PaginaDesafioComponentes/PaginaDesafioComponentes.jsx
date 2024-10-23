import Principal from "../../comum/componentes/Principal/Principal";
import MostrarDivisao from "./MostrarDivisao/MostrarDivisao";
import MostrarMeuNomeCompleto from "./MostrarMeuNomeCompleto/MostrarMeuNomeCompleto";
import MostrarMultiplicacao from "./MostrarMultiplicacao/MostrarMultiplicacao";
import MostrarNumerosPares from "./MostrarNumerosPares/MostrarNumerosPares";
import MostrarProduto from "./MostrarProduto/MostrarProduto";
import MostrarSoma from "./MostrarSoma/MostrarSoma";
import MostrarSubtracao from "./MostrarSubtracao/MostrarSubtracao";

const PaginaDesafioComponentes = () => {
    const produto = {
        nome: 'TV Samsung 55"',
        preco: 2999.90,
        estoque: 345,
    };

    const numeros = [1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48];

    return(
        <Principal>
            <MostrarSoma numeroUm={11} numeroDois={12}/>
            <MostrarSubtracao numeroUm={10} numeroDois={2} />
            <MostrarDivisao numeroUm={50} numeroDois={10} />
            <MostrarMultiplicacao numeroUm={10} numeroDois={10} />
            <MostrarMeuNomeCompleto nome={'Wallace'} sobrenome={'Nunes de Oliveira'} />
            <MostrarProduto produto={produto} />
            <MostrarNumerosPares numeros={numeros} />
        
        </Principal>
    );
};
export default PaginaDesafioComponentes;