import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Curriculo } from '../../../model/curriculo.model';
import { Apiservice } from '../../../service/apiservice';

@Component({
  selector: 'app-curriculo-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './curriculo-form.html',
  styleUrl: './curriculo-form.scss',
})
export class CurriculoForm implements OnInit {
  public editando = false;
  private curriculoId: any = null;
  private formBuilder = inject(FormBuilder);

  public curriculoForm = this.formBuilder.group({
    id: [''],
    usuarioId: [1, [Validators.required]],
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required]],
    cargo: ['', [Validators.required]],
    foto: ['original-5c134a6326db16e46f81d5adca341559.jpg'],
    descricao: ['', [Validators.required]],
    formacao: ['', [Validators.required]],
    experiencia: ['', [Validators.required]],
    habilidades: ['', [Validators.required]],
    linkedin: ['', [Validators.required]],
    salario: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: Apiservice
  ) {}

  ngOnInit(): void {
    this.curriculoId = this.route.snapshot.paramMap.get('id');

    if (this.curriculoId) {
      this.editando = true;
      this._apiService.getCurriculoById(this.curriculoId).subscribe({
        next: (curriculo) => this.curriculoForm.patchValue(curriculo),
        error: (erro) => this.mostrarErro('Nao foi possivel carregar o curriculo.', erro),
      });
    }
  }

  salvarCurriculo(): void {
    if (this.curriculoForm.invalid) {
      this.curriculoForm.markAllAsTouched();
      alert('Preencha todos os campos obrigatorios.');
      return;
    }

    const curriculo = this.curriculoForm.getRawValue() as Curriculo;

    if (this.editando) {
      curriculo.id = this.curriculoId;
      this._apiService.putCurriculo(curriculo).subscribe({
        next: () => {
          alert('Curriculo atualizado com sucesso.');
          this.router.navigate(['/meu-curriculo']);
        },
        error: (erro) => this.mostrarErro('Nao foi possivel atualizar o curriculo.', erro),
      });
      return;
    }

    delete curriculo.id;
    this._apiService.postCurriculo(curriculo).subscribe({
      next: () => {
        alert('Curriculo cadastrado com sucesso.');
        this.router.navigate(['/meu-curriculo']);
      },
      error: (erro) => this.mostrarErro('Nao foi possivel cadastrar o curriculo.', erro),
    });
  }

  campoInvalido(campo: string): boolean {
    const controle = this.curriculoForm.get(campo);
    return !!controle && controle.invalid && controle.touched;
  }

  private mostrarErro(mensagem: string, erro: any): void {
    console.error(mensagem, erro);

    if (erro.status === 0) {
      alert(`${mensagem} O json-server nao respondeu em http://localhost:3020.`);
      return;
    }

    alert(`${mensagem} Status: ${erro.status}`);
  }
}
