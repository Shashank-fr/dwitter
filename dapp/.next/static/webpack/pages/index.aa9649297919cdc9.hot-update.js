"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useDwitter.ts":
/*!*****************************!*\
  !*** ./hooks/useDwitter.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dwitter_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dwitter.json */ \"./hooks/Dwitter.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst ContractABI = _Dwitter_json__WEBPACK_IMPORTED_MODULE_0__.abi;\nconst ContractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\nconst Ethereum =  true && window.ethereum;\nconst getDwitterContract = ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(Ethereum);\n    const signer = provider.getSigner();\n    return new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(ContractAddress, ContractABI, signer);\n};\nconst useDwitter = ()=>{\n    //const Dwitter = getDwitterContract();\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [dweets, setDweets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]);\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const connect = async ()=>{\n        try {\n            if (!Ethereum) {\n                alert(\"Please install MetaMask\");\n                return;\n            }\n            const accounts = await Ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            if (accounts.length == 0) {\n                console.log(\"No authorized accounts\");\n                return;\n            }\n            const account = accounts[0];\n            debugger;\n            console.log(\"Connected to account:\", account);\n            setCurrentAccount(account);\n        } catch (e) {\n            console.error(e);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!Ethereum) {\n            console.log(\"No ethereum wallets found, please get metamask\");\n            return;\n        }\n    //connect();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentAccount) {\n            getUser();\n            get;\n        }\n    }, [\n        currentAccount\n    ]);\n    const getUser = async ()=>{\n        const contract = getDwitterContract();\n        if (!currentAccount) return;\n        const user = await contract.getUser(currentAccount);\n        const { avatar , bio , name , username , wallet  } = user;\n        setCurrentUser({\n            avatar,\n            bio,\n            name,\n            username,\n            wallet\n        });\n        return user;\n    };\n    const createUser = async (username, name, bio, avatar)=>{\n        const contract = getDwitterContract();\n        const user = await contract.signup(username, name, bio, avatar);\n        console.log(user);\n        getUser();\n    };\n    const postDweet = async (dweet)=>{\n        const contract = getDwitterContract();\n        await contract.postDweet(dweet);\n        await getDweets();\n    };\n    const getDweets = async ()=>{\n        const contract = getDwitterContract();\n        const dweets = await contract.getDweets();\n        console.log(dweets);\n        setDweets(dweets);\n    };\n    return {\n        connect,\n        account: currentAccount,\n        user: currentUser,\n        createUser,\n        postDweet,\n        dweets\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDwitter);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2hvb2tzL3VzZUR3aXR0ZXIudHM/YjYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHdpdHRlciBmcm9tICcuL0R3aXR0ZXIuanNvbic7XG5pbXBvcnQge2V0aGVyc30gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IENvbnRyYWN0QUJJID0gRHdpdHRlci5hYmlcbmNvbnN0IENvbnRyYWN0QWRkcmVzcyA9ICcweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTMnXG5jb25zdCBFdGhlcmV1bSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bVxuXG5jb25zdCBnZXREd2l0dGVyQ29udHJhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoRXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIHJldHVybiBuZXcgZXRoZXJzLkNvbnRyYWN0KENvbnRyYWN0QWRkcmVzcywgQ29udHJhY3RBQkksIHNpZ25lciwpO1xufTtcblxudHlwZSBVc2VyID0ge1xuICAgIGF2YXRhciA6IHN0cmluZyxcbiAgICBiaW8gOiBzdHJpbmcsXG4gICAgbmFtZSA6IHN0cmluZyxcbiAgICB1c2VybmFtZSA6IHN0cmluZyxcbiAgICB3YWxsZXQgOiBzdHJpbmdcbn1cblxuY29uc3QgdXNlRHdpdHRlciA9ICgpID0+IHtcbiAgICAvL2NvbnN0IER3aXR0ZXIgPSBnZXREd2l0dGVyQ29udHJhY3QoKTtcblxuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW2R3ZWV0cywgc2V0RHdlZXRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbJyddKTtcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcblxuICAgIGNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZighRXRoZXJldW0pe1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBNZXRhTWFzaycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IEV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pO1xuICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnRzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIGFjY291bnQ6JywgYWNjb3VudCk7XG4gICAgICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgaWYgKCFFdGhlcmV1bSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGV0aGVyZXVtIHdhbGxldHMgZm91bmQsIHBsZWFzZSBnZXQgbWV0YW1hc2snKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2Nvbm5lY3QoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFjY291bnQpIHtcbiAgICAgICAgICAgIGdldFVzZXIoKTtcbiAgICAgICAgICAgIGdldFxuICAgICAgICB9XG4gICAgfSxbY3VycmVudEFjY291bnRdICk7XG5cbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IGdldER3aXR0ZXJDb250cmFjdCgpO1xuICAgICAgICBpZighY3VycmVudEFjY291bnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbnRyYWN0LmdldFVzZXIoY3VycmVudEFjY291bnQpO1xuICAgICAgICBjb25zdCB7YXZhdGFyLCBiaW8sIG5hbWUsIHVzZXJuYW1lLCB3YWxsZXR9ID0gdXNlcjtcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoe2F2YXRhciwgYmlvLCBuYW1lLCB1c2VybmFtZSwgd2FsbGV0fSk7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKFxuICAgICAgICB1c2VybmFtZSA6IHN0cmluZyxcbiAgICAgICAgbmFtZSA6IHN0cmluZyxcbiAgICAgICAgYmlvIDogc3RyaW5nLFxuICAgICAgICBhdmF0YXIgOiBzdHJpbmdcbiAgICApID0+IHtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBnZXREd2l0dGVyQ29udHJhY3QoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbnRyYWN0LnNpZ251cCh1c2VybmFtZSwgbmFtZSwgYmlvLCBhdmF0YXIpO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgZ2V0VXNlcigpO1xuICAgIH07XG5cbiAgICBjb25zdCBwb3N0RHdlZXQ9IGFzeW5jIChkd2VldDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0RHdpdHRlckNvbnRyYWN0KCk7XG4gICAgICAgIGF3YWl0IGNvbnRyYWN0LnBvc3REd2VldChkd2VldCk7XG4gICAgICAgIGF3YWl0IGdldER3ZWV0cygpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREd2VldHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gZ2V0RHdpdHRlckNvbnRyYWN0KCk7XG4gICAgICAgIGNvbnN0IGR3ZWV0cyA9IGF3YWl0IGNvbnRyYWN0LmdldER3ZWV0cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhkd2VldHMpO1xuICAgICAgICBzZXREd2VldHMoZHdlZXRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgY29ubmVjdCwgYWNjb3VudDogY3VycmVudEFjY291bnQsIHVzZXI6IGN1cnJlbnRVc2VyLCBjcmVhdGVVc2VyLCBwb3N0RHdlZXQsIGR3ZWV0cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRHdpdHRlcjsiXSwibmFtZXMiOlsiRHdpdHRlciIsImV0aGVycyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udHJhY3RBQkkiLCJhYmkiLCJDb250cmFjdEFkZHJlc3MiLCJFdGhlcmV1bSIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0RHdpdHRlckNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsInVzZUR3aXR0ZXIiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiZHdlZXRzIiwic2V0RHdlZXRzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsImNvbm5lY3QiLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJhY2NvdW50IiwiZSIsImVycm9yIiwiZ2V0VXNlciIsImdldCIsImNvbnRyYWN0IiwidXNlciIsImF2YXRhciIsImJpbyIsIm5hbWUiLCJ1c2VybmFtZSIsIndhbGxldCIsImNyZWF0ZVVzZXIiLCJzaWdudXAiLCJwb3N0RHdlZXQiLCJkd2VldCIsImdldER3ZWV0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useDwitter.ts\n"));

/***/ })

});