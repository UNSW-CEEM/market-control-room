(function (t) { function e (e) { for (var i, r, o = e[0], c = e[1], u = e[2], m = 0, f = []; m < o.length; m++)r = o[m], s[r] && f.push(s[r][0]), s[r] = 0; for (i in c)Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]); l && l(e); while (f.length)f.shift()(); return a.push.apply(a, u || []), n() } function n () { for (var t, e = 0; e < a.length; e++) { for (var n = a[e], i = !0, o = 1; o < n.length; o++) { var c = n[o]; s[c] !== 0 && (i = !1) }i && (a.splice(e--, 1), t = r(r.s = n[0])) } return t } var i = {}, s = {app: 0}, a = []; function r (e) { if (i[e]) return i[e].exports; var n = i[e] = {i: e, l: !1, exports: {}}; return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports }r.m = t, r.c = i, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n}) }, r.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0}) }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, 'default', {enumerable: !0, value: t}), 2 & e && typeof t !== 'string') for (var i in t)r.d(n, i, function (e) { return t[e] }.bind(null, i)); return n }, r.n = function (t) { var e = t && t.__esModule ? function () { return t['default'] } : function () { return t }; return r.d(e, 'a', e), e }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = '/'; var o = window['webpackJsonp'] = window['webpackJsonp'] || [], c = o.push.bind(o); o.push = e, o = o.slice(); for (var u = 0; u < o.length; u++)e(o[u]); var l = c; a.push([0, 'chunk-vendors']), n() })({0: function (t, e, n) { t.exports = n('56d7') }, 1174: function (t, e, n) { 'use strict'; var i = n('afef'), s = n.n(i); s.a }, 1539: function (t, e, n) { 'use strict'; var i = n('9791'), s = n.n(i); s.a }, 1914: function (t, e, n) {}, '20f4': function (t, e, n) {}, '21bb': function (t, e, n) { 'use strict'; var i = n('1914'), s = n.n(i); s.a }, 2856: function (t, e, n) {}, 3863: function (t, e, n) { 'use strict'; var i = n('20f4'), s = n.n(i); s.a }, '3b3b': function (t, e, n) { 'use strict'; var i = n('f0ba'), s = n.n(i); s.a }, '56d7': function (t, e, n) { 'use strict'; n.r(e); n('cadf'), n('551c'), n('097d'); var i = n('2b0e'), s = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {attrs: {id: 'app'}}, [t._m(0), n('div', {staticClass: 'main'}, [n('div', {staticClass: 'nav'}, [n('sim-search', {attrs: {simulations: t.simulations}})], 1), n('div', {staticClass: 'content'}, [n('router-view')], 1)])]) }, a = [function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'top'}, [n('a', {attrs: {href: '/'}}, [n('div', {staticClass: 'title nes-text is-primary'}, [t._v(' Deep Learning Logbook')])]), n('div', {staticClass: 'ceem'}, [t._v(' UNSW CEEM '), n('i', {staticClass: 'nes-icon github is-small'})])]) }], r = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'search'}, [n('h4', [t._v('Simulations')]), n('div', {staticClass: 'simlist'}, t._l(t.simulations, function (e) { return n('div', [n('router-link', {staticClass: 'simlink', attrs: {to: {name: 'summary', params: {id: e.id}}}}, [t._v(t._s(e.label))])], 1) }))]) }, o = [], c = n('bc3a'), u = n.n(c), l = u.a.create({baseURL: '/api/', headers: {'Content-Type': 'application/json'}}); l.interceptors.request.use(function (t) { return t.headers['Authorization'] = 'Fake Token', t }), l.interceptors.response.use(function (t) { return t }, function (t) { return console.log(t), Promise.reject(t) }); var m = {fetchResource: function () { return l.get('resource/xxx').then(function (t) { return t.data }) }, fetchSecureResource: function () { return l.get('secure-resource/zzz').then(function (t) { return t.data }) }, fetchSimulation: function (t) { return l.get('simdata/' + t).then(function (t) { return t.data }) }, fetchSimulationList: function () { return l.get('simdata/list').then(function (t) { return t.data }) }, postNotes: function (t, e) { return l.post('simdata/' + t + '/notes', {notes: e}).then(function (t) { return t.data }) }}, f = {name: 'SimSearch', data: function () { return {simulations: []} }, methods: {refresh: function () { var t = this; this.simulation = null, m.fetchSimulationList().then(function (e) { t.simulations = e }).catch(function (t) { console.log(t.message) }) }}, mounted: function () { this.refresh() }}, h = f, p = (n('1174'), n('2877')), d = Object(p['a'])(h, r, o, !1, null, '0685c56e', null); d.options.__file = 'SimSearch.vue'; var _ = d.exports, v = {name: 'app', components: {SimSearch: _}, data: function () { return {simulations: []} }, mounted: function () { for (var t = 0; t < 100; t++) this.simulations.push({id: t, label: 'Simulation ' + t}) }}, b = v, g = (n('5c0b'), Object(p['a'])(b, s, a, !1, null, null, null)); g.options.__file = 'App.vue'; var y = g.exports, k = n('8c4f'), x = function () { var t = this, e = t.$createElement; t._self._c; return t._m(0) }, S = [function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'home'}, [n('h1', {staticClass: 'nes-text is-primary'}, [t._v('Deep Learning Logbook')]), n('p', [t._v('This logbook tracks deep learning simulations of electricity markets. It is designed to provide insights into participant bidding behaviour. ')]), n('p', [t._v('It is the user interface for the openai gym electricity market simulator, developed by Luke Marshall at the UNSW Center for Energy and Environmental Markets.')]), n('p', [t._v('You can find the deep learning simulation code at the project github '), n('a', {attrs: {href: 'https://github.com/luke-marshall/energy-market-deep-learning'}}, [t._v('here.')])]), n('p', [t._v('The source code for this logbook dashboard tool can be found  '), n('a', {attrs: {href: 'https://github.com/luke-marshall/market-control-room'}}, [t._v('here.')])])]) }], C = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'nes-container with-title'}, [n('h3', {staticClass: 'title'}, [t._v('Hyperparameters.')]), n('table', {staticClass: 'nes-table is-bordered is-centered', staticStyle: {width: '100%'}}, t._l(t.hyperparameters, function (e, i) { return n('tr', [n('td', [t._v(t._s(i))]), n('td', [t._v(t._s(e))])]) }))]) }, w = [], O = {name: 'Hyperparameters', props: {hyperparameters: Object, msg: String}}, j = O, E = (n('3863'), Object(p['a'])(j, C, w, !1, null, '5dbd5b2f', null)); E.options.__file = 'Hyperparameters.vue'; var M = E.exports, N = {name: 'home', components: {Hyperparameters: M}}, $ = N, R = (n('21bb'), Object(p['a'])($, x, S, !1, null, null, null)); R.options.__file = 'Home.vue'; var T = R.exports, L = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'about'}, [n('h1', [t._v('Backend Resources Demo')]), n('p', [t._v('Click on the links below to fetch data from the Flask server')]), n('a', {attrs: {href: ''}, on: {click: function (e) { return e.preventDefault(), t.fetchResource(e) }}}, [t._v('Fetch')]), n('br'), n('a', {attrs: {href: ''}, on: {click: function (e) { return e.preventDefault(), t.fetchSecureResource(e) }}}, [t._v('Fetch Secure Resource')]), n('h4', [t._v('Results')]), t._l(t.resources, function (e) { return n('p', {key: e.timestamp}, [t._v('\n    Server Timestamp: ' + t._s(t._f('formatTimestamp')(e.timestamp)) + '\n  ')]) }), n('p', [t._v(t._s(t.error))])], 2) }, P = [], D = {name: 'about', data: function () { return {resources: [], error: ''} }, methods: {fetchResource: function () { var t = this; m.fetchResource().then(function (e) { t.resources.push(e) }).catch(function (e) { t.error = e.message }) }, fetchSecureResource: function () { var t = this; m.fetchSecureResource().then(function (e) { t.resources.push(e) }).catch(function (e) { t.error = e.message }) }}}, H = D, B = (n('a822'), Object(p['a'])(H, L, P, !1, null, null, null)); B.options.__file = 'Api.vue'; var U = B.exports, z = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'summary'}, [t.simulation ? n('div', [n('h1', [t._v(t._s(t.simulation.label))]), n('bidstack'), n('metadata', {attrs: {metadata: t.simulation.metadata}}), n('Notes', {attrs: {notes: t.simulation.notes, id: t.id}}), n('hyperparameters', {attrs: {hyperparameters: t.simulation.hyperparameters}}), t._l(t.simulation.timeseries, function (t, e) { return n('simplechart', {attrs: {timeseries: t}}) })], 2) : n('div', {staticClass: 'loading'}, [n('h1', [t._v('LOADING...')])])]) }, A = [], F = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'nes-container with-title'}, [n('h3', {staticClass: 'title'}, [t._v('Metadata')]), n('table', {staticClass: 'nes-table is-bordered is-centered', staticStyle: {width: '100%'}}, t._l(t.metadata, function (e, i) { return n('tr', [n('td', [t._v(t._s(i))]), n('td', [t._v(t._s(e))])]) }))]) }, I = [], W = {name: 'Metadata', props: {metadata: Object}}, J = W, Y = (n('a3b5'), Object(p['a'])(J, F, I, !1, null, '02575778', null)); Y.options.__file = 'Metadata.vue'; var q = Y.exports, G = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'nes-container with-title'}, [n('h3', {staticClass: 'title'}, [t._v('Notes')]), t.mode == 'display' ? n('div', {staticClass: 'nes-container notes-text'}, [t._v('\n      ' + t._s(t.notes_text) + '\n  ')]) : t._e(), t.mode == 'display' ? n('button', {staticClass: 'nes-btn is-primary', attrs: {type: 'button'}, on: {click: function (e) { t.mode = 'edit' }}}, [t._v('Edit')]) : t._e(), t.mode == 'edit' ? n('textarea', {directives: [{name: 'model', rawName: 'v-model', value: t.notes_text, expression: 'notes_text'}], staticClass: 'nes-textarea', attrs: {id: 'textarea_field'}, domProps: {value: t.notes_text}, on: {input: function (e) { e.target.composing || (t.notes_text = e.target.value) }}}) : t._e(), t.mode == 'edit' ? n('button', {staticClass: 'nes-btn is-success', class: {'is-warning': t.is_submitting}, attrs: {type: 'button'}, on: {click: function (e) { t.submit_notes() }}}, [t.is_submitting ? n('span', [t._v('Uploading...')]) : n('span', [t._v('Submit')])]) : t._e()]) }, K = [], Q = {name: 'Notes', props: {notes: String, id: String}, data: function () { return {notes_text: 'Sample', mode: 'display', is_submitting: !1} }, methods: {submit_notes: function () { var t = this; this.is_submitting || (this.is_submitting = !0, m.postNotes(this.id, this.notes_text).then(function (e) { console.log('Notes submitted. Response:', e), t.mode = 'display', t.is_submitting = !1 }).catch(function (t) { console.log('Note submission error: ', t.message) })) }}, watch: {notes_text: function () {}}, mounted: function () { this.notes_text = this.notes }}, V = Q, X = (n('3b3b'), Object(p['a'])(V, G, K, !1, null, '22486ff2', null)); X.options.__file = 'Notes.vue'; var Z = X.exports, tt = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'nes-container with-title'}, [n('h3', {staticClass: 'title'}, [t._v('Bidstack')]), n('div', {staticClass: 'columns'}, [t._m(0), t._l(t.sorted_bidstack, function (e, i) { return n('div', {staticClass: 'column', style: {height: t.get_height_percent(e.price) + '%', width: t.get_width_percent(e.volume) + '%', 'background-color': t.get_color(e), transform: t.get_transform(e.price)}, on: {click: function (n) { t.select_bid(e) }}}) })], 2)]) }, et = [function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'y-axis-label'}, [n('span', [t._v('Max')]), n('span', [t._v('Min')])]) }], nt = (n('55dd'), n('7f7f'), n('6b54'), {name: 'Bidstack', props: {}, data: function () { return {bidstack: {luke: {meta: {label: 'luke'}, bands: {1: {price: 10, volume: 10}, 2: {price: 15, volume: 5}}}}, state: 'NSW', date_iso: 0, total_volume: 100, min_price: 0, max_price: 0, chart_price_cap: 14e3, chart_price_floor: -1e4, selected_bid: {meta: {}}, sorted_bidstack: [], colors: {}, filters: {fuel_source_primary: []}, selected_filters: {}} }, methods: {select_bid: function (t) { this.selected_bid = t }, get_height_percent: function (t) { var e = Math.min(this.max_price, this.chart_price_cap), n = Math.max(this.min_price, this.chart_price_floor); t = Math.max(t, this.chart_price_floor); t = Math.min(t, this.chart_price_cap); var i = Math.abs(100 * t / (e - n)); return i >= 0 && i < 1 ? 1 : i > -1 && i < 1 ? -1 : i }, get_width_percent: function (t) { return 100 * t / this.total_volume }, get_color: function (t) { for (var e = new ColorHash(), n = e.rgb(t.meta.label), i = '', s = 0; s < n.length; s++)i += n[s].toString(16); return t.meta.label == this.selected_bid.meta.label && (i = '000000'), '#' + i }, get_transform: function (t) { return t < 0 ? 'translateY(100%)' : 'none' }, reset_bidstack: function () { this.sorted_bidstack = [], this.total_volume = 0, this.max_price = 0, this.min_price = 0, this.colors = {} }, draw_bidstack: function () { this.reset_bidstack(); var t = [], e = this.bidstack; for (var n in e) { e[n]; for (var i in e[n].bands)e[n].bands[i].volume > 0 && (t.push({generator: n, volume: e[n].bands[i].volume, price: e[n].bands[i].price, meta: e[n].meta}), this.total_volume += e[n].bands[i].volume, e[n].bands[i].price > this.max_price && (this.max_price = e[n].bands[i].price), e[n].bands[i].price < this.min_price && (this.min_price = e[n].bands[i].price)) }t.sort(function (t, e) { return t.price - e.price }), this.sorted_bidstack = t }}, mounted: function () { this.draw_bidstack() }}), it = nt, st = (n('87e3'), Object(p['a'])(it, tt, et, !1, null, '1433c4a4', null)); st.options.__file = 'Bidstack.vue'; var at = st.exports, rt = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n('div', {staticClass: 'nes-container with-title'}, [n('h3', {staticClass: 'title'}, [t._v('Chart: ' + t._s(t.timeseries.label))]), n('highcharts', {attrs: {options: t.chartOptions}})], 1) }, ot = [], ct = {name: 'Simplechart', props: {timeseries: Object}, data: function () { return {chartOptions: {title: {text: ''}, series: [{name: this.timeseries.label, data: this.timeseries.data}]}} }}, ut = ct, lt = (n('93ff'), Object(p['a'])(ut, rt, ot, !1, null, '37125b19', null)); lt.options.__file = 'Simplechart.vue'; var mt = lt.exports, ft = {name: 'Summary', props: {id: String}, data: function () { return {simulation: null} }, components: {Hyperparameters: M, Metadata: q, Notes: Z, Simplechart: mt, Bidstack: at}, methods: {refresh: function () { var t = this; this.simulation = null, m.fetchSimulation(this.id).then(function (e) { t.simulation = e }).catch(function (t) { console.log(t.message) }) }}, watch: {id: function () { this.refresh() }}, mounted: function () { this.refresh() }}, ht = ft, pt = (n('1539'), Object(p['a'])(ht, z, A, !1, null, null, null)); pt.options.__file = 'Summary.vue'; var dt = pt.exports; i['a'].use(k['a']); var _t = new k['a']({routes: [{path: '/', name: 'home', component: T}, {path: '/summary/:id', name: 'summary', component: dt, props: !0}, {path: '/api', name: 'api', component: U}]}), vt = n('2f62'); i['a'].use(vt['a']); var bt = new vt['a'].Store({state: {}, mutations: {}, actions: {}}), gt = (n('456d'), n('ac6a'), {formatTimestamp: function (t) { var e = new Date(t); return e.toLocaleTimeString('en-US') }}); Object.keys(gt).forEach(function (t) { i['a'].filter(t, gt[t]) }); n('33e9'); var yt = n('2b5b'), kt = n.n(yt); i['a'].use(kt.a), i['a'].config.productionTip = !1, new i['a']({router: _t, store: bt, render: function (t) { return t(y) }}).$mount('#app') }, '5c0b': function (t, e, n) { 'use strict'; var i = n('2856'), s = n.n(i); s.a }, 6867: function (t, e, n) {}, '87e3': function (t, e, n) { 'use strict'; var i = n('6867'), s = n.n(i); s.a }, '8f25': function (t, e, n) {}, '93ff': function (t, e, n) { 'use strict'; var i = n('b7c6'), s = n.n(i); s.a }, 9791: function (t, e, n) {}, a3b5: function (t, e, n) { 'use strict'; var i = n('8f25'), s = n.n(i); s.a }, a822: function (t, e, n) { 'use strict'; var i = n('a98e'), s = n.n(i); s.a }, a98e: function (t, e, n) {}, afef: function (t, e, n) {}, b7c6: function (t, e, n) {}, f0ba: function (t, e, n) {}})
// # sourceMappingURL=app.28ce3739.js.map
