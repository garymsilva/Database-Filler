import * as fs from 'fs';
import { URL } from 'url';
import data from './data/data';
import appconfig from './appconfig';

function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function readFile(url: URL): any[] {
  const file: Buffer = fs.readFileSync(url);
  const fileLines: string[] = file.toString().split('\r\n');

  const table: any[] = [];
  fileLines.map((line: string) => {
    table.push(line.split('|'));
  });

  return table;
}

function main(): void {
  // Read file
  const table: any[] = readFile(data.input);
  const totalLines: number = table.length;
  const columns: string[] = table[0];
  const totalColumns: number = columns.length;

  // Mount query with random data from 'table'
  const baseQuery: string = `INSERT INTO ${appconfig.tableName} VALUES `;
  fs.writeFileSync(data.output, baseQuery);
  let temp: string;
  for (let i = 0; i < appconfig.rowsNumberToInsert; i++) {
    // Get random data
    let randomLine: number;
    temp = `(`;
    for (let column = 1; column < totalColumns; column++) {
      randomLine = getRandom(1, totalLines);
      if (appconfig.columns[column].type === 'string') {
        temp += `'${table[randomLine][column]}',`;
      } else {
        temp += `${table[randomLine][column]},`;
      }
    }
    temp = temp.substr(0, temp.length - 1);
    temp += `),`;
    if (i === appconfig.rowsNumberToInsert - 1) {
      temp = temp.substr(0, temp.length - 1);
    }
    // Write temp on output file
    fs.writeFileSync(data.output, temp, { flag: 'a' });
  }
}

main();
