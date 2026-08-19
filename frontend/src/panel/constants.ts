import type { CardPosition } from '../types';

export const BUILT_IN_VARIABLE_HELP = '{{now}}  {{date}}  {{time}}  {{task.name}}  {{run}}';

export const WEEKDAYS = [
  { value: 1, label: '一' },
  { value: 2, label: '二' },
  { value: 3, label: '三' },
  { value: 4, label: '四' },
  { value: 5, label: '五' },
  { value: 6, label: '六' },
  { value: 0, label: '日' },
];

export const POSITION_OPTIONS: Array<{ value: CardPosition; label: string }> = [
  { value: 'top-left', label: '左上' },
  { value: 'top-right', label: '右上' },
  { value: 'center', label: '屏幕中心' },
  { value: 'bottom-left', label: '左下' },
  { value: 'bottom-right', label: '右下' },
];
