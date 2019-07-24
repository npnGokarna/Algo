function getData(...args) {
    console.log(args);
  }
  
  function debounce(fn, d) {
    let timer;
    return function () {
      let context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(()=>{
        fn.apply(context, args)
      }, d);
    }
  }

  const debounceFunction = debounce(getData, 100);
  debounceFunction('shall not execute getData method as next method is immediately invoked');
  debounceFunction('hello', 'myfriend');
  setTimeout(() => debounceFunction('delayed by 200ms'), 200);
