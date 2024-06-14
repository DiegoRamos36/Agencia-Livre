import React from "react";

const TrabalheConosco = () => {
  function handleSubmit (e: React.FormEvent) {
    e.preventDefault();
  }
  return (

    <section>
      <h4 className="text-uppercase text-secondary pt-2 text-center mt-4">Envie já uma mensagem</h4>
      <h2 className="text-primary display-4 text-center mb-4">Trabalhe Conosco</h2>
      <div className="container">
        <div className="row">
      <form className="col-lg-6 mx-auto border border-primary rounded shadow p-4" onSubmit={handleSubmit}>
        <div className="mb-3 shadow-sm">
        <label htmlFor="name" className="form-label">Nome</label>
        <input type="text" className="form-control" name="name" id="name" />
        </div>
        <div className="mb-3 shadow-sm">
        <label className="form-label" htmlFor="Email">Email</label>
        <input type="email" className="form-control" name="email" id="email" />
        </div>
        <div className="mb-3 shadow-sm">
        <label className="form-label" htmlFor="assunto">Assunto</label>
        <textarea name="assunto" className="form-control assunto" id="assunto" style={{height:'150px'}} />
        </div>
      </form>
      
        </div>
        </div>
      
    </section>
  )
}

export default TrabalheConosco;
