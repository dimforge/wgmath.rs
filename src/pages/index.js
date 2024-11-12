import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>wgcore: share & compose WGSL shaders</>,
        imageUrl: 'img/logo_wgcore.svg',
        description: (
            <>
                Provides simple abstractions over gpu resources
                based on `wgpu`. Compose shaders easily through
                proc-macros.
            </>
        ),
    },
    {
        title: <>wgebra: GPU linear-algebra primitives</>,
        imageUrl: 'img/logo_wgebra.svg',
        description: (
            <>
                Linear algebra primitives like quaternions, similarities.
                BLAS-like matrix and vector kernels.
            </>
        ),
    },
    {
        title: <>wgml: GPU machine-learning primitives</>,
        imageUrl: 'img/logo_wgml.svg',
        description: (
            <>
                Build your own cross-platform GPU LLM transformer from
                a set of reusable WGSL operations and kernels (attention,
                layernorm, RoPE, etc.)
            </>
        ),
    },
    {
        title: <>wgparry: GPU collision-detection (WIP)</>,
        imageUrl: 'img/logo_wgparry.svg',
        description: (
            <>
                Compute distances, project points, cast rays, and
                detect collisions between geometric shapes.
            </>
        ),
    },
    {
        title: <>wgrapier: GPU rigid-body physics (WIP)</>,
        imageUrl: 'img/logo_wgrapier.svg',
        description: (
            <>
                2D and 3D Rigid-body physics simulation on the GPU.
            </>
        ),
    },
    {
        title: <>wgsparkl: GPU non-rigid physics</>,
        imageUrl: 'img/logo_wgsparkl.svg',
        description: (
            <>
                GPU-based MPM implementation for simulating
                elastic bodies, sand, fluids, etc.
            </>
        ),
    }
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title} GPU scientific computing`}
            description="Cross-platform GPU scientific computing">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <div className="">
                        <img src="img/wgmath_logo_w_padding.svg" width="70%" alt="Project Logo"/>
                    </div>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--lg --ifm-color-prim force-border', /*button--secondary*/
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
