'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ASUS\\NodeJS\\next-project1\\components\\layout.js';

exports.default = function (_ref) {
    var children = _ref.children,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? 'This is the default title' : _ref$title;
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '57x57', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-57x57.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-60x60.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '72x72', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-72x72.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-76x76.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '114x114', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-114x114.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-120x120.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-144x144.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-152x152.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://cdn.zeit.co/favicon/apple-touch-icon-180x180.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: 'https://cdn.zeit.co/favicon/favicon-32x32.png', sizes: '32x32', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: 'https://cdn.zeit.co/favicon/android-chrome-192x192.png', sizes: '192x192', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: 'https://cdn.zeit.co/favicon/favicon-96x96.png', sizes: '96x96', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: 'https://cdn.zeit.co/favicon/favicon-16x16.png', sizes: '16x16', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext', rel: 'stylesheet', type: 'text/css', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', type: 'text/css', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement('link', { href: '/static/plugins/bootstrap/css/bootstrap.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }), _react2.default.createElement('link', { href: '/static/plugins/node-waves/waves.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement('link', { href: '/static/plugins/animate-css/animate.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }), _react2.default.createElement('link', { href: '/static/plugins/morrisjs/morris.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }), _react2.default.createElement('link', { href: '/static/css/style.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }), _react2.default.createElement('link', { href: '/static/css/themes/all-themes.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }), _react2.default.createElement('link', { href: '/static/plugins/waitme/waitMe.css', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/jquery/jquery.min.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/bootstrap/js/bootstrap.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }), _react2.default.createElement('script', { src: '/static/js/pages/ui/wow.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/bootstrap-select/js/bootstrap-select.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/jquery-slimscroll/jquery.slimscroll.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/node-waves/waves.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/jquery-countto/jquery.countTo.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/raphael/raphael.min.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/morrisjs/morris.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/chartjs/Chart.bundle.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/flot-charts/jquery.flot.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/flot-charts/jquery.flot.resize.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/flot-charts/jquery.flot.pie.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/flot-charts/jquery.flot.categories.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/flot-charts/jquery.flot.time.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/jquery-sparkline/jquery.sparkline.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }), _react2.default.createElement('script', { src: '/static/js/pages/index.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }), _react2.default.createElement('script', { src: '/static/js/demo.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }), _react2.default.createElement('script', { src: '/static/plugins/waitme/waitMe.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }), _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'new WOW().init();' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    })), children, _react2.default.createElement('footer', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, 'I`m here to stay'));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZCIsImNoaWxkcmVuIiwidGl0bGUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUVQOzs7Ozs7OztrQkFBZSxnQkFBQTtRQUFBLEFBQUcsZ0JBQUgsQUFBRzswQkFBSCxBQUFhO1FBQWIsQUFBYSxtQ0FBYixBQUFxQiw4QkFBckI7MkJBQ1gsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUFRO0FBQVI7QUFBQSxPQURKLEFBQ0ksQUFDQSxnREFBTSxTQUFOLEFBQWM7c0JBQWQ7d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7c0JBQTlCO3dCQUhKLEFBR0ksQUFDQTtBQURBO2dEQUNNLEtBQU4sQUFBVSxvQkFBbUIsT0FBN0IsQUFBbUMsU0FBUSxNQUEzQyxBQUFnRDtzQkFBaEQ7d0JBSkosQUFJSSxBQUNBO0FBREE7Z0RBQ00sS0FBTixBQUFVLG9CQUFtQixPQUE3QixBQUFtQyxTQUFRLE1BQTNDLEFBQWdEO3NCQUFoRDt3QkFMSixBQUtJLEFBQ0E7QUFEQTtnREFDTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdCLEFBQW1DLFNBQVEsTUFBM0MsQUFBZ0Q7c0JBQWhEO3dCQU5KLEFBTUksQUFDQTtBQURBO2dEQUNNLEtBQU4sQUFBVSxvQkFBbUIsT0FBN0IsQUFBbUMsU0FBUSxNQUEzQyxBQUFnRDtzQkFBaEQ7d0JBUEosQUFPSSxBQUNBO0FBREE7Z0RBQ00sS0FBTixBQUFVLG9CQUFtQixPQUE3QixBQUFtQyxXQUFVLE1BQTdDLEFBQWtEO3NCQUFsRDt3QkFSSixBQVFJLEFBQ0E7QUFEQTtnREFDTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdC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USxLQUFSLEFBQVk7c0JBQVo7d0JBckNKLEFBcUNJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVk7c0JBQVo7d0JBdENKLEFBc0NJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVk7c0JBQVo7d0JBdkNKLEFBdUNJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVk7c0JBQVo7d0JBeENKLEFBd0NJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVk7c0JBQVo7d0JBekNKLEFBeUNJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVk7c0JBQVo7d0JBMUNKLEFBMENJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVk7c0JBQVo7d0JBM0NKLEFBMkNJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVk7c0JBQVo7d0JBNUNKLEFBNENJLEFBQ0E7QUFEQTtrREFDUSx5QkFBeUIsRUFBRSxRQUFuQyxBQUFpQyxBQUFVO3NCQUEzQzt3QkE5Q1IsQUFDSSxBQTZDSSxBQUdIO0FBSEc7U0E5Q1IsQUFtREksMEJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSztBQURMO0FBQUEsT0FwRE8sQUFDWCxBQW1ESTtBQXBEUiIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQVNVUy9Ob2RlSlMvbmV4dC1wcm9qZWN0MSJ9