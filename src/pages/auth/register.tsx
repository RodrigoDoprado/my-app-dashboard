import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IContext } from "../../context/authProvider/types";
import { useAuth } from "../../context/authProvider/useAuth";
import { Api } from "../../service";
import "./register.css";

export default function Register() {
  const auth = useAuth();
  const [state, setState] = useState(auth);
  const { id, img, firstName, lastName, email, password } = state;
  const [error, setError] = useState(false);
  const navegate = useNavigate();

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const addUser = async (data: IContext) => {
    await Api.post("account/create", data)
      .then(() => {
        alert("User cadastrado com Sucesso");
      })
      .catch(() => {
        setError(true);
      });
  };

  const updateUser = async (data: IContext, id: number) => {
    await Api.put(`account/up/${id}`, data)
      .then(() => {
        navegate("/");
      })
      .catch(() => {
        setError(true);
      });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!id) {
      addUser(state);
    } else {
      updateUser(state, id);
    }
  };

  return (
    <>
      <div className="col-sm" id="register">
        <div className="card">
          <div className="card-head">
            {error ? (
              <>
                <div className="alert alert-danger" role="alert">
                  {auth.token ? (
                    <>Alteração não Realizadas</>
                  ) : (
                    <>E-mail Já Cadastrado</>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="card-title">
            {!auth.id ? (
              <>
                <h2>Registrar</h2>
              </>
            ) : (
              <>
                <h2>Alteração</h2>
              </>
            )}
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* <div className="col">
                                <input
                                    type={"hidden"}
                                    name="token"
                                    value={token}
                                    onChange={handleInputChange}
                                />
                            </div> */}
              <div className="col">
                <input
                  className="form-control"
                  type="file"
                  // id="file"
                  name="file"
                  // multiple={false}
                  value={img}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  // id="name"
                  name="firstName"
                  placeholder="Nome"
                  required
                  value={firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  // id="lastName"
                  name="lastName"
                  placeholder="Sobre Nome"
                  required
                  value={lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Senha"
                  required
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
