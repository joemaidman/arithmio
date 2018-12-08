export interface Expression {
  operands: number[];
  operators: string[];
  expressions: Expression[];
}
