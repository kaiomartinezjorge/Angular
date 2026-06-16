export class Curriculo {
  constructor(
    public id: any = '',
    public usuarioId: number = 1,
    public nome: string = '',
    public email: string = '',
    public telefone: string = '',
    public cargo: string = '',
    public foto: string = '',
    public descricao: string = '',
    public formacao: string = '',
    public experiencia: string = '',
    public habilidades: string = '',
    public linkedin: string = '',
    public salario: number = 0,
  ) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.cargo = cargo;
    this.foto = foto;
    this.descricao = descricao;
    this.formacao = formacao;
    this.experiencia = experiencia;
    this.habilidades = habilidades;
    this.linkedin = linkedin;
    this.salario = salario;
  }

  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      usuarioId: this.usuarioId,
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      cargo: this.cargo,
      foto: this.foto,
      descricao: this.descricao,
      formacao: this.formacao,
      experiencia: this.experiencia,
      habilidades: this.habilidades,
      linkedin: this.linkedin,
      salario: this.salario,
    };
  }

  fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.usuarioId,
      map.nome,
      map.email,
      map.telefone,
      map.cargo,
      map.foto,
      map.descricao,
      map.formacao,
      map.experiencia,
      map.habilidades,
      map.linkedin,
      map.salario
    );
  }
}
