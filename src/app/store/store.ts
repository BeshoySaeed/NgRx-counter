let instialState = {
  countable: 1,
};

export interface CountableStore {
  counter: countable;
}

interface countable {
  number: number;
}

const INCREAMENT = 'increament';
const DECREAMENT = 'decreament';

export function reuducer(state = instialState, action: any) {
  switch (action.type) {
    case INCREAMENT:
      return {
        countable: state.countable + action.payload,
      };
      break;
    case DECREAMENT:
      return {
        countable: state.countable - action.payload,
      };
    default:
      return state;
  }
}

export class increase {
  type!: string;
  payload: any;

  constructor(payload: any) {
    this.type = INCREAMENT;
    this.payload = payload;
  }
}
export class decrease {
  type!: string;
  payload: any;

  constructor(payload: any) {
    this.type = DECREAMENT;
    this.payload = payload;
  }
}
