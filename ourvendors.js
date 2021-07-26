(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], { 1163: function(e, t, n) { "use strict";

            function r(e) { for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]) } var i = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 });
            i(n(89));
            r(n(1164)), r(n(1165)), r(n(1166)), r(n(1167)), r(n(1168)), r(n(1169)), r(n(1170)), r(n(1171)), r(n(1172)), r(n(1173)), r(n(1174)), r(n(1175)), r(n(1176)), r(n(1177)), r(n(1178)), r(n(1179)), r(n(1180)), r(n(1181)), r(n(1182)), r(n(1183)), r(n(1184)), r(n(1185)), r(n(1186)), r(n(1187)), r(n(1188)), r(n(1189)), r(n(1190)), r(n(1191)), r(n(1192)), r(n(1193)), r(n(1194)) }, 1164: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getActivitiesUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/activity", method: "POST", headers: n, query: t, body: e.activityPageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getActivitiesUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getActivitiesUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.ActivityControllerApi = c }, 1165: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.createAuctionUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling createAuctionUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/auction".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.auctionForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.createAuctionUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.createAuctionUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.deleteAuctionUsingDELETERaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling deleteAuctionUsingDELETE."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/auction".replace("{id}", encodeURIComponent(String(e.id))), method: "DELETE", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.deleteAuctionUsingDELETE = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.deleteAuctionUsingDELETERaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getAuctionUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getAuctionUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/auction".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getAuctionUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getAuctionUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getAuctionsByIdsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/auctions/byIds", method: "POST", headers: n, query: t, body: e.requestBody })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getAuctionsByIdsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getAuctionsByIdsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getAuctionsUsingGETRaw = function() { return o(this, void 0, void 0, (function() { var e, t, n; return u(this, (function(r) { switch (r.label) {
                                    case 0:
                                        return e = {}, t = {}, [4, this.request({ path: "/marketplace/api/v2/auctions", method: "GET", headers: t, query: e })];
                                    case 1:
                                        return n = r.sent(), [2, new a.JSONApiResponse(n, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getAuctionsUsingGET = function() { return o(this, void 0, void 0, (function() { return u(this, (function(e) { switch (e.label) {
                                    case 0:
                                        return [4, this.getAuctionsUsingGETRaw()];
                                    case 1:
                                        return [4, e.sent().value()];
                                    case 2:
                                        return [2, e.sent()] } })) })) }, t.prototype.getOffersInAuctionDepreactedUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOffersInAuctionDepreactedUsingGET."); return t = {}, void 0 !== e.force && (t.force = e.force), n = {}, [4, this.request({ path: "/marketplace/api/v1/ownerships/{id}/offersInAuction".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getOffersInAuctionDepreactedUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOffersInAuctionDepreactedUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOffersInAuctionUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOffersInAuctionUsingGET."); return t = {}, void 0 !== e.force && (t.force = e.force), n = {}, [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/offersInAuction".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getOffersInAuctionUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOffersInAuctionUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOffersNotInAuctionDeprecatedUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOffersNotInAuctionDeprecatedUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v1/ownerships/{id}/offersNotInAuction".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getOffersNotInAuctionDeprecatedUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOffersNotInAuctionDeprecatedUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOffersNotInAuctionUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOffersNotInAuctionUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/offersNotInAuction".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getOffersNotInAuctionUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOffersNotInAuctionUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.prepareCreateAuctionMessageUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling prepareCreateAuctionMessageUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/auction/msgToCreate".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.auctionForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.prepareCreateAuctionMessageUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.prepareCreateAuctionMessageUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.prepareDeleteAuctionMessageUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling prepareDeleteAuctionMessageUsingPOST."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/auction/msgToDelete".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.prepareDeleteAuctionMessageUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.prepareDeleteAuctionMessageUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.AuctionControllerApi = c }, 1166: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getTopBuyersUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, void 0 !== e.days && (t.days = e.days), n = {}, [4, this.request({ path: "/marketplace/api/v2/buyers", method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getTopBuyersUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getTopBuyersUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getTopSellersUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, void 0 !== e.days && (t.days = e.days), n = {}, [4, this.request({ path: "/marketplace/api/v2/sellers", method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getTopSellersUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getTopSellersUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.BuysControllerApi = c }, 1167: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.encodeClaimsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/claims/encode", method: "POST", headers: n, query: t, body: e.claimValue })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.encodeClaimsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.encodeClaimsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getClaimUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getClaimUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/claims/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getClaimUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getClaimUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getClaimsToSignUsingGETRaw = function() { return o(this, void 0, void 0, (function() { var e, t, n; return u(this, (function(r) { switch (r.label) {
                                    case 0:
                                        return e = {}, t = {}, [4, this.request({ path: "/marketplace/api/v2/claims", method: "GET", headers: t, query: e })];
                                    case 1:
                                        return n = r.sent(), [2, new a.JSONApiResponse(n, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getClaimsToSignUsingGET = function() { return o(this, void 0, void 0, (function() { return u(this, (function(e) { switch (e.label) {
                                    case 0:
                                        return [4, this.getClaimsToSignUsingGETRaw()];
                                    case 1:
                                        return [4, e.sent().value()];
                                    case 2:
                                        return [2, e.sent()] } })) })) }, t.prototype.updateClaimsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/claims", method: "POST", headers: n, query: t, body: e.updateClaimsForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.VoidApiResponse(r)] } })) })) }, t.prototype.updateClaimsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.updateClaimsUsingPOSTRaw(e)];
                                    case 1:
                                        return t.sent(), [2] } })) })) }, t }(a.BaseAPI);
            t.ClaimControllerApi = c }, 1168: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getCollectionMetadataUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getCollectionMetadataUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/contractMetadata/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getCollectionMetadataUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getCollectionMetadataUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getCollectionUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getCollectionUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/collections/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getCollectionUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getCollectionUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getCollectionsByOwnerUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getCollectionsByOwnerUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/users/{id}/marketplace/api/v2/collections".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getCollectionsByOwnerUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getCollectionsByOwnerUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getCollectionsByOwnerWithMetaUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getCollectionsByOwnerWithMetaUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/users/{id}/marketplace/api/v2/collections/metadata".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getCollectionsByOwnerWithMetaUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getCollectionsByOwnerWithMetaUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getHotCollectionsUsingGETRaw = function() { return o(this, void 0, void 0, (function() { var e, t, n; return u(this, (function(r) { switch (r.label) {
                                    case 0:
                                        return e = {}, t = {}, [4, this.request({ path: "/marketplace/api/v2/collections/hot", method: "GET", headers: t, query: e })];
                                    case 1:
                                        return n = r.sent(), [2, new a.JSONApiResponse(n, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getHotCollectionsUsingGET = function() { return o(this, void 0, void 0, (function() { return u(this, (function(e) { switch (e.label) {
                                    case 0:
                                        return [4, this.getHotCollectionsUsingGETRaw()];
                                    case 1:
                                        return [4, e.sent().value()];
                                    case 2:
                                        return [2, e.sent()] } })) })) }, t.prototype.queryCollectionsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/collections", method: "POST", headers: n, query: t, body: e.collectionPageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.queryCollectionsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.queryCollectionsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.saveCollectionSettingsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling saveCollectionSettingsUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/collections/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.collectionForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.saveCollectionSettingsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.saveCollectionSettingsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.searchUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/collections/search", method: "POST", headers: n, query: t, body: e.searchPageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.searchUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.searchUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.CollectionControllerApi = c }, 1169: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.configUsingGETRaw = function() { return o(this, void 0, void 0, (function() { var e, t, n; return u(this, (function(r) { switch (r.label) {
                                    case 0:
                                        return e = {}, t = {}, [4, this.request({ path: "/marketplace/api/v2/config", method: "GET", headers: t, query: e })];
                                    case 1:
                                        return n = r.sent(), [2, new a.JSONApiResponse(n, (function(e) { return e }))] } })) })) }, t.prototype.configUsingGET = function() { return o(this, void 0, void 0, (function() { return u(this, (function(e) { switch (e.label) {
                                    case 0:
                                        return [4, this.configUsingGETRaw()];
                                    case 1:
                                        return [4, e.sent().value()];
                                    case 2:
                                        return [2, e.sent()] } })) })) }, t }(a.BaseAPI);
            t.ConfigControllerApi = c }, 1170: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.findAllowedCurrenciesUsingGETRaw = function() { return o(this, void 0, void 0, (function() { var e, t, n; return u(this, (function(r) { switch (r.label) {
                                    case 0:
                                        return e = {}, t = {}, [4, this.request({ path: "/marketplace/api/v2/currencies", method: "GET", headers: t, query: e })];
                                    case 1:
                                        return n = r.sent(), [2, new a.JSONApiResponse(n, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.findAllowedCurrenciesUsingGET = function() { return o(this, void 0, void 0, (function() { return u(this, (function(e) { switch (e.label) {
                                    case 0:
                                        return [4, this.findAllowedCurrenciesUsingGETRaw()];
                                    case 1:
                                        return [4, e.sent().value()];
                                    case 2:
                                        return [2, e.sent()] } })) })) }, t.prototype.getCurrencyByAddressUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getCurrencyByAddressUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/currencies/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getCurrencyByAddressUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getCurrencyByAddressUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.rateUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.symbol || void 0 === e.symbol) throw new a.RequiredError("symbol", "Required parameter requestParameters.symbol was null or undefined when calling rateUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/currencies/rate/{symbol}".replace("{symbol}", encodeURIComponent(String(e.symbol))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.rateUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.rateUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.CurrencyControllerApi = c }, 1171: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.followDeprecatedUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling followDeprecatedUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/users/{id}/follow".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.followDeprecatedUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.followDeprecatedUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.followUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling followUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/users/{id}/follow".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.followUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.followUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getFollowersUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.user || void 0 === e.user) throw new a.RequiredError("user", "Required parameter requestParameters.user was null or undefined when calling getFollowersUsingPOST."); return t = {}, void 0 !== e.user && (t.user = e.user), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/followers", method: "POST", headers: n, query: t, body: e.pageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getFollowersUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getFollowersUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getFollowingsByOwnerAndUserIdsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.owner || void 0 === e.owner) throw new a.RequiredError("owner", "Required parameter requestParameters.owner was null or undefined when calling getFollowingsByOwnerAndUserIdsUsingPOST."); return t = {}, void 0 !== e.owner && (t.owner = e.owner), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/followings/byUsers", method: "POST", headers: n, query: t, body: e.requestBody })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getFollowingsByOwnerAndUserIdsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getFollowingsByOwnerAndUserIdsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getFollowingsByOwnerUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.owner || void 0 === e.owner) throw new a.RequiredError("owner", "Required parameter requestParameters.owner was null or undefined when calling getFollowingsByOwnerUsingPOST."); return t = {}, void 0 !== e.owner && (t.owner = e.owner), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/followings", method: "POST", headers: n, query: t, body: e.pageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getFollowingsByOwnerUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getFollowingsByOwnerUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.unfollowUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling unfollowUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/users/{id}/unfollow".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.unfollowUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.unfollowUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.FollowingControllerApi = c }, 1172: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getHotBidsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/hotBids", method: "POST", headers: n, query: t, body: e.pageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getHotBidsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getHotBidsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.HotBidControllerApi = c }, 1173: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getImageUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.token || void 0 === e.token) throw new a.RequiredError("token", "Required parameter requestParameters.token was null or undefined when calling getImageUsingGET."); if (null === e.fileName || void 0 === e.fileName) throw new a.RequiredError("fileName", "Required parameter requestParameters.fileName was null or undefined when calling getImageUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/image/{token}/{fileName}".replace("{token}", encodeURIComponent(String(e.token))).replace("{fileName}", encodeURIComponent(String(e.fileName))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.getImageUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getImageUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.ImageControllerApi = c }, 1174: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.confirmUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.code || void 0 === e.code) throw new a.RequiredError("code", "Required parameter requestParameters.code was null or undefined when calling confirmUsingGET."); if (null === e.state || void 0 === e.state) throw new a.RequiredError("state", "Required parameter requestParameters.state was null or undefined when calling confirmUsingGET."); return t = {}, void 0 !== e.code && (t.code = e.code), void 0 !== e.state && (t.state = e.state), n = {}, [4, this.request({ path: "/marketplace/api/v2/instagram/confirm", method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.VoidApiResponse(r)] } })) })) }, t.prototype.confirmUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.confirmUsingGETRaw(e)];
                                    case 1:
                                        return t.sent(), [2] } })) })) }, t.prototype.getStateForTokenRequestUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/instagram/state", method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.getStateForTokenRequestUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getStateForTokenRequestUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.InstagramControllerApi = c }, 1175: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getItemMetaUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getItemMetaUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/items/{id}/meta".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getItemMetaUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getItemMetaUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getItemSimpleUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getItemSimpleUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/items/{id}/simple".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getItemSimpleUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getItemSimpleUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getItemUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getItemUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/items/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getItemUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getItemUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getItemsByIdsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/map", method: "POST", headers: n, query: t, body: e.requestBody })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getItemsByIdsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getItemsByIdsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.queryItemsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items", method: "POST", headers: n, query: t, body: e.itemPageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.queryItemsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.queryItemsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.ItemControllerApi = c }, 1176: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getLikedUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.owner || void 0 === e.owner) throw new a.RequiredError("owner", "Required parameter requestParameters.owner was null or undefined when calling getLikedUsingPOST."); return t = {}, void 0 !== e.owner && (t.owner = e.owner), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/liked", method: "POST", headers: n, query: t, body: e.pageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getLikedUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getLikedUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getLikesUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.owner || void 0 === e.owner) throw new a.RequiredError("owner", "Required parameter requestParameters.owner was null or undefined when calling getLikesUsingPOST."); return t = {}, void 0 !== e.owner && (t.owner = e.owner), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/likes", method: "POST", headers: n, query: t, body: e.requestBody })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getLikesUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getLikesUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.likeUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling likeUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/{id}/like".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.likeUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.likeUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.unlikeUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling unlikeUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/{id}/unlike".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.unlikeUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.unlikeUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.ItemLikeControllerApi = c }, 1177: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.mintAssetUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/lazy", method: "POST", headers: n, query: t, body: e.body })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.mintAssetUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.mintAssetUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.LazyControllerApi = c }, 1178: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.createLockUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling createLockUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/{id}/lock".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.lockForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.createLockUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.createLockUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.unlockUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling unlockUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/{id}/unlock".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.unlockUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.unlockUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.LockControllerApi = c }, 1179: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getNonceDeprecatedUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.address || void 0 === e.address) throw new a.RequiredError("address", "Required parameter requestParameters.address was null or undefined when calling getNonceDeprecatedUsingGET."); return t = {}, n = {}, void 0 !== e.xVisitorAddress && null !== e.xVisitorAddress && (n["x-visitor-address"] = String(e.xVisitorAddress)), [4, this.request({ path: "/marketplace/api/v1/tokens/{address}/nonce".replace("{address}", encodeURIComponent(String(e.address))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getNonceDeprecatedUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getNonceDeprecatedUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getNonceUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.address || void 0 === e.address) throw new a.RequiredError("address", "Required parameter requestParameters.address was null or undefined when calling getNonceUsingGET."); return t = {}, n = {}, void 0 !== e.xVisitorAddress && null !== e.xVisitorAddress && (n["x-visitor-address"] = String(e.xVisitorAddress)), [4, this.request({ path: "/marketplace/api/v2/tokens/{address}/nonce".replace("{address}", encodeURIComponent(String(e.address))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getNonceUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getNonceUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.NonceControllerApi = c }, 1180: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getNotificationsByOwnerUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.owner || void 0 === e.owner) throw new a.RequiredError("owner", "Required parameter requestParameters.owner was null or undefined when calling getNotificationsByOwnerUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/notifications/{owner}".replace("{owner}", encodeURIComponent(String(e.owner))), method: "POST", headers: n, query: t, body: e.pageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getNotificationsByOwnerUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getNotificationsByOwnerUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.NotificationControllerApi = c }, 1181: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.deleteFromSaleUsingDELETERaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling deleteFromSaleUsingDELETE."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/onSale".replace("{id}", encodeURIComponent(String(e.id))), method: "DELETE", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r)] } })) })) }, t.prototype.deleteFromSaleUsingDELETE = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.deleteFromSaleUsingDELETERaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getItemOwnershipsUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getItemOwnershipsUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/items/{id}/ownerships".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getItemOwnershipsUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getItemOwnershipsUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOwnershipOrderDeprecatedUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOwnershipOrderDeprecatedUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v1/ownerships/{id}/order".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getOwnershipOrderDeprecatedUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOwnershipOrderDeprecatedUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOwnershipOrderUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOwnershipOrderUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/order".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getOwnershipOrderUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOwnershipOrderUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOwnershipUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOwnershipUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getOwnershipUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOwnershipUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOwnershipsByIdsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/list", method: "POST", headers: n, query: t, body: e.requestBody })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getOwnershipsByIdsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOwnershipsByIdsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.hideUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling hideUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/hide".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.hideUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.hideUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.openUsingDELETERaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling openUsingDELETE."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/hide".replace("{id}", encodeURIComponent(String(e.id))), method: "DELETE", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.openUsingDELETE = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.openUsingDELETERaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.pinUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling pinUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/pin".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.pinUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.pinUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.putOnSaleUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling putOnSaleUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/onSale".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r)] } })) })) }, t.prototype.putOnSaleUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.putOnSaleUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.queryOwnershipsSimpleUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/simple", method: "POST", headers: n, query: t, body: e.ownershipPageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.queryOwnershipsSimpleUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.queryOwnershipsSimpleUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.queryOwnershipsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships", method: "POST", headers: n, query: t, body: e.ownershipPageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.queryOwnershipsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.queryOwnershipsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.unpinUsingDELETERaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling unpinUsingDELETE."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/ownerships/{id}/pin".replace("{id}", encodeURIComponent(String(e.id))), method: "DELETE", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.unpinUsingDELETE = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.unpinUsingDELETERaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.OwnershipControllerApi = c }, 1182: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getPositionUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getPositionUsingGET."); if (null === e.number || void 0 === e.number) throw new a.RequiredError("number", "Required parameter requestParameters.number was null or undefined when calling getPositionUsingGET."); return t = {}, void 0 !== e.number && (t.number = e.number), n = {}, [4, this.request({ path: "/marketplace/api/v2/powers/{id}/position".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getPositionUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getPositionUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getPowerUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getPowerUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/powers/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getPowerUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getPowerUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getStakeUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getStakeUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getStakeUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getStakeUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getTopPowersUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.number || void 0 === e.number) throw new a.RequiredError("number", "Required parameter requestParameters.number was null or undefined when calling getTopPowersUsingGET."); return t = {}, void 0 !== e.number && (t.number = e.number), n = {}, [4, this.request({ path: "/marketplace/api/v2/powers", method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getTopPowersUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getTopPowersUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.PowerControllerApi = c }, 1183: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getMetaUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getMetaUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/profiles/{id}/meta".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getMetaUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getMetaUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getProfileBadgesUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getProfileBadgesUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/profiles/{id}/badges".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getProfileBadgesUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getProfileBadgesUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getProfileListUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/profiles/list", method: "POST", headers: n, query: t, body: e.address })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getProfileListUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getProfileListUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getProfileUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getProfileUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/profiles/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getProfileUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getProfileUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.ProfileControllerApi = c }, 1184: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.reportUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling reportUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/{id}/report".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.reportForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.VoidApiResponse(r)] } })) })) }, t.prototype.reportUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.reportUsingPOSTRaw(e)];
                                    case 1:
                                        return t.sent(), [2] } })) })) }, t }(a.BaseAPI);
            t.ReportControllerApi = c }, 1185: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getBestOfferForItemUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getBestOfferForItemUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/items/{id}/bestOffer".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getBestOfferForItemUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getBestOfferForItemUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getBestOffersForItemsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/items/bestOffers", method: "POST", headers: n, query: t, body: e.requestBody })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getBestOffersForItemsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getBestOffersForItemsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOfferByUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOfferByUsingGET."); if (null === e.owner || void 0 === e.owner) throw new a.RequiredError("owner", "Required parameter requestParameters.owner was null or undefined when calling getOfferByUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/items/{id}/offers/{owner}".replace("{id}", encodeURIComponent(String(e.id))).replace("{owner}", encodeURIComponent(String(e.owner))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getOfferByUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOfferByUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOffersForItemUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOffersForItemUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/items/{id}/offers".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getOffersForItemUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOffersForItemUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.prepareCancelUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling prepareCancelUsingPOST."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/orders/{id}/prepareCancel".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.prepareCancelUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.prepareCancelUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.prepareOrderUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/orders/prepare", method: "POST", headers: n, query: t, body: e.encodeOrderRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.prepareOrderUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.prepareOrderUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.prepareTransactionUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling prepareTransactionUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/orders/{id}/prepareTransaction".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.prepareTransactionRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.prepareTransactionUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.prepareTransactionUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.saveSellOrderUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/orders", method: "POST", headers: n, query: t, body: e.orderFormDtoReq })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.saveSellOrderUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.saveSellOrderUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.sellOrderUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling sellOrderUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/orders/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.sellOrderUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.sellOrderUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.signFormUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling signFormUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/orders/{id}/wert".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signWertFormRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.signFormUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.signFormUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.SellOrderControllerApi = c }, 1186: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getBestOfferForItemUsingGET1Raw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getBestOfferForItemUsingGET1."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v1/items/{id}/bestOffer".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getBestOfferForItemUsingGET1 = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getBestOfferForItemUsingGET1Raw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getBestOffersForItemsUsingPOST1Raw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v1/items/bestOffers", method: "POST", headers: n, query: t, body: e.requestBody })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getBestOffersForItemsUsingPOST1 = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getBestOffersForItemsUsingPOST1Raw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getBuyerFeeUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getBuyerFeeUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/orders/{id}/buyerFee".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getBuyerFeeUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getBuyerFeeUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOfferByUsingGET1Raw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOfferByUsingGET1."); if (null === e.owner || void 0 === e.owner) throw new a.RequiredError("owner", "Required parameter requestParameters.owner was null or undefined when calling getOfferByUsingGET1."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v1/items/{id}/offers/{owner}".replace("{id}", encodeURIComponent(String(e.id))).replace("{owner}", encodeURIComponent(String(e.owner))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getOfferByUsingGET1 = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOfferByUsingGET1Raw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getOffersForItemUsingGET1Raw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getOffersForItemUsingGET1."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v1/items/{id}/offers".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getOffersForItemUsingGET1 = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getOffersForItemUsingGET1Raw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.prepareSellOrderMessageUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v1/orders/prepare", method: "POST", headers: n, query: t, body: e.exchangeForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.prepareSellOrderMessageUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.prepareSellOrderMessageUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.saveSellOrderUsingPOST1Raw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v1/orders", method: "POST", headers: n, query: t, body: e.exchangeForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.VoidApiResponse(r)] } })) })) }, t.prototype.saveSellOrderUsingPOST1 = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.saveSellOrderUsingPOST1Raw(e)];
                                    case 1:
                                        return t.sent(), [2] } })) })) }, t.prototype.sellOrderUsingGET1Raw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling sellOrderUsingGET1."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v1/orders/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.sellOrderUsingGET1 = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.sellOrderUsingGET1Raw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.SellOrderDeprecatedControllerApi = c }, 1187: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.getNameUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.url || void 0 === e.url) throw new a.RequiredError("url", "Required parameter requestParameters.url was null or undefined when calling getNameUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/urls/{url}".replace("{url}", encodeURIComponent(String(e.url))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getNameUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getNameUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.ShortUrlControllerApi = c }, 1188: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.subscribeUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/subscribe", method: "POST", headers: n, query: t, body: e.subscribeForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.VoidApiResponse(r)] } })) })) }, t.prototype.subscribeUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.subscribeUsingPOSTRaw(e)];
                                    case 1:
                                        return t.sent(), [2] } })) })) }, t }(a.BaseAPI);
            t.SubscribeControllerApi = c }, 1189: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.suggestCompletionCollectionsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, void 0 !== e.size && (t.size = e.size), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/suggest/completion/collections", method: "POST", headers: n, query: t, body: e.suggestForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.suggestCompletionCollectionsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.suggestCompletionCollectionsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.suggestCompletionItemsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, void 0 !== e.size && (t.size = e.size), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/suggest/completion/items", method: "POST", headers: n, query: t, body: e.suggestForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.suggestCompletionItemsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.suggestCompletionItemsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.suggestCompletionOwnershipsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, void 0 !== e.size && (t.size = e.size), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/suggest/completion/ownerships", method: "POST", headers: n, query: t, body: e.suggestForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.suggestCompletionOwnershipsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.suggestCompletionOwnershipsUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.suggestCompletionUsersUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, void 0 !== e.size && (t.size = e.size), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/suggest/completion/users", method: "POST", headers: n, query: t, body: e.suggestForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.suggestCompletionUsersUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.suggestCompletionUsersUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.suggestPhraseUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, void 0 !== e.size && (t.size = e.size), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/suggest/phrase", method: "POST", headers: n, query: t, body: e.suggestForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r)] } })) })) }, t.prototype.suggestPhraseUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.suggestPhraseUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.SuggestControllerApi = c }, 1190: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.processTransactionUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/transactions", method: "POST", headers: n, query: t, body: e.transaction })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.processTransactionUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.processTransactionUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.TransactionControllerApi = c }, 1191: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.confirmUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.username || void 0 === e.username) throw new a.RequiredError("username", "Required parameter requestParameters.username was null or undefined when calling confirmUsingPOST."); return t = {}, void 0 !== e.username && (t.username = e.username), (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/twitter/confirm", method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.confirmUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.confirmUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getConfirmMsgUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.owner || void 0 === e.owner) throw new a.RequiredError("owner", "Required parameter requestParameters.owner was null or undefined when calling getConfirmMsgUsingGET."); return t = {}, void 0 !== e.owner && (t.owner = e.owner), n = {}, [4, this.request({ path: "/marketplace/api/v2/twitter/confirmMsg", method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.getConfirmMsgUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getConfirmMsgUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.TwitterControllerApi = c }, 1192: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.acceptTermsUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling acceptTermsUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/users/{id}/acceptTerms".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.termsForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.VoidApiResponse(r)] } })) })) }, t.prototype.acceptTermsUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.acceptTermsUsingPOSTRaw(e)];
                                    case 1:
                                        return t.sent(), [2] } })) })) }, t.prototype.confirmEmailUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling confirmEmailUsingGET."); if (null === e.key || void 0 === e.key) throw new a.RequiredError("key", "Required parameter requestParameters.key was null or undefined when calling confirmEmailUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/users/{id}/confirmEmail/{key}".replace("{id}", encodeURIComponent(String(e.id))).replace("{key}", encodeURIComponent(String(e.key))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.confirmEmailUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.confirmEmailUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getSecretUserPreferenceUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getSecretUserPreferenceUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/users/{id}/secretUserPreference".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.signatureForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getSecretUserPreferenceUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getSecretUserPreferenceUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getUserUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling getUserUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/users/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.getUserUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getUserUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.getUsersByFollowersUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/users/byFollowers", method: "POST", headers: n, query: t, body: e.pageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.getUsersByFollowersUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.getUsersByFollowersUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.resendEmailConfirmationUsingGETRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling resendEmailConfirmationUsingGET."); return t = {}, n = {}, [4, this.request({ path: "/marketplace/api/v2/users/{id}/resendEmailConfirmation".replace("{id}", encodeURIComponent(String(e.id))), method: "GET", headers: n, query: t })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.resendEmailConfirmationUsingGET = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.resendEmailConfirmationUsingGETRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.saveEmailPreferenceUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling saveEmailPreferenceUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/users/{id}/emailPreference".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.emailPreferenceForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.saveEmailPreferenceUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.saveEmailPreferenceUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.saveUserUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        if (null === e.id || void 0 === e.id) throw new a.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling saveUserUsingPOST."); return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/users/{id}".replace("{id}", encodeURIComponent(String(e.id))), method: "POST", headers: n, query: t, body: e.userForm })];
                                    case 1:
                                        return r = i.sent(), [2, new a.TextApiResponse(r)] } })) })) }, t.prototype.saveUserUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.saveUserUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t.prototype.searchUsingPOST1Raw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/users/search", method: "POST", headers: n, query: t, body: e.searchPageRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e.map((function(e) { return e })) }))] } })) })) }, t.prototype.searchUsingPOST1 = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.searchUsingPOST1Raw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.UserControllerApi = c }, 1193: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.onTransactionUpdateUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/wert", method: "POST", headers: n, query: t, body: e.wertWebHookEvent })];
                                    case 1:
                                        return r = i.sent(), [2, new a.VoidApiResponse(r)] } })) })) }, t.prototype.onTransactionUpdateUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.onTransactionUpdateUsingPOSTRaw(e)];
                                    case 1:
                                        return t.sent(), [2] } })) })) }, t }(a.BaseAPI);
            t.WertControllerApi = c }, 1194: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                u = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } },
                s = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = s(n(89)),
                c = function(e) {
                    function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.reserveUsingPOSTRaw = function(e) { return o(this, void 0, void 0, (function() { var t, n, r; return u(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return t = {}, (n = {})["Content-Type"] = "application/json", [4, this.request({ path: "/marketplace/api/v2/wyre", method: "POST", headers: n, query: t, body: e.wyreReservationRequest })];
                                    case 1:
                                        return r = i.sent(), [2, new a.JSONApiResponse(r, (function(e) { return e }))] } })) })) }, t.prototype.reserveUsingPOST = function(e) { return o(this, void 0, void 0, (function() { return u(this, (function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.reserveUsingPOSTRaw(e)];
                                    case 1:
                                        return [4, t.sent().value()];
                                    case 2:
                                        return [2, t.sent()] } })) })) }, t }(a.BaseAPI);
            t.WyreControllerApi = c }, 1195: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.ENDED = "ENDED", e.NOTSTARTED = "NOT_STARTED", e.STARTED = "STARTED" }(t.AuctionStatusEnum || (t.AuctionStatusEnum = {})) }, 1196: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.AUCTIONCOULDBECREATEDFORERC721ONLY = "AUCTION_COULD_BE_CREATED_FOR_ERC721_ONLY", e.AUCTIONFORITEMEXISTS = "AUCTION_FOR_ITEM_EXISTS", e.CREATED = "CREATED", e.INCORRECTCURRENCY = "INCORRECT_CURRENCY", e.STARTDATEMUSTBEBEFOREENDDATE = "START_DATE_MUST_BE_BEFORE_END_DATE" }(t.AuctionCreateResultStatusEnum || (t.AuctionCreateResultStatusEnum = {})) }, 1197: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DELETED = "DELETED", e.OFFERFORAUCTIONEXISTS = "OFFER_FOR_AUCTION_EXISTS" }(t.AuctionDeleteResultStatusEnum || (t.AuctionDeleteResultStatusEnum = {})) }, 1198: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHPRICEFIRST = "HIGH_PRICE_FIRST", e.LATEST = "LATEST", e.LOWPRICEFIRST = "LOW_PRICE_FIRST", e.MORELIKESFIRST = "MORE_LIKES_FIRST" }(t.ByCollectionSortEnum || (t.ByCollectionSortEnum = {})) }, 1199: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHPRICEFIRST = "HIGH_PRICE_FIRST", e.LATEST = "LATEST", e.LOWPRICEFIRST = "LOW_PRICE_FIRST", e.MORELIKESFIRST = "MORE_LIKES_FIRST" }(t.ByCollection1SortEnum || (t.ByCollection1SortEnum = {})) }, 1200: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHVOLUMEFIRST = "HIGH_VOLUME_FIRST" }(t.ByTagsSortEnum || (t.ByTagsSortEnum = {})) }, 1201: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHVOLUMEFIRST = "HIGH_VOLUME_FIRST" }(t.ByTags1SortEnum || (t.ByTags1SortEnum = {})) }, 1202: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHVOLUMEFIRST = "HIGH_VOLUME_FIRST" }(t.CollectionFilterSortEnum || (t.CollectionFilterSortEnum = {})) }, 1203: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.CONFIRMATIONTIMEEXPIRED = "CONFIRMATION_TIME_EXPIRED", e.CONFIRMATIONWASNOTSENT = "CONFIRMATION_WAS_NOT_SENT", e.CONFIRMED = "CONFIRMED", e.EMAILISALREADYCONFIRMED = "EMAIL_IS_ALREADY_CONFIRMED", e.TOOMANYCONFIRMATIONATTEMPTS = "TOO_MANY_CONFIRMATION_ATTEMPTS", e.WRONGCONFIRMATIONCODE = "WRONG_CONFIRMATION_CODE" }(t.EmailConfirmResultStatusEnum || (t.EmailConfirmResultStatusEnum = {})) }, 1204: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.V1 = "RARIBLE_V1", e.V2 = "RARIBLE_V2" }(t.EncodeOrderRequestTypeEnum || (t.EncodeOrderRequestTypeEnum = {})) }, 1205: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.CREATED = "CREATED", e.FOLLOWINGLIMITEXCEEDED = "FOLLOWING_LIMIT_EXCEEDED" }(t.FollowingResultStatusEnum || (t.FollowingResultStatusEnum = {})) }, 1206: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHPRICEFIRST = "HIGH_PRICE_FIRST", e.LATEST = "LATEST", e.LOWPRICEFIRST = "LOW_PRICE_FIRST", e.MORELIKESFIRST = "MORE_LIKES_FIRST" }(t.InStockSortEnum || (t.InStockSortEnum = {})) }, 1207: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHPRICEFIRST = "HIGH_PRICE_FIRST", e.LATEST = "LATEST", e.LOWPRICEFIRST = "LOW_PRICE_FIRST", e.MORELIKESFIRST = "MORE_LIKES_FIRST" }(t.InStock1SortEnum || (t.InStock1SortEnum = {})) }, 1208: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHPRICEFIRST = "HIGH_PRICE_FIRST", e.LATEST = "LATEST", e.LOWPRICEFIRST = "LOW_PRICE_FIRST", e.MORELIKESFIRST = "MORE_LIKES_FIRST" }(t.ItemFilterSortEnum || (t.ItemFilterSortEnum = {})) }, 1209: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.BUY = "BUY", e.CANCEL = "CANCEL", e.FAKE = "FAKE", e.ROYALTY = "ROYALTY", e.TRANSFER = "TRANSFER" }(t.ItemHistoryTypeEnum || (t.ItemHistoryTypeEnum = {})) }, 1210: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.SUCCESS = "SUCCESS" }(t.JwtResultStatusEnum || (t.JwtResultStatusEnum = {})) }, 1211: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.CONFIRMED = "CONFIRMED", e.DROPPED = "DROPPED", e.INACTIVE = "INACTIVE", e.PENDING = "PENDING", e.REVERTED = "REVERTED" }(t.LogEventStatusEnum || (t.LogEventStatusEnum = {})) }, 1212: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.V1 = "RARIBLE_V1", e.V2 = "RARIBLE_V2" }(t.OrderTypeEnum || (t.OrderTypeEnum = {})) }, 1213: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.CANCEL = "CANCEL", e.ORDERSIDEMATCH = "ORDER_SIDE_MATCH" }(t.OrderCancelDtoTypeEnum || (t.OrderCancelDtoTypeEnum = {})) }, 1214: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.CANCEL = "CANCEL", e.ORDERSIDEMATCH = "ORDER_SIDE_MATCH" }(t.OrderCancelDto1TypeEnum || (t.OrderCancelDto1TypeEnum = {})) }, 1215: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.CANCEL = "CANCEL", e.ORDERSIDEMATCH = "ORDER_SIDE_MATCH" }(t.OrderExchangeHistoryDtoTypeEnum || (t.OrderExchangeHistoryDtoTypeEnum = {})) }, 1216: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.V1 = "RARIBLE_V1", e.V2 = "RARIBLE_V2" }(t.OrderFormDtoReqTypeEnum || (t.OrderFormDtoReqTypeEnum = {})) }, 1217: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.V1 = "RARIBLE_V1", e.V2 = "RARIBLE_V2" }(t.OrderFormDtoResTypeEnum || (t.OrderFormDtoResTypeEnum = {})) }, 1218: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.ABSENCEOFREQUIREDFIELD = "ABSENCE_OF_REQUIRED_FIELD", e.BALANCENOTFOUND = "BALANCE_NOT_FOUND", e.BIDWITHETH = "BID_WITH_ETH", e.CREATEERROROTHERORDERISUNCOMPLETED = "CREATE_ERROR_OTHER_ORDER_IS_UNCOMPLETED", e.INCORRECTFEE = "INCORRECT_FEE", e.INCORRECTLAZYASSET = "INCORRECT_LAZY_ASSET", e.INCORRECTORDERDATA = "INCORRECT_ORDER_DATA", e.INCORRECTSIGNATURE = "INCORRECT_SIGNATURE", e.INVALIDARGUMENT = "INVALID_ARGUMENT", e.ORDERCANCELED = "ORDER_CANCELED", e.ORDERINVALIDUPDATE = "ORDER_INVALID_UPDATE", e.ORDERNOTFOUND = "ORDER_NOT_FOUND", e.OWNERSHIPNOTFOUND = "OWNERSHIP_NOT_FOUND", e.SAVINGBIDAUCTIONCURRENCYERROR = "SAVING_BID_AUCTION_CURRENCY_ERROR", e.SAVINGBIDAUCTIONMINPRICEERROR = "SAVING_BID_AUCTION_MIN_PRICE_ERROR", e.SAVINGBIDAUCTIONNOTINPROGRESS = "SAVING_BID_AUCTION_NOT_IN_PROGRESS", e.SAVINGBIDAUCTIONPRICECHANGEERROR = "SAVING_BID_AUCTION_PRICE_CHANGE_ERROR", e.SAVINGORDERAUCTIONEXISTS = "SAVING_ORDER_AUCTION_EXISTS", e.SERVERERROR = "SERVER_ERROR", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UPDATEERRORPREVIOUSISCOMPLETED = "UPDATE_ERROR_PREVIOUS_IS_COMPLETED", e.UPDATEERRORSELLPRICEISINCREASED = "UPDATE_ERROR_SELL_PRICE_IS_INCREASED", e.UPDATEERRORVALUEISDECREASED = "UPDATE_ERROR_VALUE_IS_DECREASED", e.ZEROORNEGATIVEPRICE = "ZERO_OR_NEGATIVE_PRICE" }(t.OrderSaveResultStatusEnum || (t.OrderSaveResultStatusEnum = {})) }, 1219: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.LEFT = "LEFT", e.RIGHT = "RIGHT" }(t.OrderSideMatchDtoSideEnum || (t.OrderSideMatchDtoSideEnum = {})),
                function(e) { e.CANCEL = "CANCEL", e.ORDERSIDEMATCH = "ORDER_SIDE_MATCH" }(t.OrderSideMatchDtoTypeEnum || (t.OrderSideMatchDtoTypeEnum = {})) }, 1220: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.LEFT = "LEFT", e.RIGHT = "RIGHT" }(t.OrderSideMatchDto1SideEnum || (t.OrderSideMatchDto1SideEnum = {})),
                function(e) { e.CANCEL = "CANCEL", e.ORDERSIDEMATCH = "ORDER_SIDE_MATCH" }(t.OrderSideMatchDto1TypeEnum || (t.OrderSideMatchDto1TypeEnum = {})) }, 1221: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.AUCTION = "AUCTION", e.FIXEDPRICE = "FIXED_PRICE", e.NOTFORSALE = "NOT_FOR_SALE", e.OPENFOROFFERS = "OPEN_FOR_OFFERS" }(t.OwnershipStatusEnum || (t.OwnershipStatusEnum = {})) }, 1222: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.ERC1155 = "ERC1155", e.ERC20 = "ERC20", e.ERC721 = "ERC721", e.ERC721DEPRECATED = "ERC721_DEPRECATED", e.ETH = "ETH" }(t.PrepareMessageResultAssetTypeEnum || (t.PrepareMessageResultAssetTypeEnum = {})),
                function(e) { e.ERC1155 = "ERC1155", e.ERC20 = "ERC20", e.ERC721 = "ERC721", e.ERC721DEPRECATED = "ERC721_DEPRECATED", e.ETH = "ETH" }(t.PrepareMessageResultBuyAssetTypeEnum || (t.PrepareMessageResultBuyAssetTypeEnum = {})) }, 1223: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.VERIFIED = "VERIFIED" }(t.ProfileBadgesEnum || (t.ProfileBadgesEnum = {})),
                function(e) { e.COLLECTION = "COLLECTION", e.USER = "USER" }(t.ProfileTypeEnum || (t.ProfileTypeEnum = {})) }, 1224: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.APPROVED = "APPROVED", e.DECLINED = "DECLINED", e.INPROCESS = "IN_PROCESS", e.NOTSTARTED = "NOT_STARTED" }(t.ProfileBadgeStatusEnum || (t.ProfileBadgeStatusEnum = {})),
                function(e) { e.VERIFIED = "VERIFIED" }(t.ProfileBadgeValueEnum || (t.ProfileBadgeValueEnum = {})) }, 1225: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.NOEMAILSAVED = "NO_EMAIL_SAVED", e.RESENT = "RESENT", e.TOOSHORTTIMEPASSED = "TOO_SHORT_TIME_PASSED" }(t.ResendEmailConfirmationResultStatusEnum || (t.ResendEmailConfirmationResultStatusEnum = {})) }, 1226: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.NONCE = "NONCE", e.SALT = "SALT" }(t.SaltTypeEnum || (t.SaltTypeEnum = {})) }, 1227: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHPRICEFIRST = "HIGH_PRICE_FIRST", e.LATEST = "LATEST", e.LOWPRICEFIRST = "LOW_PRICE_FIRST", e.MORELIKESFIRST = "MORE_LIKES_FIRST" }(t.SearchSortEnum || (t.SearchSortEnum = {})) }, 1228: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.DEFAULT = "DEFAULT", e.HIGHPRICEFIRST = "HIGH_PRICE_FIRST", e.LATEST = "LATEST", e.LOWPRICEFIRST = "LOW_PRICE_FIRST", e.MORELIKESFIRST = "MORE_LIKES_FIRST" }(t.Search1SortEnum || (t.Search1SortEnum = {})) }, 1229: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.ATTEMPTSEXCEEDED = "ATTEMPTS_EXCEEDED", e.CONFIRMATION = "CONFIRMATION", e.CONFIRMED = "CONFIRMED", e.EXPIRED = "EXPIRED", e.NOTSET = "NOT_SET" }(t.SecretUserPreferenceEmailConfirmationStatusEnum || (t.SecretUserPreferenceEmailConfirmationStatusEnum = {})) }, 1230: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.ERC1155 = "ERC1155", e.ERC20 = "ERC20", e.ERC721 = "ERC721", e.ERC721DEPRECATED = "ERC721_DEPRECATED", e.ETH = "ETH" }(t.SellOrderAssetTypeEnum || (t.SellOrderAssetTypeEnum = {})),
                function(e) { e.ERC1155 = "ERC1155", e.ERC20 = "ERC20", e.ERC721 = "ERC721", e.ERC721DEPRECATED = "ERC721_DEPRECATED", e.ETH = "ETH" }(t.SellOrderBuyAssetTypeEnum || (t.SellOrderBuyAssetTypeEnum = {})) }, 1231: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.COLLECTION = "COLLECTION", e.USER = "USER" }(t.ShortUrlTypeEnum || (t.ShortUrlTypeEnum = {})) }, 1232: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.ADMIN = "ADMIN", e.USER = "USER" }(t.TagSourceEnum || (t.TagSourceEnum = {})) }, 1233: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.APPROVEFORALL = "APPROVE_FOR_ALL", e.BURN = "BURN", e.MINTANDTRANSFER = "MINT_AND_TRANSFER", e.MINTWITHADDRESS = "MINT_WITH_ADDRESS", e.SECONDARYSALEFEES = "SECONDARY_SALE_FEES", e.SETURIPREFIX = "SET_URI_PREFIX" }(t.TokenFeaturesEnum || (t.TokenFeaturesEnum = {})),
                function(e) { e.DEPRECATED = "DEPRECATED", e.ERC1155 = "ERC1155", e.ERC721 = "ERC721", e.NONE = "NONE" }(t.TokenStandardEnum || (t.TokenStandardEnum = {})),
                function(e) { e.CONFIRMED = "CONFIRMED", e.ERROR = "ERROR", e.PENDING = "PENDING" }(t.TokenStatusEnum || (t.TokenStatusEnum = {})) }, 1234: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.ETH = "ETH" }(t.WertFormCommodityEnum || (t.WertFormCommodityEnum = {})) }, 1235: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.CARDADDED = "CARD_ADDED", e.LOGIN = "LOGIN", e.ORDERCANCELED = "ORDER_CANCELED", e.ORDERCOMPLETE = "ORDER_COMPLETE", e.ORDERFAILED = "ORDER_FAILED", e.PAYMENTSTARTED = "PAYMENT_STARTED", e.SIGNUP = "SIGNUP", e.TESTWEBHOOK = "TEST_WEBHOOK", e.TXSMARTCONTRACTFAILED = "TX_SMART_CONTRACT_FAILED", e.VERIFYFAILED = "VERIFY_FAILED", e.VERIFYRETRY = "VERIFY_RETRY", e.VERIFYSTART = "VERIFY_START", e.VERIFYSUCCESS = "VERIFY_SUCCESS" }(t.WertWebHookEventTypeEnum || (t.WertWebHookEventTypeEnum = {})) }, 1236: function(e, t, n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                function(e) { e.ETH = "ETH" }(t.WyreReservationRequestCurrencyEnum || (t.WyreReservationRequestCurrencyEnum = {})) }, 39: function(e, t, n) { "use strict";

            function r(e) { for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]) }
            Object.defineProperty(t, "__esModule", { value: !0 }), r(n(89)), r(n(1163)), r(n(90)) }, 89: function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                    function n() { this.constructor = e }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
                o = this && this.__assign || function() { return (o = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e }).apply(this, arguments) },
                u = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))((function(i, o) {
                        function u(e) { try { a(r.next(e)) } catch (e) { o(e) } }

                        function s(e) { try { a(r.throw(e)) } catch (e) { o(e) } }

                        function a(e) { var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(u, s) }
                        a((r = r.apply(e, t || [])).next()) })) },
                s = this && this.__generator || function(e, t) { var n, r, i, o, u = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                    function s(o) { return function(s) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; u;) try { if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i; switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o; break;
                                        case 4:
                                            return u.label++, { value: o[1], done: !1 };
                                        case 5:
                                            u.label++, r = o[1], o = [0]; continue;
                                        case 7:
                                            o = u.ops.pop(), u.trys.pop(); continue;
                                        default:
                                            if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { u = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { u.label = o[1]; break } if (6 === o[0] && u.label < i[1]) { u.label = i[1], i = o; break } if (i && u.label < i[2]) { u.label = i[2], u.ops.push(o); break }
                                            i[2] && u.ops.pop(), u.trys.pop(); continue }
                                    o = t.call(e, u) } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
                                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } };
            Object.defineProperty(t, "__esModule", { value: !0 }), t.BASE_PATH = "http://localhost".replace(/\/+$/, ""); var a = function() {
                function e(e) { var t = this;
                    void 0 === e && (e = new l), this.configuration = e, this.fetchApi = function(e, n) { return u(t, void 0, void 0, (function() { var t, r, i, u, a, c, l; return s(this, (function(s) { switch (s.label) {
                                    case 0:
                                        t = { url: e, init: n }, r = 0, i = this.middleware, s.label = 1;
                                    case 1:
                                        return r < i.length ? (l = i[r]).pre ? [4, l.pre(o({ fetch: this.fetchApi }, t))] : [3, 3] : [3, 4];
                                    case 2:
                                        t = s.sent() || t, s.label = 3;
                                    case 3:
                                        return r++, [3, 1];
                                    case 4:
                                        return [4, this.configuration.fetchApi(t.url, t.init)];
                                    case 5:
                                        u = s.sent(), a = 0, c = this.middleware, s.label = 6;
                                    case 6:
                                        return a < c.length ? (l = c[a]).post ? [4, l.post({ fetch: this.fetchApi, url: e, init: n, response: u.clone() })] : [3, 8] : [3, 9];
                                    case 7:
                                        u = s.sent() || u, s.label = 8;
                                    case 8:
                                        return a++, [3, 6];
                                    case 9:
                                        return [2, u] } })) })) }, this.middleware = e.middleware } return e.prototype.withMiddleware = function() { for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; var r = this.clone(); return r.middleware = (e = r.middleware).concat.apply(e, t), r }, e.prototype.withPreMiddleware = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = e.map((function(e) { return { pre: e } })); return this.withMiddleware.apply(this, n) }, e.prototype.withPostMiddleware = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = e.map((function(e) { return { post: e } })); return this.withMiddleware.apply(this, n) }, e.prototype.request = function(e) { return u(this, void 0, void 0, (function() { var t, n, r, i; return s(this, (function(o) { switch (o.label) {
                                case 0:
                                    return t = this.createFetchParams(e), n = t.url, r = t.init, [4, this.fetchApi(n, r)];
                                case 1:
                                    if ((i = o.sent()).status >= 200 && i.status < 300) return [2, i]; throw i } })) })) }, e.prototype.createFetchParams = function(e) { var t = this.configuration.basePath + e.path;
                    void 0 !== e.query && 0 !== Object.keys(e.query).length && (t += "?" + this.configuration.queryParamsStringify(e.query)); var n, r = e.body instanceof FormData || e.body instanceof URLSearchParams || (n = e.body, "undefined" != typeof Blob && n instanceof Blob) ? e.body : JSON.stringify(e.body),
                        i = Object.assign({}, this.configuration.headers, e.headers); return { url: t, init: { method: e.method, headers: i, body: r, credentials: this.configuration.credentials } } }, e.prototype.clone = function() { var e = new(0, this.constructor)(this.configuration); return e.middleware = this.middleware.slice(), e }, e }();
            t.BaseAPI = a; var c = function(e) {
                function t(t, n) { var r = e.call(this, n) || this; return r.field = t, r.name = "RequiredError", r } return i(t, e), t }(Error);
            t.RequiredError = c, t.COLLECTION_FORMATS = { csv: ",", ssv: " ", tsv: "\t", pipes: "|" }; var l = function() {
                function e(e) { void 0 === e && (e = {}), this.configuration = e } return Object.defineProperty(e.prototype, "basePath", { get: function() { return null != this.configuration.basePath ? this.configuration.basePath : t.BASE_PATH }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "fetchApi", { get: function() { return this.configuration.fetchApi || window.fetch.bind(window) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "middleware", { get: function() { return this.configuration.middleware || [] }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "queryParamsStringify", { get: function() { return this.configuration.queryParamsStringify || p }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "username", { get: function() { return this.configuration.username }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "password", { get: function() { return this.configuration.password }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "apiKey", { get: function() { var e = this.configuration.apiKey; if (e) return "function" == typeof e ? e : function() { return e } }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "accessToken", { get: function() { var e = this.configuration.accessToken; if (e) return "function" == typeof e ? e : function() { return e } }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "headers", { get: function() { return this.configuration.headers }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "credentials", { get: function() { return this.configuration.credentials }, enumerable: !0, configurable: !0 }), e }();

            function p(e, t) { return void 0 === t && (t = ""), Object.keys(e).map((function(n) { var r = t + (t.length ? "[" + n + "]" : n),
                        i = e[n]; if (i instanceof Array) { var o = i.map((function(e) { return encodeURIComponent(String(e)) })).join("&" + encodeURIComponent(r) + "="); return encodeURIComponent(r) + "=" + o } return i instanceof Object ? p(i, r) : encodeURIComponent(r) + "=" + encodeURIComponent(String(i)) })).filter((function(e) { return e.length > 0 })).join("&") }
            t.Configuration = l, t.exists = function(e, t) { var n = e[t]; return null != n }, t.querystring = p, t.mapValues = function(e, t) { return Object.keys(e).reduce((function(n, r) { var i; return o(o({}, n), ((i = {})[r] = t(e[r]), i)) }), {}) }, t.canConsumeForm = function(e) { for (var t = 0, n = e; t < n.length; t++) { if ("multipart/form-data" === n[t].contentType) return !0 } return !1 }; var f = function() {
                function e(e, t) { void 0 === t && (t = function(e) { return e }), this.raw = e, this.transformer = t } return e.prototype.value = function() { return u(this, void 0, void 0, (function() { var e; return s(this, (function(t) { switch (t.label) {
                                case 0:
                                    return e = this.transformer, [4, this.raw.json()];
                                case 1:
                                    return [2, e.apply(this, [t.sent()])] } })) })) }, e }();
            t.JSONApiResponse = f; var h = function() {
                function e(e) { this.raw = e } return e.prototype.value = function() { return u(this, void 0, void 0, (function() { return s(this, (function(e) { return [2, void 0] })) })) }, e }();
            t.VoidApiResponse = h; var d = function() {
                function e(e) { this.raw = e } return e.prototype.value = function() { return u(this, void 0, void 0, (function() { return s(this, (function(e) { switch (e.label) {
                                case 0:
                                    return [4, this.raw.blob()];
                                case 1:
                                    return [2, e.sent()] } })) })) }, e }();
            t.BlobApiResponse = d; var w = function() {
                function e(e) { this.raw = e } return e.prototype.value = function() { return u(this, void 0, void 0, (function() { return s(this, (function(e) { switch (e.label) {
                                case 0:
                                    return [4, this.raw.text()];
                                case 1:
                                    return [2, e.sent()] } })) })) }, e }();
            t.TextApiResponse = w }, 90: function(e, t, n) { "use strict";

            function r(e) { for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]) }

            function i(e) { return e }
            Object.defineProperty(t, "__esModule", { value: !0 }), r(n(1195)), r(n(1196)), r(n(1197)), r(n(1198)), r(n(1199)), r(n(1200)), r(n(1201)), r(n(1202)), r(n(1203)), r(n(1204)), r(n(1205)), r(n(1206)), r(n(1207)), r(n(1208)), r(n(1209)), r(n(1210)), r(n(1211)), r(n(1212)), r(n(1213)), r(n(1214)), r(n(1215)), r(n(1216)), r(n(1217)), r(n(1218)), r(n(1219)), r(n(1220)), r(n(1221)), r(n(1222)), r(n(1223)), r(n(1224)), r(n(1225)), r(n(1226)), r(n(1227)), r(n(1228)), r(n(1229)), r(n(1230)), r(n(1231)), r(n(1232)), r(n(1233)), r(n(1234)), r(n(1235)), r(n(1236)), t.toAddress = function(e) { var t; if (t = e.startsWith("0x") ? e.substring(2).toLowerCase() : e.toLowerCase(), /[0-9a-f]{40}/g.test(t)) return "0x" + t; throw new Error("not an address: " + e) }, t.toBinary = function(e) { var t; if (t = e.startsWith("0x") ? e.substring(2).toLowerCase() : e.toLowerCase(), /[0-9a-f]*/g.test(t)) return "0x" + t; throw new Error("not a binary: " + e) }, t.toWord = function(e) { var t; if (t = e.startsWith("0x") ? e.substring(2).toLowerCase() : e.toLowerCase(), /[0-9a-f]{64}/g.test(t)) return "0x" + t; throw new Error("not a word: " + e) }, t.toBigInteger = i, t.ZERO = "0",
                function(e) { e.LIKE = "LIKE", e.FOLLOWING = "FOLLOWING", e.ORDER = "ORDER", e.BID = "BID", e.BUY = "BUY", e.SALE = "SALE", e.CANCEL = "CANCEL", e.CANCEL_BID = "CANCEL_BID", e.TRANSFER = "TRANSFER", e.MINT = "MINT", e.BURN = "BURN" }(t.ActivityPageRequestTypesEnum || (t.ActivityPageRequestTypesEnum = {})) } }
]);