let cursos = [] ;
function adicionarCurso(nome, cargaHoraria, descricao) {
    const curso = {
        nome,
        cargaHoraria,
        descricao
    };
    cursos.push(curso);
    console.log("Curso adicionado com sucesso!");
}
funtion listarCursos() {
    console.log("Lista de cursos da Disponibiliza Curso:");
    cursos.forEach((curso, index) => {
        console.log('${index + 1} - ${curso.nome} (${curso.cargaHoraria}h)');
    });
}
adicionarCurso("Limpeza de Pele", 20, "Curso completo de cuidados com a pele");
adicionarCurso("Designer de Sobrancelha", 15, "Técnicas profissionais de sobrancelha");
listarCursos();
