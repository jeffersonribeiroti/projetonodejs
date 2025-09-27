import { parse } from "csv-parse/sync";

export const parseCSV = async (buffer) => {
  const records = parse(buffer, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  });
  return records; // retorna array de objetos
};
