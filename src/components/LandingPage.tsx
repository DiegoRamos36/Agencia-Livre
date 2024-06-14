
import JusticeSymbol from '../css/img/symbol.jpeg'
const Lp = ()=> {
return (
  <section className="lp d-flex align-items-center" style={{height: '90vh', background: `url(${JusticeSymbol}) center center`, backgroundSize: 'cover'}}>  

  <div className='container text-white'>
        <h1 className='col-lg-9 lh-2'>Comprometidos com a excelência na proteção dos seus direitos e na busca por <em className='destaque'>resultados</em></h1>
        <p className="lead fs-5 col-lg-6 col-md-6">Nosso objetivo é garantir o cumprimento dos direitos e deveres de todo e qualquer cidadão, em condição que seja ele. </p>
        <button className='btn btn-outline-primary text-white'>ENTRE EM CONTATO</button>
      </div>
  </section>
)


}

export default Lp;