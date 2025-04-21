
let templates = {
    '<Templates>': [
        {
            'WgCore Book': [
                'user_guides/templates/wgcore/shaders_composition',
                'user_guides/templates/wgcore/buffers_initialization',
                'user_guides/templates/wgcore/buffers_readback',
                'user_guides/templates/wgcore/hot_reloading',
                'user_guides/templates/wgcore/timestamp_queries',
                'user_guides/templates/wgcore/overwriting_shaders'
            ],
            'WGebra Book': [
                'user_guides/templates/wgebra/matrix_decompositions',
                'user_guides/templates/wgebra/blas_operations',
                'user_guides/templates/wgebra/geometric_transformations',
                'user_guides/templates/wgebra/utilities',
            ]
        }
    ]
};

let templates_injected = {
    'WgCore Book': [
        'user_guides/wgcore/shaders_composition',
        'user_guides/wgcore/buffers_initialization',
        'user_guides/wgcore/buffers_readback',
        'user_guides/wgcore/hot_reloading',
        'user_guides/wgcore/timestamp_queries',
        'user_guides/wgcore/overwriting_shaders'
    ],
    'WGebra Book': [
        'user_guides/wgebra/matrix_decompositions',
        'user_guides/wgebra/blas_operations',
        'user_guides/wgebra/geometric_transformations',
        'user_guides/wgebra/utilities',
    ]
}

let user_guides;

if (!process.env.PUBLISH_MODE) {
    user_guides = {
        ...templates,
        '<templates-injected>': templates_injected
    };
} else {
    user_guides = templates_injected;
}


const config = {
    docs: [
        'about_wgmath',
        user_guides,
        // {
        //     'WGSL Documentation': [
        //         'api/wgblas-api-doc',
        //         'api/wgebra-api-doc',
        //         'api/wgparry2d-api-doc',
        //         'api/wgparry3d-api-doc',
        //         'api/wgrapier2d-api-doc',
        //         'api/wgrapier3d-api-doc',
        //     ],
        // }
    ],
};

export default config;