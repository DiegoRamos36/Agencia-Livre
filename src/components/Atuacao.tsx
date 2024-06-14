type AreaDeAtuacao = {
  id: number;
  title: string;
  desc: string;
  img: {
    src: string;
    alt: string;
  }
}

const Lp2 = () => {

  const atuacao : AreaDeAtuacao[] = [
    {id: 1,
      title: 'Cível',
      desc: 'Por isso, no dia a dia, o advogado cível lida bastante com questões relacionadas a contratos, posses, bens e questões familiares. Um exemplo da atuação desse profissional é em casos de divórcio, compra e venda e inventários. ',
      img: {src: 'https://upload.wikimedia.org/wikipedia/en/5/5e/International_Holding_Company_Head_Office_in_ABUD%2C_UAE.png', alt: 'Corporativo'}
    },
    {
      id: 2,
      title: 'Trabalhista',
      desc: 'Em sua rotina, o advogado trabalhista lida com rescisão de contrato de trabalho, horas extras, férias, licenças, assédio moral, discriminação no ambiente de trabalho, direitos previdenciários, entre outras atribuições. ',
      img: {src: 'https://jornaltribuna.com.br/wp-content/uploads/2023/02/carteira-de-trabalho-digital-1.jpeg', alt: 'Trabalhista'}
    },
    {
      id: 3,
      title: 'Imobiliário',
      desc: 'No geral, as principais atividades desse tipo de advogado são relacionadas a temas como análise de contratos de compra e venda, aluguel de imóveis, financiamentos, regularização de imóveis e etc.',
      img: {src: 'https://images.adsttc.com/media/images/5b06/4968/f197/cc1f/9600/02fd/large_jpg/Maleo_49.jpg?1527138647', alt: 'Casas'}
      
    },
    {
      id: 4,
      title: 'Ambientalista ',
      desc: 'Atua com a solicitação de licenciamento ambiental e reparação de danos ambientais, assessoria jurídica em projetos de impacto ambiental, ações civis públicas, ações populares e outras ações judiciais relacionadas ao meio ambiente.',
      img: {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeydbHErWZlmVSzEJCMS5751GdUxnMm1l7YA&s', alt: 'M. ambiente'}
    },
    {
      id: 5,
      title: 'Consumidor',
      desc: 'No dia-a-dia, as principais atividades de um advogado do consumidor estão relacionadas a negociação de acordos e indenizações para consumidores lesados, cobranças indevidas, produtos e serviços com defeito ou vícios, publicidade enganosa, práticas abusivas, entre outras.',
      img: {src: 'https://images.unsplash.com/photo-1612776561584-394d456a751d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1cGVybWVyY2FkbyUyMHZhemlvfGVufDB8fDB8fHww', alt: 'Consumidor'}
    },
    {
      id: 6,
      title: 'Criminalista',
      desc: 'As principais atividades de um advogado criminalista incluem assessoria jurídica, elaboração de defesas e recursos judiciais, negociação de acordos com o Ministério Público e representação de clientes em julgamentos e audiências.',
      img: {src: 'https://live.staticflickr.com/65535/52941335651_e33f7a4c24_b.jpg', alt: 'Prisão'}
    },
    {
      id: 7,
      title: 'Previdenciário',
      desc: 'As principais atividades de um advogado previdenciário incluem a orientação e assessoria jurídica a segurados e beneficiários da previdência social, negociação de acordos e indenizações para segurados lesados.',
      img: {src: 'https://live.staticflickr.com/65535/53603177332_3f0e776621_b.jpg', alt: 'Previdencia'}
    },
    {
      id: 8,
      title: 'Digital',
      desc: 'Esse profissional pode atuar orientando empresas ou até pessoas físicas sobre propriedade intelectual, privacidade de dados, segurança digital, compliance digital, e-commerce, direito autoral, responsabilidade civil na internet, entre outras. Pode ser responsável por aprovar determinadas mensagens que empresas usam na sua comunicação e marketing.',
      img: {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMN0o4ktF9txmGlXAX8u8vc6jSD6_0uGS-PN-1omvFjChZEew4boUsfNeITVdPFs39YA&usqp=CAU', alt: 'Digital'}
    },

  ]


  return (
    <section className="bg-dark py-4">
        <h4 className="text-uppercase text-secondary text-center m-0">ONDE ATUAMOS</h4>
        <h2 className="text-primary display-4 text-center mb-4">Areas de atuação</h2>
    <div className="container">
        <div className="row d-flex justify-content-center">
        {atuacao.map((area)=> (
            <div key={area.id} style={{width: '600px'}} className="m-4 p-0 card shadow-sm text-center atua" >
            <img src={area.img.src} className="card-img-top" alt={area.img.alt} />
            <div className="card-body">
              <h5 className="card-title">{area.title}</h5>
              <p className="card-text">{area.desc}</p>
              <a href="#" className="btn btn-primary">Entre em Contato</a>
            </div>
          </div>
          ))}        
        </div>
        </div>

      

    </section>
  )
}

export default Lp2