import { Usuario } from '../modelos/Usuario';
import { db } from '../bancodados/db';

export class ServicoUsuario {
  private usuarios: Usuario[] = [];

  constructor() {}

  criarUsuario(dado: any): Usuario {
    console.log('ServicoUsuario');
    console.log(dado);
    const usuario = new Usuario(dado.name, dado.email, dado.pasword);
    //this.usuarios.push(usuario); // Simula a persistência de usuários
    const dadosBanco = db.usuarios.push(usuario); // Simula a persistência de usuários
    console.log(dadosBanco);
    return usuario;
  }

  //    listarUsuarios(): Usuario[] {
  //     return db.usuarios;
  //   }
}
