# Minificar .JS<i>O</i>N com NodeJs
Com o NodeJs instalado, você só precisa informar na linha 26, o diretório do seu JSON que não esta minificado, e depois informar o diretório que quer o arquivo minificado.

```
minifyJsonFile('./my-file.json', './minified/my-file.json.min.json');
```

Objetivo: Os .JS<i>O</i>Ns que tenho são muito grandes, com isso os sites que fazem a minificação estavam dando erro ao tentar minificar; Os arquivos foram minificados em poucos segundos... saindo de 80mb para 46bm.

![image](https://github.com/closeluca1/minify-json-nodejs/assets/57973233/66cf6c5b-cb7c-4135-8583-dd329ee18d37)

#### para rodar o arquivo:
```
node index.js
```
