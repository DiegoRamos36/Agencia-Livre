import React from "react";

type Caso = {
  id: number;
  title: string;
  tipo: string;
  desc: string;
  dr: string; 
}
const Beneficios = () => {
  const [active, setActive] = React.useState(0);
  const casos: Caso[] = [{
    id: 0,
    title: 'Rescisão Contratual',
    tipo: 'Trabalhista',
    desc: 'Disputas sobre verbas rescisórias, como aviso prévio, 13º salário, férias proporcionais e multa do FGTS.'
    ,dr: 'Fernando Pessoa'
  },
  {
    id: 1,
    title: 'Assédio Moral e Sexual no Trabalho',
    tipo: 'Trabalhista',
    desc: 'Casos envolvendo condutas abusivas ou constrangedoras por parte de superiores ou colegas no ambiente de trabalho.'
      ,dr: 'Fernando Pessoa'
  },
  {
    id: 2,
    title: 'Reconhecimento de Vínculo Empregatício',
    tipo: 'Trabalhista',
    desc: 'Ações para reconhecimento formal de uma relação de emprego e os direitos associados, como registro em carteira de trabalho e benefícios.'
      ,dr: 'Fernando Pessoa'
  },
  {
    id: 3,
    title: 'Horas Extras',
    tipo: 'Trabalhista',
    desc: 'Disputas sobre o pagamento de horas extras trabalhadas além da jornada regular estabelecida.'
      ,dr: 'Fernando Pessoa'
  },
  {
    id: 4,
    title: 'Equiparação Salarial',
    tipo: 'Trabalhista',
    desc: 'Ações para obter igualdade salarial entre empregados que desempenham funções iguais ou similares.'
      ,dr: 'Fernando Pessoa'

  },
  {
    id: 5 ,
    title: 'Adicional de Insalubridade e Periculosidade',
    tipo: 'Trabalhista',
    desc: 'Reivindicações por adicionais salariais devido a condições insalubres ou perigosas de trabalho.'
      ,dr: 'Fernando Pessoa'
  },
  {
    id: 6, title: 'Homicídio', tipo: 'Criminal', desc: 'Investigações e processos relacionados à morte de uma pessoa causada por outra, seja dolosa (intencional) ou culposa (não intencional).'
      ,dr: 'Machado de Assis'
  },
  {
    id:7,
    title: 'Roubo e Furto', tipo: 'Criminal', desc: 'Casos envolvendo a subtração de bens alheios, com ou sem o uso de violência ou ameaça.'
     ,dr: 'Machado de Assis'
    
  },
  {
    id: 8,
    title: 'Tráfico de Drogas', tipo: 'Criminal', desc: 'Acusações relacionadas à produção, distribuição, e comercialização ilegal de substâncias entorpecentes.'
     ,dr: 'Machado de Assis'
  },
  {
    id: 9,
    title: 'Estupro', tipo: 'Criminal', desc: 'Crimes envolvendo violência sexual contra uma pessoa, incluindo casos de estupro de vulnerável.'
     ,dr: 'Machado de Assis'
  },
  {
    id: 10,
    title: 'Crimes Cibernéticos', tipo: 'Criminal', desc: 'Delitos realizados através da internet ou dispositivos digitais, como fraudes online, invasão de privacidade, e disseminação de malware.'
     ,dr: 'Machado de Assis'
  }
]
  return (
    <section>
        <div className="text-center mb-4">
          <h4 className="text-uppercase text-secondary pt-2">veja nossos serviços</h4>
          <h2 className="text-primary display-4 mb-4">
          Como podemos te ajudar hoje?
          </h2>
          <form action="">
          <div className="input-group input-group-lg container mb-4">
            <input type="text" className="form-control" placeholder="Encontre seu caso" aria-label="buscar caso" />
              <button className="btn btn-primary" type="button">Procurar</button>
          </div>
        </form>
        <ul className="container lista mb-4">
          {casos.map((caso)=> (
            <li className="caso mb-2" onClick={()=> setActive(caso.id)} key={caso.id}>
              <div>
                <h4>{caso.title}</h4>
                <h5>Dr. {caso.dr}</h5>
                <h6 className="lead">{caso.tipo}</h6>
              </div>
                {active === caso.id ? <p className="text-start fs-6">{caso.desc}</p> : ''}
            </li>
          ))}
        </ul>
        </div>
    </section>
  )
}

export default Beneficios;