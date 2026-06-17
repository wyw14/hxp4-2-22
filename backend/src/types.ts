export interface HexCoord {
  q: number;
  r: number;
}

export enum HexType {
  EMPTY = 'empty',
  NUTRIENT = 'nutrient',
  POLLUTED = 'polluted',
  MYCELIUM = 'mycelium',
  START = 'start',
}

export interface HexCell {
  coord: HexCoord;
  type: HexType;
  nutrientId?: string;
}

export interface GameState {
  id: string;
  level: number;
  gridRadius: number;
  cells: Record<string, HexCell>;
  nutrients: string[];
  connectedNutrients: string[];
  startCoord: HexCoord;
  myceliumCells: HexCoord[];
  steps: number;
  optimalSteps: number;
  status: 'playing' | 'won' | 'lost';
  createdAt: number;
  updatedAt: number;
}

export interface CreateGameRequest {
  level?: number;
  gridRadius?: number;
}

export interface ExtendMyceliumRequest {
  coord: HexCoord;
}

export enum ExtendFailureReason {
  OUT_OF_BOUNDS = 'out_of_bounds',
  POLLUTED = 'polluted',
  ALREADY_COVERED = 'already_covered',
  NOT_ADJACENT = 'not_adjacent',
  GAME_ENDED = 'game_ended',
  INVALID_COORD = 'invalid_coord',
}

export interface ExtendResult {
  game: GameState;
  success: boolean;
  message: string;
  failureReason?: ExtendFailureReason;
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
  failureReason?: ExtendFailureReason;
}
