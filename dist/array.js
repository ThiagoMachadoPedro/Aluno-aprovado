const alunos = [{
  name: 'Thiago',
  nota: 10
}, {
  name: 'Veronica',
  nota: 5
}, {
  name: 'André',
  nota: 6
}, {
  name: 'Arthur',
  nota: 4.5
}, {
  name: 'Gerenimo',
  nota: 4
}];
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log(alunosAprovados);