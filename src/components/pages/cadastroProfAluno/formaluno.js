import React from 'react'
import Main from '../../main'
import ContainerBox from '../../container-box'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import Select from '../../form/select'
import './cadastro.css'

export default FormAluno = () => (

    <Main>
        <ContainerBox>
            <h1 className="cadastro-aluno">Cadastro</h1>
            <Form className="cadastro-aluno" onSubmit={this.handleSubmit}>
                <FormInput
                    className="cadastro-aluno__form-input"
                    type="text"
                    name="apelido"
                    placeholder="apelido"
                    onChange={this.handleChange}
                    required />
                <FormInput
                    className="cadastro-aluno__form-input"
                    type="text"
                    name="nome"
                    placeholder="nome"
                    onChange={this.handleChange}
                    required />
                <FormInput
                    className="cadastro-aluno__form-input"
                    type="text"
                    name="sobrenome"
                    placeholder="sobrenome"
                    onChange={this.handleChange}
                    required />

                <FormInput
                    className="cadastro-aluno__form-input"
                    type="radio"
                    name="sexo"
                    id="sexo-feminino"
                    value="professor"
                    onChange={this.handleChange}
                    required />
                <label htmlFor="sexo-feminino"> Feminino </label>
                <FormInput
                    className="cadastro-aluno__form-input"
                    type="radio"
                    name="sexo"
                    id="sexo-masculino"
                    value="aluno"
                    onChange={this.handleChange}
                    required />
                <label htmlFor="sexo-masculino"> Masculino </label>

                <FormInput
                    className="cadastro-aluno__form-input"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    autoComplete="email"
                    aria-label="email"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro-aluno__form-input"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    autoComplete="current-password"
                    aria-label="senha"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro-aluno__form-input"
                    type="password"
                    name="password"
                    placeholder="Confirme senha"
                    autoComplete="current-password"
                    aria-label="senha"
                    required
                    onChange={this.handleChange} />

                <Select name="cidade" className="cadastro-aluno__form-select">
                    <option value="cidade1">Cidade</option>
                    <option value="cidade2">Cidade</option>
                    <option value="cidade3">Cidade</option>
                </Select>

                <Select name="estado" className="cadastro-aluno__form-select">
                    <option value="estado1">Estado</option>
                    <option value="estado2">Estado</option>
                    <option value="estado3">Estado</option>
                </Select>

                <FormInput
                    className="cadastro__form-input"
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    aria-label="telefone"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro__form-input"
                    type="date"
                    name="dataNascimento"
                    placeholder="Data de nascimento"
                    aria-label="dataNascimento"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro__form-input"
                    type="number"
                    name="cpf"
                    placeholder="CPF"
                    aria-label="cpf"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro-aluno__form-input"
                    type="text"
                    name="nomeResponsavel"
                    placeholder="nomeResponsavel"
                    onChange={this.handleChange}
                    required />
                <Select name="escola" className="cadastro-aluno__form-select">
                    <option value="escola1">escola</option>
                    <option value="escola2">escola</option>
                    <option value="escola3">escola</option>
                </Select>

                <FormButton
                    className="cadastro-aluno__form-button"
                    type="submit"
                    disabled={this.state.isInvalid}>
                    Cadastrar
                        </FormButton>
            </Form>
        </ContainerBox>
    </Main>
)

