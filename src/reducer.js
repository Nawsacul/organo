export const CADASTRAR_MEMBRO_API = "CADASTRAR_MEMBRO_API"
export const CADASTRAR_MEMBRO = "CADASTRAR_MEMBRO"
export const DELETAR_MEMBRO = "DELETAR_MEMBRO"
export const RESOLVER_FAVORITO = "RESOLVER_FAVORITO"

const reducer = (estado, acao) => {
    switch (acao.tipo) {
        case CADASTRAR_MEMBRO_API:
            return acao.colaboradores;

        case CADASTRAR_MEMBRO:
            const jaCadastrado = estado.find((pessoa) => pessoa.nome === acao.colaborador.nome && pessoa.time === acao.colaborador.time);
            if (jaCadastrado) {
                alert('Você não pode cadastrar o mesmo nome na mesma equipe! Diferencie-os')
                return estado;
            }

            return [...estado, acao.colaborador];

        case DELETAR_MEMBRO:
            return estado.filter(colaborador => colaborador.id !== acao.id);

        case RESOLVER_FAVORITO:
            return estado.map(colaborador => {
                if (colaborador.id === acao.id) {
                    // Atualiza a propriedade favorito do colaborador específico
                    return { ...colaborador, favorito: !colaborador.favorito };
                }
                return colaborador; // Retorna o colaborador inalterado se não for o alvo
            });
            
        default:
            return estado;
    }
}

export default reducer;