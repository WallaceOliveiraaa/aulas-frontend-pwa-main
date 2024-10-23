const MostrarDivisao = (props) => {
    return (
        <span>
            A divisão de {props.numeroUm} / {props.numeroDois} é:{' '}
            <strong>{props.numeroUm / props.numeroDois}</strong>
      </span>
    );
};

export default MostrarDivisao