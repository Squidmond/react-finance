/*
 * action types
 */
export const EXAMPLE_ACTION = "EXAMPLE_ACTION";

export function exampleAction(change) {
  return { type: EXAMPLE_ACTION, change };
}
