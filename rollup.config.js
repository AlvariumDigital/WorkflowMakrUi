import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import styles from 'rollup-plugin-styles'
import {
    terser
} from "rollup-plugin-terser"

const plugins = [
    resolve(),
    commonjs(),
    styles(),
    // terser()
];

export default [
    {
        input: 'src/index.js',
        output: {
            file: './dist/index.esm.js',
            format: 'es'
        },
        plugins: plugins
    },
    {
        input: 'src/index.js',
        output: {
            file: './dist/index.cjs.js',
            format: 'cjs'
        },
        plugins: plugins
    },
    {
        input: 'src/index.js',
        output: {
            file: './dist/index.umd.js',
            name: 'workflowmakr',
            format: 'umd'
        },
        plugins: plugins
    }
]