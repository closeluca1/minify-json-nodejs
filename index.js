const fs = require('fs');

const minifyJsonFile = (inputFilePath, outputFilePath) => {
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erro ao ler o arquivo, camarada: ${err}`);
      return;
    }

    try {
      const jsonObject = JSON.parse(data);
      const minifiedJson = JSON.stringify(jsonObject);
      fs.writeFile(outputFilePath, minifiedJson, (err) => {
        if (err) {
          console.error(`Erro ao salvar o arquivo, camarada: ${err}`);
        } else {
          console.log(`Finalizado; Tudo certo por aqui chefia: ${outputFilePath}`);
        }
      });
    } catch (parseErr) {
      console.error(`Erro ao "ler" o JSON, camarada: ${parseErr}`);
    }
  });
};

minifyJsonFile('./my-file.json', './minified/my-file.min.json');
