import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Provisionamento guiado',
    Svg: require('@site/static/img/cloudinho-01.svg').default,
    description: (
      <>
        Cadastre a VPS, configure usuarios SSH e execute as receitas de
        provisionamento para preparar o servidor e instalar sua Engine preferida
        com o Cloud Engine.
      </>
    ),
  },
  {
    title: 'Criação e gestão de sites',
    Svg: require('@site/static/img/cloudinho-02.svg').default,
    description: (
      <>
        Use o Cloud Engine para criar sites WordPress, PHP ou HTML e centralize
        ações como ativar, desativar, limpar cache, editar configurações e
        excluir instalações.
      </>
    ),
  },
  {
    title: 'Documentação por engine',
    Svg: require('@site/static/img/cloudinho-03.svg').default,
    description: (
      <>
        A base foi organizada para crescer com o produto. Nesta primeira fase,
        a documentação cobre o guia do usuário para EasyEngine.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
