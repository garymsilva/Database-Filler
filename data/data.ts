import appconfig from './../appconfig';
import { URL } from 'url';

class FileData {
  input: URL;
  output: URL;

  readonly defaultConfig = {
    inputFileName: 'input.csv',
    outputFileName: 'output.txt',
  };

  constructor() {
    const inputPath: string =
    `file://${__dirname}\\${appconfig.inputFileName || this.defaultConfig.inputFileName}`;
    this.input = new URL(inputPath);
    const outputPath: string =
    `file://${__dirname}\\${appconfig.outputFileName || this.defaultConfig.outputFileName}`;
    this.output = new URL(outputPath);
  }
}

export default new FileData();
