import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'

import {terser} from 'rollup-plugin-terser'

const extensions = ['.ts']

const replaceOptions = {
    __version__: pkg.version
}

export default [
    {
        input: './src/index.ts',
        output: [{
            file: 'public/l.js',
            format: 'iife',
            plugins: [
                terser({
                    mangle: {
                        toplevel: true,
                    },
                    output: {
                        quote_style: 1
                    }
                })
            ],
        }],
        plugins: [
            babel({
                extensions,
                include: ['src/**/*'],
                babelHelpers: 'bundled'
            }),
            commonjs(),
            resolve({browser: true, extensions}),
            replace(replaceOptions)
        ]
    }
]