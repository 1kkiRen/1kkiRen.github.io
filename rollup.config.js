import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/APIWorker/script.ts',
        output: {
            file: 'dist/APIbundle.js',
        },
        plugins: [
            nodeResolve({ browser: true }),
            terser(),
            typescript(),
            commonjs(),
        ]
    },
    {
        input: 'src/portfolio/script.ts',
        output: {
            file: 'dist/bundle.js',
        },
        plugins: [
            nodeResolve({ browser: true }),
            terser(),
            typescript(),
            commonjs(),
        ]
    }
];
