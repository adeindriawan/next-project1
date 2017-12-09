'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _menu = require('../components/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ASUS\\NodeJS\\next-project1\\pages\\index.js?entry';


var scr = '$(".regular").slick({dots: true, infinite: true, slidesToShow: 3, slidesToScroll: 3 });';

var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);

        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));
    }

    (0, _createClass3.default)(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // <script dangerouslySetInnerHTML={{ __html: scr }} />
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/plugins/slick/slick.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/plugins/slick/slick-theme.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('script', { src: '/static/plugins/jquery/jquery.min.js', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('script', { src: '/static/plugins/slick/slick.js', type: 'text/javascript', charset: 'utf-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('script', { src: '/static/js/admin.js', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            })), _react2.default.createElement(_menu2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('section', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', { className: 'block-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'DASBOR')), _react2.default.createElement('div', { className: 'row clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('div', { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Anda berada di sini'), _react2.default.createElement('ul', { className: 'header-dropdown m-r--5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('li', { className: 'dropdown', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0);', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'more_vert')), _react2.default.createElement('ul', { className: 'dropdown-menu pull-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0);', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Action')), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0);', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Another action')), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0);', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Something else here')))))), _react2.default.createElement('div', { className: 'body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('ol', { className: 'breadcrumb breadcrumb-bg-teal', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0);', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'home'), ' Home')), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0);', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'library_books'), ' Library')), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('a', { href: 'javascript:void(0);', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'archive'), ' Data')), _react2.default.createElement('li', { className: 'active', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('i', { className: 'material-icons', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'attachment'), ' File')))))), _react2.default.createElement('div', { className: 'block-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Kategori Rekomendasi', _react2.default.createElement('small', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Klik ', _react2.default.createElement('em', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'refresh icon'), ' di pojok kanan atas setiap kartu kategori untuk mendapatkan info terbaru di kategori tersebut.'))), _react2.default.createElement('section', { className: 'regular slider', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }))));
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0IiwiTWVudSIsInNjciIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFFakIsSUFBSSxNQUFKLEFBQVU7O0lBRVcsQTttQ0FDakI7O3FCQUFjOzRDQUFBOzs2SEFFYjs7Ozs7NENBRW1CLEFBQ2hCO0FBQ0g7Ozs7aUNBRVEsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLHVEQUNVLFNBQU4sQUFBYzs4QkFBZDtnQ0FESixBQUNJLEFBQ0E7QUFEQTt3REFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixZQUFXLE1BQXZDLEFBQTRDOzhCQUE1QztnQ0FGSixBQUVJLEFBQ0E7QUFEQTt3REFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixZQUFXLE1BQXZDLEFBQTRDOzhCQUE1QztnQ0FISixBQUdJLEFBQ0E7QUFEQTswREFDUSxLQUFSLEFBQVk7OEJBQVo7Z0NBSkosQUFJSSxBQUNBO0FBREE7MERBQ1EsS0FBUixBQUFZLGtDQUFpQyxNQUE3QyxBQUFrRCxtQkFBa0IsU0FBcEUsQUFBNEU7OEJBQTVFO2dDQUxKLEFBS0ksQUFDQTtBQURBOzBEQUNRLEtBQVIsQUFBWTs4QkFBWjtnQ0FQUixBQUNJLEFBTUksQUFFSjtBQUZJO2lDQUVKLEFBQUM7OzhCQUFEO2dDQVRKLEFBU0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxhQUFTLFdBQVQsQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFHSiw0QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0Esd0NBQUEsY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSx1QkFBc0IsV0FBOUIsQUFBd0MsbUJBQWtCLGVBQTFELEFBQXNFLFlBQVcsTUFBakYsQUFBc0YsVUFBUyxpQkFBL0YsQUFBNkcsUUFBTyxpQkFBcEgsQUFBa0k7OEJBQWxJO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFGUixBQUNJLEFBQ0ksQUFFSiwrQkFBQSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSwrQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFROzhCQUFSO2dDQUFBO0FBQUE7ZUFEUixBQUNJLEFBQUksQUFDSiw0QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSwrQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFROzhCQUFSO2dDQUFBO0FBQUE7ZUFGUixBQUVJLEFBQUksQUFDSixvQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSwrQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFROzhCQUFSO2dDQUFBO0FBQUE7ZUFieEIsQUFDSSxBQUlJLEFBQ0ksQUFJSSxBQUdJLEFBQUksQUFLcEIsNkNBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsK0JBQUksY0FBQSxPQUFHLE1BQUgsQUFBUTs4QkFBUjtnQ0FBQSxBQUE4QjtBQUE5QjsrQkFBOEIsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBQTlCLEFBQThCLFNBRHRDLEFBQ0ksQUFBSSxBQUNKLDJCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLCtCQUFJLGNBQUEsT0FBRyxNQUFILEFBQVE7OEJBQVI7Z0NBQUEsQUFBOEI7QUFBOUI7K0JBQThCLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQUE5QixBQUE4QixrQkFGdEMsQUFFSSxBQUFJLEFBQ0osOEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsK0JBQUksY0FBQSxPQUFHLE1BQUgsQUFBUTs4QkFBUjtnQ0FBQSxBQUE4QjtBQUE5QjsrQkFBOEIsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBQTlCLEFBQThCLFlBSHRDLEFBR0ksQUFBSSxBQUNKLDJCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFBdUI7QUFBdkI7K0JBQXVCLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQUF2QixBQUF1QixlQTlCL0MsQUFLSSxBQUNJLEFBQ0ksQUFrQkksQUFDSSxBQUlJLEFBT3BCLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUVJLHdDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFZLHlCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFaLEFBQVksaUJBeEN4QixBQXFDSSxBQUNJLEFBRUksQUFJUixpSkFBUyxXQUFULEFBQW1COzhCQUFuQjtnQ0F4RGhCLEFBQ0ksQUFVSSxBQUNJLEFBNENJLEFBUW5CO0FBUm1COzs7Ozs7RUFsRVcsZ0JBQU0sQTs7a0JBQXBCLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQVNVUy9Ob2RlSlMvbmV4dC1wcm9qZWN0MSJ9