export default {
  inputFileName: 'input.csv',
  outputFileName: 'output.txt',
  tableName: 'vagas',
  columns: [
    { name: 'Id', type: 'number' },
    { name: 'Titulo', type: 'string' },
    { name: 'Descricao', type: 'string' },
    { name: 'Alocado', type: 'boolean' },
    { name: 'ComoCandidatar', type: 'string' },
    { name: 'Salario', type: 'number' },
    { name: 'FK_Contratante_Id', type: 'number' },
    { name: 'FK_TipoSalario_Id', type: 'number' },
    { name: 'FK_FormaContrato_Id', type: 'number' },
    { name: 'FK_NivelProfissional_Id', type: 'number' },
    { name: 'FK_EstadoVaga_Id', type: 'number' },
  ],
  rowsNumberToInsert: 1400000,
};
