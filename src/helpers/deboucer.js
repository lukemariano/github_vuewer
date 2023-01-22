/**
 * @param {function} f função a ter o comportamento modificado pelo decorator.
 * @param {Number} time tempo de execução para o debounce.
 */
export function deboucerDecorator(f, time) {
  let _timeoutCode = null;

  function decorada() {
    if (_timeoutCode) {
      clearTimeout(_timeoutCode);
    }
    const _arguments = arguments;
    _timeoutCode = setTimeout(() => {
      f.apply(this, _arguments);
      _timeoutCode = null;
    }, time);
  }

  return decorada;
}
