import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export const getDateEntryToNow = (entryCreatedAt: number) => {
  const date = formatDistanceToNow(entryCreatedAt, {locale: es});
  
  return `hace ${date}`;
}