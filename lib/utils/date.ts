import { format, formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

export function formatDate(date: Date | string, pattern = 'dd MMM yyyy'): string {
  return format(new Date(date), pattern, { locale: id });
}

export function formatRelativeTime(date: Date | string): string {
  return formatDistanceToNow(new Date(date), { 
    addSuffix: true,
    locale: id 
  });
}
