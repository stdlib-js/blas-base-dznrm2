<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dznrm2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the L2-norm of a complex double-precision floating-point vector.



<section class="usage">

## Usage

```javascript
import dznrm2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dznrm2@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-base-dznrm2/tags). For example,

```javascript
import dznrm2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dznrm2@v0.1.0-deno/mod.js';
```

#### dznrm2( N, zx, strideX )

Computes the L2-norm of a complex double-precision floating-point vector.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var zx = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2 ] );

var norm = dznrm2( 4, zx, 1 );
// returns ~0.8
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zx**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `zx`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to traverse every other value,

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var zx = new Complex128Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var norm = dznrm2( 2, zx, 2 );
// returns ~4.6
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

// Initial array:
var zx0 = new Complex128Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Compute the L2-norm:
var norm = dznrm2( 2, zx1, 1 );
// returns ~9.3
```

#### dznrm2.ndarray( N, zx, strideX, offset )

Computes the L2-norm of a complex double-precision floating-point vector using alternative indexing semantics.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var zx = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2 ] );

var norm = dznrm2.ndarray( 4, zx, 1, 0 );
// returns ~0.8
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to start from the second index,

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var zx = new Complex128Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var norm = dznrm2.ndarray( 2, zx, 1, 1 );
// returns ~9.3
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `dznrm2()` corresponds to the [BLAS][blas] level 1 function [`dznrm2`][dznrm2].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';
import dznrm2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dznrm2@deno/mod.js';

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var zx = filledarrayBy( 10, 'complex128', rand );
console.log( zx.toString() );

// Computes the L2-norm:
var norm = dznrm2( zx.length, zx, 1 );
console.log( norm );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-dznrm2.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-dznrm2

[test-image]: https://github.com/stdlib-js/blas-base-dznrm2/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/blas-base-dznrm2/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-dznrm2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-dznrm2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-dznrm2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-dznrm2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-dznrm2/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-dznrm2/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-dznrm2/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-dznrm2/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-dznrm2/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-dznrm2/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-dznrm2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-dznrm2/main/LICENSE

[blas]: http://www.netlib.org/blas

[dznrm2]: https://netlib.org/lapack/explore-html//d1/d2a/group__nrm2_ga7f9f9febc6dc1836c9f5e7c1aa00b743.html

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
