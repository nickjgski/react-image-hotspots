"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _react2 = require("@testing-library/react");
var _testUtils = require("react-dom/test-utils");
var _ImageHotspots = _interopRequireDefault(require("./ImageHotspots"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('ImageHotspots', function () {
  var container;
  var root;
  beforeEach(function () {
    container = document.createElement('div');
    root = (0, _client.createRoot)(container);
    document.body.appendChild(container);
  });
  afterEach(function () {
    document.body.removeChild(container);
    container = null;
  });
  it('shows loading', function () {
    (0, _react2.act)(function () {
      root.render( /*#__PURE__*/_react.default.createElement(_ImageHotspots.default, null));
    });
    var image = container.querySelector('img');
    expect((0, _testUtils.isDOMComponent)(image)).toBe(false);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9jbGllbnQiLCJfcmVhY3QyIiwiX3Rlc3RVdGlscyIsIl9JbWFnZUhvdHNwb3RzIiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJkZXNjcmliZSIsImNvbnRhaW5lciIsInJvb3QiLCJiZWZvcmVFYWNoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlUm9vdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImFmdGVyRWFjaCIsInJlbW92ZUNoaWxkIiwiaXQiLCJhY3QiLCJyZW5kZXIiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJleHBlY3QiLCJpc0RPTUNvbXBvbmVudCIsInRvQmUiXSwic291cmNlcyI6WyIuLi9zcmMvSW1hZ2VIb3RzcG90cy50ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IHsgYWN0IH0gZnJvbSAnQHRlc3RpbmctbGlicmFyeS9yZWFjdCdcbmltcG9ydCB7IGlzRE9NQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZG9tL3Rlc3QtdXRpbHMnXG5pbXBvcnQgSW1hZ2VIb3RzcG90cyBmcm9tICcuL0ltYWdlSG90c3BvdHMnXG5cbmRlc2NyaWJlKCdJbWFnZUhvdHNwb3RzJywgKCkgPT4ge1xuICBsZXQgY29udGFpbmVyXG4gIGxldCByb290XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcilcbiAgICBjb250YWluZXIgPSBudWxsXG4gIH0pXG5cbiAgaXQoJ3Nob3dzIGxvYWRpbmcnLCAoKSA9PiB7XG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHJvb3QucmVuZGVyKDxJbWFnZUhvdHNwb3RzIC8+KVxuICAgIH0pXG4gICAgY29uc3QgaW1hZ2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICBleHBlY3QoaXNET01Db21wb25lbnQoaW1hZ2UpKS50b0JlKGZhbHNlKVxuICB9KVxufSlcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7QUFDQSxJQUFBRyxVQUFBLEdBQUFILE9BQUE7QUFDQSxJQUFBSSxjQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFBMkMsU0FBQUQsdUJBQUFNLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxLQUFBRSxPQUFBLEVBQUFGLEdBQUE7QUFFM0NHLFFBQVEsQ0FBQyxlQUFlLEVBQUUsWUFBTTtFQUM5QixJQUFJQyxTQUFTO0VBQ2IsSUFBSUMsSUFBSTtFQUVSQyxVQUFVLENBQUMsWUFBTTtJQUNmRixTQUFTLEdBQUdHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6Q0gsSUFBSSxHQUFHLElBQUFJLGtCQUFVLEVBQUNMLFNBQVMsQ0FBQztJQUM1QkcsUUFBUSxDQUFDRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ1AsU0FBUyxDQUFDO0VBQ3RDLENBQUMsQ0FBQztFQUVGUSxTQUFTLENBQUMsWUFBTTtJQUNkTCxRQUFRLENBQUNHLElBQUksQ0FBQ0csV0FBVyxDQUFDVCxTQUFTLENBQUM7SUFDcENBLFNBQVMsR0FBRyxJQUFJO0VBQ2xCLENBQUMsQ0FBQztFQUVGVSxFQUFFLENBQUMsZUFBZSxFQUFFLFlBQU07SUFDeEIsSUFBQUMsV0FBRyxFQUFDLFlBQU07TUFDUlYsSUFBSSxDQUFDVyxNQUFNLGVBQUN2QixNQUFBLENBQUFTLE9BQUEsQ0FBQU0sYUFBQSxDQUFDVCxjQUFBLENBQUFHLE9BQWEsT0FBRyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUNGLElBQU1lLEtBQUssR0FBR2IsU0FBUyxDQUFDYyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzVDQyxNQUFNLENBQUMsSUFBQUMseUJBQWMsRUFBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQztFQUMzQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMifQ==