import type { ActiveNotification } from '../types';

export type CardPhase = 'entering' | 'active' | 'leaving';

export interface RenderedCard {
  card: ActiveNotification;
  phase: CardPhase;
  opacityVisible: boolean;
  top: number;
  zIndex: number;
}
