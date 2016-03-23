'use strict';

// MODULES //

var tape = require( 'tape' );
var ln = require( 'math-ln' );
var abs = require( 'math-abs' );
var EPS = require( 'const-eps-float64' );
var LN10 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof LN10, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 0.6931471805599453', function test( t ) {
	t.equal( LN10, 2.302585092994046, 'equals 2.302585092994046' );
	t.end();
});

tape( 'export equals ln(10)', function test( t ) {
	var delta;
	var tol;
	var v;

	v = ln( 10 );
	delta = abs( v - LN10 );
	tol = EPS * LN10;

	t.ok( delta <= tol, 'equals ln(10) within tolerance '+tol );

	t.end();
});
