export interface countdownQueueItem {
  type: 'SESSION' | 'BREAK';
  time: number;
}
