function intervalRace(functions, t) {
    return new Promise((resolve) => {
      const results = [];
      let index = 0;
  
      const interval = setInterval(() => {
        const result = functions[index]();
        results.push(result);
  
        index++;
          if (index >= functions.length) {
          clearInterval(interval);
          resolve(results);
        }
      }, t);
    });
  }
  
  
  const funcs = [
    () => "Функція 1 виконана",
    () => "Функція 2 виконана",
    () => "Функція 3 виконана",
  ];
  
  intervalRace(funcs, 1000).then((results) => {
    console.log("Результати виконання:", results);
  });