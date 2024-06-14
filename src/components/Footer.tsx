const Footer = () => {

  return (
    <footer className="bg-dark text-white mt-5">
    <div className="container py-4">
      <div className="row">
        <div className="col-md-3 col-6">
          <h4 className="h6">PÁGINAS</h4>
          <ul className="list-unstyled">
            <li><a href="#">Quem Somos</a></li>
            <li><a href="#">Nossos Valores</a></li>
            <li><a href="#">Meus Direitos</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-6">
          <h4 className="h6">LOCAIS</h4>
          <ul className="list-unstyled">
            <li><a href="#">Rio De Janeiro</a></li>
            <li><a href="#">Minas Gerais</a></li>
            <li><a href="#">São Paulo</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4 className="h6">DADOS DE CONTATO</h4>
          <ul className="list-unstyled text-secondary">
            <li>contato@agencialivre.com</li>
            <li>21 99999-9999</li>
            <li>De Seg. à Sex. das 8h às 18h</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h4 className="h6">REDES SOCIAIS</h4>
          <ul className="list-unstyled">
            <li><a href="#" className="btn btn-outline-secondary btn-sm btn-block mb-2">Facebook</a></li>
            <li><a href="#" className="btn btn-outline-secondary btn-sm btn-block mb-2">Twitter</a></li>
            <li><a href="#" className="btn btn-outline-secondary btn-sm btn-block mb-2">Youtube</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-primary text-center py-3">
      <p className="mb-0">Agência Livre &copy; 2024. Alguns direitos reservados.</p>
    </div>
  </footer>
  )
}

export default Footer;
